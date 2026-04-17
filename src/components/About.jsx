import { useBrand } from '../context/BrandContext';
import { useReveal } from '../hooks/useScrollReveal';
import { Eye, Target, Building2 } from 'lucide-react';

export default function About() {
  const { brand } = useBrand();
  const ref = useReveal();

  return (
    <section id="nosotros" className="py-24 sm:py-32 bg-white" ref={ref}>
      <div className="max-w-[1080px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="fade-in text-center mb-16">
          <span className="text-rojo font-bold text-[11px] tracking-[3px] uppercase">Quiénes Somos</span>
          <h2 className={`text-[32px] sm:text-[40px] lg:text-[48px] font-black text-navy mt-3 mb-4 leading-tight ${brand.font}`}>
            {brand.name}
          </h2>
          <div className="w-12 h-[3px] bg-rojo mx-auto rounded-full" />
        </div>

        {/* Description */}
        <div className="fade-in fade-in-delay-1 max-w-[680px] mx-auto text-center mb-16">
          <p className="text-[15px] sm:text-[16px] text-gris/65 leading-[1.8] font-opensans">
            {brand.description}
          </p>
        </div>

        {/* Vision & Mision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          <div className="fade-in fade-in-delay-2 card-hover bg-gradient-to-br from-navy to-[#0d0080] p-8 sm:p-10 rounded-2xl text-white">
            <div className="w-12 h-12 bg-white/[0.08] rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-5 h-5 text-rojo" />
            </div>
            <h3 className={`text-[22px] font-bold mb-3 ${brand.font}`}>Visión</h3>
            <p className="text-white/55 leading-[1.7] text-[14px] font-opensans">{brand.vision}</p>
          </div>

          <div className="fade-in fade-in-delay-3 card-hover bg-gradient-to-br from-rojo to-[#c4262a] p-8 sm:p-10 rounded-2xl text-white">
            <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-5 h-5 text-white" />
            </div>
            <h3 className={`text-[22px] font-bold mb-3 ${brand.font}`}>Misión</h3>
            <p className="text-white/60 leading-[1.7] text-[14px] font-opensans">{brand.mision}</p>
          </div>
        </div>

        {/* Industries */}
        <div className="fade-in fade-in-delay-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Building2 className="w-4 h-4 text-rojo" />
            <h3 className={`text-[16px] font-bold text-navy ${brand.font}`}>Industrias que Atendemos</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {brand.industries.map((industry) => (
              <span key={industry}
                className="px-5 py-2 bg-navy/[0.03] text-navy/80 font-semibold rounded-full text-[13px] border border-navy/[0.06] hover:bg-navy hover:text-white hover:border-navy transition-all duration-400 cursor-default">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
