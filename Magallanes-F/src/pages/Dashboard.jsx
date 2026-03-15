const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-red-600 rounded-2xl p-8 text-white relative overflow-hidden shadow-lg shadow-red-600/20">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight mb-2">Bienvenido a tu Aula Virtual, Juan.</h2>
          <p className="text-red-100 text-lg">Tienes 2 clases programadas para el día de hoy. ¡Sigue preparándote con fuerza!</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (Main content) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Active Courses */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              Tus Cursos de Hoy
            </h3>
            
            <div className="text-center py-12 px-4 bg-slate-50 rounded-xl border border-dashed border-slate-200">
              <svg className="w-16 h-16 text-slate-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-lg font-bold text-slate-700">No hay cursos programados para hoy</p>
              <p className="text-slate-500 mt-2">¡Aprovecha el tiempo para repasar el material reciente o resolver simulacros pendientes!</p>
            </div>
          </div>
        </div>

        {/* Right Column (Sidebar widgets) */}
        <div className="space-y-6">
          
          {/* Quick Links */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Material Reciente</h3>
            <div className="text-center py-6 px-4">
              <svg className="w-12 h-12 text-slate-200 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
              <p className="text-slate-500 font-medium">No hay material reciente</p>
              <p className="text-xs text-slate-400 mt-1">Los archivos nuevos aparecerán aquí.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
