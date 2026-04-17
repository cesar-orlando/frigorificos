import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Snowflake } from 'lucide-react';

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-navy-900"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          {/* Spinning icon */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
          >
            <Snowflake className="h-16 w-16 text-brand-ice-300" strokeWidth={1.5} />
          </motion.div>

          {/* Brand name */}
          <p className="mt-6 font-display text-xl tracking-[0.25em] text-white uppercase sm:text-2xl">
            Frigorífico Santander
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
