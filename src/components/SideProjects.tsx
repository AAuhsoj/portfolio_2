import Section from './Section'
import ProjectCard from './ProjectCard'
import { portfolioData } from '@/data/portfolio'

export default function SideProjects() {
  const { sideProjects } = portfolioData

  return (
    <Section id="side-projects" title="Side Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sideProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </Section>
  )
}
