import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import { useBrand } from '../../context/BrandContext';
import { cn } from '../../lib/utils';
import { NAV_LINKS } from '../../lib/constants';
import { useActiveSection } from '../../hooks/useActiveSection';

const SCROLL_THRESHOLD = 60;

const brandOptions = [
  { key: 'frigorifico', label: 'Frigorífico' },
  { key: 'logistica', label: 'Logística LT' },
];

export default function Navbar() {
  const { brand, activeBrand, setActiveBrand } = useBrand();
  const activeSection = useActiveSection();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* ── scroll listener ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── lock body scroll when mobile menu is open ── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const handleCta = useCallback(() => {
    closeMobile();
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  }, [closeMobile]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-brand-navy-900/5'
          : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        {/* ── Logo ── */}
        <a
          href="#inicio"
          aria-label={brand.name}
          className="relative z-10 shrink-0"
        >
          <div className="flex items-center justify-center rounded-xl bg-white px-3 py-2 shadow-md ring-1 ring-brand-navy-100/60">
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-10 w-auto object-contain sm:h-12"
            />
          </div>
        </a>

        {/* ── Desktop links (centered) ── */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    'relative px-4 py-2 text-sm font-semibold uppercase tracking-wider transition-colors duration-300',
                    scrolled
                      ? isActive
                        ? 'text-brand-navy-900'
                        : 'text-brand-navy-700/70 hover:text-brand-navy-900'
                      : isActive
                        ? 'text-white'
                        : 'text-white/70 hover:text-white',
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-brand-red-500"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* ── Right side: switcher + CTA ── */}
        <div className="hidden items-center gap-3 lg:flex">
          {/* Brand Switcher */}
          <BrandSwitcher
            activeBrand={activeBrand}
            setActiveBrand={setActiveBrand}
            scrolled={scrolled}
          />

          {/* CTA */}
          <button
            onClick={handleCta}
            className="group flex items-center gap-2 rounded-full bg-brand-red-500 px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-brand-red-500/25 transition-all duration-300 hover:bg-brand-red-600 hover:shadow-brand-red-500/40 hover:scale-[1.03] active:scale-[0.97]"
          >
            Cotizar
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className={cn(
            'relative z-50 rounded-lg p-2 transition-colors lg:hidden',
            scrolled || mobileOpen
              ? 'text-brand-navy-900 hover:bg-brand-navy-100/50'
              : 'text-white hover:bg-white/10',
          )}
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-brand-navy-950/60 backdrop-blur-sm"
              onClick={closeMobile}
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="absolute right-0 top-0 z-10 flex h-full w-full max-w-sm flex-col bg-white shadow-2xl"
            >
              {/* Close row */}
              <div className="flex items-center justify-between border-b border-brand-navy-100 px-6 py-4">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-10 w-auto"
                />
                <button
                  onClick={closeMobile}
                  className="rounded-lg p-2 text-brand-navy-600 hover:bg-brand-navy-50"
                  aria-label="Cerrar menú"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Links */}
              <motion.ul
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
                }}
                className="flex-1 space-y-1 overflow-y-auto px-4 py-6"
              >
                {NAV_LINKS.map((link) => {
                  const sectionId = link.href.replace('#', '');
                  const isActive = activeSection === sectionId;
                  return (
                    <motion.li
                      key={link.href}
                      variants={{
                        hidden: { opacity: 0, x: 40 },
                        visible: { opacity: 1, x: 0 },
                      }}
                    >
                      <a
                        href={link.href}
                        onClick={closeMobile}
                        className={cn(
                          'flex items-center rounded-xl px-4 py-3 text-base font-semibold uppercase tracking-wider transition-colors',
                          isActive
                            ? 'bg-brand-navy-50 text-brand-navy-900'
                            : 'text-brand-navy-600 hover:bg-brand-navy-50/60 hover:text-brand-navy-900',
                        )}
                      >
                        {isActive && (
                          <span className="mr-3 h-5 w-1 rounded-full bg-brand-red-500" />
                        )}
                        {link.label}
                      </a>
                    </motion.li>
                  );
                })}
              </motion.ul>

              {/* Switcher + CTA */}
              <div className="space-y-4 border-t border-brand-navy-100 px-6 py-5">
                <BrandSwitcher
                  activeBrand={activeBrand}
                  setActiveBrand={setActiveBrand}
                  scrolled
                />
                <button
                  onClick={handleCta}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-red-500 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-brand-red-500/20 transition-all hover:bg-brand-red-600 active:scale-[0.97]"
                >
                  Cotizar
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ── Brand Switcher (segmented control) ── */
function BrandSwitcher({ activeBrand, setActiveBrand, scrolled }) {
  return (
    <div
      className={cn(
        'relative flex items-center rounded-full border p-0.5 text-xs font-semibold',
        scrolled
          ? 'border-brand-navy-200 bg-brand-navy-50/50'
          : 'border-white/20 bg-white/10',
      )}
    >
      {brandOptions.map((opt) => {
        const isActive = activeBrand === opt.key;
        return (
          <button
            key={opt.key}
            onClick={() => setActiveBrand(opt.key)}
            className={cn(
              'relative z-10 rounded-full px-3.5 py-1.5 transition-colors duration-300 whitespace-nowrap',
              isActive
                ? 'text-white'
                : scrolled
                  ? 'text-slate-500 hover:text-brand-navy-700'
                  : 'text-slate-400 hover:text-white',
            )}
          >
            {isActive && (
              <motion.span
                layoutId="brand-pill"
                className="absolute inset-0 rounded-full bg-brand-navy-800"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative">{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}
