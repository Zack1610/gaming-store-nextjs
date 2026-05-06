import Link from 'next/link';

export default function SuccessPage() {
  return (
    <main className="min-h-[calc(100vh-80px)] bg-slate-900 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center space-y-8 bg-slate-800 p-12 rounded-[40px] border border-slate-700 shadow-2xl relative overflow-hidden">
        
        {/* Decoración de fondo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.5)]" />

        <div className="space-y-4">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="text-5xl font-black tracking-tighter uppercase text-white">
            ¡Gracias por <br />
            <span className="text-blue-500">tu compra!</span>
          </h1>
          <p className="text-slate-400 text-lg font-medium">
            Tu pedido ha sido procesado correctamente. <br />
            Recibirás un correo de confirmación en unos minutos.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Link 
            href="/catalog" 
            className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all uppercase tracking-widest text-sm shadow-lg shadow-blue-900/20"
          >
            Seguir Comprando
          </Link>
          
          <Link 
            href="/" 
            className="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-2xl transition-all border border-slate-600 uppercase tracking-widest text-sm"
          >
            Ir al Inicio
          </Link>
        </div>
      </div>
    </main>
  );
}