import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import { carColors } from '@/data/car';

const CAR_IMAGE =
  'https://images.pexels.com/photos/11822720/pexels-photo-11822720.jpeg?auto=compress&cs=tinysrgb&w=1600';

export default function ColorSelector() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const color = carColors[active];

  return (
    <section id="colors" className="relative py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-950/10 to-transparent" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="font-grotesk text-sm tracking-widest text-amber-400 uppercase">
            Personalize
          </span>
          <h2 className="mt-3 font-sora text-4xl font-700 tracking-tight sm:text-5xl">
            Choose Your <span className="text-gradient-neon">Signature</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md font-grotesk text-sm text-white/50">
            Five hand-crafted finishes, each engineered with nano-ceramic coating
            for a depth that shifts with the light.
          </p>
        </motion.div>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40">
              <AnimatePresence mode="wait">
                <motion.div
                  key={color.id + '-glow'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(ellipse 60% 50% at 50% 50%, ${color.glow}, transparent 70%)`,
                  }}
                />
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.img
                  key={color.id}
                  src={CAR_IMAGE}
                  alt={`${color.name} finish`}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full"
                  style={{ filter: color.filter }}
                />
              </AnimatePresence>

              <div
                className="absolute bottom-0 left-1/2 h-24 w-3/4 -translate-x-1/2 rounded-full blur-2xl"
                style={{ background: color.glow }}
              />
            </div>

            <motion.div
              key={color.id + '-badge'}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 flex items-center gap-3"
            >
              <div
                className="h-4 w-4 rounded-full border border-white/20"
                style={{ background: color.hex, boxShadow: `0 0 12px ${color.glow}` }}
              />
              <span className="font-grotesk text-lg font-500 text-white">
                {color.name}
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
            className="flex flex-col gap-4"
          >
            {carColors.map((c, i) => {
              const isActive = i === active;
              return (
                <motion.button
                  key={c.id}
                  onClick={() => setActive(i)}
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`group flex items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300 ${
                    isActive
                      ? 'border-amber-400/40 bg-white/[0.06]'
                      : 'border-white/10 bg-white/[0.02] hover:border-white/20'
                  }`}
                >
                  <div
                    className="relative h-12 w-12 shrink-0 rounded-full border-2 transition-all"
                    style={{
                      background: c.hex,
                      borderColor: isActive ? '#ffb800' : 'rgba(255,255,255,0.15)',
                      boxShadow: isActive ? `0 0 20px ${c.glow}` : 'none',
                    }}
                  >
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <Check className="h-5 w-5 text-white drop-shadow-lg" />
                      </motion.div>
                    )}
                  </div>
                  <div className="flex-1">
                    <p
                      className={`font-grotesk font-500 transition-colors ${
                        isActive ? 'text-white' : 'text-white/60'
                      }`}
                    >
                      {c.name}
                    </p>
                    <p className="font-grotesk text-xs text-white/40">
                      Nano-ceramic finish
                    </p>
                  </div>
                  {isActive && (
                    <motion.div
                      layoutId="colorActive"
                      className="h-8 w-1 rounded-full bg-gradient-to-b from-amber-300 to-amber-600"
                    />
                  )}
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
