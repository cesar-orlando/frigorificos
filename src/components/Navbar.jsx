import { useState, useEffect } from 'react';
import { Snowflake, Truck, Menu, X } from 'lucide-react';
import { useBrand } from '../context/BrandContext';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Valores', href: '#valores' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const { brand, activeBrand, setActiveBrand } = useBrand();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      scrolled ? 'bg-navy/[0.97] backdrop-blur-2xl shadow-[0_4px_30px_rgba(8,0,85,0.4)]' : 'bg-navy/80 backdrop-blur-md'
    }`}>
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo in white container */}
          <a href="#inicio" className="shrink-0 transition-transform duration-300 hover:scale-[1.02]">
            <div className="bg-white rounded-lg px-3 py-1.5 shadow-md">
              <img src={brand.logo} alt={brand.name} className="h-8 sm:h-9 w-auto object-contain" />
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href}
                className="px-4 py-2 text-[13px] font-semibold text-white/70 hover:text-white tracking-wide uppercase transition-colors duration-300 relative group">
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-rojo rounded-full group-hover:w-[60%] transition-all duration-400" />
              </a>
            ))}
          </div>

          {/* Brand Switcher - Redesigned */}
          <div className="hidden lg:flex">
            <div className="flex items-center bg-navy/60 rounded-xl p-1 border border-white/[0.08] gap-1">
              <button
                onClick={() => setActiveBrand('frigorifico')}
                className={`flex items-center gap-2 px-5 py-2 rounded-lg text-[12px] font-bold tracking-wide uppercase transition-all duration-300 cursor-pointer ${
                  activeBrand === 'frigorifico'
                    ? 'bg-white text-navy shadow-[0_2px_10px_rgba(0,0,0,0.15)]'
                    : 'text-white/40 hover:text-white/70 hover:bg-white/[0.05]'
                }`}
              >
                <Snowflake className="w-3.5 h-3.5" />
                Frigorífico
              </button>
              <button
                onClick={() => setActiveBrand('logistica')}
                className={`flex items-center gap-2 px-5 py-2 rounded-lg text-[12px] font-bold tracking-wide uppercase transition-all duration-300 cursor-pointer ${
                  activeBrand === 'logistica'
                    ? 'bg-white text-navy shadow-[0_2px_10px_rgba(0,0,0,0.15)]'
                    : 'text-white/40 hover:text-white/70 hover:bg-white/[0.05]'
                }`}
              >
                <Truck className="w-3.5 h-3.5" />
                Logística LT
              </button>
            </div>
          </div>

          {/* Mobile */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-white cursor-pointer p-1" aria-label="Menu">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-400 ${mobileOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-navy/[0.98] backdrop-blur-2xl border-t border-white/[0.06] px-5 py-5 space-y-1">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setMobileOpen(false)}
              className="block px-4 py-2.5 text-white/70 hover:text-white hover:bg-white/[0.04] rounded-lg text-sm font-medium transition-all">
              {link.label}
            </a>
          ))}
          <div className="pt-4 grid grid-cols-2 gap-2">
            <button onClick={() => { setActiveBrand('frigorifico'); setMobileOpen(false); }}
              className={`flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold cursor-pointer transition-all ${
                activeBrand === 'frigorifico'
                  ? 'bg-white text-navy shadow-lg'
                  : 'bg-white/[0.06] text-white/40 border border-white/[0.06]'
              }`}>
              <Snowflake className="w-3.5 h-3.5" /> Frigorífico
            </button>
            <button onClick={() => { setActiveBrand('logistica'); setMobileOpen(false); }}
              className={`flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold cursor-pointer transition-all ${
                activeBrand === 'logistica'
                  ? 'bg-white text-navy shadow-lg'
                  : 'bg-white/[0.06] text-white/40 border border-white/[0.06]'
              }`}>
              <Truck className="w-3.5 h-3.5" /> Logística LT
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
