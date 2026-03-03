import { useParams, Link, useNavigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'
import type { SideProject, ResearchProject } from '@/types/portfolio'

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const location = useLocation()

  // 페이지 진입 시 최상단으로 스크롤
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
  const navigate = useNavigate()

  // Find project from both side and research projects
  const allProjects: (SideProject | ResearchProject)[] = [
    ...portfolioData.sideProjects,
    ...portfolioData.researchProjects,
  ]

  const project = allProjects.find((p) => p.id === slug)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-h1 font-bold text-white mb-4">
            Project Not Found
          </h1>
          <p className="text-gray-400 mb-8">
            The project you're looking for doesn't exist.
          </p>
          <Link to="/" className="btn-primary">
            Go Home
          </Link>
        </div>
      </div>
    )
  }

  const isSideProject = project.type === 'side'

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="section-container">
        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-400 hover:text-accent-primary transition-colors mb-8"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span
              className={`tag ${isSideProject ? 'tag-accent' : 'bg-dark-600'}`}
            >
              {isSideProject ? 'Side Project' : 'Research Project'}
            </span>
            <span className="text-small text-accent-primary font-mono">
              {project.period}
            </span>
          </div>

          <h1 className="text-h1 md:text-display font-bold text-white mb-4">
            {project.title}
          </h1>

          {project.organization && (
            <p className="text-body text-gray-400">{project.organization}</p>
          )}
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              View on GitHub
            </a>
          )}
          {isSideProject && project.presentationUrl && (
            <a
              href={project.presentationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              View Presentation
            </a>
          )}
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Description */}
            <div className="card">
              <h2 className="text-h3 font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-accent-primary rounded-full" />
                Description
              </h2>
              {isSideProject && project.description ? (
                <div className="text-gray-300 leading-relaxed space-y-4">
                  {project.description.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 italic">
                  No detailed description available for this project.
                </p>
              )}
            </div>

            {/* Features */}
            {isSideProject && project.features && project.features.length > 0 && (
              <div className="card">
                <h2 className="text-h3 font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-accent-primary rounded-full" />
                  Features
                </h2>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <svg
                        className="w-5 h-5 text-accent-primary flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-6"
          >
            {/* Keywords */}
            {project.keywords && project.keywords.length > 0 && (
              <div className="card">
                <h3 className="text-body font-semibold text-white mb-3">
                  Keywords
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.keywords.map((keyword) => (
                    <span key={keyword} className="tag tag-accent">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Project Info */}
            <div className="card">
              <h3 className="text-body font-semibold text-white mb-4">
                Project Info
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-small text-gray-500">Type</p>
                  <p className="text-gray-200">
                    {isSideProject ? 'Side Project' : 'Research Project'}
                  </p>
                </div>
                <div>
                  <p className="text-small text-gray-500">Period</p>
                  <p className="text-gray-200">{project.period}</p>
                </div>
                {project.organization && (
                  <div>
                    <p className="text-small text-gray-500">Organization</p>
                    <p className="text-gray-200">{project.organization}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Back to home */}
            <Link
              to="/#side-projects"
              className="block card p-4 text-center hover:border-accent-primary/30 transition-all"
            >
              <p className="text-gray-400 text-small">View all projects</p>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
