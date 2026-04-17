import { motion } from 'framer-motion';
import { ArrowRight, Snowflake, ChevronDown } from 'lucide-react';
import { useBrand } from '../../context/BrandContext';
import { cn } from '../../lib/utils';
import { useCountUp } from '../../hooks/useCountUp';
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  staggerItem,
  scaleIn,
  viewport,
} from '../../lib/animations';

/* ── Single stat display ── */
function StatItem({ stat }) {
  const { count, ref } = useCountUp(stat.isStatic ? 0 : stat.value, 2000);

  return (
    <div ref={ref} className="flex flex-col items-center text-center lg:items-start lg:text-left">
      <span className="font-display text-3xl text-white sm:text-4xl lg:text-5xl">
        {stat.isStatic ? stat.staticValue : (
          <>{count.toLocaleString()}{stat.suffix}</>
        )}
      </span>
      <span className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400 sm:text-sm">
        {stat.isStatic ? stat.sublabel : stat.label}
      </span>
    </div>
  );
}

/* ── Floating card (dynamic per brand) ── */
function FloatingCard({ card }) {
  const Icon = card.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
      className="absolute -bottom-4 -left-4 z-20 sm:bottom-6 sm:-left-6"
    >
      <div className="relative flex items-center gap-3 rounded-2xl border border-white/10 bg-brand-navy-800/90 px-5 py-4 shadow-2xl backdrop-blur-xl">
        {/* Pulse rings */}
        <span className="absolute -left-1.5 -top-1.5 h-3 w-3">
          <span className="absolute inset-0 animate-pulse-ring rounded-full bg-brand-ice-400/60" />
          <span className="absolute inset-0 rounded-full bg-brand-ice-400" />
        </span>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-ice-400/15">
          <Icon className="h-5 w-5 text-brand-ice-400" />
        </div>
        <div>
          <p className="font-display text-2xl tracking-tight text-white">{card.value}</p>
          <p className="text-[11px] font-medium uppercase tracking-wider text-brand-ice-400/80">
            {card.label}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Main Hero Component ── */
export default function Hero() {
  const { brand } = useBrand();
  const HeroIcon = brand.heroIcon || Snowflake;

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  /* Title words – dynamic based on active brand */
  const titleLine1 = brand.id === 'frigorifico' ? 'FRIGORÍFICO' : 'SANTANDER';
  const titleLine2 = brand.id === 'frigorifico' ? 'SANTANDER' : 'LOGÍSTICA TERRESTRE';

  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] overflow-hidden bg-[radial-gradient(ellipse_at_top_left,var(--color-brand-navy-700)_0%,var(--color-brand-navy-800)_40%,var(--color-brand-navy-900)_100%)]"
    >
      {/* ── Subtle background texture ── */}
      <div className="pointer-events-none absolute inset-0">
        {/* Grid dots */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        {/* Glow orbs */}
        <div className="absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-brand-red-500/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-brand-ice-400/5 blur-3xl" />
      </div>

      {/* ── Content wrapper ── */}
      <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-10 px-5 pb-20 pt-28 lg:grid lg:grid-cols-[55fr_45fr] lg:gap-16 lg:px-8 lg:pb-24 lg:pt-36">
        {/* ════════════ LEFT COLUMN ════════════ */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          {/* Badge */}
          <motion.div
            variants={staggerItem}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-brand-ice-400/30 bg-brand-ice-400/10 px-4 py-2 text-sm font-medium text-brand-ice-300"
          >
            <HeroIcon className="h-4 w-4 animate-spin-slow text-brand-ice-400" />
            <span>{brand.tagline}</span>
          </motion.div>

          {/* Title — sr-only h1 for screen readers, aria-hidden visual */}
          <h1 className="sr-only">{titleLine1} {titleLine2}</h1>
          <div className="mb-6 overflow-hidden" aria-hidden="true">
            <div
              className="font-display text-6xl leading-[0.9] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl"
            >
              {/* Line 1 */}
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="block text-white"
                >
                  {titleLine1}
                </motion.span>
              </span>
              {/* Line 2 */}
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="block text-brand-red-500"
                >
                  {titleLine2}
                </motion.span>
              </span>
            </div>
          </div>

          {/* Animated red line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 h-1 rounded-full bg-brand-red-500"
          />

          {/* Slogan */}
          <motion.p
            variants={staggerItem}
            className="mb-8 max-w-md text-lg italic text-slate-300 sm:text-xl"
          >
            {brand.slogan}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={staggerItem}
            className="flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            {/* Primary CTA */}
            <button
              onClick={() => handleScroll('contacto')}
              className="group flex items-center gap-2 rounded-full bg-brand-red-500 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-brand-red-500/30 transition-all duration-300 hover:bg-brand-red-600 hover:shadow-brand-red-500/50 hover:scale-[1.03] active:scale-[0.97]"
            >
              Solicitar Cotización
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>

            {/* Secondary CTA */}
            <button
              onClick={() => handleScroll('servicios')}
              className="group flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:border-white/50 hover:bg-white/5 active:scale-[0.97]"
            >
              Nuestros Servicios
            </button>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            variants={staggerItem}
            className="mt-12 grid w-full grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:gap-8 lg:grid-cols-4"
          >
            {brand.stats.map((stat, i) => (
              <div key={stat.label} className="relative flex flex-col">
                {/* Vertical separator (desktop only, not first) */}
                {i > 0 && (
                  <span className="absolute -left-3 top-1 hidden h-10 w-px bg-white/10 sm:-left-4 lg:block" />
                )}
                <StatItem stat={stat} index={i} total={brand.stats.length} />
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ════════════ RIGHT COLUMN ════════════ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-md lg:max-w-none"
        >
          {/* Image container */}
          <div className="relative">
            <div className="animate-float relative aspect-[4/5] w-full overflow-hidden rounded-3xl ring-1 ring-white/10">
              <img
                src={brand.heroImage}
                alt={brand.heroImageAlt}
                className="h-[115%] w-full object-cover object-top"
                loading="eager"
              />
              {/* Overlay gradients (also covers watermark in bottom-right) */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-900/80 via-brand-navy-900/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-tl from-brand-navy-900/60 via-transparent to-transparent" />
            </div>

            {/* Floating card (dynamic per brand) */}
            <FloatingCard card={brand.floatingCard} />

            {/* Decorative ring behind image */}
            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] border border-white/5" />
          </div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute inset-x-0 bottom-6 flex justify-center"
      >
        <a
          href="#nosotros"
          aria-label="Desplazar hacia abajo"
          className="flex flex-col items-center gap-1 text-white/40 transition-colors hover:text-white/70"
        >
          <span className="text-[11px] font-medium uppercase tracking-widest">Descubrir</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
