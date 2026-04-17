import { motion } from 'framer-motion';
import { Globe, MessageSquare, ExternalLink } from 'lucide-react';
import { useBrand } from '../../context/BrandContext';
import { cn } from '../../lib/utils';
import { fadeInUp, staggerContainer, staggerItem, viewport } from '../../lib/animations';
import { NAV_LINKS, CONTACT_INFO } from '../../lib/constants';

const socialLinks = [
  { icon: Globe, label: 'LinkedIn', href: '#' },          // TODO: URL real
  { icon: MessageSquare, label: 'Facebook', href: '#' },  // TODO: URL real
  { icon: ExternalLink, label: 'Instagram', href: '#' },  // TODO: URL real
];

export default function Footer() {
  const { brand } = useBrand();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy-950">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* ── Main Grid ── */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewport}
          variants={staggerContainer}
          className="grid gap-12 border-b border-slate-800 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:py-20"
        >
          {/* ── Col 1: Brand (spans 2 on md) ── */}
          <motion.div variants={staggerItem} className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <a href="#inicio" aria-label={brand.name} className="mb-6 inline-block">
              <div className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-3 shadow-md">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-10 w-auto object-contain sm:h-12"
                />
              </div>
            </a>

            {/* Tagline */}
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-white/30">
              {brand.tagline}
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={cn(
                      'flex h-10 w-10 items-center justify-center rounded-full',
                      'border border-slate-700 text-white/60',
                      'transition-all duration-300',
                      'hover:border-brand-red-500 hover:bg-brand-red-500/10 hover:text-brand-red-400 hover:shadow-glow-red',
                    )}
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.5} />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* ── Col 2: Navigation ── */}
          <motion.div variants={staggerItem}>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              Navegaci&oacute;n
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/30 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Col 3: Services ── */}
          <motion.div variants={staggerItem}>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              Servicios
            </h4>
            <ul className="space-y-3">
              {brand.services.map((svc) => (
                <li key={svc.title}>
                  <a
                    href="#servicios"
                    className="text-sm text-white/30 transition-colors duration-200 hover:text-white"
                  >
                    {svc.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Col 4: Contact ── */}
          <motion.div variants={staggerItem}>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              Contacto
            </h4>
            <ul className="space-y-4">
              {CONTACT_INFO.map((item) => (
                <li key={item.type}>
                  <span className="mb-0.5 block text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-white/30 transition-colors duration-200 hover:text-white"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-sm text-white/30">{item.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* ── Bottom Bar ── */}
        <motion.div
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={viewport}
          transition={fadeInUp.transition}
          className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row"
        >
          <p className="text-xs text-white/30">
            &copy; {currentYear} {brand.name}. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-white/30 transition-colors duration-200 hover:text-white"
            >
              Aviso de Privacidad
            </a>
            <a
              href="#"
              className="text-xs text-white/30 transition-colors duration-200 hover:text-white"
            >
              T&eacute;rminos
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
