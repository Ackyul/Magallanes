import { Outlet, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const DashboardLayout = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const linkClass = (path) =>
    `flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors ${
      isActive(path)
        ? 'bg-red-50 text-red-600 font-bold'
        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
    }`;

  // Bottom nav icon + label class (mobile only)
  const mobileNavClass = (path) =>
    `flex flex-col items-center gap-0.5 py-1 px-2 rounded-lg transition-colors flex-1 ${
      isActive(path) ? 'text-red-600' : 'text-slate-400'
    }`;

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* ── SIDEBAR (desktop only) ── */}
      <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col shrink-0">
        <div className="h-20 flex items-center px-6 border-b border-slate-100 shrink-0">
          <Link to="/dashboard" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-red-600 rounded-md flex items-center justify-center text-white font-black italic">M</div>
            <span className="font-black text-xl tracking-tight text-slate-900">Magallanes</span>
          </Link>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1">
          <Link to="/dashboard" className={linkClass('/dashboard')}>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            Mi Aula
          </Link>
          <Link to="/dashboard/courses" className={linkClass('/dashboard/courses')}>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
            Mis Cursos
          </Link>
          <Link to="/dashboard/calendar" className={linkClass('/dashboard/calendar')}>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            Calendario
          </Link>
          <Link to="/dashboard/grades" className={linkClass('/dashboard/grades')}>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            Notas
          </Link>
          <Link to="/dashboard/profile" className={linkClass('/dashboard/profile')}>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            Mi Perfil
          </Link>
        </nav>

      </aside>

      {/* ── MAIN CONTENT ── */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">

        {/* ── Mobile Top Header ── */}
        <header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:hidden shrink-0">
          <Link to="/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-600 rounded-md flex items-center justify-center text-white font-black italic text-sm">M</div>
            <span className="font-black tracking-tight text-slate-900 text-base">Aula Virtual</span>
          </Link>
          {/* Notification bell on mobile */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 text-slate-400"
              aria-label="Notificaciones"
            >
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            </button>
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-lg border border-slate-200 py-4 px-4 z-50">
                <h3 className="font-bold text-slate-900 mb-3 border-b pb-2">Notificaciones</h3>
                <div className="text-center py-6 rounded-lg bg-slate-50 border border-dashed border-slate-200">
                  <p className="text-sm font-bold text-slate-700">No hay notificaciones</p>
                  <p className="text-xs text-slate-500 mt-1">Te avisaremos cuando haya novedades.</p>
                </div>
              </div>
            )}
          </div>
        </header>

        {/* ── Desktop Top Header ── */}
        <header className="h-20 bg-white border-b border-slate-200 hidden md:flex items-center justify-between px-8 shrink-0">
          <h1 className="text-2xl font-bold text-slate-900">¡Hola, Estudiante! 👋</h1>
          <div className="flex items-center gap-4">
            {/* Logout button */}
            <Link to="/login" className="p-2 text-slate-400 hover:text-red-600 transition-colors" title="Cerrar Sesión" aria-label="Cerrar Sesión">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
            </Link>
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 text-slate-400 hover:text-slate-500 transition-colors"
                aria-label="Notificaciones"
              >
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
              </button>
              {showNotifications && (
                <div className="absolute right-0 mt-3 w-80 bg-white rounded-xl shadow-lg border border-slate-200 py-4 px-4 z-50">
                  <div className="flex justify-between items-center mb-4 border-b border-slate-100 pb-2">
                    <h3 className="font-bold text-slate-900">Notificaciones</h3>
                  </div>
                  <div className="text-center py-6 px-4 rounded-lg bg-slate-50 border border-dashed border-slate-200">
                    <svg className="w-10 h-10 text-slate-300 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    <p className="text-sm font-bold text-slate-700">No hay notificaciones</p>
                    <p className="text-xs text-slate-500 mt-1">Te avisaremos cuando haya novedades.</p>
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
              <div className="text-right hidden lg:block">
                <div className="text-sm font-bold text-slate-900 leading-none">Alumno UNSA</div>
                <div className="text-xs text-slate-500 mt-1">Ciclo Verano</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white shadow-xs overflow-hidden">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=f8fafc" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </header>

        {/* ── Page Content ── */}
        {/* pb-20 ensures content doesn't hide behind mobile bottom nav */}
        <div className="flex-1 overflow-auto p-4 sm:p-8 pb-24 md:pb-8">
          <Outlet />
        </div>
      </main>

      {/* ── BOTTOM NAV BAR (mobile only) ── */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 flex items-center md:hidden safe-area-bottom">
        <Link to="/dashboard" className={mobileNavClass('/dashboard')}>
          <svg className="w-5 h-5" fill={isActive('/dashboard') ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
          <span className="text-[10px] font-bold">Mi Aula</span>
        </Link>
        <Link to="/dashboard/courses" className={mobileNavClass('/dashboard/courses')}>
          <svg className="w-5 h-5" fill={isActive('/dashboard/courses') ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
          <span className="text-[10px] font-bold">Cursos</span>
        </Link>
        <Link to="/dashboard/calendar" className={mobileNavClass('/dashboard/calendar')}>
          <svg className="w-5 h-5" fill={isActive('/dashboard/calendar') ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          <span className="text-[10px] font-bold">Calendario</span>
        </Link>
        <Link to="/dashboard/grades" className={mobileNavClass('/dashboard/grades')}>
          <svg className="w-5 h-5" fill={isActive('/dashboard/grades') ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
          <span className="text-[10px] font-bold">Notas</span>
        </Link>
        <Link to="/dashboard/profile" className={mobileNavClass('/dashboard/profile')}>
          <svg className="w-5 h-5" fill={isActive('/dashboard/profile') ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
          <span className="text-[10px] font-bold">Perfil</span>
        </Link>
      </nav>
    </div>
  );
};

export default DashboardLayout;
