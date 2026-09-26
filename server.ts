import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI, GenerateVideosOperation } from '@google/genai';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json({ limit: '50mb' }));

  // Veo Video Generation API Endpoints
  app.post('/api/generate-video', async (req: Request, res: Response) => {
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(400).json({
          error: 'GEMINI_API_KEY is not configured on the server environment. Please set GEMINI_API_KEY to test Veo video generation.',
        });
      }

      const { imageBytes, mimeType = 'image/jpeg', prompt, aspectRatio = '16:9' } = req.body;
      if (!imageBytes) {
        return res.status(400).json({ error: 'Image bytes are required to animate a photo.' });
      }

      const cleanImageBytes = imageBytes.includes('base64,')
        ? imageBytes.split('base64,')[1]
        : imageBytes;

      const ai = new GoogleGenAI({ apiKey });
      const validAspectRatio = aspectRatio === '9:16' ? '9:16' : '16:9';

      const operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: prompt || 'Smooth cinematic motion and subtle natural depth',
        image: {
          imageBytes: cleanImageBytes,
          mimeType,
        },
        config: {
          numberOfVideos: 1,
          resolution: '720p',
          aspectRatio: validAspectRatio,
        },
      });

      return res.json({ operationName: operation.name });
    } catch (error: unknown) {
      console.error('Error starting video generation:', error);
      return res.status(500).json({
        error: (error as Error)?.message || 'Failed to initiate video generation with Veo model.',
      });
    }
  });

  app.post('/api/video-status', async (req: Request, res: Response) => {
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(400).json({ error: 'GEMINI_API_KEY is not configured.' });
      }

      const { operationName } = req.body;
      if (!operationName) {
        return res.status(400).json({ error: 'operationName is required.' });
      }

      const ai = new GoogleGenAI({ apiKey });
      const op = new GenerateVideosOperation();
      op.name = operationName;
      const updated = await ai.operations.getVideosOperation({ operation: op });

      return res.json({
        done: Boolean(updated.done),
        error: updated.error || null,
      });
    } catch (error: unknown) {
      console.error('Error checking video status:', error);
      return res.status(500).json({ error: (error as Error)?.message || 'Failed to check operation status' });
    }
  });

  app.post('/api/video-download', async (req: Request, res: Response) => {
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(400).json({ error: 'GEMINI_API_KEY is not configured.' });
      }

      const { operationName } = req.body;
      if (!operationName) {
        return res.status(400).json({ error: 'operationName is required.' });
      }

      const ai = new GoogleGenAI({ apiKey });
      const op = new GenerateVideosOperation();
      op.name = operationName;
      const updated = await ai.operations.getVideosOperation({ operation: op });

      const uri = updated.response?.generatedVideos?.[0]?.video?.uri;
      if (!uri) {
        return res.status(404).json({ error: 'Generated video URI not ready or not found.' });
      }

      const videoRes = await fetch(uri, {
        headers: { 'x-goog-api-key': apiKey },
      });

      if (!videoRes.ok) {
        throw new Error(`Failed to download video from upstream service (${videoRes.status})`);
      }

      res.setHeader('Content-Type', 'video/mp4');
      const arrayBuffer = await videoRes.arrayBuffer();
      return res.send(Buffer.from(arrayBuffer));
    } catch (error: unknown) {
      console.error('Error downloading video:', error);
      return res.status(500).json({ error: (error as Error)?.message || 'Failed to download video file' });
    }
  });

  // Health endpoint
  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Mount Vite middleware in development, or serve built assets in production
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true, host: '0.0.0.0', port: PORT },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
