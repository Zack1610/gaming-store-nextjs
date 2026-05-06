import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
      {/* Añadimos flex y min-h-screen para que el footer no "flote" a mitad de pantalla */}
      <body className={`${geistSans.variable} antialiased bg-slate-900 text-white flex flex-col min-h-screen`}>
        
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
          </div>
        </nav>

        {/* Contenido de cada página - flex-grow empuja al footer hacia abajo */}
        <div className="flex-grow">
          {children}
        </div>

        {/* --- FOOTER GLOBAL --- */}
        <footer className="border-t border-slate-800 bg-slate-900 py-12">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <p className="text-xl font-black tracking-tighter">
                ZAMING <span className="text-blue-500">STORE</span>
              </p>
              <p className="text-slate-500 text-sm mt-2">
                © 2026 Zack - Proyecto DAM 1. Todos los derechos reservados.
              </p>
            </div>
            
            <div className="flex gap-6 text-slate-400 text-sm font-bold uppercase tracking-widest">
              <a 
            href="https://github.com/Zack1610" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-500 transition-colors"
>
              GitHub
              </a>
            </div>
          </div>
        </footer>
        
      </body>
    </html>
  );
}