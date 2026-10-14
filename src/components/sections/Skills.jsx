import { skillGroups } from "../../data/skills";
import SectionHeading from "../ui/SectionHeading";

function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading label="Skills" title="My Skills" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-neutral-800 p-6"
            >
              <h3 className="font-semibold">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="rounded-full border border-neutral-800 px-3 py-1 text-sm text-neutral-400">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
