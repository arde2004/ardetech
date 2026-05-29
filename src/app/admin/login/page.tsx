"use client";

import { FormEvent, useState } from "react";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setError("");

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    });

    if (!response.ok) {
      setError("Password non corretta.");
      setLoading(false);
      return;
    }

    window.location.href = "/admin";
  }

  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-8 text-white">
      <div className="absolute left-[-180px] top-[-180px] h-[430px] w-[430px] rounded-full bg-sky-500/25 blur-[130px] pulse-glow" />
      <div className="absolute right-[-200px] top-[160px] h-[540px] w-[540px] rounded-full bg-violet-600/25 blur-[150px] pulse-glow" />

      <section className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl items-center justify-center">
        <div className="glass w-full max-w-xl rounded-[2.5rem] p-8 md:p-10">
          <a href="/" className="mb-10 flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-sky-400 to-violet-500 font-black text-slate-950">
              A
            </div>

            <div className="text-2xl font-black tracking-tight">
              ARDE<span className="gradient-text">TECH</span>
            </div>
          </a>

          <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-sky-400">
            Area riservata
          </p>

          <h1 className="text-4xl font-black md:text-5xl">
            Accesso admin
          </h1>

          <p className="mt-5 leading-7 text-slate-400">
            Inserisci la password per entrare nella dashboard Ardetech.
          </p>

          <form onSubmit={handleLogin} className="mt-8">
            <label className="mb-2 block text-sm font-bold text-slate-300">
              Password
            </label>

            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400"
              placeholder="Inserisci password"
            />

            {error && (
              <div className="mt-4 rounded-2xl border border-red-400/25 bg-red-400/10 px-5 py-4 text-sm font-bold text-red-200">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full rounded-full bg-gradient-to-r from-sky-400 to-violet-500 px-8 py-4 font-black text-white shadow-2xl shadow-sky-500/20 transition hover:scale-[1.02] disabled:opacity-60"
            >
              {loading ? "Accesso in corso..." : "Entra nella dashboard →"}
            </button>

            <a
              href="/"
              className="mt-5 block text-center text-sm font-bold text-slate-400 hover:text-sky-400"
            >
              Torna al sito
            </a>
          </form>
        </div>
      </section>
    </main>
  );
}