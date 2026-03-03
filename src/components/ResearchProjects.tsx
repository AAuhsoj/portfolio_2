import Section from './Section'
import ProjectCard from './ProjectCard'
import { portfolioData } from '@/data/portfolio'

export default function ResearchProjects() {
  const { researchProjects } = portfolioData

  return (
    <Section id="research-projects" title="Research Projects">
      <div className="grid md:grid-cols-2 gap-6">
        {researchProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </Section>
  )
}
