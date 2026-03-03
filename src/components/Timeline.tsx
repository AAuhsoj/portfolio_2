import { motion } from 'framer-motion'
import Section from './Section'
import { portfolioData } from '@/data/portfolio'

export default function Timeline() {
  const { timeline, basic } = portfolioData

  return (
    <Section id="timeline" title="Experience">
      {/* CV Button */}
      <div className="mb-8">
        <a
          href={basic.cvUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary text-small"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          View Full CV
        </a>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-dark-600" />

        <div className="space-y-8">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                type: 'spring',
                damping: 20,
                stiffness: 100,
                delay: index * 0.12,
              }}
              className="relative pl-12 md:pl-20"
            >
              {/* Timeline dot */}
              <div className="absolute left-2 md:left-6 top-2 w-4 h-4 rounded-full bg-dark-700 border-2 border-accent-primary" />

              {/* Content */}
              <div className="card">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <div>
                    {item.titleUrl ? (
                      <a
                        href={item.titleUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-h3 font-semibold text-white hover:text-accent-primary transition-colors"
                      >
                        {item.title}
                      </a>
                    ) : (
                      <h3 className="text-h3 font-semibold text-white">
                        {item.title}
                      </h3>
                    )}
                    {item.subtitleUrl ? (
                      <a
                        href={item.subtitleUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-body text-gray-400 hover:text-accent-primary transition-colors mt-1"
                      >
                        {item.subtitle}
                      </a>
                    ) : (
                      <p className="text-body text-gray-400 mt-1">
                        {item.subtitle}
                      </p>
                    )}
                  </div>
                  <span className="text-small text-accent-primary font-mono whitespace-nowrap">
                    {item.date}
                  </span>
                </div>

                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
