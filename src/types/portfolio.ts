export interface BasicInfo {
  name: string
  role: string
  github: string
  instagram: string
  linkedin: string
  email: string
  cvUrl: string
}

export interface Skill {
  name: string
  weight: number
  category: 'languages' | 'frameworks' | 'data' | 'devops' | 'tools'
}

export interface TimelineItem {
  title: string
  subtitle: string
  date: string
  titleUrl?: string
  subtitleUrl?: string
  tags?: string[]
}

export interface ProjectBase {
  id: string
  title: string
  organization?: string
  period: string
  link?: string
  presentationUrl?: string
  keywords: string[]
  tags: string[]
}

export interface SideProject extends ProjectBase {
  type: 'side'
  description: string
  features: string[]
}

export interface ResearchProject extends ProjectBase {
  type: 'research'
  description?: string
}

export type Project = SideProject | ResearchProject

export interface Publication {
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

export interface PortfolioData {
  basic: BasicInfo
  about: string
  skills: Skill[]
  timeline: TimelineItem[]
  sideProjects: SideProject[]
  researchProjects: ResearchProject[]
  publications: Publication[]
  heroTexts: string[]
}
