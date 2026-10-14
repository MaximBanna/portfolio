import { skillGroups } from "../../data/skills";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading label="Skills" title="My Skills" />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.1}>
              <div className="h-full rounded-2xl border border-neutral-800 p-6">
                <h3 className="font-semibold">{group.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-neutral-800 px-3 py-1 text-sm text-neutral-400"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
