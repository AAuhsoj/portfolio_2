import { motion } from 'framer-motion'
import Section from './Section'
import { portfolioData } from '@/data/portfolio'
import type { Publication } from '@/types/portfolio'

const typeLabels: Record<Publication['type'], string> = {
  'international-journal': 'International Journal',
  'international-conference': 'International Conference',
  'domestic-conference': 'Domestic Conference',
}

const typeOrder: Publication['type'][] = [
  'international-journal',
  'international-conference',
  'domestic-conference',
]

export default function Publications() {
  const { publications } = portfolioData

  const groupedPublications = typeOrder.reduce(
    (acc, type) => {
      acc[type] = publications.filter((pub) => pub.type === type)
      return acc
    },
    {} as Record<Publication['type'], Publication[]>
  )

  return (
    <Section id="publications" title="Publications">
      <div className="space-y-12">
        {typeOrder.map(
          (type) =>
            groupedPublications[type].length > 0 && (
              <div key={type}>
                <h3 className="text-h3 font-semibold text-white mb-6 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent-primary" />
                  {typeLabels[type]}
                </h3>
                <div className="space-y-4">
                  {groupedPublications[type].map((pub, index) => (
                    <PublicationCard
                      key={pub.id}
                      publication={pub}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            )
        )}
      </div>
    </Section>
  )
}

function PublicationCard({
  publication,
  index,
}: {
  publication: Publication
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card group"
    >
      <div className="flex flex-col md:flex-row md:items-start gap-4">
        {/* Content */}
        <div className="flex-1">
          {/* Title */}
          <h4 className="text-body font-semibold text-white mb-2 group-hover:text-accent-primary transition-colors">
            {publication.link ? (
              <a
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {publication.title}
              </a>
            ) : (
              publication.title
            )}
          </h4>

          {/* Authors */}
          <p className="text-small text-gray-400 mb-2">{publication.authors}</p>

          {/* Venue */}
          <p className="text-small text-gray-500 mb-3">{publication.venue}</p>

          {/* Award */}
          {publication.award && (
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-muted text-accent-primary text-small rounded-full mb-3">
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {publication.award}
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {publication.tags.map((tag) => (
              <span key={tag} className="tag text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Period & Link */}
        <div className="flex md:flex-col items-center md:items-end gap-3 md:gap-2">
          <span className="text-small text-accent-primary font-mono">
            {publication.period}
          </span>
          {publication.link && (
            <a
              href={publication.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-500 hover:text-accent-primary hover:bg-dark-600 rounded-lg transition-all"
              aria-label="View publication"
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
