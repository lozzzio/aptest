import FadeIn from "../ui/FadeIn";
import SectionTitle from "../ui/SectionTitle";

const passaggi = [
  {
    numero: "01",
    title: "Ascolto",
    description:
      "Analizziamo le tue esigenze, il contesto e gli obiettivi attraverso un primo confronto senza impegno.",
  },
  {
    numero: "02",
    title: "Proposta",
    description:
      "Definiamo insieme una strategia e un piano operativo chiaro, con tempistiche e costi trasparenti.",
  },
  {
    numero: "03",
    title: "Realizzazione",
    description:
      "Sviluppiamo la soluzione tenendoti aggiornato passo dopo passo, con momenti di verifica condivisi.",
  },
  {
    numero: "04",
    title: "Crescita continua",
    description:
      "Monitoriamo i risultati e proponiamo ottimizzazioni per migliorare le performance nel tempo.",
  },
];

export default function Metodo() {
  return (
    <section id="metodo" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionTitle
            eyebrow="Metodo"
            title="Come lavoriamo"
            description="Un processo semplice e trasparente, pensato per portarti risultati concreti."
          />
        </FadeIn>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {passaggi.map((passo, index) => (
            <FadeIn key={passo.numero} delay={index * 100}>
              <span className="text-sm font-bold text-primary">{passo.numero}</span>
              <h3 className="mt-2 mb-2 text-lg font-semibold text-zinc-900">
                {passo.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {passo.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
