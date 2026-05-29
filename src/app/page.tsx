const services = [
  {
    icon: "💻",
    title: "Siti Web Personalizzati",
    text: "Landing page, siti aziendali e piattaforme moderne pensate per vendere, comunicare e farti trovare online.",
  },
  {
    icon: "⚙️",
    title: "Gestionali su Misura",
    text: "Software personalizzati per organizzare clienti, lavori, documenti, scadenze, fatture e processi interni.",
  },
  {
    icon: "🔗",
    title: "Integrazione API",
    text: "Collego software, portali, database e servizi esterni per automatizzare operazioni ripetitive.",
  },
  {
    icon: "🧠",
    title: "Consulenza Informatica",
    text: "Ti aiuto a scegliere strumenti, soluzioni e strategie digitali davvero utili per il tuo lavoro.",
  },
  {
    icon: "🛠️",
    title: "Assistenza Tecnica",
    text: "Supporto per PC, email, stampanti, configurazioni, problemi software e ottimizzazione dispositivi.",
  },
  {
    icon: "🔧",
    title: "Riparazione Hardware",
    text: "Upgrade, formattazione, pulizia, sostituzione componenti, recupero prestazioni e manutenzione PC.",
  },
];

const projects = [
  {
    title: "Gestionale Studio Tecnico",
    type: "Software custom",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Sito Web Premium",
    type: "Website design",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Dashboard Analytics",
    type: "Business intelligence",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Automazioni API",
    type: "Integrazioni",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden text-white">
      <section id="home" className="relative min-h-screen grid-bg px-6 py-7">
        <div className="absolute left-[-180px] top-[-180px] h-[420px] w-[420px] rounded-full bg-sky-500/25 blur-[120px] pulse-glow" />
        <div className="absolute right-[-180px] top-[120px] h-[520px] w-[520px] rounded-full bg-violet-600/25 blur-[140px] pulse-glow" />
        <div className="absolute bottom-[-220px] left-[30%] h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-[130px]" />

        <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between rounded-3xl glass px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-sky-400 to-violet-500 font-black text-slate-950">
              A
            </div>
            <div className="text-2xl font-black tracking-tight">
              ARDE<span className="gradient-text">TECH</span>
            </div>
          </div>

          <div className="hidden gap-8 text-sm font-semibold text-slate-300 md:flex">
            <a href="#home" className="hover:text-sky-400">Home</a>
            <a href="#servizi" className="hover:text-sky-400">Servizi</a>
            <a href="#portfolio" className="hover:text-sky-400">Portfolio</a>
            <a href="#processo" className="hover:text-sky-400">Metodo</a>
            <a href="#contatti" className="hover:text-sky-400">Contatti</a>
          </div>

          <a
            href="#contatti"
            className="rounded-full bg-gradient-to-r from-sky-400 to-violet-500 px-6 py-3 text-sm font-black text-white shadow-xl shadow-sky-500/20"
          >
            Richiedi preventivo
          </a>
        </nav>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 pb-20 pt-24 lg:grid-cols-[1.05fr_.95fr]">
          <div className="reveal">
            <div className="mb-6 inline-flex rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-bold text-sky-300">
              🚀 Software, siti web e soluzioni digitali su misura
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[1.02] md:text-7xl">
              Creo strumenti digitali che fanno sembrare il tuo business{" "}
              <span className="gradient-text">più grande, veloce e moderno.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Ardetech realizza siti web, gestionali personalizzati, software,
              automazioni API, consulenza informatica e assistenza PC per privati,
              professionisti e aziende.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#servizi"
                className="rounded-full bg-gradient-to-r from-sky-400 to-violet-500 px-8 py-4 font-black text-white shadow-2xl shadow-sky-500/25"
              >
                Scopri cosa posso fare →
              </a>

              <a
                href="#portfolio"
                className="rounded-full border border-white/15 bg-white/5 px-8 py-4 font-black text-white backdrop-blur hover:border-sky-400"
              >
                Guarda i lavori
              </a>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-4">
              <div className="glass rounded-2xl p-4">
                <div className="gradient-text text-3xl font-black">100%</div>
                <p className="text-xs text-slate-400">su misura</p>
              </div>
              <div className="glass rounded-2xl p-4">
                <div className="gradient-text text-3xl font-black">24/7</div>
                <p className="text-xs text-slate-400">online</p>
              </div>
              <div className="glass rounded-2xl p-4">
                <div className="gradient-text text-3xl font-black">1:1</div>
                <p className="text-xs text-slate-400">supporto diretto</p>
              </div>
            </div>
          </div>

          <div className="relative reveal">
            <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-sky-500/20 to-violet-500/20 blur-3xl" />

            <div className="relative glass float overflow-hidden rounded-[2rem] p-4">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop"
                alt="Ardetech sviluppo software"
                className="h-[470px] w-full rounded-[1.5rem] object-cover opacity-90"
              />

              <div className="absolute bottom-8 left-8 right-8 rounded-3xl border border-white/10 bg-black/50 p-5 backdrop-blur-xl">
                <p className="text-sm font-bold text-sky-300">ARDETECH SYSTEM</p>
                <p className="mt-2 text-2xl font-black">
                  Web • Software • API • Assistenza
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-4 rounded-3xl glass p-5 md:grid-cols-3 lg:grid-cols-6">
          {services.map((service) => (
            <div key={service.title} className="rounded-2xl border border-white/10 p-5 card-hover">
              <div className="mb-4 text-3xl">{service.icon}</div>
              <h3 className="text-sm font-black">{service.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="servizi" className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-sky-400">
              I servizi
            </p>
            <h2 className="text-4xl font-black md:text-6xl">
              Soluzioni concrete, non fumo.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-400">
              Dal sito web al gestionale completo: creo strumenti che servono davvero,
              belli da vedere e semplici da usare.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="glass card-hover rounded-[2rem] p-8">
                <div className="mb-8 grid h-14 w-14 place-items-center rounded-2xl bg-sky-400/10 text-3xl ring-1 ring-sky-400/30">
                  {service.icon}
                </div>
                <h3 className="mb-4 text-2xl font-black">{service.title}</h3>
                <p className="leading-7 text-slate-400">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="px-6 pb-28">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] glass p-8 md:p-12">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-sky-400">
                Portfolio
              </p>
              <h2 className="text-4xl font-black md:text-6xl">
                Progetti recenti
              </h2>
            </div>

            <a href="#contatti" className="rounded-full border border-white/15 px-6 py-3 font-black hover:border-sky-400">
              Parliamo del tuo progetto →
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {projects.map((project) => (
              <div key={project.title} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 card-hover">
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-52 w-full object-cover opacity-80 transition duration-500 group-hover:scale-110 group-hover:opacity-100"
                />
                <div className="p-6">
                  <p className="mb-2 text-xs font-black uppercase tracking-[0.25em] text-sky-400">
                    {project.type}
                  </p>
                  <h3 className="text-xl font-black">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="processo" className="px-6 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-sky-400">
              Metodo
            </p>
            <h2 className="text-4xl font-black md:text-6xl">
              Da idea a progetto online.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            {["Analisi", "Design", "Sviluppo", "Pubblicazione"].map((step, i) => (
              <div key={step} className="glass card-hover rounded-[2rem] p-8">
                <div className="gradient-text mb-8 text-5xl font-black">
                  0{i + 1}
                </div>
                <h3 className="text-2xl font-black">{step}</h3>
                <p className="mt-4 leading-7 text-slate-400">
                  Procediamo passo per passo, con obiettivi chiari e risultato finale pronto all’uso.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contatti" className="px-6 pb-12">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-sky-400/20 bg-gradient-to-r from-sky-500/15 via-blue-500/10 to-violet-500/15 p-10 md:p-14">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-center">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-sky-400">
                Contatti
              </p>
              <h2 className="text-4xl font-black md:text-6xl">
                Hai un progetto in mente?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Raccontami cosa vuoi creare: sito, gestionale, software, automazione
                o assistenza informatica. Ti aiuto a trasformarlo in qualcosa di reale.
              </p>
            </div>

            <a
              href="https://wa.me/3779635675"
              className="rounded-full bg-gradient-to-r from-sky-400 to-violet-500 px-9 py-5 text-center text-lg font-black text-white shadow-2xl shadow-sky-500/20"
            >
              Richiedi preventivo →
            </a>
          </div>
        </div>

        <footer className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-4 border-t border-white/10 py-8 text-sm text-slate-500 md:flex-row">
          <p>© 2026 Ardetech — Consulenza informatica, siti web e software su misura.</p>
          <p>Made with code, design and caffeine.</p>
        </footer>
      </section>
    </main>
  );
}