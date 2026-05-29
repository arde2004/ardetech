import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const requests = [
  {
    name: "Mario Rossi",
    service: "Sito Web Personalizzato",
    budget: "800€ - 1.500€",
    status: "Nuovo",
  },
  {
    name: "Studio Tecnico Demo",
    service: "Gestionale su Misura",
    budget: "Oltre 3.000€",
    status: "Da valutare",
  },
  {
    name: "Cliente Assistenza PC",
    service: "Riparazione Hardware",
    budget: "Fino a 300€",
    status: "In contatto",
  },
];

const stats = [
  { label: "Richieste preventivo", value: "12" },
  { label: "Progetti attivi", value: "4" },
  { label: "Clienti gestiti", value: "8" },
  { label: "Servizi online", value: "6" },
];

export default async function AdminPage() {
  const cookieStore = await cookies();
  const isLogged = cookieStore.get("ardetech_admin_auth")?.value === "ok";

  if (!isLogged) {
    redirect("/admin/login");
  }

  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-8 text-white">
      <div className="absolute left-[-160px] top-[-160px] h-[420px] w-[420px] rounded-full bg-sky-500/20 blur-[130px]" />
      <div className="absolute right-[-180px] top-[160px] h-[520px] w-[520px] rounded-full bg-violet-600/20 blur-[150px]" />

      <section className="relative z-10 mx-auto max-w-7xl">
        <nav className="mb-10 flex items-center justify-between rounded-3xl glass px-6 py-4">
          <a href="/" className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-sky-400 to-violet-500 font-black text-slate-950">
              A
            </div>

            <div className="text-2xl font-black tracking-tight">
              ARDE<span className="gradient-text">TECH</span>
            </div>
          </a>

          <div className="hidden gap-6 text-sm font-semibold text-slate-300 md:flex">
            <a href="/" className="hover:text-sky-400">
              Torna al sito
            </a>
            <a href="#richieste" className="hover:text-sky-400">
              Richieste
            </a>
            <a href="#impostazioni" className="hover:text-sky-400">
              Impostazioni
            </a>
          </div>

          <form action="/api/admin/logout" method="post">
            <button
              type="submit"
              className="rounded-full border border-violet-400/30 bg-violet-400/10 px-5 py-3 text-sm font-black text-violet-200 transition hover:border-violet-400"
            >
              Esci
            </button>
          </form>
        </nav>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="glass rounded-[2.5rem] p-8">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-sky-400">
              Dashboard
            </p>

            <h1 className="text-4xl font-black md:text-6xl">
              Bentornato in{" "}
              <span className="gradient-text">Ardetech Admin.</span>
            </h1>

            <p className="mt-6 leading-8 text-slate-400">
              Questa sarà la tua area privata per controllare richieste
              preventivo, clienti, lavori, portfolio e contenuti del sito.
            </p>

            <div className="mt-8 rounded-3xl border border-amber-400/25 bg-amber-400/10 p-5">
              <h3 className="text-xl font-black text-amber-200">
                Prossimo step
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Ora è una dashboard dimostrativa. Dopo colleghiamo il modulo
                preventivo a un database vero e mostriamo qui le richieste reali.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {stats.map((stat) => (
              <div key={stat.label} className="glass card-hover rounded-3xl p-7">
                <p className="text-sm font-bold text-slate-400">{stat.label}</p>
                <div className="gradient-text mt-4 text-5xl font-black">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        <section id="richieste" className="mt-10 rounded-[2.5rem] glass p-8">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.35em] text-sky-400">
                Preventivi
              </p>
              <h2 className="text-3xl font-black md:text-5xl">
                Ultime richieste
              </h2>
            </div>

            <button className="rounded-full bg-gradient-to-r from-sky-400 to-violet-500 px-6 py-3 font-black text-white">
              Nuova richiesta
            </button>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10">
            <div className="hidden grid-cols-4 bg-white/5 px-6 py-4 text-sm font-black text-slate-400 md:grid">
              <span>Cliente</span>
              <span>Servizio</span>
              <span>Budget</span>
              <span>Stato</span>
            </div>

            {requests.map((request) => (
              <div
                key={`${request.name}-${request.service}`}
                className="grid gap-3 border-t border-white/10 px-6 py-5 text-sm md:grid-cols-4 md:items-center"
              >
                <span className="font-black text-white">{request.name}</span>
                <span className="text-slate-300">{request.service}</span>
                <span className="text-slate-300">{request.budget}</span>
                <span>
                  <span className="rounded-full border border-sky-400/25 bg-sky-400/10 px-3 py-1 text-xs font-black text-sky-300">
                    {request.status}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </section>

        <section
          id="impostazioni"
          className="mt-10 grid gap-6 pb-10 md:grid-cols-3"
        >
          <div className="glass card-hover rounded-3xl p-7">
            <div className="text-3xl">📩</div>
            <h3 className="mt-4 text-xl font-black">Email preventivi</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Collegheremo le richieste del sito alla tua email o a un database.
            </p>
          </div>

          <div className="glass card-hover rounded-3xl p-7">
            <div className="text-3xl">🖼️</div>
            <h3 className="mt-4 text-xl font-black">Portfolio</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Potrai gestire immagini, lavori recenti e descrizioni dei progetti.
            </p>
          </div>

          <div className="glass card-hover rounded-3xl p-7">
            <div className="text-3xl">🔐</div>
            <h3 className="mt-4 text-xl font-black">Login protetto</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              L’accesso admin è protetto da password.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}