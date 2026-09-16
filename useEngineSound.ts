import { useRef, useState, useCallback, useEffect } from 'react';

type EngineState = 'off' | 'idle' | 'revving';

export function useEngineSound() {
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);
  const lfoRef = useRef<OscillatorNode | null>(null);
  const lfoGainRef = useRef<GainNode | null>(null);
  const [state, setState] = useState<EngineState>('off');

  const stop = useCallback(() => {
    if (gainRef.current && audioCtxRef.current) {
      const t = audioCtxRef.current.currentTime;
      gainRef.current.gain.cancelScheduledValues(t);
      gainRef.current.gain.setValueAtTime(gainRef.current.gain.value, t);
      gainRef.current.gain.linearRampToValueAtTime(0, t + 0.15);
    }
    const cleanup = () => {
      oscRef.current?.stop();
      lfoRef.current?.stop();
      oscRef.current = null;
      lfoRef.current = null;
      gainRef.current = null;
      lfoGainRef.current = null;
    };
    const timeout = setTimeout(cleanup, 200);
    return () => clearTimeout(timeout);
  }, []);

  const start = useCallback(() => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new AudioContext();
    }
    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') ctx.resume();

    const osc = ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(45, ctx.currentTime);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.12, ctx.currentTime + 0.3);

    // LFO for engine rumble modulation
    const lfo = ctx.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.setValueAtTime(8, ctx.currentTime);

    const lfoGain = ctx.createGain();
    lfoGain.gain.setValueAtTime(12, ctx.currentTime);

    lfo.connect(lfoGain);
    lfoGain.connect(osc.frequency);
    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    lfo.start();

    oscRef.current = osc;
    gainRef.current = gain;
    lfoRef.current = lfo;
    lfoGainRef.current = lfoGain;
  }, []);

  const toggle = useCallback(() => {
    setState((prev) => {
      if (prev === 'off') {
        start();
        return 'idle';
      } else {
        stop();
        return 'off';
      }
    });
  }, [start, stop]);

  const rev = useCallback(() => {
    if (!audioCtxRef.current || !oscRef.current || !gainRef.current) return;
    setState('revving');
    const ctx = audioCtxRef.current;
    const t = ctx.currentTime;
    oscRef.current.frequency.cancelScheduledValues(t);
    oscRef.current.frequency.setValueAtTime(oscRef.current.frequency.value, t);
    oscRef.current.frequency.linearRampToValueAtTime(120, t + 0.4);
    gainRef.current.gain.cancelScheduledValues(t);
    gainRef.current.gain.setValueAtTime(gainRef.current.gain.value, t);
    gainRef.current.gain.linearRampToValueAtTime(0.2, t + 0.3);

    const reset = setTimeout(() => {
      if (!oscRef.current || !gainRef.current || !audioCtxRef.current) return;
      const t2 = audioCtxRef.current.currentTime;
      oscRef.current.frequency.cancelScheduledValues(t2);
      oscRef.current.frequency.setValueAtTime(oscRef.current.frequency.value, t2);
      oscRef.current.frequency.linearRampToValueAtTime(45, t2 + 0.6);
      gainRef.current.gain.cancelScheduledValues(t2);
      gainRef.current.gain.setValueAtTime(gainRef.current.gain.value, t2);
      gainRef.current.gain.linearRampToValueAtTime(0.12, t2 + 0.6);
      setState('idle');
    }, 800);
    return () => clearTimeout(reset);
  }, []);

  useEffect(() => {
    return () => {
      stop();
      audioCtxRef.current?.close();
    };
  }, [stop]);

  return { state, toggle, rev };
}
