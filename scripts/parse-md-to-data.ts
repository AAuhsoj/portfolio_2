import * as fs from 'fs'
import * as path from 'path'

interface BasicInfo {
  name: string
  role: string
  github: string
  instagram: string
  linkedin: string
  email: string
  cvUrl: string
}

interface Skill {
  name: string
  weight: number
  category: 'languages' | 'frameworks' | 'data' | 'devops' | 'tools'
}

interface TimelineItem {
  title: string
  subtitle: string
  date: string
  titleUrl?: string
  subtitleUrl?: string
  tags?: string[]
}

interface SideProject {
  id: string
  type: 'side'
  title: string
  organization?: string
  period: string
  link?: string
  presentationUrl?: string
  keywords: string[]
  tags: string[]
  description: string
  features: string[]
}

interface ResearchProject {
  id: string
  type: 'research'
  title: string
  organization?: string
  period: string
  keywords: string[]
  tags: string[]
  description?: string
}

interface Publication {
  id: string
  type: 'international-journal' | 'international-conference' | 'domestic-conference'
  authors: string
  title: string
  venue: string
  period: string
  link?: string
  award?: string
  tags: string[]
}

interface PortfolioData {
  basic: BasicInfo
  about: string
  skills: Skill[]
  timeline: TimelineItem[]
  sideProjects: SideProject[]
  researchProjects: ResearchProject[]
  publications: Publication[]
  heroTexts: string[]
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s가-힣-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

function parseMarkdown(content: string): PortfolioData {
  // Basic Info
  const basic: BasicInfo = {
    name: extractValue(content, /Name:\s*\*\*(.+?)\*\*/),
    role: extractValue(content, /Role line.*:\s*\*\*(.+?)\*\*/),
    github: extractValue(content, /GitHub:\s*\*\*(.+?)\*\*/),
    instagram: extractValue(content, /Instagram:\s*\*\*(.+?)\*\*/),
    linkedin: extractValue(content, /LinkedIn:\s*\*\*(.+?)\*\*/),
    email: extractValue(content, /Email:\s*\*\*(.+?)\*\*/),
    cvUrl: extractValue(content, /CV \(PDF\):\s*\*\*(.+?)\*\*/),
  }

  // About
  const aboutMatch = content.match(/## About Me\n(.+?)(?=\n---)/s)
  const about = aboutMatch ? aboutMatch[1].trim() : ''

  // Skills - categorize them
  const skills: Skill[] = []

  // Languages
  const langSection = content.match(/### Languages\n([\s\S]*?)(?=###|---)/)?.[1] || ''
  const langMatches = langSection.matchAll(/- (\w+) \(weight (\d)\)/g)
  for (const m of langMatches) {
    skills.push({ name: m[1], weight: parseInt(m[2]), category: 'languages' })
  }

  // Frameworks
  const fwSection = content.match(/### Frameworks\n([\s\S]*?)(?=###|---)/)?.[1] || ''
  const fwMatches = fwSection.matchAll(/- (\w+) \(weight (\d)\)/g)
  for (const m of fwMatches) {
    skills.push({ name: m[1], weight: parseInt(m[2]), category: 'frameworks' })
  }

  // Tools - split into data, devops, tools
  const toolsSection = content.match(/### Tools\n([\s\S]*?)(?=---|##)/)?.[1] || ''
  const toolMatches = toolsSection.matchAll(/- (.+?) \(weight (\d)\)/g)

  const dataTools = ['MySQL', 'PostgreSQL', 'MongoDB']
  const devopsTools = ['Docker', 'AWS', 'GCP']

  for (const m of toolMatches) {
    const name = m[1]
    const weight = parseInt(m[2])

    if (dataTools.includes(name)) {
      skills.push({ name, weight, category: 'data' })
    } else if (devopsTools.includes(name)) {
      skills.push({ name, weight, category: 'devops' })
    } else {
      skills.push({ name, weight, category: 'tools' })
    }
  }

  // Timeline
  const timeline: TimelineItem[] = []
  const timelineSection = content.match(/## Education & Experience \(Timeline\)\n([\s\S]*?)(?=\n---)/)?.[1] || ''

  const timelineBlocks = timelineSection.split(/(?=- \*\*)/).filter(b => b.trim())
  for (const block of timelineBlocks) {
    const titleMatch = block.match(/- \*\*(.+?)\*\*/)
    const dateMatch = block.match(/Date:\s*(.+)/)
    const subtitleMatch = block.match(/Subtitle:\s*(.+)/)
    const titleUrlMatch = block.match(/Title URL:\s*(.+)/)
    const subtitleUrlMatch = block.match(/Subtitle URL:\s*(.+)/)
    const tagsMatch = block.match(/Tags:\s*(.+)/)

    if (titleMatch && dateMatch && subtitleMatch) {
      timeline.push({
        title: titleMatch[1],
        subtitle: subtitleMatch[1],
        date: dateMatch[1],
        titleUrl: titleUrlMatch?.[1],
        subtitleUrl: subtitleUrlMatch?.[1],
        tags: tagsMatch ? tagsMatch[1].split(',').map(t => t.trim()) : undefined,
      })
    }
  }

  // Side Projects
  const sideProjects: SideProject[] = []
  const sideSection = content.match(/## Side Projects\n([\s\S]*?)(?=## Research Projects)/)?.[1] || ''

  const sideBlocks = sideSection.split(/(?=### \d+\))/).filter(b => b.includes('###'))
  for (const block of sideBlocks) {
    const titleMatch = block.match(/### \d+\)\s*(.+)/)
    const orgMatch = block.match(/Organization:\s*(.+)/)
    const periodMatch = block.match(/Period:\s*(.+)/)
    const linkMatch = block.match(/Link:\s*(.+)/)
    const presentationMatch = block.match(/Presentation:\s*(.+)/)
    const keywordsMatch = block.match(/Keywords:\s*(.+)/)
    const tagsMatch = block.match(/Tags:\s*(.+)/)
    const descMatch = block.match(/\*\*Detailed description\*\*\n([\s\S]*?)(?=\*\*Features\*\*|---)/)?.[1]
    const featuresMatch = block.match(/\*\*Features\*\*\n([\s\S]*?)(?=---|$)/)

    if (titleMatch) {
      const features: string[] = []
      if (featuresMatch) {
        const featureLines = featuresMatch[1].match(/- (.+)/g) || []
        featureLines.forEach(f => {
          features.push(f.replace(/^- /, ''))
        })
      }

      sideProjects.push({
        id: slugify(titleMatch[1]),
        type: 'side',
        title: titleMatch[1],
        organization: orgMatch?.[1],
        period: periodMatch?.[1] || '',
        link: linkMatch?.[1],
        presentationUrl: presentationMatch?.[1],
        keywords: keywordsMatch ? keywordsMatch[1].split(',').map(k => k.trim()) : [],
        tags: tagsMatch ? tagsMatch[1].split(',').map(t => t.trim()) : [],
        description: descMatch?.trim() || '',
        features,
      })
    }
  }

  // Research Projects
  const researchProjects: ResearchProject[] = []
  const researchSection = content.match(/## Research Projects\n([\s\S]*?)(?=## Publications|---\s*$)/)?.[1] || ''

  const researchBlocks = researchSection.split(/(?=### \d+\))/).filter(b => b.includes('###'))
  for (const block of researchBlocks) {
    const titleMatch = block.match(/### \d+\)\s*(.+)/)
    const orgMatch = block.match(/Organization:\s*(.+)/)
    const periodMatch = block.match(/Period:\s*(.+)/)
    const keywordsMatch = block.match(/Keywords:\s*(.+)/)
    const tagsMatch = block.match(/Tags:\s*(.+)/)

    if (titleMatch) {
      researchProjects.push({
        id: slugify(titleMatch[1]),
        type: 'research',
        title: titleMatch[1],
        organization: orgMatch?.[1],
        period: periodMatch?.[1] || '',
        keywords: keywordsMatch ? keywordsMatch[1].split(',').map(k => k.trim()) : [],
        tags: tagsMatch ? tagsMatch[1].split(',').map(t => t.trim()) : [],
      })
    }
  }

  // Publications
  const publications: Publication[] = []
  const pubSection = content.match(/## Publications\n([\s\S]*?)$/)?.[1] || ''

  // International Journal
  const intJournalSection = pubSection.match(/### International Journal\n([\s\S]*?)(?=### International Conference|$)/)?.[1] || ''
  parsePublicationBlock(intJournalSection, 'international-journal', publications)

  // International Conference
  const intConfSection = pubSection.match(/### International Conference\n([\s\S]*?)(?=### Domestic Conference|$)/)?.[1] || ''
  parsePublicationBlock(intConfSection, 'international-conference', publications)

  // Domestic Conference
  const domConfSection = pubSection.match(/### Domestic Conference\n([\s\S]*?)$/)?.[1] || ''
  parsePublicationBlock(domConfSection, 'domestic-conference', publications)

  // Hero texts
  const heroTexts = [
    "Building Data-Driven Solutions",
    "AI & Machine Learning Researcher",
    "Big Data Analytics Specialist",
  ]

  return {
    basic,
    about,
    skills,
    timeline,
    sideProjects,
    researchProjects,
    publications,
    heroTexts,
  }
}

function extractValue(content: string, regex: RegExp): string {
  const match = content.match(regex)
  return match ? match[1] : ''
}

function parsePublicationBlock(
  section: string,
  type: 'international-journal' | 'international-conference' | 'domestic-conference',
  publications: Publication[]
) {
  const blocks = section.split(/(?=- \*\*Authors:)/).filter(b => b.includes('Authors:'))

  for (const block of blocks) {
    const authorsMatch = block.match(/Authors:\*\*\s*(.+)/)
    const titleMatch = block.match(/Title:\*\*\s*(.+)/)
    const venueMatch = block.match(/Venue:\*\*\s*(.+)/)
    const periodMatch = block.match(/Period:\*\*\s*(.+)/)
    const linkMatch = block.match(/Link:\*\*\s*(.+)/)
    const awardMatch = block.match(/Award:\*\*\s*(.+)/)
    const tagsMatch = block.match(/Tags:\*\*\s*(.+)/)

    if (authorsMatch && titleMatch) {
      publications.push({
        id: slugify(titleMatch[1].substring(0, 50)),
        type,
        authors: authorsMatch[1],
        title: titleMatch[1],
        venue: venueMatch?.[1] || '',
        period: periodMatch?.[1] || '',
        link: linkMatch?.[1],
        award: awardMatch?.[1],
        tags: tagsMatch ? tagsMatch[1].split(',').map(t => t.trim()) : [],
      })
    }
  }
}

// Main execution
const mdPath = path.resolve(process.cwd(), 'aauhsoj_port_scraped.md')
const outputPath = path.resolve(process.cwd(), 'src/data/portfolio.ts')

const mdContent = fs.readFileSync(mdPath, 'utf-8')
const data = parseMarkdown(mdContent)

const outputContent = `// Auto-generated from aauhsoj_port_scraped.md
// Run: npm run build:data

import type { PortfolioData } from '@/types/portfolio'

export const portfolioData: PortfolioData = ${JSON.stringify(data, null, 2)} as const

export default portfolioData
`

fs.writeFileSync(outputPath, outputContent, 'utf-8')

console.log('✅ Portfolio data generated successfully!')
console.log(`   Output: ${outputPath}`)
console.log(`   - ${data.skills.length} skills`)
console.log(`   - ${data.timeline.length} timeline items`)
console.log(`   - ${data.sideProjects.length} side projects`)
console.log(`   - ${data.researchProjects.length} research projects`)
console.log(`   - ${data.publications.length} publications`)
