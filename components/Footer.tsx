export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-zinc-500 sm:flex-row">
        <p>© {year} NomeAgenzia. Tutti i diritti riservati.</p>
        <div className="flex gap-6">
          <a href="#chi-siamo" className="hover:text-zinc-900">Chi siamo</a>
          <a href="#servizi" className="hover:text-zinc-900">Servizi</a>
          <a href="#metodo" className="hover:text-zinc-900">Metodo</a>
          <a href="#contatti" className="hover:text-zinc-900">Contatti</a>
        </div>
      </div>
    </footer>
  );
}
