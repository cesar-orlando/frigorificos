import { useBrand } from '../context/BrandContext';
import { useReveal } from '../hooks/useScrollReveal';

export default function Services() {
  const { brand } = useBrand();
  const ref = useReveal();

  return (
    <section id="servicios" className="py-24 sm:py-32 bg-[#fafafa]" ref={ref}>
      <div className="max-w-[1080px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="fade-in text-center mb-16">
          <span className="text-rojo font-bold text-[11px] tracking-[3px] uppercase">Lo que hacemos</span>
          <h2 className={`text-[32px] sm:text-[40px] lg:text-[48px] font-black text-navy mt-3 mb-4 leading-tight ${brand.font}`}>
            Nuestros Servicios
          </h2>
          <div className="w-12 h-[3px] bg-rojo mx-auto rounded-full mb-5" />
          <p className="text-gris/50 max-w-[480px] mx-auto text-[14px] font-opensans leading-relaxed">
            Soluciones integrales diseñadas para garantizar la seguridad y calidad de tus productos
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {brand.services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className={`fade-in fade-in-delay-${Math.min(i + 1, 4)}`}>
                <div className="group card-hover bg-white p-6 rounded-2xl border border-gray-100/80 h-full relative overflow-hidden">
                  {/* Hover bg */}
                  <div className="absolute inset-0 bg-gradient-to-br from-navy to-azul opacity-0 group-hover:opacity-100 transition-opacity duration-600 rounded-2xl" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-navy/[0.04] group-hover:bg-white/10 flex items-center justify-center transition-all duration-500">
                        <Icon className="w-5 h-5 text-rojo group-hover:text-white transition-colors duration-500" />
                      </div>
                      <span className="text-[40px] font-black text-navy/[0.04] group-hover:text-white/[0.08] transition-colors duration-500 select-none leading-none">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className={`text-[16px] font-bold text-navy group-hover:text-white mb-2 transition-colors duration-500 ${brand.font}`}>
                      {service.title}
                    </h3>
                    <p className="text-gris/50 group-hover:text-white/60 text-[13px] leading-[1.7] transition-colors duration-500 font-opensans">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
