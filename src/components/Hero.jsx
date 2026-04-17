import { useBrand } from '../context/BrandContext';
import { ChevronDown, ArrowRight } from 'lucide-react';

export default function Hero() {
  const { brand, activeBrand } = useBrand();
  const Icon = brand.heroIcon;

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* BG layers */}
      <div className="absolute inset-0 bg-[#030024]" />
      <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-[#060040] to-azul/60" />
      <div className="absolute inset-0 hero-pattern" />
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      {/* Accent orbs */}
      <div className="absolute top-[15%] left-[10%] w-[400px] h-[400px] bg-azul/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[15%] w-[350px] h-[350px] bg-rojo/[0.06] rounded-full blur-[130px] pointer-events-none" />

      {/* Content */}
      <div key={activeBrand} className="relative z-10 w-full max-w-[960px] mx-auto px-5 sm:px-8 text-center pt-24 pb-28">
        {/* Logo */}
        <div className="hero-scale flex justify-center mb-8" style={{ animationDelay: '0.1s' }}>
          <div className="bg-white rounded-2xl px-6 py-4 sm:px-8 sm:py-5 shadow-[0_8px_40px_rgba(0,0,0,0.3)]">
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-16 sm:h-24 md:h-32 w-auto object-contain"
            />
          </div>
        </div>

        {/* Badge */}
        <div className="hero-enter flex justify-center mb-7" style={{ animationDelay: '0.3s' }}>
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] backdrop-blur-md">
            <Icon className="w-3.5 h-3.5 text-rojo" />
            <span className="text-white/70 text-[12px] sm:text-[13px] font-medium tracking-wide">{brand.tagline}</span>
          </div>
        </div>

        {/* Title */}
        <h1 className={`hero-enter text-[40px] sm:text-[56px] md:text-[72px] lg:text-[88px] font-black text-white leading-[0.95] tracking-tight mb-5 ${brand.font}`}
            style={{ animationDelay: '0.4s' }}>
          {activeBrand === 'frigorifico' ? (
            <>FRIGORÍFICO<br /><span className="text-rojo">SANTANDER</span></>
          ) : (
            <>SANTANDER<br /><span className="text-rojo">LOGÍSTICA TERRESTRE</span></>
          )}
        </h1>

        {/* Line */}
        <div className="flex justify-center mb-6">
          <div className="hero-line w-16 h-[3px] bg-rojo rounded-full" style={{ animationDelay: '0.6s' }} />
        </div>

        {/* Slogan */}
        <p className="hero-enter text-[16px] sm:text-[18px] md:text-[20px] text-white/45 font-light italic max-w-md mx-auto mb-12 font-opensans leading-relaxed"
           style={{ animationDelay: '0.7s' }}>
          &ldquo;{brand.slogan}&rdquo;
        </p>

        {/* Stats */}
        <div className="hero-enter grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-[640px] mx-auto mb-12" style={{ animationDelay: '0.8s' }}>
          {brand.stats.map((stat) => (
            <div key={stat.label} className="glass-card rounded-xl px-3 py-4 text-center group hover:bg-white/[0.08] transition-all duration-500">
              <div className={`text-[24px] sm:text-[28px] font-black text-white leading-none ${brand.font}`}>{stat.number}</div>
              <div className="text-white/30 text-[10px] sm:text-[11px] mt-1.5 font-medium tracking-wide uppercase">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="hero-enter flex flex-col sm:flex-row gap-3 justify-center" style={{ animationDelay: '1s' }}>
          <a href="#contacto"
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-rojo text-white text-[13px] font-bold tracking-wide uppercase rounded-lg hover:bg-red-600 shadow-[0_4px_20px_rgba(236,50,55,0.35)] hover:shadow-[0_8px_30px_rgba(236,50,55,0.5)] transition-all duration-400">
            Contáctanos
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a href="#servicios"
            className="inline-flex items-center justify-center px-7 py-3.5 text-white/70 text-[13px] font-bold tracking-wide uppercase rounded-lg border border-white/15 hover:border-white/30 hover:text-white hover:bg-white/[0.04] transition-all duration-400">
            Nuestros Servicios
          </a>
        </div>
      </div>

      {/* Scroll */}
      <a href="#nosotros" className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10" style={{ animation: 'float 3s ease-in-out infinite' }}>
        <ChevronDown className="w-5 h-5 text-white/20" />
      </a>
    </section>
  );
}
