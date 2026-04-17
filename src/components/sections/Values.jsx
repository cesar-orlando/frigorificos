import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useBrand } from '../../context/BrandContext';
import { cn } from '../../lib/utils';
import { fadeInUp, staggerContainer, staggerItem, viewport } from '../../lib/animations';

export default function Values() {
  const { brand } = useBrand();

  return (
    <section
      id="valores"
      className="relative overflow-hidden bg-gradient-to-b from-brand-navy-50 to-white py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* ── Header ── */}
        <motion.div
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={viewport}
          transition={fadeInUp.transition}
          className="mb-16 text-center lg:mb-20"
        >
          <span className="mb-4 inline-block text-sm font-bold uppercase tracking-widest text-brand-red-500">
            Lo que nos define
          </span>
          <h2 className="font-display text-4xl uppercase text-brand-navy-900 sm:text-5xl lg:text-6xl">
            Valores de Marca
          </h2>
        </motion.div>

        {/* ── Values Grid ── */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewport}
          variants={staggerContainer}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {brand.values.map((value, idx) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="group flex flex-col items-center text-center"
              >
                {/* Icon circle */}
                <div className="relative mb-6">
                  {/* Pulse ring on hover */}
                  <span
                    className={cn(
                      'absolute inset-0 rounded-full bg-brand-red-500/30',
                      'scale-100 opacity-0 transition-none',
                      'group-hover:animate-pulse-ring',
                    )}
                  />
                  <div
                    className={cn(
                      'relative flex h-20 w-20 items-center justify-center rounded-full',
                      'bg-gradient-to-br from-brand-ice-100 to-brand-ice-50',
                      'ring-1 ring-brand-ice-200',
                      'transition-all duration-500',
                      'group-hover:from-brand-red-500 group-hover:to-brand-red-600',
                      'group-hover:ring-brand-red-400 group-hover:shadow-glow-red',
                    )}
                  >
                    <Icon
                      className={cn(
                        'h-9 w-9 text-brand-navy-700 transition-colors duration-500',
                        'group-hover:text-white',
                      )}
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="mb-2 text-lg font-bold text-brand-navy-900">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="max-w-xs text-sm leading-relaxed text-slate-600">
                  {value.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── Tagline Banner ── */}
        <motion.div
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={viewport}
          transition={{ ...fadeInUp.transition, delay: 0.3 }}
          className="mt-20 lg:mt-28"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-navy-900 to-brand-navy-700 p-12 lg:p-16">
            {/* Decorative quote */}
            <Quote
              className="absolute left-6 top-6 h-16 w-16 text-brand-red-500/40 lg:left-10 lg:top-8 lg:h-20 lg:w-20"
              strokeWidth={1}
            />

            {/* Text */}
            <p className="relative z-10 text-center font-display text-3xl uppercase leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="text-white">Cuidamos tu producto </span>
              <span className="text-brand-red-500">como t&uacute; lo har&iacute;as</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
