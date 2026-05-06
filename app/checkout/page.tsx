import { crearPedido } from "./actions"; // Importamos la acción que creamos

export default function CheckoutPage() {
  return (
    <main className="p-8 bg-slate-900 min-h-screen text-white flex justify-center items-center">
      <div className="max-w-md w-full bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-2xl">
        <h2 className="text-3xl font-black mb-6 uppercase tracking-tighter text-blue-500">Finalizar Compra</h2>
        
        {/* Usamos action={crearPedido} en lugar de onClick */}
        <form action={crearPedido} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Nombre Completo</label>
            <input name="nombre" type="text" required className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 outline-none" placeholder="Zack Herrera" />
          </div>
          
          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Correo Electrónico</label>
            <input name="email" type="email" required className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 outline-none" placeholder="zack@ejemplo.com" />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Método de Pago</label>
            <select name="metodo" className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 outline-none">
              <option value="Tarjeta">Tarjeta de Crédito</option>
              <option value="PayPal">PayPal</option>
            </select>
          </div>

          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl mt-6 transition-all uppercase tracking-widest">
            Confirmar Pedido
          </button>
        </form>
      </div>
    </main>
  );
}