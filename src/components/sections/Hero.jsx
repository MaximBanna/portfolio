import Button from "../ui/Button";
import { motion } from "motion/react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center">
      <motion.div className="mx-auto w-full max-w-5xl px-6" variants={container} initial="hidden" animate="show">
        <motion.p className="text-sm uppercase tracking-widest text-neutral-400" variants={item}>
          Hi, I'm Maxim
        </motion.p>

        <motion.h1 className="mt-4 max-w-3xl text-5xl md:text-7xl font-bold tracking-tight" variants={item}>
          Junior full-stack developer building secure, real-world web apps.
        </motion.h1>

        <motion.p className="mt-6 max-w-xl text-lg text-neutral-400" variants={item}>
          Software Engineering graduate from ORT Braude College (GPA 96.2, perfect MAHAT score).
          I work mainly with Python, PHP, Java and SQL, and I'm looking for a junior full-stack or backend role.
        </motion.p>
        
        <motion.div className="flex-wrap mt-10 flex gap-4" variants={item}>
          <Button href="#projects">View projects</Button>
          
          <Button href="#contact" variant="secondary">
            Contact me
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
