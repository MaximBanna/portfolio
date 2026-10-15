import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

const facts = [
  { label: "Location", value: "Israel" },
  { label: "Education", value: "Software Engineering, ORT Braude" },
  { label: "GPA", value: "96.2" },
  { label: "Languages", value: "Hebrew, Ukrainian, Russian, Arabic, English" },
  { label: "Open to", value: "Junior full-stack or backend roles" },
];

function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading label="About" title="A bit about me" />
        </Reveal>

        <Reveal>
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            <div className="space-y-4 leading-relaxed text-neutral-400">
              <p>
                I'm a Practical Software Engineer graduate of ORT Braude College of Engineering, with a GPA of 96.2, 
                a perfect score on the national MAHAT final exam and the College Excellence Award.
                For my final project I taught myself Flask and built Turnify,
                a multi-role booking platform with Stripe payments and WhatsApp reminders.
              </p>

              <p>
                I enjoy backend work most: designing databases, handling concurrent requests safely and writing secure code.
                Before software, I spent four years in logistics and customer service,
                which taught me reliability and clear communication. This website is my first React project.
              </p>
            </div>

            {/* description list - the whole list (the wrapper) */}
            <dl>
              {facts.map((fact) => (
                <div key={fact.label} className="flex justify-between border-b border-neutral-800 py-3 text-sm">
                  {/* description term - the name, for example “Location” */}
                  <dt className="text-neutral-400">{fact.label}</dt>
                  {/* description details - the value, for example “Israel” */}
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
