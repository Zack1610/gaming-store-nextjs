import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-slate-900">
      
      {/* Efecto de Luces de fondo (Gaming Vibes) */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="relative z-10 text-center px-6">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 uppercase">
          Eleva tu <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            Experiencia
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed font-medium">
          Bienvenido a <span className="text-white font-bold">Zaming Store</span>. 
          Explora nuestra selección exclusiva de títulos para PS5, Switch, Xbox One/X con la mejor tecnología.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/catalog" 
            className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all hover:scale-105 shadow-lg shadow-blue-600/20 uppercase tracking-widest"
          >
            Explorar Catálogo
          </Link>
          
        </div>

        {/* Stats rápidos (Estético) */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-slate-800 pt-10">
          <div>
            <p className="text-3xl font-black text-white">+20</p>
            <p className="text-slate-500 text-sm uppercase font-bold tracking-widest">Juegos</p>
          </div>
          <div>
            <p className="text-3xl font-black text-white">5 min</p>
            <p className="text-slate-500 text-sm uppercase font-bold tracking-widest">Entrega</p>
          </div>
          <div className="hidden md:block">
            <p className="text-3xl font-black text-white">100%</p>
            <p className="text-slate-500 text-sm uppercase font-bold tracking-widest">Seguro</p>
          </div>
        </div>
      </div>
    </main>
  );
}
