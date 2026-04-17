import { useBrand } from '../context/BrandContext';
import { useReveal } from '../hooks/useScrollReveal';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const contactInfo = [
  { icon: MapPin, label: 'Ubicación', value: 'Guadalajara, Jalisco, México' },
  { icon: Phone, label: 'Teléfono', value: '+52 (33) 1234-5678' },
  { icon: Mail, label: 'Email', value: 'contacto@frigorificosantander.mx' },
  { icon: Clock, label: 'Horario', value: 'Lun - Sáb: 8:00 AM - 6:00 PM' },
];

export default function Contact() {
  const { brand } = useBrand();
  const ref = useReveal();

  return (
    <section id="contacto" className="py-24 sm:py-32 bg-white" ref={ref}>
      <div className="max-w-[1080px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="fade-in text-center mb-16">
          <span className="text-rojo font-bold text-[11px] tracking-[3px] uppercase">Hablemos</span>
          <h2 className={`text-[32px] sm:text-[40px] lg:text-[48px] font-black text-navy mt-3 mb-4 leading-tight ${brand.font}`}>
            Contáctanos
          </h2>
          <div className="w-12 h-[3px] bg-rojo mx-auto rounded-full mb-5" />
          <p className="text-gris/50 max-w-[440px] mx-auto text-[14px] font-opensans leading-relaxed">
            Estamos listos para atenderte. Cuéntanos sobre tu proyecto y te ofreceremos la mejor solución.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 sm:gap-6">
          {/* Info */}
          <div className="fade-in fade-in-delay-1 lg:col-span-2">
            <div className="bg-gradient-to-br from-navy to-[#0d0080] rounded-2xl p-7 sm:p-8 text-white h-full">
              <h3 className={`text-[18px] font-bold mb-7 ${brand.font}`}>Información de Contacto</h3>
              <div className="space-y-5">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-3.5">
                      <div className="w-10 h-10 shrink-0 rounded-lg bg-white/[0.06] flex items-center justify-center">
                        <Icon className="w-4 h-4 text-rojo" />
                      </div>
                      <div className="min-w-0 pt-0.5">
                        <p className="text-white/30 text-[11px] uppercase tracking-wide font-semibold">{item.label}</p>
                        <p className="font-semibold text-[14px] mt-0.5 break-words">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="fade-in fade-in-delay-2 lg:col-span-3">
            <form onSubmit={(e) => e.preventDefault()} className="bg-[#fafafa] rounded-2xl p-7 sm:p-8 border border-gray-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[11px] font-bold text-navy/70 uppercase tracking-wide mb-2">Nombre</label>
                  <input type="text" placeholder="Tu nombre"
                    className="w-full px-4 py-3 bg-white border border-gray-200/80 rounded-lg focus:outline-none focus:border-rojo focus:ring-2 focus:ring-rojo/10 transition-all text-[14px] text-gris placeholder:text-gray-300" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-navy/70 uppercase tracking-wide mb-2">Empresa</label>
                  <input type="text" placeholder="Tu empresa"
                    className="w-full px-4 py-3 bg-white border border-gray-200/80 rounded-lg focus:outline-none focus:border-rojo focus:ring-2 focus:ring-rojo/10 transition-all text-[14px] text-gris placeholder:text-gray-300" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[11px] font-bold text-navy/70 uppercase tracking-wide mb-2">Email</label>
                  <input type="email" placeholder="tu@email.com"
                    className="w-full px-4 py-3 bg-white border border-gray-200/80 rounded-lg focus:outline-none focus:border-rojo focus:ring-2 focus:ring-rojo/10 transition-all text-[14px] text-gris placeholder:text-gray-300" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-navy/70 uppercase tracking-wide mb-2">Teléfono</label>
                  <input type="tel" placeholder="+52 (33) ..."
                    className="w-full px-4 py-3 bg-white border border-gray-200/80 rounded-lg focus:outline-none focus:border-rojo focus:ring-2 focus:ring-rojo/10 transition-all text-[14px] text-gris placeholder:text-gray-300" />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-[11px] font-bold text-navy/70 uppercase tracking-wide mb-2">Servicio de interés</label>
                <select className="w-full px-4 py-3 bg-white border border-gray-200/80 rounded-lg focus:outline-none focus:border-rojo focus:ring-2 focus:ring-rojo/10 transition-all text-[14px] text-gris cursor-pointer">
                  <option value="">Selecciona un servicio</option>
                  {brand.services.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-[11px] font-bold text-navy/70 uppercase tracking-wide mb-2">Mensaje</label>
                <textarea rows="4" placeholder="Cuéntanos sobre tu proyecto..."
                  className="w-full px-4 py-3 bg-white border border-gray-200/80 rounded-lg focus:outline-none focus:border-rojo focus:ring-2 focus:ring-rojo/10 transition-all text-[14px] text-gris resize-none placeholder:text-gray-300" />
              </div>
              <button type="submit"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3 bg-rojo text-white text-[13px] font-bold tracking-wide uppercase rounded-lg hover:bg-red-600 shadow-[0_4px_16px_rgba(236,50,55,0.3)] hover:shadow-[0_6px_24px_rgba(236,50,55,0.45)] transition-all duration-400 cursor-pointer">
                <Send className="w-3.5 h-3.5" />
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
