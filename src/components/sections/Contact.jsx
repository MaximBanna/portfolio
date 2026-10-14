import SectionHeading from "../ui/SectionHeading";
import { FaGithub, FaLinkedin } from "react-icons/fa";
function Contact() {
  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/your-username",
      icon: FaGithub,
    },
    {
      label: "Linkedin",
      href: "https://Linkedin.com/your-username",
      icon: FaLinkedin,
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading label="Contacts" title="My contacts" />
        <p className="mt-6 max-w-xl text-neutral-400"></p>
        <a
          className="mt-8 inline-block text-2xl md:text-4xl font-bold tracking-tight underline-offset-8 hover:underline"
          href="mailto:you@example.com"
        >
          you@example.com
        </a>
        <div className="mt-10 flex gap-6 text-sm">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                className="text-neutral-400 transition-colors hover:text-neutral-100 flex items-center gap-2"
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noreferrer"
              >
                <Icon />
                {social.label}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Contact;
