import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { SideProject, ResearchProject } from '@/types/portfolio'

interface ProjectCardProps {
  project: SideProject | ResearchProject
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isSideProject = project.type === 'side'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        type: 'spring',
        damping: 20,
        stiffness: 100,
        delay: index * 0.08,
      }}
      whileHover={{ y: -4 }}
    >
      <Link
        to={`/projects/${project.id}`}
        className="block card h-full group"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white group-hover:text-accent-primary transition-colors line-clamp-2">
              {project.title}
            </h3>
            {project.organization && (
              <p className="text-small text-gray-500 mt-1">
                {project.organization}
              </p>
            )}
          </div>
          <div className="flex-shrink-0">
            <span
              className={`tag ${
                isSideProject ? 'tag-accent' : 'bg-dark-600'
              }`}
            >
              {isSideProject ? 'Side' : 'Research'}
            </span>
          </div>
        </div>

        {/* Description */}
        {isSideProject && project.description && (
          <p className="text-small text-gray-400 line-clamp-2 mb-4">
            {project.description.split('\n')[0]}
          </p>
        )}

        {/* Period */}
        <p className="text-small text-accent-primary font-mono mb-4">
          {project.period}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="tag text-xs">
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="tag text-xs">+{project.tags.length - 4}</span>
          )}
        </div>

        {/* Arrow indicator */}
        <div className="flex justify-end mt-4">
          <svg
            className="w-5 h-5 text-gray-600 group-hover:text-accent-primary group-hover:translate-x-1 transition-all"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </Link>
    </motion.div>
  )
}
