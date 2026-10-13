import Button from "../ui/Button";

function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center">
      <div className="mx-auto w-full max-w-5xl px-6">
        <p className="text-sm uppercase tracking-widest text-neutral-400">
          Hi, I'm Maxim
        </p>
        <h1 className="mt-4 max-w-3xl text-5xl md:text-7xl font-bold tracking-tight">
          your headline, one strong sentence about what you do
        </h1>
        <p className="mt-6 max-w-xl text-lg text-neutral-400">
          one or two sentences of detail
        </p>
        <div className="mt-10 flex gap-4">
          <Button href="#projects">View projects</Button>
          <Button href="#contact" variant="secondary">
            Contact me
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
