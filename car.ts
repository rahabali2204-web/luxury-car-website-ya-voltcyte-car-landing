export type CarColor = {
  id: string;
  name: string;
  hex: string;
  glow: string;
  filter: string;
};

export const carColors: CarColor[] = [
  {
    id: 'cyber-blue',
    name: 'Cyber Blue',
    hex: '#0066ff',
    glow: 'rgba(0, 102, 255, 0.55)',
    filter: 'hue-rotate(190deg) saturate(1.6) brightness(1.05)',
  },
  {
    id: 'phantom-black',
    name: 'Phantom Black',
    hex: '#1a1a1f',
    glow: 'rgba(120, 120, 140, 0.4)',
    filter: 'brightness(0.7) saturate(0.5)',
  },
  {
    id: 'neon-magenta',
    name: 'Neon Magenta',
    hex: '#ff2d95',
    glow: 'rgba(255, 45, 149, 0.55)',
    filter: 'hue-rotate(300deg) saturate(1.8) brightness(1.1)',
  },
  {
    id: 'quantum-green',
    name: 'Quantum Green',
    hex: '#00ff9d',
    glow: 'rgba(0, 255, 157, 0.5)',
    filter: 'hue-rotate(110deg) saturate(1.7) brightness(1.05)',
  },
  {
    id: 'solar-amber',
    name: 'Solar Amber',
    hex: '#ffb800',
    glow: 'rgba(255, 184, 0, 0.5)',
    filter: 'hue-rotate(30deg) saturate(1.6) brightness(1.1)',
  },
];

export type Spec = {
  label: string;
  value: string;
  unit: string;
  icon: string;
};

export const specs: Spec[] = [
  { label: '0–60 mph', value: '1.9', unit: 'seconds', icon: 'Gauge' },
  { label: 'Peak Power', value: '1020', unit: 'horsepower', icon: 'Zap' },
  { label: 'Range', value: '400', unit: 'miles', icon: 'BatteryCharging' },
  { label: 'Top Speed', value: '200', unit: 'mph', icon: 'Wind' },
];

export type Feature = {
  title: string;
  description: string;
  icon: string;
  accent: string;
};

export const features: Feature[] = [
  {
    title: 'AI Autopilot',
    description: 'Neural-net driving system that predicts road conditions 12 seconds ahead, adapting to traffic in real time.',
    icon: 'Cpu',
    accent: '#ffd966',
  },
  {
    title: 'Aero Design',
    description: 'Carbon-fiber monocoque sculpted in a wind tunnel. 0.19 drag coefficient — the lowest of any production car.',
    icon: 'Wind',
    accent: '#ffb800',
  },
  {
    title: 'Quantum Charge',
    description: 'Solid-state battery cells recharge 80% in 9 minutes. 400 miles of range, restored over a coffee break.',
    icon: 'BatteryCharging',
    accent: '#c8901c',
  },
  {
    title: 'Adaptive Suspension',
    description: 'Magnetic ride control reads the road 1,000 times per second, adjusting each wheel independently.',
    icon: 'Waves',
    accent: '#ffd966',
  },
  {
    title: 'Holographic HUD',
    description: 'Full-windshield augmented reality display overlays navigation, speed, and hazards in 3D space.',
    icon: 'Eye',
    accent: '#ffb800',
  },
  {
    title: 'Biometric Access',
    description: 'Facial recognition and heartbeat signature unlock the cabin. No keys, no fobs — just you.',
    icon: 'Fingerprint',
    accent: '#c8901c',
  },
];
