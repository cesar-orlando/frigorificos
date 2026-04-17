import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useBrand } from '../../context/BrandContext';
import { cn } from '../../lib/utils';
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  scaleIn,
  viewport,
} from '../../lib/animations';

export default function Services() {
  const { brand } = useBrand();

  return (
    <section
      id="servicios"
      className="relative bg-brand-navy-50 py-24 lg:py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ========== HEADER ========== */}
        <motion.div
          className="mx-auto mb-16 max-w-2xl text-center"
          initial="initial"
          whileInView="animate"
          viewport={viewport}
          variants={staggerContainer}
        >
          <motion.span
            variants={staggerItem}
            className="inline-block text-sm font-semibold uppercase tracking-wider text-brand-red-500"
          >
            Lo que hacemos
          </motion.span>

          <motion.h2
            variants={staggerItem}
            className="mt-3 font-display text-4xl sm:text-5xl text-brand-navy-900 leading-[1.1]"
          >
            Nuestros Servicios
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="mt-4 text-lg text-slate-600"
          >
            Soluciones integrales diseñadas para proteger la calidad de tu
            producto en cada etapa de la cadena.
          </motion.p>
        </motion.div>

        {/* ========== SERVICE CARDS GRID ========== */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="initial"
          whileInView="animate"
          viewport={viewport}
          variants={staggerContainer}
        >
          {brand.services.map((service, i) => {
            const Icon = service.icon;
            const number = String(i + 1).padStart(2, '0');

            return (
              <motion.div
                key={service.title}
                variants={staggerItem}
                className={cn(
                  'group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8',
                  'transition-all duration-300',
                  'hover:-translate-y-2 hover:border-brand-red-200 hover:shadow-card-hover'
                )}
              >
                {/* decorative number */}
                <span
                  className={cn(
                    'pointer-events-none absolute -top-4 -right-2 select-none font-display text-[120px] leading-none',
                    'text-brand-navy-50 transition-colors duration-300',
                    'group-hover:text-brand-red-50'
                  )}
                  aria-hidden="true"
                >
                  {number}
                </span>

                {/* icon box */}
                <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-navy-800 to-brand-navy-600 shadow-lg">
                  <Icon className="h-7 w-7 text-white" />
                </div>

                {/* title */}
                <h3 className="relative z-10 mb-2 text-xl font-bold text-brand-navy-900">
                  {service.title}
                </h3>

                {/* description */}
                <p className="relative z-10 mb-6 text-sm leading-relaxed text-slate-600">
                  {service.desc}
                </p>

                {/* hidden CTA */}
                <div className="relative z-10 flex items-center gap-1.5 text-sm font-semibold text-brand-red-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span>Conocer más</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ========== CTA CARD ========== */}
        <motion.div
          className="mt-16"
          {...fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={viewport}
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-navy-800 to-brand-navy-900 px-8 py-12 sm:px-12 sm:py-16 text-center">
            {/* subtle glow */}
            <div className="pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-full bg-brand-red-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-brand-ice-500/10 blur-3xl" />

            <h3 className="relative z-10 font-display text-3xl sm:text-4xl text-white leading-tight">
              ¿Necesitas una solución a medida?
            </h3>
            <p className="relative z-10 mx-auto mt-4 max-w-xl text-base sm:text-lg text-brand-navy-200">
              Nuestro equipo de expertos diseña estrategias personalizadas para
              cada cliente. Cuéntanos tu reto y encontremos la mejor solución
              juntos.
            </p>
            <a
              href="#contacto"
              className={cn(
                'relative z-10 mt-8 inline-flex items-center gap-2 rounded-full',
                'bg-brand-red-500 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white',
                'transition-all duration-300 hover:bg-brand-red-600 hover:shadow-glow-red',
                'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red-400'
              )}
            >
              Hablemos
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
