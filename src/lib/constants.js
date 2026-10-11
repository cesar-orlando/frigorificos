export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '523323429292';
export const getWhatsAppUrl = (brandName) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hola ${brandName}, me interesa conocer sus servicios.`)}`;

export const INSTAGRAM_URL = 'https://www.instagram.com/frigorificossantander/';
export const MAPS_URL = 'https://maps.app.goo.gl/8XyQ6hQh6MEFbJET8';
export const MAPS_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1866.4!2d-103.3120875!3d20.686499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b175fbbb1cf5%3A0x1b5aa96cef6cbd22!2sFrigor%C3%ADfico%20Santander!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx';

export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
};

export const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Valores', href: '#valores' },
  { label: 'Contacto', href: '#contacto' },
];

export const getContactInfo = (brand) => [
  { type: 'location', label: 'Ubicación', value: 'Guadalajara, Jalisco, México', href: MAPS_URL, external: true },
  { type: 'phone', label: 'Teléfono', value: '+52 (33) 2342\u20119292', href: 'tel:+523323429292' },
  { type: 'hours', label: 'Horario', value: 'Lun - Sáb: 8:00 AM - 6:00 PM' },
  { type: 'email', label: 'Email', value: brand.email, href: `mailto:${brand.email}` },
];
