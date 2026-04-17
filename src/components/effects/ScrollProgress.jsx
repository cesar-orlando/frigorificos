import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-brand-red-500"
      style={{ scaleX }}
    />
  );
}
