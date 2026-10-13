const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  return (
    <header
      id="navbar"
      className="fixed top-0 inset-x-0 z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur"
    >
      <div className="mx-auto max-w-5xl h-16 px-6 flex items-center justify-between">
        <a href="#hero" className="font-semibold tracking-tight">
          Maxim
        </a>
        <nav className="flex gap-8 text-sm">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-neutral-400 hover:text-neutral-100 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
