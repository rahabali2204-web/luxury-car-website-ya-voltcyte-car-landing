import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Gauge, Zap, BatteryCharging, Wind } from 'lucide-react';
import { specs } from '@/data/car';

const iconMap = {
  Gauge,
  Zap,
  BatteryCharging,
  Wind,
};

export default function SpecsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="specs" className="relative py-28">
      <div className="absolute inset-0 grid-bg radial-fade opacity-30" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="font-grotesk text-sm tracking-widest text-amber-400 uppercase">
            Performance
          </span>
          <h2 className="mt-3 font-sora text-4xl font-700 tracking-tight sm:text-5xl">
            Numbers That <span className="text-gradient-neon">Defy Physics</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {specs.map((spec, i) => {
            const Icon = iconMap[spec.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.7,
                  delay: i * 0.15,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-colors hover:border-amber-400/30 sm:p-8"
              >
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-amber-500/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />

                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: i * 0.15 + 0.3, type: 'spring', stiffness: 200 }}
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-300/20 to-amber-600/20 border border-amber-400/20"
                >
                  <Icon className="h-6 w-6 text-amber-300" />
                </motion.div>

                <div className="flex items-baseline gap-1">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: i * 0.15 + 0.4 }}
                    className="font-sora text-4xl font-800 tracking-tight text-white sm:text-5xl"
                  >
                    {spec.value}
                  </motion.span>
                  <span className="font-grotesk text-sm font-500 text-amber-300">
                    {spec.unit === 'seconds' ? 's' : spec.unit === 'horsepower' ? 'hp' : spec.unit === 'miles' ? 'mi' : 'mph'}
                  </span>
                </div>

                <p className="mt-2 font-grotesk text-sm text-white/50">
                  {spec.label}
                </p>

                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: '100%' } : {}}
                  transition={{ delay: i * 0.15 + 0.5, duration: 0.8, ease: 'easeOut' }}
                  className="mt-4 h-px bg-gradient-to-r from-amber-300 to-amber-600"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
