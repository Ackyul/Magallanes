const DashboardGrades = () => {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Registro de Notas</h2>
          <p className="text-slate-500">Visualiza tu rendimiento en las evaluaciones y simulacros.</p>
        </div>
        
        <div className="bg-white border border-slate-200 rounded-lg p-1 flex">
          <button className="px-4 py-1.5 bg-slate-100 text-slate-900 font-medium text-sm rounded-md">Simulacros</button>
          <button className="px-4 py-1.5 text-slate-500 hover:text-slate-900 font-medium text-sm rounded-md transition-colors">Prácticas</button>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden">
        {/* State for no grades */}
        <div className="text-center py-16 px-4">
          <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-slate-100">
            <svg className="w-8 h-8 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <p className="text-lg font-bold text-slate-700">Aún no hay calificaciones</p>
          <p className="text-slate-500 mt-2 max-w-md mx-auto">Tus resultados aparecerán aquí después de que rindas tus primeros simulacros o evaluaciones en el ciclo.</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardGrades;
