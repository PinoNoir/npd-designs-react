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
        description="I've worked on a wide range of projects, from small bespoke websites to large enterprise applications as a designer and developer."
        showProjectsButton={false}
        showContactButton={true}
      />
      <PortfolioGrid projects={projects} />
      <Footer />
    </>
  )
}
