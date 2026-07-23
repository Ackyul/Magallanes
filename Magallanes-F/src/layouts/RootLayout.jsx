import { Link, Outlet, useLocation } from 'react-router-dom';
import { useState } from 'react';

const RootLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isNavActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const scrollToSection = (id) => {
    setMenuOpen(false);
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-montserrat bg-[#F8FAFC] text-slate-900 selection:bg-[#DD0000] selection:text-white">
      {/* Top Red Brand Line Accent (Signature MEBA style) */}
      <div className="h-1.5 bg-[#DD0000] w-full z-50 fixed top-0 left-0" />

      {/* Sticky Navigation Header */}
      <header className="sticky top-1.5 z-40 w-full bg-white shadow-xs border-b border-slate-200/80">
        <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            
            {/* Brand Logo - MEBA / Magallanes typography style */}
            <div className="shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-2 group" onClick={() => setMenuOpen(false)}>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="text-3xl sm:text-4xl font-extrabold italic uppercase tracking-tighter text-[#DD0000] group-hover:text-red-700 transition-colors">
                      MAGALLANES
                    </span>
                    <span className="text-[10px] font-bold text-[#DD0000] align-top bg-red-50 border border-red-200 px-1 py-0.5 rounded-xs">
                      ®
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-slate-600 leading-none">
                    Academia & Colegio • Arequipa
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Center */}
            <nav className="hidden md:flex space-x-10 items-center">
              <Link
                to="/"
                className={`text-sm font-black uppercase tracking-wider transition-all relative py-2 ${
                  isNavActive('/') && !location.hash
                    ? 'text-slate-950 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#DD0000]'
                    : 'text-slate-700 hover:text-[#DD0000]'
                }`}
              >
                Inicio
              </Link>
              <button
                onClick={() => scrollToSection('programas')}
                className="text-sm font-black uppercase tracking-wider text-slate-700 hover:text-[#DD0000] transition-colors py-2 cursor-pointer"
              >
                Programas
              </button>
              <button
                onClick={() => scrollToSection('nosotros')}
                className="text-sm font-black uppercase tracking-wider text-slate-700 hover:text-[#DD0000] transition-colors py-2 cursor-pointer"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="text-sm font-black uppercase tracking-wider text-slate-700 hover:text-[#DD0000] transition-colors py-2 cursor-pointer"
              >
                Contacto
              </button>
            </nav>

            {/* Right Action Pill CTA Button (mebaperu CONTACTO > style) */}
            <div className="hidden sm:flex items-center gap-4">
              <Link
                to="/login"
                className="inline-flex items-center gap-2 bg-[#DD0000] hover:bg-red-700 text-white px-7 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all shadow-md hover:shadow-lg hover:shadow-red-600/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Aula Virtual</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Mobile Hamburger Menu Toggle */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
                aria-label="Abrir menú"
              >
                {menuOpen ? (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 shadow-xl px-6 py-5 space-y-4 animate-in slide-in-from-top-2 duration-200">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="block font-black uppercase text-sm text-slate-900 py-2 border-b border-slate-100"
            >
              Inicio
            </Link>
            <button
              onClick={() => scrollToSection('programas')}
              className="w-full text-left font-black uppercase text-sm text-slate-900 py-2 border-b border-slate-100"
            >
              Programas &amp; Ciclos
            </button>
            <button
              onClick={() => scrollToSection('nosotros')}
              className="w-full text-left font-black uppercase text-sm text-slate-900 py-2 border-b border-slate-100"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="w-full text-left font-black uppercase text-sm text-slate-900 py-2 border-b border-slate-100"
            >
              Contacto
            </button>
            <div className="pt-2">
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#DD0000] text-white rounded-full text-xs font-black uppercase tracking-wider shadow-md"
              >
                <span>Aula Virtual</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="grow flex flex-col">
        <Outlet />
      </main>

      {/* Footer Section (Exact 4-column structure matching mebaperu.com) */}
      <footer className="bg-[#EFEFEF] text-slate-800 pt-16 pb-12 border-t-4 border-[#DD0000] relative overflow-hidden">
        <div className="max-w-[92%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-slate-300/80">
            
            {/* Column 1: Logo & Company Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-1.5">
                <span className="text-4xl font-extrabold italic uppercase tracking-tighter text-[#DD0000]">
                  MAGALLANES
                </span>
                <span className="text-xs font-bold text-[#DD0000] bg-red-100 border border-red-200 px-1 py-0.5 rounded-xs">
                  ®
                </span>
              </div>
              <p className="text-slate-600 text-sm font-medium leading-relaxed">
                Consorcio Educativo especializado en alta preparación preuniversitaria y educación escolar de exigencia en Arequipa. Rumbo a tu ingreso UNSA.
              </p>
              <div className="text-xs text-slate-500 font-medium space-y-1">
                <p>📍 Av. Independencia 868, Arequipa - Perú</p>
                <p>📞 (+51) 903 016 273</p>
                <p>✉️ informes@magallanes.edu.pe</p>
              </div>
            </div>

            {/* Column 2: Programas Académicos (Part 1) */}
            <div className="space-y-4">
              <h4 className="text-lg font-extrabold italic uppercase text-slate-900 tracking-wide">
                Programas
              </h4>
              <ul className="space-y-2.5 text-sm font-medium text-slate-700">
                <li>
                  <button onClick={() => scrollToSection('programas')} className="hover:text-[#DD0000] transition-colors text-left cursor-pointer">
                    Ciclo CEPRUNSA
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('programas')} className="hover:text-[#DD0000] transition-colors text-left cursor-pointer">
                    Ciclo Ordinario UNSA
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('programas')} className="hover:text-[#DD0000] transition-colors text-left cursor-pointer">
                    Ciclo Extraordinario &amp; Quintos
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('programas')} className="hover:text-[#DD0000] transition-colors text-left cursor-pointer">
                    Ciclo Repaso &amp; Intensivo
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('programas')} className="hover:text-[#DD0000] transition-colors text-left cursor-pointer">
                    Colegio Magallanes
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('programas')} className="hover:text-[#DD0000] transition-colors text-left cursor-pointer">
                    Taller de Simulacros
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Menú Rápido */}
            <div className="space-y-4">
              <h4 className="text-lg font-extrabold italic uppercase text-slate-900 tracking-wide">
                Menú
              </h4>
              <ul className="space-y-2.5 text-sm font-medium text-slate-700">
                <li>
                  <Link to="/" className="hover:text-[#DD0000] transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>
                  <button onClick={() => scrollToSection('nosotros')} className="hover:text-[#DD0000] transition-colors text-left cursor-pointer">
                    Nosotros
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contacto')} className="hover:text-[#DD0000] transition-colors text-left cursor-pointer">
                    Contacto
                  </button>
                </li>
                <li>
                  <Link to="/login" className="hover:text-[#DD0000] transition-colors">
                    Aula Virtual
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Síguenos & Social Media */}
            <div className="space-y-4">
              <h4 className="text-lg font-extrabold italic uppercase text-slate-900 tracking-wide">
                Síguenos
              </h4>
              <p className="text-xs text-slate-600">
                Entérate de nuestros nuevos inicios de clases, convocatorias y simulacros.
              </p>
              <div className="flex items-center gap-3 pt-2">
                {/* TikTok Icon */}
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="w-10 h-10 rounded-full bg-[#DD0000] hover:bg-black text-white flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-2.891 2.89 2.896 2.896 0 0 1-2.892-2.89 2.896 2.896 0 0 1 2.892-2.891c.32 0 .63.056.916.162v-3.56a6.386 6.386 0 0 0-.916-.067 6.34 6.34 0 0 0-6.335 6.356 6.34 6.34 0 0 0 6.335 6.356 6.34 6.34 0 0 0 6.336-6.356V9.053a8.21 8.21 0 0 0 4.77 1.523V7.13a4.797 4.797 0 0 1-.999-.444z"/>
                  </svg>
                </a>
                {/* Facebook Icon */}
                <a
                  href="https://www.facebook.com/profile.php?id=61587772978238"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full bg-[#DD0000] hover:bg-blue-600 text-white flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>
                {/* WhatsApp Icon */}
                <a
                  href="https://wa.me/51903016273"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-10 h-10 rounded-full bg-[#DD0000] hover:bg-emerald-600 text-white flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Copyright bar */}
          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
            <p>© {new Date().getFullYear()} Consorcio Educativo Magallanes S.A.C. Todos los derechos reservados.</p>
            <div className="flex gap-6 font-medium">
              <a href="#" className="hover:text-[#DD0000] transition-colors">Términos y Condiciones</a>
              <a href="#" className="hover:text-[#DD0000] transition-colors">Políticas de Privacidad</a>
              <a href="#" className="hover:text-[#DD0000] transition-colors">Libro de Reclamaciones</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;
