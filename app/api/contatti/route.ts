import { NextResponse } from "next/server";
import { createSupabaseAdminClient } from "@/lib/supabase/server";
import type { ContattoFormData } from "@/types/contatto";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: ContattoFormData;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Corpo della richiesta non valido." }, { status: 400 });
  }

  const nome = body.nome?.trim();
  const email = body.email?.trim();
  const azienda = body.azienda?.trim();
  const messaggio = body.messaggio?.trim();

  if (!nome || !email || !messaggio) {
    return NextResponse.json(
      { error: "Compila tutti i campi obbligatori." },
      { status: 400 }
    );
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: "Indirizzo email non valido." }, { status: 400 });
  }

  const supabase = createSupabaseAdminClient();

  const { error } = await supabase.from("contatti").insert({
    nome,
    email,
    azienda: azienda || null,
    messaggio,
  });

  if (error) {
    console.error("Errore inserimento contatto:", error.message);
    return NextResponse.json(
      { error: "Errore durante l'invio. Riprova più tardi." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true }, { status: 201 });
}
