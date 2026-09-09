import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Achieve Your 6 Month Goal in 8 Weeks | Execution Sprint" },
      {
        name: "description",
        content:
          "The science of execution. Watch the breakdown, then apply for the 7-day execution sprint and compress 6 months of momentum into 8 weeks.",
      },
      { property: "og:title", content: "Achieve Your 6 Month Goal in 8 Weeks" },
      {
        property: "og:description",
        content:
          "The science of execution. Watch the video, then apply for the 7-day execution sprint.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const fadeUp = "animate-[fade-up_0.7s_var(--ease-smooth)_both]";

function Index() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-background font-body text-foreground antialiased">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -left-40 -top-48 h-[620px] w-[620px] rounded-full bg-accent/15 blur-[140px]" />
        <div className="absolute right-[-180px] top-[28%] h-[520px] w-[520px] rounded-full bg-accent/10 blur-[140px]" />
        <div className="absolute bottom-[-160px] left-1/3 h-[480px] w-[480px] rounded-full bg-secondary blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Nav */}
        <nav className="flex items-center justify-between py-7 animate-[fade-up_0.6s_var(--ease-smooth)_both]">
          <div className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-md bg-accent font-display font-extrabold text-accent-foreground">
              AX
            </span>
            <span className="font-display text-lg font-extrabold tracking-tight">
              AXIOM<span className="text-accent">/</span>EXEC
            </span>
          </div>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground sm:block">
            Execution Sprint · 07
          </span>
        </nav>

        {/* Hero + VSL */}
        <section className="pb-14 pt-6">
          <div className="relative">
            <div className="pointer-events-none absolute left-[-6%] top-1/2 z-0 h-[140%] w-[46%] -translate-y-1/2 rotate-[10deg] rounded-3xl border border-border bg-glass backdrop-blur-xl animate-[glass-in_0.9s_var(--ease-smooth)_both] [--gx:60px]" />
            <div className="pointer-events-none absolute right-[-6%] top-1/2 z-0 h-[120%] w-[40%] -translate-y-1/2 -rotate-[10deg] rounded-3xl border border-border bg-glass-strong backdrop-blur-xl animate-[glass-in_1.1s_var(--ease-smooth)_both] [--gx:-60px] [animation-delay:120ms]" />

            <div className="relative z-10 mx-auto max-w-3xl text-center">
              <span
                className={`inline-flex items-center gap-2 rounded-full border border-border bg-glass px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground backdrop-blur-md ${fadeUp} [animation-delay:60ms]`}
              >
                <span className="size-1.5 rounded-full bg-accent animate-[pulse-dot_1.6s_ease-in-out_infinite]" />
                7-Day Execution Sprint · 8 weeks
              </span>
              <h1
                className={`mt-6 font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-balance sm:text-6xl md:text-7xl ${fadeUp} [animation-delay:120ms]`}
              >
                Achieve Your 6&nbsp;Month Goal In{" "}
                <span className="text-accent">8&nbsp;Weeks</span>
              </h1>
              <p
                className={`mx-auto mt-5 max-w-[38ch] font-body text-lg text-pretty text-muted-foreground ${fadeUp} [animation-delay:200ms]`}
              >
                <span className="underline underline-offset-4 decoration-accent/60">The Science of Execution</span> — a Repeatable System, Not a Motivation Hack.
              </p>
            </div>

            <div
              className={`relative z-10 mx-auto mt-10 max-w-3xl ${fadeUp} [animation-delay:300ms]`}
            >
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-background/50 shadow-[0_40px_120px_-30px_rgba(56,189,248,0.35)]">
                <div className="grid aspect-[16/9] w-full place-items-center bg-gradient-to-br from-accent/10 via-background to-secondary">
                  <div className="flex flex-col items-center gap-3">
                    <button
                      className="grid size-16 cursor-pointer place-items-center rounded-full bg-accent text-accent-foreground transition-transform duration-300 hover:scale-105 hover:ring-4 hover:ring-accent/30"
                      aria-label="Play video"
                    >
                      <span className="ml-1 inline-block h-0 w-0 border-y-[11px] border-l-[18px] border-y-transparent border-l-current" />
                    </button>
                    <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                      Watch the VSL · 04:12
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application */}
        <section className="pb-24">
          <div className="relative mx-auto max-w-2xl">
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[130%] w-[115%] -translate-x-1/2 -translate-y-1/2 -rotate-[3deg] rounded-[2rem] border border-border bg-glass backdrop-blur-2xl animate-[glass-in_0.9s_var(--ease-smooth)_both] [--gx:0px] [animation-delay:120ms]" />
            <form
              onSubmit={handleSubmit}
              className={`relative z-10 rounded-2xl border border-border bg-background/70 p-7 backdrop-blur-xl sm:p-9 ${fadeUp} [animation-delay:200ms]`}
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                Application 01
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
                Apply For The Sprint
              </h2>
              <p className="mt-2 max-w-[40ch] text-pretty text-muted-foreground">
                Seventy-Two Hours Of Pure Execution. Tell Us What You're
                Committing To — We'll Tell You If You're A Fit.
              </p>

              {submitted ? (
                <div className="mt-7 rounded-lg border border-accent/40 bg-accent/10 p-6 text-center">
                  <p className="font-display text-lg font-extrabold tracking-tight text-accent">
                    Application Received.
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    We'll Reply Within 24 Hours. Get Ready To Execute.
                  </p>
                </div>
              ) : (
                <div className="mt-7 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                        Full Name
                      </span>
                      <input
                        type="text"
                        required
                        placeholder="Jordan Reyes"
                        className="mt-2 w-full rounded-lg border border-border bg-background/60 px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-accent/60 focus:bg-background/80"
                      />
                    </label>
                    <label className="block">
                      <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                        Email
                      </span>
                      <input
                        type="email"
                        required
                        placeholder="you@domain.com"
                        className="mt-2 w-full rounded-lg border border-border bg-background/60 px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-accent/60 focus:bg-background/80"
                      />
                    </label>
                  </div>
                  <label className="block">
                    <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                      Your 6-Month Goal
                    </span>
                    <textarea
                      rows={3}
                      required
                      placeholder="Hit $40k/mo and hire my first two people"
                      className="mt-2 w-full resize-none rounded-lg border border-border bg-background/60 px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-accent/60 focus:bg-background/80"
                    />
                  </label>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="flex items-start gap-3 rounded-lg border border-border bg-background/50 p-3.5">
                      <input
                        type="radio"
                        name="commit"
                        required
                        className="mt-0.5 size-4 shrink-0 accent-[oklch(0.78_0.15_210)]"
                      />
                      <span className="text-sm leading-snug">
                        I'll execute even on the
                        <br />
                        <span className="text-muted-foreground">
                          days I don't feel like it.
                        </span>
                      </span>
                    </label>
                    <label className="flex items-start gap-3 rounded-lg border border-border bg-background/50 p-3.5">
                      <input
                        type="radio"
                        name="commit"
                        className="mt-0.5 size-4 shrink-0 accent-[oklch(0.78_0.15_210)]"
                      />
                      <span className="text-sm leading-snug">
                        I'm done planning. I need
                        <br />
                        <span className="text-muted-foreground">
                          a system that forces output.
                        </span>
                      </span>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full cursor-pointer rounded-lg bg-accent px-4 py-3.5 font-display text-sm font-extrabold tracking-tight text-accent-foreground transition-all duration-200 hover:bg-accent/90 hover:shadow-[0_10px_40px_-8px_rgba(56,189,248,0.6)]"
                  >
                    Apply for the 7-day sprint →
                  </button>
                  <p className="text-center font-mono text-[11px] tracking-[0.1em] text-muted-foreground">
                    No spam · 24h response · 40 spots
                  </p>
                </div>
              )}
            </form>
          </div>
        </section>

        <footer className="flex flex-col items-center justify-between gap-3 border-t border-border py-8 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground sm:flex-row">
          <span>AXIOM/EXEC — The Science Of Execution</span>
          <span>© 2026 · Sprint Protocol 07</span>
        </footer>
      </div>
    </div>
  );
}
