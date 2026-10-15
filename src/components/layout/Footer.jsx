function Footer() {
  return (
    <footer id="footer" className="border-t border-neutral-800">
      <div className="mx-auto max-w-5xl px-6 py-8 flex flex-col gap-2 md:flex-row md:justify-between text-sm text-neutral-400">
        <p>&copy; {new Date().getFullYear()} Maxim Banna</p>
        <p>Built with React, Motion and Tailwind CSS</p>
      </div>
    </footer>
  );
}

export default Footer;
