<script setup lang="ts">
import BaseIcon from '@/ui/base/BaseIcon.vue'

const socialLinks = [
  { icon: 'github', url: 'https://github.com/ersync', label: 'GitHub' },
  { icon: 'linkedin', url: 'https://linkedin.com/in/erahimidev', label: 'LinkedIn' }
]
</script>

<template>
  <section id="home" class="hero-surface relative isolate flex min-h-svh overflow-hidden">
    <div class="hero-glow" aria-hidden="true" />
    <div class="hero-grid" aria-hidden="true" />

    <div
      class="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pb-20 pt-28 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-12 lg:py-24"
    >
      <div class="hero-copy">
        <div
          class="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-400/10 px-3 py-1.5 text-xs font-medium text-teal-300 sm:text-sm"
        >
          <span class="size-1.5 rounded-full bg-teal-300 shadow-[0_0_12px_rgba(94,234,212,0.8)]" />
          Available for thoughtful work
        </div>

        <p class="mb-2 text-sm font-medium tracking-[0.18em] text-slate-400 uppercase">
          Full-stack developer
        </p>
        <h1
          class="hero-name font-display text-5xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-7xl"
        >
          Emad Rahimi
        </h1>
        <p class="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
          I build web products end to end—from reliable Rails systems and APIs to Vue interfaces
          that feel quick, clear, and considered.
        </p>

        <div class="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            class="inline-flex items-center gap-2 rounded-xl bg-teal-500 px-5 py-3 font-medium text-slate-950 shadow-[0_14px_35px_rgba(20,184,166,0.2)] transition hover:-translate-y-0.5 hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300"
          >
            View projects
            <svg
              class="size-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a
            href="#contact"
            class="inline-flex items-center rounded-xl border border-slate-700 bg-slate-900/60 px-5 py-3 font-medium text-slate-200 backdrop-blur transition hover:-translate-y-0.5 hover:border-slate-600 hover:bg-slate-800/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300"
          >
            Contact me
          </a>
        </div>

        <div class="mt-9 flex items-center gap-3">
          <a
            v-for="link in socialLinks"
            :key="link.url"
            :href="link.url"
            :aria-label="link.label"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex size-11 items-center justify-center rounded-xl border border-slate-700/80 bg-slate-900/60 text-slate-400 transition hover:-translate-y-0.5 hover:border-teal-400/40 hover:text-teal-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300"
          >
            <BaseIcon :name="link.icon" class="size-5 transition-transform group-hover:scale-105" />
          </a>
        </div>
      </div>

      <aside class="hero-card relative mx-auto w-full max-w-lg" aria-label="Developer profile">
        <div class="card-shadow" aria-hidden="true" />
        <div
          class="relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/80 shadow-2xl shadow-black/30 backdrop-blur-xl"
        >
          <div class="flex items-center justify-between border-b border-slate-700/70 px-4 py-3">
            <div class="flex gap-1.5" aria-hidden="true">
              <span class="size-2.5 rounded-full bg-rose-400" />
              <span class="size-2.5 rounded-full bg-amber-300" />
              <span class="size-2.5 rounded-full bg-emerald-400" />
            </div>
            <span class="font-mono text-xs text-slate-500">profile.ts</span>
          </div>

          <pre
            class="overflow-x-auto p-5 font-mono text-[12px] leading-7 text-slate-300 sm:p-7 sm:text-sm"
          ><code><span class="code-purple">const</span> <span class="code-blue">emad</span> = {
  <span class="code-green">worksWith</span>: [<span class="code-rose">'Rails'</span>, <span class="code-rose">'Vue'</span>],
  <span class="code-green">caresAbout</span>: [<span class="code-rose">'clarity'</span>, <span class="code-rose">'speed'</span>],
  <span class="code-green">ships</span>: <span class="code-orange">true</span>
}</code></pre>

          <div
            class="flex items-center justify-between gap-4 border-t border-slate-700/70 px-5 py-4"
          >
            <span class="hidden text-sm text-slate-500 sm:block">A closer look at my work</span>
            <a
              href="/emad_rahimi_cv.pdf"
              download
              class="inline-flex items-center gap-2 rounded-lg border border-teal-400/20 bg-teal-400/10 px-3.5 py-2 text-sm font-medium text-teal-300 transition hover:border-teal-400/40 hover:bg-teal-400/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300"
            >
              <svg
                class="size-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                aria-hidden="true"
              >
                <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 19h14" />
              </svg>
              Download CV
            </a>
          </div>
        </div>
      </aside>
    </div>

    <a
      href="#about"
      class="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1 text-xs text-slate-500 transition hover:text-teal-300 sm:flex"
    >
      Explore
      <svg
        class="size-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        aria-hidden="true"
      >
        <path d="m7 10 5 5 5-5" />
      </svg>
    </a>
  </section>
</template>

<style scoped>
.hero-surface {
  background:
    radial-gradient(circle at 15% 20%, rgba(13, 148, 136, 0.14), transparent 32rem),
    radial-gradient(circle at 85% 75%, rgba(30, 64, 175, 0.12), transparent 30rem), #020617;
}

.hero-glow {
  position: absolute;
  top: 12%;
  right: 15%;
  width: min(32rem, 60vw);
  aspect-ratio: 1;
  border-radius: 9999px;
  background: rgba(20, 184, 166, 0.08);
  filter: blur(100px);
}

.hero-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(148, 163, 184, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148, 163, 184, 0.035) 1px, transparent 1px);
  background-size: 32px 32px;
  mask-image: linear-gradient(to bottom, black 35%, transparent 95%);
}

.hero-name {
  width: fit-content;
  color: transparent;
  background: linear-gradient(
    110deg,
    #f8fafc 0%,
    #cbd5e1 24%,
    #5eead4 46%,
    #818cf8 68%,
    #f8fafc 100%
  );
  background-size: 240% 100%;
  background-clip: text;
  animation: name-shift 8s ease-in-out infinite;
}

.hero-copy,
.hero-card {
  animation: hero-enter 650ms cubic-bezier(0.22, 1, 0.36, 1) both;
}

.hero-card {
  animation-delay: 100ms;
}

.card-shadow {
  position: absolute;
  inset: 1.25rem -1rem -1.25rem 1.25rem;
  z-index: -1;
  border-radius: 1rem;
  background: linear-gradient(135deg, rgba(20, 184, 166, 0.18), rgba(37, 99, 235, 0.1));
  filter: blur(1px);
}

.code-purple {
  color: #c4b5fd;
}

.code-blue {
  color: #7dd3fc;
}

.code-green {
  color: #6ee7b7;
}

.code-rose {
  color: #fda4af;
}

.code-orange {
  color: #fdba74;
}

@keyframes hero-enter {
  from {
    opacity: 0;
    transform: translateY(18px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes name-shift {
  0%,
  100% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-name,
  .hero-copy,
  .hero-card {
    animation: none;
  }
}
</style>
