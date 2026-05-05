import Image from 'next/image';
import { db } from '@/lib/db';
import Link from 'next/link';

export default async function CatalogPage() {
  // 1. Consulta a la base de datos zaming-store
  const [rows] = await db.query('SELECT * FROM juegos');
  const juegos = rows as any[];

  return (
    <main className="p-8 bg-slate-900 min-h-screen text-white">
      <h1 className="text-4xl font-black mb-10 text-center uppercase tracking-tighter">
        Zaming <span className="text-blue-500">Store</span>
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {juegos.map((juego) => (
          <div key={juego.id} className="group bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all duration-300 shadow-2xl">
            
            {/* Contenedor de Imagen */}
            <div className="relative w-full h-80">
              <Image
                src={juego.imagen_url || '/juegos/placeholder.jpg'} 
                alt={juego.titulo}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                priority={juego.id <= 3} // Optimización para los primeros juegos
              />
            </div>

            {/* Contenido de la Card */}
            <div className="p-6">
              {/* CORRECCIÓN: Añadida etiqueta <span> de apertura que faltaba */}
              <span className="bg-blue-600 text-[10px] font-bold px-2 py-1 rounded-full uppercase">
                {juego.plataforma}
              </span>
              
              <h2 className="text-2xl font-bold mt-2 leading-tight">
                {juego.titulo}
              </h2>
              
              <div className="flex justify-between items-center mt-6">
                <p className="text-3xl font-black text-blue-400">
                  {juego.precio}€
                </p>
                
                <Link 
  href={`/catalog/${juego.id}`}
  className="bg-white text-black px-5 py-2 rounded-full font-bold text-sm hover:bg-blue-500 hover:text-white transition-colors"
>
                  DETALLES
                </Link>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}