const DashboardCalendar = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Main Calendar Area */}
      <div className="flex-1 bg-white rounded-2xl border border-slate-200 shadow-xs p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-900">Calendario de Actividades</h2>
          <div className="flex gap-2">
            <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button className="px-4 py-2 border border-slate-200 rounded-lg font-medium text-slate-700 hover:bg-slate-50 transition-colors">
              Hoy
            </button>
            <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        {/* Mock Calendar Grid */}
        <div className="border border-slate-200 rounded-xl overflow-hidden">
          {/* Days Header */}
          <div className="grid grid-cols-7 bg-slate-50 border-b border-slate-200 text-center py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">
            <div>Lun</div><div>Mar</div><div>Mié</div><div>Jue</div><div>Vie</div><div>Sáb</div><div>Dom</div>
          </div>
          
          {/* Calendar Cells */}
          <div className="grid grid-cols-7 auto-rows-[100px] bg-slate-200 gap-px">
            {/* Generating 35 blank cells for a 5-week month view */}
            {Array.from({ length: 35 }).map((_, i) => (
              <div key={i} className="bg-white p-2 hover:bg-slate-50 transition-colors cursor-pointer group">
                <span className={`text-sm font-medium ${i === 14 ? 'w-7 h-7 flex items-center justify-center bg-red-600 text-white rounded-full' : 'text-slate-700'}`}>
                  {i < 3 ? 28 + i : i > 33 ? i - 33 : i - 2}
                </span>
                {/* Simulated event indicator on hover just for interaction feel */}
                <div className="hidden group-hover:block mt-2 w-full h-1 bg-red-200 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Sidebar - Calendar Information */}
      <div className="w-full lg:w-80 space-y-6">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 h-full flex flex-col">
          <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
            <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            Detalles del Día
          </h3>
          
          <div className="flex-1 flex flex-col items-center justify-center text-center py-12 px-4">
            <svg className="w-16 h-16 text-slate-200 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-lg font-bold text-slate-700">No hay eventos</p>
            <p className="text-slate-500 mt-2 text-sm leading-relaxed">No tienes ninguna clase, simulacro o actividad programada para esta fecha.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCalendar;
