import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleIsOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <header id="navbar" className="fixed top-0 inset-x-0 z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur">
      <div className="mx-auto max-w-5xl h-16 px-6 flex items-center justify-between">
        <a href="#hero" className="font-semibold tracking-tight">
          Maxim
        </a>

        {/* hidden by default and shown as a row from medium screens up */}
        <nav className="hidden md:flex gap-8 text-sm">
          {links.map((link) => (
            <a href={link.href} className="text-neutral-400 hover:text-neutral-100 transition-colors" key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <button className="md:hidden" onClick={handleIsOpen} aria-label="Toggle menu">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* mobile panel */}
      {isOpen && (
        <nav className="md:hidden flex flex-col gap-4 border-t border-neutral-800 px-6 py-4">
          {links.map((link) => (
            <a href={link.href} className="text-neutral-400 hover:text-neutral-100 transition-colors" key={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Navbar;
