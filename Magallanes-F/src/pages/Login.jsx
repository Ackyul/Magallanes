import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen flex text-slate-900 bg-white">
      {/* Left Column: Branding / Info */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-red-600 flex-col justify-center px-16 py-20 overflow-hidden">
        {/* Background decorations for red side */}
        <div className="absolute inset-0 bg-linear-to-br from-red-600 to-red-800" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-500 rounded-full blur-3xl opacity-50 mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-red-900 rounded-full blur-3xl opacity-40 mix-blend-multiply pointer-events-none" />
        
        <div className="relative z-10 text-white space-y-8 max-w-lg">
          <Link to="/" className="inline-flex items-center gap-3 hover:opacity-80 transition-opacity mb-8">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg text-red-600 transform rotate-3">
              <span className="font-extrabold text-2xl italic">M</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-black uppercase tracking-tight leading-none">
                Magallanes
              </span>
              <span className="text-xs text-red-200 font-bold uppercase tracking-widest leading-none mt-1">
                AULA VIRTUAL
              </span>
            </div>
          </Link>
          
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Continúa tu camino al <span className="text-red-200">éxito universitario</span>.
          </h1>

          <div className="flex gap-4 pt-4">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span className="text-red-100 font-medium">Simulacros</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Login Form */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12 relative bg-slate-50">
        <Link to="/" className="absolute top-8 left-6 lg:hidden flex items-center gap-3">
          <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center shadow-lg text-white transform rotate-3">
            <span className="font-extrabold text-xl italic">M</span>
          </div>
        </Link>

        {/* Form Container */}
        <div className="max-w-md w-full animate-in fade-in zoom-in-95 duration-500 pt-16 lg:pt-0">
          <div className="text-center lg:text-left space-y-2 mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Iniciar Sesión</h2>
            <p className="text-slate-500 text-lg">Ingresa tus credenciales del Aula Virtual</p>
          </div>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-1.5">
            <label className="text-sm font-bold text-slate-700 block" htmlFor="dni">
              Número de DNI
            </label>
            <input
              id="dni"
              type="text"
              placeholder="72345678"
              maxLength={8}
              className="w-full px-4 py-3 bg-slate-100 border-none rounded-lg text-slate-900 placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-red-500 transition-shadow"
            />
          </div>
          
          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold text-slate-700" htmlFor="password">
                Contraseña
              </label>
              <a href="#" className="text-xs font-bold text-red-600 hover:text-red-700 transition-colors">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
            <input 
              id="password" 
              type="password" 
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all shadow-sm"
              placeholder="••••••••"
            />
          </div>

          <Link
            to="/dashboard"
            className="w-full flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-4 rounded-lg transition-colors shadow-lg shadow-red-600/20 active:scale-95 uppercase tracking-wide mt-4"
          >
            Iniciar Sesión
          </Link>
        </form>
        </div>
      </div>
  </div>
  );
};

export default Login;
