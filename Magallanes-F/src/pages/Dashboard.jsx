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


    </div>
  );
};

export default Dashboard;
