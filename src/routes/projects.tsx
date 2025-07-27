import { createFileRoute } from '@tanstack/react-router'
import { Footer, Hero, PortfolioGrid } from '@/components'
import { projects } from '@/data/projects'

export const Route = createFileRoute('/projects')({
  component: WorkComponent,
})

function WorkComponent() {
  return (
    <>
      <Hero
        title="Projects"
        subtitle="An overview of the design & development projects I've worked on."
        showProjectsButton={false}
        showContactButton={true}
      />
      <PortfolioGrid projects={projects} />
      <Footer />
    </>
  )
}
