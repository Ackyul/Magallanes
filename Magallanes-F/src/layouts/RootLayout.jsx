import { Link, Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900 selection:bg-red-500/20">
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/90 border-b border-red-100 shadow-xs">
        <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                {/* Placeholder Logo Graphic - until we have images */}
                <div className="w-10 h-10 bg-linear-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center shadow-lg shadow-red-600/20 transform rotate-3">
                  <span className="text-white font-extrabold text-xl italic">M</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black uppercase tracking-tight text-slate-900 leading-none">
                    Magallanes
                  </span>
                  <span className="text-[10px] text-red-600 font-bold uppercase tracking-widest leading-none mt-1">
                    Academia & Colegio
                  </span>
                </div>
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8 items-center">
              <Link to="/" className="text-slate-600 hover:text-red-600 px-3 py-2 rounded-md text-sm font-bold uppercase tracking-wide transition-colors">
                Inicio
              </Link>
              <Link to="/courses" className="text-slate-600 hover:text-red-600 px-3 py-2 rounded-md text-sm font-bold uppercase tracking-wide transition-colors">
                Ciclos
              </Link>
              <Link to="/about" className="text-slate-600 hover:text-red-600 px-3 py-2 rounded-md text-sm font-bold uppercase tracking-wide transition-colors">
                Nosotros
              </Link>
              <Link to="/register" className="text-red-600 hover:text-red-700 px-3 py-2 rounded-md text-sm font-bold uppercase tracking-wide transition-colors">
                Matricúlate
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link to="/login" className="bg-red-600 hover:bg-red-500 text-white px-5 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wide transition-all shadow-lg shadow-red-600/20 hover:shadow-red-500/40 border border-red-500/50 hidden sm:block">
                Ingresa a nuestra aula virtual
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="grow flex flex-col bg-slate-50">
        <Outlet />
      </main>

      <footer className="bg-white py-16 border-t border-slate-200 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl -z-10" />
        <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-2xl font-black uppercase tracking-tight text-slate-900">Magallanes</span>
            <span className="text-red-600 text-sm font-bold uppercase">Rumbo a tu ingreso</span>
            <p className="text-slate-500 text-sm mt-2 font-medium">Av. Independencia 868, Arequipa</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex space-x-6">
              <a href="https://www.facebook.com/profile.php?id=61587772978238" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-red-600 transition-colors">
                Facebook
              </a>
              <a href="#" className="text-slate-500 hover:text-red-600 transition-colors">
                Términos
              </a>
              <a href="#" className="text-slate-500 hover:text-red-600 transition-colors">
                Privacidad
              </a>
            </div>
            <p className="text-slate-500 text-sm font-medium">
              © {new Date().getFullYear()} Consorcio Educativo Magallanes.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;
