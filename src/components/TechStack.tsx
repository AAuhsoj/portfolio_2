import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Section from './Section'
import { portfolioData } from '@/data/portfolio'
import type { Skill } from '@/types/portfolio'

const categories = [
  { key: 'all', label: 'All' },
  { key: 'languages', label: 'Languages' },
  { key: 'frameworks', label: 'Frameworks' },
  { key: 'data', label: 'Data/DB' },
  { key: 'devops', label: 'DevOps' },
  { key: 'tools', label: 'Tools' },
] as const

type CategoryKey = (typeof categories)[number]['key']

function SkillBadge({ skill }: { skill: Skill }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: -10 }}
      transition={{
        type: 'spring',
        damping: 20,
        stiffness: 200,
      }}
      whileHover={{ scale: 1.05 }}
      className="group relative"
    >
      <div className="flex items-center gap-3 px-4 py-3 bg-dark-700 border border-dark-500 rounded-xl hover:border-accent-primary/30 hover:shadow-glow transition-all">
        <span className="text-gray-200 font-medium">{skill.name}</span>
        {/* Skill level indicator */}
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((level) => (
            <div
              key={level}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                level <= skill.weight
                  ? 'bg-accent-primary'
                  : 'bg-dark-500'
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('all')
  const { skills } = portfolioData

  const filteredSkills =
    activeCategory === 'all'
      ? skills
      : skills.filter((skill) => skill.category === activeCategory)

  return (
    <Section id="techstack" title="Tech Stack">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`px-4 py-2 text-small font-medium rounded-lg transition-all ${
              activeCategory === cat.key
                ? 'bg-accent-primary text-dark-900'
                : 'bg-dark-700 text-gray-400 hover:text-white hover:bg-dark-600'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div
        layout
        className="flex flex-wrap gap-3"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => (
            <SkillBadge key={skill.name} skill={skill} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Legend */}
      <div className="mt-8 flex items-center gap-4 text-small text-gray-500">
        <span>Proficiency:</span>
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((level) => (
              <div
                key={level}
                className={`w-1.5 h-1.5 rounded-full ${
                  level <= 2 ? 'bg-accent-primary' : 'bg-dark-500'
                }`}
              />
            ))}
          </div>
          <span>Basic</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((level) => (
              <div
                key={level}
                className={`w-1.5 h-1.5 rounded-full ${
                  level <= 4 ? 'bg-accent-primary' : 'bg-dark-500'
                }`}
              />
            ))}
          </div>
          <span>Advanced</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map(() => (
              <div
                key={Math.random()}
                className="w-1.5 h-1.5 rounded-full bg-accent-primary"
              />
            ))}
          </div>
          <span>Expert</span>
        </div>
      </div>
    </Section>
  )
}
