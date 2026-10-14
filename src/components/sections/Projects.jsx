import { projects } from "../../data/projects";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";

function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading label="Projects" title="My Projects" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
