import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';

const CAR_IMAGE =
  'https://images.pexels.com/photos/11822720/pexels-photo-11822720.jpeg?auto=compress&cs=tinysrgb&w=1600';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-24"
    >
      <div className="absolute inset-0 grid-bg radial-fade" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0905]/40 to-[#0a0905]" />

      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-amber-500/20 blur-[100px]"
      />
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-[8%] top-[30%] h-80 w-80 rounded-full bg-yellow-600/15 blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-[10%] left-[40%] h-64 w-64 rounded-full bg-amber-400/10 blur-[100px]"
      />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: ['0vh', '100vh'] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent"
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center"
        >
          <motion.div
            variants={item}
            className="mb-6 flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/5 px-4 py-1.5"
          >
            <Sparkles className="h-4 w-4 text-amber-400" />
            <span className="font-grotesk text-xs font-500 tracking-widest text-amber-300 uppercase">
              The Future of Driving — 2026
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-sora text-5xl font-800 leading-[1.05] tracking-tight sm:text-7xl md:text-8xl"
          >
            <span className="block text-white/90">VELOCITY</span>
            <span className="block text-gradient-neon">REDEFINED</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl font-grotesk text-base font-400 leading-relaxed text-white/60 sm:text-lg"
          >
            A hypercar engineered beyond the limits of physics. 1,020 horsepower
            of silent fury, wrapped in carbon fiber and controlled by neural
            intelligence.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <motion.a
              href="#colors"
              whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(255,184,0,0.5)' }}
              whileTap={{ scale: 0.97 }}
              className="group flex cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-amber-300 to-amber-600 px-8 py-3.5 font-grotesk text-sm font-600 text-black transition-all"
            >
              Test Drive
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              href="#specs"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="cursor-pointer rounded-full border border-white/15 bg-white/5 px-8 py-3.5 font-grotesk text-sm font-500 text-white/90 backdrop-blur-sm transition-colors hover:border-amber-400/40 hover:text-white"
            >
              Explore Specs
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-14 w-full max-w-5xl"
        >
          <div className="absolute inset-0 -bottom-8 bg-gradient-to-t from-amber-500/20 to-transparent blur-3xl" />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            <img
              src={CAR_IMAGE}
              alt="Luxury sports car"
              className="relative w-full rounded-2xl border border-white/10 shadow-2xl"
              style={{ filter: 'brightness(0.85) contrast(1.1) sepia(0.15) hue-rotate(-10deg)' }}
            />
            <div className="absolute -bottom-4 left-1/2 h-40 w-3/4 -translate-x-1/2 rounded-full bg-amber-500/30 blur-3xl" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-12 flex flex-col items-center gap-2"
        >
          <span className="font-grotesk text-xs tracking-widest text-white/40 uppercase">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="h-5 w-5 text-amber-400/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
