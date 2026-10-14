function ProjectCard({ project }) {
  return (
    <article className="rounded-2xl border border-neutral-800 p-6 transition-colors hover:border-neutral-600">
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-neutral-400">
        {project.description}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full bg-neutral-900 px-3 py-1 text-xs text-neutral-400"
          >
            {tag}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex gap-4 text-sm">
        <a
          href={project.github}
          className="text-neutral-400 transition-colors hover:text-neutral-100"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        {project.demo && (
          <a
            className="text-neutral-400 transition-colors hover:text-neutral-100"
            href={project.demo}
            target="_blank"
            rel="noreferrer"
          >
            Live demo
          </a>
        )}
      </div>
    </article>
  );
}
export default ProjectCard;
