import { db } from '@/lib/db';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function GameDetailPage({ params }: { params: Promise<{ id: string }> }) {
  //  Extraemos el ID de la URL. Usamos await porque en las versiones nuevas de Next.js params es una promesa.
  const { id } = await params;

  //  Consultamos a MySQL el juego específico. Usamos "?" para evitar ataques de inyección SQL.
  const [rows] = await db.query('SELECT * FROM juegos WHERE id = ?', [id]);
  const juegos = rows as any[];
  const juego = juegos[0];

  // Si el ID no existe en la base de datos de XAMPP, lanzamos la página 404 automática de Next.js.
  if (!juego) {
    notFound();
  }

  return (
    // Contenedor principal con flex-col para apilar elementos y min-h-screen para cubrir todo el fondo oscuro.
    <main className="p-4 md:p-8 bg-slate-900 min-h-screen text-white flex flex-col items-center">
      <div className="max-w-4xl w-full">
        
        {/* Enlace de retorno con hover suave en azul */}
        <Link href="/catalog" className="text-blue-400 hover:text-blue-300 transition-colors mb-8 inline-block font-medium">
          ← Volver al catálogo
        </Link>

        {/* CARD PRINCIPAL: Usamos grid-cols-1 para móviles y md:grid-cols-2 para PC */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 bg-slate-800 p-6 md:p-10 rounded-[40px] shadow-2xl border border-slate-700">
          
          {/* SECCIÓN IZQUIERDA: Imagen del juego */}
          <div className="relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-slate-700/50">
            <Image 
              src={juego.imagen_url || '/juegos/placeholder.jpg'} 
              alt={juego.titulo}
              // Definimos dimensiones base para que Next.js optimice la carga en tu SSD WD_BLACK
              width={800}
              height={1000}
              // object-cover asegura que la imagen rellene el espacio sin deformarse
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              priority // Carga esta imagen con máxima prioridad al ser la pieza principal de esta vista
            />
          </div>

          {/* SECCIÓN DERECHA: Información y compra */}
          <div className="flex flex-col justify-center">
            {/* Badge de plataforma con estilo gaming */}
            <span className="bg-blue-600 self-start text-[10px] font-bold px-4 py-1.5 rounded-full uppercase mb-6 tracking-widest shadow-lg shadow-blue-900/40">
              {juego.plataforma}
            </span>

            {/* Título adaptable: text-3xl en móvil, text-5xl en pantallas grandes */}
            <h1 className="text-3xl md:text-5xl font-black mb-4 leading-[1.1] tracking-tighter uppercase italic">
              {juego.titulo}
            </h1>

            {/* Precio destacado con color azul eléctrico */}
            <p className="text-4xl md:text-5xl font-black text-blue-400 mb-10">
              {juego.precio}€
            </p>
            
            {/* BOTÓN DE COMPRA: Redirige al formulario que conectamos a la DB */}
            <Link 
              href="/checkout" 
              className="bg-white text-black hover:bg-blue-600 hover:text-white font-black py-5 rounded-2xl transition-all duration-300 uppercase tracking-[0.2em] shadow-xl text-center active:scale-95"
            >
              Comprar ahora
            </Link>

            {/* Nota informativa pequeña */}
            <p className="text-slate-500 text-[10px] mt-6 text-center uppercase font-bold tracking-widest">
              Garantía de satisfacción Zaming Store
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}