import { motion } from 'framer-motion';
import {
  Target,
  Eye,
  IceCreamBowl,
  FlaskConical,
  Beef,
  Pill,
  UtensilsCrossed,
  Croissant,
  ShoppingBag,
  Apple,
} from 'lucide-react';
import { useBrand } from '../../context/BrandContext';
import { cn } from '../../lib/utils';
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  scaleIn,
  viewport,
} from '../../lib/animations';

/* ---- industry icon map ---- */
const industryIconMap = {
  Helados: IceCreamBowl,
  Concentrados: FlaskConical,
  Cárnica: Beef,
  Farmacéutica: Pill,
  Restaurantera: UtensilsCrossed,
  Panadera: Croissant,
  Alimentaria: Apple,
  'Comercio Especializado': ShoppingBag,
};

function getIndustryIcon(name) {
  return industryIconMap[name] || FlaskConical;
}

export default function About() {
  const { brand } = useBrand();

  return (
    <section
      id="nosotros"
      className="relative bg-white py-24 lg:py-32 overflow-hidden"
    >
      {/* subtle dot pattern */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(11,30,63,0.03) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ========== TOP: 12-col grid ========== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* ---------- LEFT column (5 cols) ---------- */}
          <motion.div
            className="lg:col-span-5 space-y-8"
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            variants={staggerContainer}
          >
            {/* eyebrow */}
            <motion.span
              variants={staggerItem}
              className="inline-block text-sm font-semibold uppercase tracking-wider text-brand-red-500"
            >
              Quiénes Somos
            </motion.span>

            {/* heading */}
            <motion.h2
              variants={staggerItem}
              className="font-display text-4xl sm:text-5xl text-brand-navy-900 leading-[1.1]"
            >
              {brand.name}
            </motion.h2>

            {/* description */}
            <motion.p
              variants={staggerItem}
              className="text-base sm:text-lg leading-relaxed text-slate-600"
            >
              {brand.description}
            </motion.p>

            {/* mission / vision cards */}
            <motion.div
              variants={staggerItem}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {/* Mision */}
              <div className="group rounded-2xl border-l-4 border-brand-red-500 bg-brand-navy-50 p-5 transition-shadow duration-300 hover:shadow-card-hover">
                <div className="mb-3 flex items-center gap-2 text-brand-navy-900">
                  <Target className="h-5 w-5 text-brand-red-500" />
                  <span className="text-sm font-bold uppercase tracking-wide">
                    Misión
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-slate-600">
                  {brand.mision}
                </p>
              </div>

              {/* Vision */}
              <div className="group rounded-2xl border-l-4 border-brand-ice-500 bg-brand-ice-50 p-5 transition-shadow duration-300 hover:shadow-card-hover">
                <div className="mb-3 flex items-center gap-2 text-brand-navy-900">
                  <Eye className="h-5 w-5 text-brand-ice-500" />
                  <span className="text-sm font-bold uppercase tracking-wide">
                    Visión
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-slate-600">
                  {brand.vision}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* ---------- GAP column ---------- */}
          <div className="hidden lg:block lg:col-span-2" />

          {/* ---------- RIGHT column (5 cols) ---------- */}
          <motion.div
            className="lg:col-span-5"
            {...scaleIn}
            whileInView="animate"
            initial="initial"
            viewport={viewport}
          >
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src={brand.aboutImage}
                alt={brand.heroImageAlt}
                className="w-full object-cover aspect-[4/3]"
              />
              {/* Gradient to cover watermark */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />

              {/* stat overlay card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 rounded-2xl bg-white/95 px-6 py-4 shadow-card-hover backdrop-blur-sm">
                <p className="font-display text-3xl text-brand-navy-900">
                  +15
                </p>
                <p className="text-sm font-medium text-slate-600">
                  años cuidando la cadena de frío
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ========== BOTTOM: Industries ========== */}
        <motion.div
          className="mt-24 lg:mt-32"
          initial="initial"
          whileInView="animate"
          viewport={viewport}
          variants={staggerContainer}
        >
          <motion.div variants={staggerItem} className="mb-12 text-center">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-brand-red-500">
              Sectores
            </span>
            <h3 className="mt-3 font-display text-3xl sm:text-4xl text-brand-navy-900">
              Industrias que Atendemos
            </h3>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6"
            variants={staggerContainer}
          >
            {brand.industries.map((industry, i) => {
              const Icon = getIndustryIcon(industry);
              return (
                <motion.div
                  key={industry}
                  variants={staggerItem}
                  className={cn(
                    'group relative flex flex-col items-center justify-center',
                    'aspect-square rounded-2xl border border-slate-200 bg-white p-4',
                    'cursor-default transition-all duration-300',
                    'hover:scale-[1.03] hover:shadow-card-hover hover:border-transparent'
                  )}
                >
                  {/* hover bg overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-navy-800 to-brand-navy-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <Icon className="h-10 w-10 text-brand-navy-700 transition-colors duration-300 group-hover:text-white" />
                    <span className="text-sm font-semibold text-brand-navy-900 text-center transition-colors duration-300 group-hover:text-white">
                      {industry}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
