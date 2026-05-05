export default function LoadingCatalog() {
  // Creamos un array de 6 elementos para mostrar 6 tarjetas de carga
  const skeletons = Array.from({ length: 6 });

  return (
    <main className="p-8 bg-slate-900 min-h-screen">
      {/* Título animado */}
      <div className="h-12 w-64 bg-slate-800 rounded-full mx-auto mb-10 animate-pulse" />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {skeletons.map((_, i) => (
          <div key={i} className="bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 h-[450px] animate-pulse">
            {/* Espacio de la imagen */}
            <div className="w-full h-80 bg-slate-700" />
            {/* Espacio del texto */}
            <div className="p-6 space-y-4">
              <div className="h-4 w-20 bg-slate-700 rounded-full" />
              <div className="h-8 w-full bg-slate-700 rounded-lg" />
              <div className="flex justify-between items-center mt-4">
                <div className="h-10 w-24 bg-slate-700 rounded-full" />
                <div className="h-10 w-24 bg-slate-700 rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}