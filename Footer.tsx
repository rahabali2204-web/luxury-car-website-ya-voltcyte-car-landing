import { motion } from 'framer-motion';
import { Zap, Github, Twitter, Instagram, Youtube } from 'lucide-react';

const socials = [
  { icon: Twitter, href: '#' },
  { icon: Instagram, href: '#' },
  { icon: Youtube, href: '#' },
  { icon: Github, href: '#' },
];

const footerLinks = [
  { title: 'Vehicle', links: ['Overview', 'Specs', 'Colors', 'Reserve'] },
  { title: 'Company', links: ['About', 'Careers', 'Press', 'Contact'] },
  { title: 'Support', links: ['Charging', 'Warranty', 'Service', 'FAQ'] },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-amber-950/20" />
      <div className="absolute left-1/2 top-0 h-px w-full max-w-7xl -translate-x-1/2 bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#hero" className="flex items-center gap-2">
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.5 }}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-amber-300 to-amber-600 neon-glow"
              >
                <Zap className="h-5 w-5 text-black" strokeWidth={2.5} />
              </motion.div>
              <span className="font-sora text-lg font-700 tracking-tight">
                VOLT<span className="text-gradient-neon">C</span>YTE
              </span>
            </a>
            <p className="mt-4 max-w-xs font-grotesk text-sm leading-relaxed text-white/40">
              Engineering the future of performance. Every vehicle is a
              statement, every drive an experience.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-colors hover:border-amber-400/40 hover:text-amber-300"
                >
                  <s.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 font-grotesk text-xs font-600 tracking-widest text-white/40 uppercase">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="group relative font-grotesk text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link}
                      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-amber-400 transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="font-grotesk text-xs text-white/30">
            &copy; 2026 VoltCyte Motors. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-grotesk text-xs text-white/30 hover:text-white/60">
              Privacy
            </a>
            <a href="#" className="font-grotesk text-xs text-white/30 hover:text-white/60">
              Terms
            </a>
            <a href="#" className="font-grotesk text-xs text-white/30 hover:text-white/60">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
