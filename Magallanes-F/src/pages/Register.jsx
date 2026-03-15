import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="grow flex flex-col relative overflow-hidden bg-slate-50">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl -z-10 mix-blend-multiply pointer-events-none" />
      
      {/* Header Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase text-slate-900">
            Elige tu <span className="text-transparent bg-clip-text bg-linear-to-r from-red-600 to-red-500">Ciclo</span>
          </h1>
          <p className="text-lg text-slate-600">
            Conoce nuestros ciclos disponibles y comienza tu preparación para el examen de admisión UNSA.
          </p>
        </div>
      </section>

      {/* Pricing / Cycles Grid */}
      <section className="grow px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-[95%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
            
            {/* Placeholder Cycle 1 */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 flex flex-col hover:border-red-200 transition-colors relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-bl-lg">
                Básico
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Ciclo Verano</h3>
              <p className="text-slate-500 mb-6 grow">Para estudiantes que desean iniciar su preparación desde cero.</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-slate-900">S/ [Precio]</span>
                <span className="text-slate-500 font-medium">/mes</span>
              </div>
              <ul className="space-y-3 mb-8 text-slate-600 font-medium">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  Clases Teóricas
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  Material Impreso
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  Simulacros Mensuales
                </li>
              </ul>
              <button className="w-full py-3 px-4 bg-white border-2 border-red-600 text-red-600 hover:bg-red-50 rounded-xl font-bold uppercase tracking-wide transition-colors">
                Matricularme
              </button>
            </div>

            {/* Placeholder Cycle 2 (Featured) */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-red-500 p-8 flex flex-col transform md:-translate-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-bl-lg">
                Recomendado
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Ciclo Pre UNSA</h3>
              <p className="text-slate-500 mb-6 grow">Preparación intensiva alineada al balotario de la universidad.</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-slate-900">S/ [Precio]</span>
                <span className="text-slate-500 font-medium">/mes</span>
              </div>
              <ul className="space-y-3 mb-8 text-slate-600 font-medium">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  Clases Teórico-Prácticas
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  Seminarios Dominicales
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  Simulacros Semanales
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  Asesoría Psicológica
                </li>
              </ul>
              <button className="w-full py-3 px-4 bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/20 rounded-xl font-bold uppercase tracking-wide transition-all hover:shadow-red-600/30 hover:-translate-y-0.5">
                Matricularme
              </button>
            </div>

            {/* Placeholder Cycle 3 */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 flex flex-col hover:border-red-200 transition-colors relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-slate-800 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-bl-lg">
                Escolares
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Ciclo 5to Año</h3>
              <p className="text-slate-500 mb-6 grow">Adelanta tu preparación mientras terminas el colegio.</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-slate-900">S/ [Precio]</span>
                <span className="text-slate-500 font-medium">/mes</span>
              </div>
              <ul className="space-y-3 mb-8 text-slate-600 font-medium">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  Horario Tarde
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  Reforzamiento Escolar
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  Orientación Vocacional
                </li>
              </ul>
              <button className="w-full py-3 px-4 bg-white border-2 border-red-600 text-red-600 hover:bg-red-50 rounded-xl font-bold uppercase tracking-wide transition-colors">
                Matricularme
              </button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
