import SectionHeading from "../ui/SectionHeading";
const facts = [
  { label: "Location", value: "Israel" },
  { label: "Focus", value: "Web development" },
  { label: "Experience", value: "Personal projects" },
  { label: "Languages", value: "Hebrew, English" },
];

function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading label="About" title="A bit about me" />
        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <div className="space-y-4 leading-relaxed text-neutral-400">
            <p>First paragraph about you.</p>
            <p>Second paragraph about you.</p>
          </div>

          {/* description list - the whole list (the wrapper) */}
          <dl>
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="flex justify-between border-b border-neutral-800 py-3 text-sm"
              >
                {/* description term - the name, for example “Location” */}
                <dt className="text-neutral-400">{fact.label}</dt>
                {/* description details - the value, for example “Israel” */}
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export default About;
