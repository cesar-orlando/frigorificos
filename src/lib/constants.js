export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '523312345678';
export const WHATSAPP_MESSAGE = 'Hola Frigorífico Santander, me interesa conocer sus servicios.';

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

export const CONTACT_INFO = [
  { type: 'location', label: 'Ubicación', value: 'Guadalajara, Jalisco, México' }, // TODO: dirección exacta
  { type: 'phone', label: 'Teléfono', value: '+52 (33) 1234-5678', href: 'tel:+523312345678' }, // TODO: teléfono real
  { type: 'email', label: 'Email', value: 'contacto@frigorificosantander.mx', href: 'mailto:contacto@frigorificosantander.mx' }, // TODO: email real
  { type: 'hours', label: 'Horario', value: 'Lun - Sáb: 8:00 AM - 6:00 PM' },
];
