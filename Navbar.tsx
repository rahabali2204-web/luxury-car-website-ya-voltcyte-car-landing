import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap, Volume2, VolumeX } from 'lucide-react';
import { useEngineSound } from '@/hooks/useEngineSound';
import ReserveModal from '@/components/ReserveModal';

const links = [
  { label: 'Overview', href: '#hero' },
  { label: 'Specs', href: '#specs' },
  { label: 'Colors', href: '#colors' },
  { label: 'Features', href: '#features' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [reserveOpen, setReserveOpen] = useState(false);
  const { state, toggle, rev } = useEngineSound();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-strong py-3' : 'py-5'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <a href="#hero" className="flex items-center gap-2">
            <motion.div
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-amber-300 to-amber-600 neon-glow"
            >
              <Zap className="h-5 w-5 text-black" strokeWidth={2.5} />
            </motion.div>
            <span className="font-sora text-lg font-700 tracking-tight">
              VOLT<span className="text-gradient-neon">C</span>YTE
            </span>
          </a>

          <ul className="hidden items-center gap-10 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative font-grotesk text-sm font-500 text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-amber-300 to-amber-500 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {/* Engine sound toggle */}
            <motion.button
              onClick={state === 'idle' ? rev : toggle}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all ${
                state === 'off'
                  ? 'border-white/15 bg-white/5 text-white/50 hover:border-amber-400/40 hover:text-amber-300'
                  : 'border-amber-400/50 bg-amber-400/15 text-amber-300 neon-glow'
              }`}
              aria-label={state === 'off' ? 'Start engine sound' : 'Stop engine sound'}
              title={state === 'off' ? 'Start engine sound' : state === 'idle' ? 'Click to rev' : 'Revving...'}
            >
              {state === 'off' ? (
                <VolumeX className="h-4 w-4" />
              ) : (
                <motion.div
                  animate={state === 'revving' ? { scale: [1, 1.3, 1] } : {}}
                  transition={{ duration: 0.4 }}
                >
                  <Volume2 className="h-4 w-4" />
                </motion.div>
              )}
            </motion.button>

            <motion.button
              onClick={() => setReserveOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="hidden cursor-pointer rounded-full border border-amber-400/40 bg-amber-400/10 px-5 py-2 font-grotesk text-sm font-500 text-amber-300 transition-colors hover:bg-amber-400/20 md:block"
            >
              Reserve Now
            </motion.button>

            <button
              onClick={() => setOpen(!open)}
              className="text-white md:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden md:hidden"
            >
              <ul className="glass-strong mx-4 mt-3 flex flex-col gap-4 rounded-2xl p-6">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="font-grotesk text-base text-white/80 hover:text-amber-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => {
                      setOpen(false);
                      setReserveOpen(true);
                    }}
                    className="font-grotesk text-base text-amber-300"
                  >
                    Reserve Now
                  </button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <ReserveModal open={reserveOpen} onClose={() => setReserveOpen(false)} />
    </>
  );
}
