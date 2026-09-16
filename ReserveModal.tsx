import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Calendar, User, Mail, Phone, Car } from 'lucide-react';
import { carColors } from '@/data/car';

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function ReserveModal({ open, onClose }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    color: carColors[0].id,
    date: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setForm({ name: '', email: '', phone: '', color: carColors[0].id, date: '' });
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 30, opacity: 0 }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-amber-400/20 bg-[#0f0c05] shadow-2xl"
          >
            {/* Glow accent */}
            <div className="absolute -top-20 left-1/2 h-40 w-80 -translate-x-1/2 rounded-full bg-amber-500/20 blur-3xl" />

            <div className="relative p-8">
              <button
                onClick={handleClose}
                className="absolute right-5 top-5 text-white/40 transition-colors hover:text-white"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>

              {!submitted ? (
                <>
                  <div className="mb-6">
                    <span className="font-grotesk text-xs tracking-widest text-amber-400 uppercase">
                      Reserve Your VoltCyte
                    </span>
                    <h3 className="mt-2 font-sora text-2xl font-700 text-white">
                      Book a Test Drive
                    </h3>
                    <p className="mt-1 font-grotesk text-sm text-white/50">
                      Secure your slot — we'll confirm within 24 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <Field icon={User}>
                      <input
                        required
                        type="text"
                        placeholder="Full Name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-transparent font-grotesk text-sm text-white placeholder-white/30 focus:outline-none"
                      />
                    </Field>
                    <Field icon={Mail}>
                      <input
                        required
                        type="email"
                        placeholder="Email Address"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-transparent font-grotesk text-sm text-white placeholder-white/30 focus:outline-none"
                      />
                    </Field>
                    <Field icon={Phone}>
                      <input
                        type="tel"
                        placeholder="Phone (optional)"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-transparent font-grotesk text-sm text-white placeholder-white/30 focus:outline-none"
                      />
                    </Field>
                    <Field icon={Calendar}>
                      <input
                        required
                        type="date"
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        className="w-full bg-transparent font-grotesk text-sm text-white placeholder-white/30 focus:outline-none [color-scheme:dark]"
                      />
                    </Field>

                    <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                      <label className="mb-2 flex items-center gap-2 font-grotesk text-xs text-white/40 uppercase tracking-wider">
                        <Car className="h-3.5 w-3.5" />
                        Preferred Color
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {carColors.map((c) => (
                          <button
                            key={c.id}
                            type="button"
                            onClick={() => setForm({ ...form, color: c.id })}
                            className={`flex items-center gap-2 rounded-full border px-3 py-1.5 font-grotesk text-xs transition-all ${
                              form.color === c.id
                                ? 'border-amber-400/50 bg-amber-400/10 text-white'
                                : 'border-white/10 text-white/50 hover:border-white/20'
                            }`}
                          >
                            <span
                              className="h-3 w-3 rounded-full"
                              style={{ background: c.hex }}
                            />
                            {c.name}
                          </button>
                        ))}
                      </div>
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-2 rounded-full bg-gradient-to-r from-amber-300 to-amber-600 px-6 py-3.5 font-grotesk text-sm font-600 text-black transition-all"
                    >
                      Confirm Reservation
                    </motion.button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center py-8 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                    className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-amber-600"
                  >
                    <Check className="h-8 w-8 text-black" strokeWidth={3} />
                  </motion.div>
                  <h3 className="font-sora text-2xl font-700 text-white">
                    Reservation Confirmed
                  </h3>
                  <p className="mt-2 font-grotesk text-sm text-white/50">
                    Thanks, {form.name.split(' ')[0] || 'driver'}! We'll reach out
                    to confirm your test drive.
                  </p>
                  <button
                    onClick={handleClose}
                    className="mt-6 rounded-full border border-white/15 bg-white/5 px-6 py-2.5 font-grotesk text-sm text-white/80 transition-colors hover:border-amber-400/40 hover:text-white"
                  >
                    Close
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({
  icon: Icon,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors focus-within:border-amber-400/30">
      <Icon className="h-4 w-4 shrink-0 text-amber-400/60" />
      {children}
    </div>
  );
}
