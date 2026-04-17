import { useBrand } from '../context/BrandContext';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const { brand } = useBrand();

  return (
    <footer className="bg-[#020018] text-white">
      <div className="section-line" />
      <div className="max-w-[1080px] mx-auto px-5 sm:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8">
          {/* Brand */}
          <div>
            <div className="bg-white rounded-lg px-3 py-1.5 inline-block mb-5">
              <img src={brand.logo} alt={brand.name} className="h-8 w-auto object-contain" />
            </div>
            <p className="text-white/25 text-[13px] leading-[1.8] font-opensans">
              {brand.tagline}. Más de 15 años de experiencia garantizando la calidad y seguridad de tus productos.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className={`font-bold text-[13px] mb-5 tracking-wide ${brand.font}`}>Enlaces</h4>
            <ul className="space-y-2.5">
              {['Inicio', 'Nosotros', 'Servicios', 'Valores', 'Contacto'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`}
                    className="text-white/30 hover:text-rojo transition-colors text-[13px] flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-white/15 group-hover:bg-rojo transition-colors" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className={`font-bold text-[13px] mb-5 tracking-wide ${brand.font}`}>Servicios</h4>
            <ul className="space-y-2.5">
              {brand.services.slice(0, 5).map((s) => (
                <li key={s.title} className="text-white/30 text-[13px] flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-white/10" />
                  {s.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className={`font-bold text-[13px] mb-5 tracking-wide ${brand.font}`}>Contacto</h4>
            <div className="space-y-3">
              {[
                { Icon: MapPin, text: 'Guadalajara, Jalisco, México' },
                { Icon: Phone, text: '+52 (33) 1234-5678' },
                { Icon: Mail, text: 'contacto@frigorificosantander.mx' },
              ].map(({ Icon, text }) => (
                <div key={text} className="flex items-start gap-2.5">
                  <Icon className="w-3.5 h-3.5 text-rojo/70 mt-0.5 shrink-0" />
                  <span className="text-white/30 text-[13px]">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/15 text-[12px]">&copy; {new Date().getFullYear()} {brand.name}. Todos los derechos reservados.</p>
          <p className="text-white/10 text-[11px]">Guadalajara, Jalisco, México</p>
        </div>
      </div>
    </footer>
  );
}
