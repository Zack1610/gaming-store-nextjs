import { db } from '@/lib/db';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function GameDetailPage({ params }: { params: Promise<{ id: string }> }) {
  // 1. "Desenvolvemos" la promesa de params
  const { id } = await params;

  // 2. Buscamos el juego por ID en la base de datos usando el id ya extraído
  const [rows] = await db.query('SELECT * FROM juegos WHERE id = ?', [id]);
  const juegos = rows as any[];
  const juego = juegos[0];

  if (!juego) {
    notFound();
  }

  return (
    <main className="p-8 bg-slate-900 min-h-screen text-white flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <Link href="/catalog" className="text-blue-400 hover:underline mb-8 inline-block">
          ← Volver al catálogo
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-slate-800 p-10 rounded-3xl shadow-2xl border border-slate-700">
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-inner">
            <Image 
              src={juego.imagen_url || '/juegos/placeholder.jpg'} 
              alt={juego.titulo}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="bg-blue-600 self-start text-[10px] font-bold px-3 py-1 rounded-full uppercase mb-4">
              {juego.plataforma}
            </span>
            <h1 className="text-5xl font-black mb-4 leading-tight">{juego.titulo}</h1>
            <p className="text-4xl font-bold text-blue-400 mb-8">{juego.precio}€</p>
            
            <button className="bg-white text-black hover:bg-blue-500 hover:text-white font-bold py-4 rounded-xl transition-all uppercase tracking-widest shadow-lg">
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}