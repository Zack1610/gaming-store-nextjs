"use server";

import { db } from "@/lib/db";
import { redirect } from "next/navigation";

export async function crearPedido(formData: FormData) {
  // Extraemos los datos del formulario
  const nombre = formData.get("nombre");
  const email = formData.get("email");
  const metodo = formData.get("metodo");

  // Insertamos en la base de datos
  await db.query(
    "INSERT INTO pedidos (nombre_cliente, email, metodo_pago) VALUES (?, ?, ?)",
    [nombre, email, metodo]
  );

  // Redirigimos a la página de éxito
  redirect("/success");
}