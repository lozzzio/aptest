import FadeIn from "../ui/FadeIn";
import SectionTitle from "../ui/SectionTitle";

export default function ChiSiamo() {
  return (
    <section id="chi-siamo" className="scroll-mt-20 py-20 md:py-28">
      <FadeIn className="mx-auto max-w-4xl px-6 text-center">
        <SectionTitle
          eyebrow="Chi siamo"
          title="Un'agenzia al tuo fianco, dalla strategia ai risultati"
        />
        <p className="text-lg leading-relaxed text-muted">
          Siamo un team di professionisti con esperienza concreta nell&apos;aiutare
          aziende e liberi professionisti a crescere. Lavoriamo con un approccio
          diretto e trasparente: pochi passaggi inutili, obiettivi chiari e
          risultati misurabili. Ogni progetto nasce da un confronto reale con il
          cliente, per costruire soluzioni su misura e non template generici.
        </p>
      </FadeIn>
    </section>
  );
}
