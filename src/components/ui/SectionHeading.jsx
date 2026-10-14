function SectionHeading({ label, title }) {
  return (
    <div>
      <p className="text-sm uppercase tracking-widest text-neutral-400">
        {label}
      </p>
      <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
        {title}
      </h2>
    </div>
  );
}

export default SectionHeading;
