import { useBrand } from '../context/BrandContext';
import { useReveal } from '../hooks/useScrollReveal';

export default function Values() {
  const { brand } = useBrand();
  const ref = useReveal();

  return (
    <section id="valores" className="py-24 sm:py-32 bg-[#030024] relative overflow-hidden" ref={ref}>
      {/* Ambient */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[20%] left-[15%] w-[500px] h-[500px] bg-azul/[0.08] rounded-full blur-[160px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-rojo/[0.05] rounded-full blur-[140px]" />
      </div>
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

      <div className="relative z-10 max-w-[1080px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="fade-in text-center mb-16">
          <span className="text-rojo font-bold text-[11px] tracking-[3px] uppercase">Lo que nos define</span>
          <h2 className={`text-[32px] sm:text-[40px] lg:text-[48px] font-black text-white mt-3 mb-4 leading-tight ${brand.font}`}>
            Valores de Marca
          </h2>
          <div className="w-12 h-[3px] bg-rojo mx-auto rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {brand.values.map((value, i) => {
            const Icon = value.icon;
            return (
              <div key={value.title} className={`fade-in fade-in-delay-${Math.min(i + 1, 4)}`}>
                <div className="glass-card rounded-2xl p-6 text-center group hover:bg-white/[0.06] transition-all duration-500 h-full">
                  <div className="w-14 h-14 rounded-xl bg-rojo/10 group-hover:bg-rojo/20 flex items-center justify-center mx-auto mb-5 transition-all duration-500">
                    <Icon className="w-6 h-6 text-rojo" />
                  </div>
                  <h3 className={`text-[16px] font-bold text-white mb-2 ${brand.font}`}>{value.title}</h3>
                  <p className="text-white/35 text-[13px] leading-[1.7] font-opensans">{value.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Slogan */}
        <div className="fade-in fade-in-delay-4 mt-16 text-center">
          <div className="inline-block glass-card rounded-2xl px-10 py-7">
            <p className={`text-[20px] sm:text-[24px] lg:text-[28px] font-bold text-white/90 italic ${brand.font}`}>
              &ldquo;{brand.slogan}&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
