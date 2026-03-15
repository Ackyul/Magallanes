import { useState } from 'react';

const DashboardProfile = () => {
  // Estado local para los campos del perfil
  const [profileData, setProfileData] = useState({
    nombres: 'Estudiante Ejemplo',
    telefono: '987654321',
    correo: '',
    ciclo: 'Ciclo Verano',
    clase: 'Aula 104 - Turno Mañana'
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // Aquí iría la lógica para enviar al backend
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        {/* Header/Cover */}
        <div className="h-32 bg-red-600 relative">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        </div>
        
        <div className="px-8 pb-8">
          {/* Avatar Header */}
          <div className="flex justify-between items-end -mt-12 mb-8">
            <div className="flex items-end gap-6">
              <div className="w-24 h-24 rounded-full bg-slate-200 border-4 border-white shadow-md overflow-hidden relative z-10">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=f8fafc" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div className="pb-2">
                <h2 className="text-2xl font-bold text-slate-900">{profileData.nombres}</h2>
                <span className="inline-block mt-1 text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded-md uppercase tracking-wider">
                  Alumno Activo
                </span>
              </div>
            </div>
            
            <button 
              onClick={() => setIsEditing(!isEditing)}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-lg transition-colors text-sm"
            >
              {isEditing ? 'Cancelar' : 'Editar Perfil'}
            </button>
          </div>

          {/* Formulario de Datos */}
          <form onSubmit={handleSave} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nombres */}
              <div className="space-y-1.5 md:col-span-2">
                <label className="text-sm font-bold text-slate-700 block" htmlFor="nombres">
                  Nombres y Apellidos
                </label>
                <input
                  id="nombres"
                  name="nombres"
                  type="text"
                  value={profileData.nombres}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 disabled:opacity-70 disabled:bg-slate-100 focus:outline-hidden focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-shadow"
                />
              </div>

              {/* Teléfono */}
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-700 block" htmlFor="telefono">
                  Número de Celular
                </label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  value={profileData.telefono}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 disabled:opacity-70 disabled:bg-slate-100 focus:outline-hidden focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-shadow"
                />
              </div>

              {/* Correo (Opcional) */}
              <div className="space-y-1.5">
                <label className="flex items-center justify-between text-sm font-bold text-slate-700" htmlFor="correo">
                  <span>Correo Electrónico</span>
                  <span className="text-xs text-slate-400 font-normal">Opcional</span>
                </label>
                <input
                  id="correo"
                  name="correo"
                  type="email"
                  placeholder="tu@correo.com"
                  value={profileData.correo}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 disabled:opacity-70 disabled:bg-slate-100 focus:outline-hidden focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-shadow"
                />
              </div>

              {/* Ciclo (Solo lectura para el alumno) */}
              <div className="space-y-1.5">
                <label className="flex items-center justify-between text-sm font-bold text-slate-700" htmlFor="ciclo">
                  <span>Ciclo Matriculado</span>
                  <span className="text-xs text-slate-400 font-normal">Solo Lectura</span>
                </label>
                <input
                  id="ciclo"
                  name="ciclo"
                  type="text"
                  value={profileData.ciclo}
                  readOnly
                  disabled
                  className="w-full px-4 py-3 bg-slate-100 border border-slate-200 rounded-lg text-slate-600 opacity-80 cursor-not-allowed"
                />
              </div>

              {/* Clase/Aula (Solo lectura para el alumno) */}
              <div className="space-y-1.5">
                <label className="flex items-center justify-between text-sm font-bold text-slate-700" htmlFor="clase">
                  <span>Aula y Turno</span>
                  <span className="text-xs text-slate-400 font-normal">Solo Lectura</span>
                </label>
                <input
                  id="clase"
                  name="clase"
                  type="text"
                  value={profileData.clase}
                  readOnly
                  disabled
                  className="w-full px-4 py-3 bg-slate-100 border border-slate-200 rounded-lg text-slate-600 opacity-80 cursor-not-allowed"
                />
              </div>
            </div>

            {isEditing && (
              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors shadow-md shadow-red-600/20 active:scale-95"
                >
                  Guardar Cambios
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default DashboardProfile;
