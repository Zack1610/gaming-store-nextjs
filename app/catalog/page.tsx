import Image from 'next/image';
import { db } from '@/lib/db';
import Link from 'next/link';

// Definimos la interfaz para que TypeScript entienda los parámetros de búsqueda de la URL (?plataforma=...)
export default async function CatalogPage({
  searchParams,
}: {
  searchParams: Promise<{ plataforma?: string }>;
}) {
  // Extraemos la plataforma de los parámetros de búsqueda de la URL
  const { plataforma } = await searchParams;

  // 1. Lógica de consulta dinámica: si hay plataforma, filtramos; si no, traemos todos
  let query = 'SELECT * FROM juegos';
  let queryParams: any[] = [];

  if (plataforma) {
    query += ' WHERE plataforma = ?';
    queryParams.push(plataforma);
  }

  // 2. Ejecución de la consulta a tu base de datos de XAMPP
  const [rows] = await db.query(query, queryParams);
  const juegos = rows as any[];

  return (
    <main className="p-8 bg-slate-900 min-h-screen text-white">
      {/* Título principal con diseño responsive: texto más pequeño en móvil (text-3xl) y grande en PC (text-5xl) */}
      <h1 className="text-3xl md:text-5xl font-black mb-10 text-center uppercase tracking-tighter">
        Zaming <span className="text-blue-500">Store</span>
      </h1>
      
      {/* SECCIÓN DE FILTROS: Diseño adaptable que se envuelve (flex-wrap) si no cabe en la pantalla del móvil */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <Link 
          href="/catalog" 
          className={`px-6 py-2 rounded-full font-bold text-xs md:text-sm transition-all ${!plataforma ? 'bg-blue-600 shadow-lg shadow-blue-900/50' : 'bg-slate-800 hover:bg-slate-700'}`}
        >
          TODOS
        </Link>
        <Link 
          href="/catalog?plataforma=PS5" 
          className={`px-6 py-2 rounded-full font-bold text-xs md:text-sm transition-all ${plataforma === 'PS5' ? 'bg-blue-600 shadow-lg shadow-blue-900/50' : 'bg-slate-800 hover:bg-slate-700'}`}
        >
          PS5
        </Link>
        <Link 
          href="/catalog?plataforma=Switch" 
          className={`px-6 py-2 rounded-full font-bold text-xs md:text-sm transition-all ${plataforma === 'Switch' ? 'bg-blue-600 shadow-lg shadow-blue-900/50' : 'bg-slate-800 hover:bg-slate-700'}`}
        >
          SWITCH
        </Link>
        <Link 
          href="/catalog?plataforma=Xbox" 
          className={`px-6 py-2 rounded-full font-bold text-xs md:text-sm transition-all ${plataforma === 'Xbox' ? 'bg-blue-600 shadow-lg shadow-blue-900/50' : 'bg-slate-800 hover:bg-slate-700'}`}
        >
          Xbox
        </Link>
      </div>

      {/* GRILLA DE JUEGOS: 1 columna en móvil, 2 en tablets y 3 en monitores grandes (PC) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {juegos.length > 0 ? (
          juegos.map((juego) => (
            <div key={juego.id} className="group bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all duration-300 shadow-2xl">
              
              {/* Contenedor de Imagen con dimensiones fijas según el libro para optimizar el CLS */}
              <div className="relative w-full h-80 overflow-hidden">
                <Image
                  src={juego.imagen_url || '/juegos/placeholder.jpg'} 
                  alt={juego.titulo}
                  // Implementación de Width y Height fijos para reserva de espacio (estándar 16:9 o similar)
                  width={500} 
                  height={320}
                  // className con responsive: en móviles ocupa el ancho total, en PC mantiene el aspecto
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  priority={juego.id <= 3} 
                />
              </div>

              {/* Contenido de la Card: Padding ajustado para mejor lectura en pantallas pequeñas */}
              <div className="p-6">
                <span className="bg-blue-600 text-[10px] font-bold px-2 py-1 rounded-full uppercase">
                  {juego.plataforma}
                </span>
                
                {/* Título con tamaño adaptable: más pequeño en móvil para evitar que se corte */}
                <h2 className="text-xl md:text-2xl font-bold mt-2 leading-tight h-14 line-clamp-2">
                  {juego.titulo}
                </h2>
                
                <div className="flex justify-between items-center mt-6">
                  <p className="text-2xl md:text-3xl font-black text-blue-400">
                    {juego.precio}€
                  </p>
                  
                  <Link 
                    href={`/catalog/${juego.id}`}
                    className="bg-white text-black px-4 md:px-5 py-2 rounded-full font-bold text-xs md:text-sm hover:bg-blue-500 hover:text-white transition-colors"
                  >
                    DETALLES
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          /* Mensaje en caso de que una categoría esté vacía */
          <div className="col-span-full text-center py-20">
            <p className="text-slate-500 text-xl italic font-medium">
              No hay juegos disponibles para esta plataforma actualmente.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}