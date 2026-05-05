import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link"; // Importante para la navegación rápida

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zaming Store",
  description: "Tu tienda de juegos de confianza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} antialiased bg-slate-900 text-white`}>
        {/* --- NAVBAR GLOBAL --- */}
        <nav className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-2xl font-black tracking-tighter hover:text-blue-500 transition-colors">
              ZAMING <span className="text-blue-500">STORE</span>
            </Link>

            {/* Enlaces */}
            <div className="flex gap-8 font-bold text-sm uppercase tracking-widest">
              <Link href="/" className="hover:text-blue-500 transition-colors">
                Inicio
              </Link>
              <Link href="/catalog" className="hover:text-blue-500 transition-colors">
                Catálogo
              </Link>
            </div>

            {/* Botón de Perfil / Carrito (Estético por ahora) */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center hover:border-blue-500 cursor-pointer transition-all">
                🛒
              </div>
            </div>
          </div>
        </nav>

        {/* Contenido de cada página */}
        {children}
      </body>
    </html>
  );
}