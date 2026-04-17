import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function Terms() {
  return (
    <>
      <Navbar />

      <main className="flex min-h-screen items-center justify-center px-4 pt-28 pb-16">
        <div className="w-full max-w-3xl rounded-2xl bg-white p-8 shadow-card ring-1 ring-brand-navy-100/40 sm:p-12">
          <h1 className="mb-6 font-display text-3xl tracking-wide text-brand-navy-900 uppercase sm:text-4xl">
            Términos y Condiciones
          </h1>

          <div className="space-y-4 text-base leading-relaxed text-brand-navy-700/80">
            <p>
              Contenido legal en proceso de elaboración. Para cualquier consulta
              contactar a{' '}
              <a
                href="mailto:contacto@frigorificosantander.mx"
                className="font-semibold text-brand-red-500 underline underline-offset-2 transition-colors hover:text-brand-red-600"
              >
                contacto@frigorificosantander.mx
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
