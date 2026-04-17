import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import {
  Send,
  Loader2,
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
} from 'lucide-react';
import { useBrand } from '../../context/BrandContext';
import { cn } from '../../lib/utils';
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  slideInLeft,
  slideInRight,
  viewport,
} from '../../lib/animations';
import {
  CONTACT_INFO,
  WHATSAPP_NUMBER,
  WHATSAPP_MESSAGE,
  EMAILJS_CONFIG,
} from '../../lib/constants';

/* ── Icon map for contact info types ── */
const iconMap = {
  location: MapPin,
  phone: Phone,
  email: Mail,
  hours: Clock,
};

/* ── Zod schema ── */
const contactSchema = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  empresa: z.string().optional(),
  email: z.string().email('Ingresa un email v\u00e1lido'),
  telefono: z.string().min(10, 'El tel\u00e9fono debe tener al menos 10 caracteres'),
  servicio: z.string().min(1, 'Selecciona un servicio'),
  mensaje: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

export default function Contact() {
  const { brand } = useBrand();
  const [sending, setSending] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      nombre: '',
      empresa: '',
      email: '',
      telefono: '',
      servicio: '',
      mensaje: '',
    },
  });

  const onSubmit = async (data) => {
    setSending(true);
    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name: data.nombre,
          from_empresa: data.empresa,
          from_email: data.email,
          from_phone: data.telefono,
          servicio: data.servicio,
          message: data.mensaje,
        },
        EMAILJS_CONFIG.publicKey,
      );
      toast.success('Mensaje enviado correctamente. Nos pondremos en contacto pronto.');
      reset();
    } catch {
      toast.error('Hubo un error al enviar el mensaje. Int\u00e9ntalo de nuevo.');
    } finally {
      setSending(false);
    }
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  /* ── Input helper ── */
  const inputCls = (field) =>
    cn(
      'w-full rounded-xl border px-4 py-3.5 text-sm text-brand-navy-900 placeholder:text-slate-400',
      'outline-none transition-all duration-200',
      'focus:border-brand-red-500 focus:ring-2 focus:ring-brand-red-500/20',
      errors[field]
        ? 'border-brand-red-500 ring-2 ring-brand-red-500/20'
        : 'border-slate-300',
    );

  return (
    <section id="contacto" className="bg-white py-24 lg:py-32 overflow-x-clip">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* ═══════════════════════════════════════════
              LEFT COLUMN — Info
          ═══════════════════════════════════════════ */}
          <motion.div
            initial={slideInLeft.initial}
            whileInView={slideInLeft.animate}
            viewport={viewport}
            transition={slideInLeft.transition}
            className="lg:col-span-5"
          >
            {/* Header */}
            <span className="mb-4 inline-block text-sm font-bold uppercase tracking-widest text-brand-red-500">
              Hablemos
            </span>
            <h2 className="mb-8 font-display text-4xl uppercase text-brand-navy-900 sm:text-5xl">
              Cont&aacute;ctanos
            </h2>

            {/* Info cards 2x2 */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              variants={staggerContainer}
              className="mb-10 grid grid-cols-2 gap-4"
            >
              {CONTACT_INFO.map((item) => {
                const Icon = iconMap[item.type] || MapPin;
                const isLink = item.href;

                const content = (
                  <>
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-brand-ice-50">
                      <Icon className="h-5 w-5 text-brand-navy-700" strokeWidth={1.5} />
                    </div>
                    <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      {item.label}
                    </span>
                    <span className="text-sm font-medium leading-snug text-brand-navy-900">
                      {item.value}
                    </span>
                  </>
                );

                return (
                  <motion.div key={item.type} variants={staggerItem}>
                    {isLink ? (
                      <a
                        href={item.href}
                        className="flex flex-col rounded-2xl border border-slate-200 p-4 transition-colors hover:border-brand-ice-200 hover:bg-brand-ice-50/40"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex flex-col rounded-2xl border border-slate-200 p-4">
                        {content}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Google Maps */}
            <motion.div
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              viewport={viewport}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="overflow-hidden rounded-2xl ring-1 ring-slate-200"
            >
              <iframe
                title="Ubicaci\u00f3n"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29862.04!2d-103.3496!3d20.6597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2smx!4v1700000000000"
                className="aspect-video w-full grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </motion.div>
          </motion.div>

          {/* ═══════════════════════════════════════════
              RIGHT COLUMN — Form
          ═══════════════════════════════════════════ */}
          <motion.div
            initial={slideInRight.initial}
            whileInView={slideInRight.animate}
            viewport={viewport}
            transition={slideInRight.transition}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl border border-slate-200 p-8 shadow-card sm:p-10">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                {/* Row: Nombre + Empresa */}
                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Nombre */}
                  <div>
                    <label
                      htmlFor="nombre"
                      className="mb-1.5 block text-sm font-semibold text-brand-navy-900"
                    >
                      Nombre <span className="text-brand-red-500">*</span>
                    </label>
                    <input
                      id="nombre"
                      type="text"
                      placeholder="Tu nombre completo"
                      className={inputCls('nombre')}
                      {...register('nombre')}
                    />
                    {errors.nombre && (
                      <p className="mt-1 text-xs text-brand-red-600">{errors.nombre.message}</p>
                    )}
                  </div>

                  {/* Empresa */}
                  <div>
                    <label
                      htmlFor="empresa"
                      className="mb-1.5 block text-sm font-semibold text-brand-navy-900"
                    >
                      Empresa
                    </label>
                    <input
                      id="empresa"
                      type="text"
                      placeholder="Nombre de tu empresa"
                      className={inputCls('empresa')}
                      {...register('empresa')}
                    />
                  </div>
                </div>

                {/* Row: Email + Tel */}
                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-semibold text-brand-navy-900"
                    >
                      Email <span className="text-brand-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      className={inputCls('email')}
                      {...register('email')}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-brand-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Tel */}
                  <div>
                    <label
                      htmlFor="telefono"
                      className="mb-1.5 block text-sm font-semibold text-brand-navy-900"
                    >
                      Tel&eacute;fono <span className="text-brand-red-500">*</span>
                    </label>
                    <input
                      id="telefono"
                      type="tel"
                      placeholder="(33) 1234-5678"
                      className={inputCls('telefono')}
                      {...register('telefono')}
                    />
                    {errors.telefono && (
                      <p className="mt-1 text-xs text-brand-red-600">{errors.telefono.message}</p>
                    )}
                  </div>
                </div>

                {/* Servicio */}
                <div>
                  <label
                    htmlFor="servicio"
                    className="mb-1.5 block text-sm font-semibold text-brand-navy-900"
                  >
                    Servicio de inter&eacute;s <span className="text-brand-red-500">*</span>
                  </label>
                  <select
                    id="servicio"
                    className={cn(inputCls('servicio'), 'appearance-none bg-white')}
                    defaultValue=""
                    {...register('servicio')}
                  >
                    <option value="" disabled>
                      Selecciona un servicio
                    </option>
                    {brand.services.map((svc) => (
                      <option key={svc.title} value={svc.title}>
                        {svc.title}
                      </option>
                    ))}
                  </select>
                  {errors.servicio && (
                    <p className="mt-1 text-xs text-brand-red-600">{errors.servicio.message}</p>
                  )}
                </div>

                {/* Mensaje */}
                <div>
                  <label
                    htmlFor="mensaje"
                    className="mb-1.5 block text-sm font-semibold text-brand-navy-900"
                  >
                    Mensaje <span className="text-brand-red-500">*</span>
                  </label>
                  <textarea
                    id="mensaje"
                    rows={4}
                    placeholder="Cu\u00e9ntanos c\u00f3mo podemos ayudarte..."
                    className={cn(inputCls('mensaje'), 'resize-none')}
                    {...register('mensaje')}
                  />
                  {errors.mensaje && (
                    <p className="mt-1 text-xs text-brand-red-600">{errors.mensaje.message}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={sending}
                  className={cn(
                    'flex w-full items-center justify-center gap-2 rounded-xl bg-brand-red-500 py-4',
                    'text-sm font-bold uppercase tracking-wider text-white',
                    'shadow-lg shadow-brand-red-500/25 transition-all duration-300',
                    'hover:bg-brand-red-600 hover:shadow-brand-red-500/40',
                    'active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60',
                  )}
                >
                  {sending ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Mensaje
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>

              {/* WhatsApp link */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'mt-5 flex items-center justify-center gap-2 rounded-xl border border-green-500 bg-green-50 py-4',
                  'text-sm font-bold text-green-700 transition-all duration-300',
                  'hover:bg-green-100 hover:shadow-md',
                )}
              >
                <MessageCircle className="h-5 w-5" />
                Escr&iacute;benos por WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
