import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Cpu,
  Wind,
  BatteryCharging,
  Waves,
  Eye,
  Fingerprint,
} from 'lucide-react';
import { features } from '@/data/car';

const iconMap = {
  Cpu,
  Wind,
  BatteryCharging,
  Waves,
  Eye,
  Fingerprint,
};

export default function FeaturesGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="features" className="relative py-28">
      <div className="absolute inset-0 grid-bg radial-fade opacity-20" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="font-grotesk text-sm tracking-widest text-amber-400 uppercase">
            Engineering
          </span>
          <h2 className="mt-3 font-sora text-4xl font-700 tracking-tight sm:text-5xl">
            Built From <span className="text-gradient-neon">Tomorrow</span>
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-colors duration-300 hover:border-white/20"
              >
                <div
                  className="absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: feature.accent + '30' }}
                />

                <motion.div
                  className="absolute left-0 top-0 h-px w-0 transition-all duration-500 group-hover:w-full"
                  style={{ background: `linear-gradient(to right, ${feature.accent}, transparent)` }}
                />

                <div className="relative">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border transition-colors"
                    style={{
                      background: feature.accent + '15',
                      borderColor: feature.accent + '30',
                    }}
                  >
                    <Icon
                      className="h-7 w-7"
                      style={{ color: feature.accent }}
                    />
                  </motion.div>

                  <h3 className="mb-3 font-sora text-xl font-700 text-white">
                    {feature.title}
                  </h3>
                  <p className="font-grotesk text-sm leading-relaxed text-white/55">
                    {feature.description}
                  </p>

                  <div
                    className="mt-5 flex items-center gap-2 font-grotesk text-xs font-500 tracking-wider uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ color: feature.accent }}
                  >
                    Learn More
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
