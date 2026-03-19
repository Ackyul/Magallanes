import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="grow flex flex-col relative overflow-hidden">
      {/* Background decorations - Updated to Light Theme */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl -z-10 mix-blend-multiply pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-3xl -z-10 mix-blend-multiply pointer-events-none" />

      {/* Hero Section */}
      <section className="grow flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-12 pb-20 sm:pt-20 sm:pb-32">
        <div className="max-w-4xl w-full space-y-8 text-center">
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            {/* Tagline */}
            <div className="inline-block px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-600 font-bold text-sm mb-4 tracking-wide shadow-xs">
              ¡Rumbo a tu ingreso!
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight uppercase text-slate-900">
              Asegura tu <span className="text-transparent bg-clip-text bg-linear-to-r from-red-600 to-red-500">Vacante</span>
              <br /> con Magallanes
            </h1>
            <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Academia preuniversitaria y colegio en Arequipa. Prepárate con docentes experimentados, simulacros constantes y asegura tu ingreso a la UNSA.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
            <Link to="/dashboard" className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-red-600/20 hover:shadow-red-600/30 hover:-translate-y-0.5 uppercase tracking-wide">
              Aula Virtual
            </Link>
            <a href="https://wa.me/51903016273" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-200 rounded-xl font-bold text-lg transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 shadow-sm">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.391.86s.274.066.376-.05c.101-.114.433-.502.549-.675.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"/></svg>
              Contáctanos
            </a>
          </div>
        </div>
      </section>

      {/* Features Section Stats */}
      <section className="border-t border-slate-200 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-10" />
        <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <div className="p-4">
              <div className="text-4xl font-extrabold text-slate-900 mb-2 uppercase">100%</div>
              <div className="text-red-600 font-bold uppercase tracking-wider text-sm">Práctico</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-extrabold text-slate-900 mb-2 uppercase">UNSA</div>
              <div className="text-red-600 font-bold uppercase tracking-wider text-sm">Nivel de Exigencia</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-extrabold text-slate-900 mb-2 uppercase">Top</div>
              <div className="text-red-600 font-bold uppercase tracking-wider text-sm">Docentes</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-extrabold text-slate-900 mb-2 uppercase">24/7</div>
              <div className="text-red-600 font-bold uppercase tracking-wider text-sm">Preparación Continua</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
