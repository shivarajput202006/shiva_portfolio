import React, { useState, useEffect } from 'react';
import { Github, Star, GitFork, ExternalLink, RefreshCw, BookOpen } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { personalInfo } from '../data/portfolioData';
import { GithubRepo } from '../types/portfolio';

export const GithubSection: React.FC = () => {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [profile, setProfile] = useState<{
    public_repos: number;
    followers: number;
    avatar_url: string;
    html_url: string;
    bio: string | null;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function fetchGithubData() {
      try {
        setLoading(true);
        setError(false);

        // Fetch user profile
        const userRes = await fetch(
          `https://api.github.com/users/${personalInfo.githubUsername}`,
          { headers: { Accept: 'application/vnd.github.v3+json' } }
        );

        if (userRes.ok) {
          const userData = await userRes.json();
          if (isMounted) {
            setProfile({
              public_repos: userData.public_repos ?? 0,
              followers: userData.followers ?? 0,
              avatar_url: userData.avatar_url,
              html_url: userData.html_url,
              bio: userData.bio,
            });
          }
        }

        // Fetch recent repositories
        const reposRes = await fetch(
          `https://api.github.com/users/${personalInfo.githubUsername}/repos?sort=updated&per_page=6`,
          { headers: { Accept: 'application/vnd.github.v3+json' } }
        );

        if (reposRes.ok) {
          const reposData = await reposRes.json();
          if (isMounted && Array.isArray(reposData)) {
            setRepos(reposData);
          }
        }
      } catch {
        if (isMounted) {
          setError(true);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchGithubData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="github" className="py-24 bg-[#050914] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <SectionHeading
            eyebrow="07 / Open Source & Code Activity"
            title="GitHub Repositories & Commits"
            copy="Live repository feed directly from GitHub showcasing recent codebase updates, project structures, and version control discipline."
          />

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-200 hover:text-white transition-all self-start md:self-end"
          >
            <Github size={15} /> @{personalInfo.githubUsername} on GitHub <ExternalLink size={13} />
          </a>
        </div>

        {/* Profile Card Header */}
        <div className="p-6 rounded-2xl bg-[#091124] border border-slate-800 mb-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-[2px] shadow-lg">
              <div className="w-full h-full bg-[#060b18] rounded-[14px] flex items-center justify-center font-mono font-bold text-white text-lg overflow-hidden">
                {profile?.avatar_url ? (
                  <img
                    src={profile.avatar_url}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  'SR'
                )}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <h3 className="text-lg font-bold text-white tracking-tight">Shiva Rajput</h3>
                <span className="text-xs font-mono text-cyan-400 font-semibold">
                  @{personalInfo.githubUsername}
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                Active Code Repository · Java & Full-Stack Projects
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 font-mono text-xs">
            <div className="text-center px-4 py-2 rounded-xl bg-slate-900 border border-slate-800/80">
              <span className="block text-base font-bold text-white">
                {profile?.public_repos !== undefined ? profile.public_repos : '—'}
              </span>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider">Public Repos</span>
            </div>
            <div className="text-center px-4 py-2 rounded-xl bg-slate-900 border border-slate-800/80">
              <span className="block text-base font-bold text-cyan-400">
                {profile?.followers !== undefined ? profile.followers : '—'}
              </span>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider">Followers</span>
            </div>
          </div>
        </div>

        {/* Live Repositories Grid or Clean Fallback */}
        {loading ? (
          <div className="p-12 text-center rounded-2xl bg-[#091124] border border-slate-800/80">
            <RefreshCw className="animate-spin text-cyan-400 mx-auto mb-3" size={24} />
            <p className="text-xs font-mono text-slate-400">Fetching live repositories from GitHub API...</p>
          </div>
        ) : error || repos.length === 0 ? (
          /* Clean Fallback Card */
          <div className="p-8 rounded-2xl bg-[#091124] border border-blue-500/20 text-center max-w-xl mx-auto space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-cyan-400 mx-auto flex items-center justify-center border border-blue-500/20">
              <Github size={24} />
            </div>
            <h4 className="text-lg font-bold text-white">View Shiva's Repositories on GitHub</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Explore source code for the Hostel Management System, ScamShield AI prototype, and Java practice repositories directly on GitHub.
            </p>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 text-slate-950 shadow-md shadow-blue-500/20 transition-all hover:-translate-y-0.5"
            >
              <Github size={15} /> Visit github.com/shivarajput202006
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="group p-5 rounded-2xl bg-[#091124] border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5 text-cyan-400 font-mono text-xs font-semibold">
                      <BookOpen size={14} />
                      <span className="truncate max-w-[200px] text-white group-hover:text-cyan-300 transition-colors">
                        {repo.name}
                      </span>
                    </div>
                    <ExternalLink size={13} className="text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mb-4">
                    {repo.description || 'Java/Full-Stack software engineering codebase and learning files.'}
                  </p>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-3 border-t border-slate-800/80">
                  <span className="flex items-center gap-1 text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                    {repo.language || 'Java'}
                  </span>

                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Star size={12} className="text-amber-400" /> {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork size={12} /> {repo.forks_count}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
