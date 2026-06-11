"use client";

import { FormEvent, useState } from "react";
import Button from "../ui/Button";
import FadeIn from "../ui/FadeIn";
import SectionTitle from "../ui/SectionTitle";

type Status = "idle" | "loading" | "success" | "error";

export default function Contatti() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      nome: formData.get("nome") as string,
      email: formData.get("email") as string,
      azienda: formData.get("azienda") as string,
      messaggio: formData.get("messaggio") as string,
    };

    try {
      const response = await fetch("/api/contatti", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Si è verificato un errore. Riprova.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Si è verificato un errore. Riprova."
      );
    }
  }

  return (
    <section id="contatti" className="scroll-mt-20 bg-zinc-50 py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-6">
        <FadeIn>
        <SectionTitle
          eyebrow="Contatti"
          title="Parliamo del tuo progetto"
          description="Compila il modulo: ti risponderemo entro 24 ore lavorative."
        />

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="nome" className="mb-1.5 block text-sm font-medium text-zinc-900">
                Nome e cognome *
              </label>
              <input
                type="text"
                name="nome"
                id="nome"
                required
                className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-zinc-900">
                Email *
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          <div>
            <label htmlFor="azienda" className="mb-1.5 block text-sm font-medium text-zinc-900">
              Azienda
            </label>
            <input
              type="text"
              name="azienda"
              id="azienda"
              className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="messaggio" className="mb-1.5 block text-sm font-medium text-zinc-900">
              Messaggio *
            </label>
            <textarea
              name="messaggio"
              id="messaggio"
              required
              rows={5}
              className="w-full resize-none rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>

          <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
            {status === "loading" ? "Invio in corso..." : "Invia messaggio"}
          </Button>

          {status === "success" && (
            <p className="text-sm font-medium text-emerald-600">
              Grazie! Il tuo messaggio è stato inviato con successo.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm font-medium text-red-600">{errorMessage}</p>
          )}
        </form>
        </FadeIn>
      </div>
    </section>
  );
}
