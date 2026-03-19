import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';

const RootLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900 selection:bg-red-500/20">
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/90 border-b border-red-100 shadow-xs">
        <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 sm:h-20 items-center">
            {/* Logo */}
            <div className="shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity" onClick={() => setMenuOpen(false)}>
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-linear-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center shadow-lg shadow-red-600/20 transform rotate-3">
                  <span className="text-white font-extrabold text-lg sm:text-xl italic">M</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-black uppercase tracking-tight text-slate-900 leading-none">Magallanes</span>
                  <span className="text-[9px] sm:text-[10px] text-red-600 font-bold uppercase tracking-widest leading-none mt-1">Academia &amp; Colegio</span>
                </div>
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8 items-center">
              {/* Desktop nav empty — only the CTA button remains */}
            </nav>

            {/* Desktop CTA + Mobile Hamburger */}
            <div className="flex items-center gap-3">
              <Link to="/login" className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wide transition-all shadow-lg shadow-red-600/20 hover:shadow-red-500/40 border border-red-500/50 hidden sm:block">
                Ingresa a nuestra aula virtual
              </Link>
              {/* Hamburger — mobile only */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
                aria-label="Abrir menú"
              >
                {menuOpen ? (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
            <div className="px-4 py-4 space-y-1">
            <div className="pt-2">
                <Link to="/login" onClick={() => setMenuOpen(false)} className="flex items-center justify-center w-full px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-sm uppercase tracking-wide transition-colors shadow-lg shadow-red-600/20">
                  Ingresa al Aula Virtual
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="grow flex flex-col bg-slate-50">
        <Outlet />
      </main>

      <footer className="bg-white py-10 sm:py-16 border-t border-slate-200 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl -z-10" />
        <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
            <span className="text-2xl font-black uppercase tracking-tight text-slate-900">Magallanes</span>
            <span className="text-red-600 text-sm font-bold uppercase">Rumbo a tu ingreso</span>
            <p className="text-slate-500 text-sm mt-2 font-medium">Av. Independencia 868, Arequipa</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex space-x-6">
              <a href="https://www.facebook.com/profile.php?id=61587772978238" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-red-600 transition-colors text-sm font-medium">Facebook</a>
              <a href="#" className="text-slate-500 hover:text-red-600 transition-colors text-sm font-medium">Términos</a>
              <a href="#" className="text-slate-500 hover:text-red-600 transition-colors text-sm font-medium">Privacidad</a>
            </div>
            <p className="text-slate-500 text-sm font-medium">© {new Date().getFullYear()} Consorcio Educativo Magallanes.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;
