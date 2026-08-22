import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const COLORS = ["#f472b6", "#a78bfa", "#facc15", "#34d399", "#60a5fa"];
const MAX_FIREWORKS = 8;

function Firework({ x, y, onComplete }) {
  const particles = Array.from({ length: 8 });

  return (
    <div className="absolute" style={{ left: x, top: y }}>
      {particles.map((_, i) => {
        const angle = (i / particles.length) * 2 * Math.PI;
        const distance = 60 + Math.random() * 60;
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;
        const color = COLORS[i % COLORS.length];

        return (
          <motion.span
            key={i}
            initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
            animate={{ x: dx, y: dy, opacity: 0, scale: 0.3 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            onAnimationComplete={i === 0 ? onComplete : undefined}
            className="absolute h-2 w-2 rounded-full will-change-transform"
            style={{ backgroundColor: color }}
          />
        );
      })}
    </div>
  );
}

function Fireworks() {
  const [fireworks, setFireworks] = useState([]);
  const idRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFireworks((prev) => {
        if (prev.length >= MAX_FIREWORKS) return prev;
        idRef.current += 1;
        return [
          ...prev,
          {
            id: idRef.current,
            x: Math.random() * (window.innerWidth * 0.5),
            y: Math.random() * (window.innerHeight * 0.5),
          },
        ];
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const removeFirework = (id) => {
    setFireworks((prev) => prev.filter((fw) => fw.id !== id));
  };

  return (
    <div className="fixed inset-0 z-[9998] pointer-events-none overflow-hidden">
      <AnimatePresence>
        {fireworks.map((fw) => (
          <Firework
            key={fw.id}
            x={fw.x}
            y={fw.y}
            onComplete={() => removeFirework(fw.id)}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

export default function CelebrationBanner() {
  return (
    <>
      <Fireworks />

      <div className="fixed inset-0 z-[9999] overflow-hidden pointer-events-none flex items-center">
        <motion.p
          initial={{ x: "-100%" }}
          animate={{ x: "100vw" }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="whitespace-nowrap px-4 py-2
                     text-xl sm:text-5xl md:text-5xl
                     font-semibold
                     bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 to-pink-500
                     bg-clip-text text-transparent
                     pointer-events-auto inline-block will-change-transform"
        >
          🌸 ഹൃദയം നിറഞ്ഞ ഓണാശംസകൾ 🌸
        </motion.p>
      </div>
    </>
  );
}