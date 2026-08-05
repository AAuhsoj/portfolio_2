import Section from './Section'
import { portfolioData } from '@/data/portfolio'

export default function About() {
  const { about, basic } = portfolioData

  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-start">
        {/* Profile Image Placeholder */}
        <div className="md:col-span-2 flex justify-center md:justify-start">
          <div className="relative z-0">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl bg-gradient-to-br from-dark-600 to-dark-700 border border-dark-500 flex items-center justify-center overflow-hidden">
              <span className="text-6xl md:text-7xl font-bold text-accent-primary/30">
                {basic.name.charAt(0)}
              </span>
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-3 -right-3 w-48 h-48 md:w-56 md:h-56 bg-accent-primary/10 rounded-2xl -z-10" />
          </div>
        </div>

        {/* About Content */}
        <div className="md:col-span-3 space-y-6">
          <p className="text-body md:text-lg text-gray-300 leading-relaxed">
            {about}
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="card p-4">
              <p className="text-small text-gray-500 mb-1">Location</p>
              <p className="text-gray-200 font-medium">Seoul, Korea</p>
            </div>
            <div className="card p-4">
              <p className="text-small text-gray-500 mb-1">University</p>
              <p className="text-gray-200 font-medium">Kyung Hee Univ.</p>
            </div>
            <div className="card p-4">
              <p className="text-small text-gray-500 mb-1">Major</p>
              <p className="text-gray-200 font-medium">Big Data Analytics</p>
            </div>
            <div className="card p-4">
              <p className="text-small text-gray-500 mb-1">Lab</p>
              <p className="text-gray-200 font-medium">IAI Lab</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={portfolioData.basic.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-small"
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
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download CV
            </a>
            <a
              href={`mailto:${basic.email}`}
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}
