<script setup lang="ts">
import BaseIcon from '@/ui/base/BaseIcon.vue'

const socialLinks = [
  { icon: 'github', url: 'https://github.com/ersync', label: 'GitHub' },
  { icon: 'linkedin', url: 'https://linkedin.com/in/erahimidev', label: 'LinkedIn' }
]

const evidence = [
  { value: '4.8/5', label: 'average client rating' },
  { value: '100%', label: 'success and on-time delivery' }
]
</script>

<template>
  <section id="home" class="hero-surface relative isolate flex min-h-svh overflow-hidden">
    <div class="hero-grid" aria-hidden="true" />
    <div class="hero-beam" aria-hidden="true" />
    <div class="hero-orbit" aria-hidden="true" />

    <div
      class="hero-layout relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-28 sm:px-8 lg:px-12 lg:py-24"
    >
      <div class="hero-copy">
        <div class="hero-intro">
          <div class="mb-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            <span class="font-semibold text-teal-200">Full-stack developer</span>
            <span class="hidden h-px w-8 bg-white/20 sm:block" aria-hidden="true" />
            <span class="hidden text-slate-300 sm:inline">Kurdistan, Iran</span>
          </div>

          <h1 class="font-display font-semibold leading-[0.86] tracking-[-0.075em]">
            <span class="block text-[clamp(4.4rem,8.5vw,8rem)] text-white">Emad</span>
            <span class="hero-name block w-fit text-[clamp(4.4rem,8.5vw,8rem)]">Rahimi.</span>
          </h1>
        </div>

        <div class="hero-body">
          <p class="max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            I build complete web products, from backend systems to final interaction. I focus on
            clarity, reliability, and lasting quality.
          </p>

          <div class="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              class="group inline-flex items-center gap-3 rounded-xl bg-teal-300 px-5 py-3 font-semibold text-slate-950 shadow-[0_14px_40px_rgba(94,234,212,0.22)] transition hover:-translate-y-0.5 hover:bg-teal-200 hover:shadow-[0_18px_48px_rgba(94,234,212,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-200"
            >
              Explore the work
              <svg
                class="size-4 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                aria-hidden="true"
              >
                <path d="M5 12h14m-5-5 5 5-5 5" />
              </svg>
            </a>
            <a
              href="mailto:contact@emadrahimi.dev"
              class="inline-flex items-center rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3 font-semibold text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-200"
            >
              Start a conversation
            </a>
          </div>

          <div class="mt-9 flex flex-wrap items-center gap-5">
            <div class="flex gap-2">
              <a
                v-for="link in socialLinks"
                :key="link.url"
                :href="link.url"
                :aria-label="link.label"
                target="_blank"
                rel="noopener noreferrer"
                class="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition hover:border-teal-200/35 hover:bg-teal-300/10 hover:text-teal-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-200"
              >
                <BaseIcon :name="link.icon" class="size-[18px]" />
              </a>
            </div>
            <span class="flex items-center gap-2 text-sm text-slate-300">
              <span
                class="size-2 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.75)]"
              />
              Open to product work
            </span>
          </div>
        </div>
      </div>

      <aside
        class="hero-console relative mx-auto w-full max-w-[32rem]"
        aria-label="Professional delivery record"
      >
        <div
          class="console-panel relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#081526]/90 shadow-[0_40px_100px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
        >
          <div class="console-sheen" aria-hidden="true" />
          <div class="relative p-5 sm:p-8">
            <div class="flex items-start justify-between gap-5">
              <div>
                <p
                  class="font-mono text-[10px] font-semibold tracking-[0.14em] text-teal-200 uppercase"
                >
                  Independent delivery
                </p>
                <h2
                  class="mt-4 max-w-sm font-display text-2xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-4xl"
                >
                  From architecture to interface. Shipped.
                </h2>
              </div>
              <img
                src="@/assets/images/logos/er-mark.svg"
                class="size-12 shrink-0 drop-shadow-[0_10px_24px_rgba(45,212,191,0.14)]"
                alt=""
              />
            </div>

            <div class="mt-8 grid grid-cols-2 border-y border-white/10">
              <div
                v-for="(item, index) in evidence"
                :key="item.label"
                class="py-5"
                :class="index > 0 ? 'border-l border-white/10 pl-5 sm:pl-7' : 'pr-5 sm:pr-7'"
              >
                <span class="font-display text-3xl font-semibold tracking-[-0.05em] text-teal-200">
                  {{ item.value }}
                </span>
                <span class="mt-2 block text-xs leading-5 text-slate-300">{{ item.label }}</span>
              </div>
            </div>

            <div class="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold">
              <a
                href="https://www.karlancer.com/profile/932817"
                target="_blank"
                rel="noopener noreferrer"
                class="text-slate-300 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-200"
              >
                Public profile ↗
              </a>
              <a
                href="/emad_rahimi_cv.pdf"
                download
                class="text-teal-200 transition-colors hover:text-teal-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-200"
              >
                Download CV ↓
              </a>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>

<style scoped>
.hero-surface {
  background:
    radial-gradient(circle at 72% 28%, rgba(20, 184, 166, 0.2), transparent 28rem),
    radial-gradient(circle at 88% 84%, rgba(124, 58, 237, 0.14), transparent 30rem),
    linear-gradient(145deg, #020611 0%, #04101c 52%, #050816 100%);
}

.hero-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(148, 163, 184, 0.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148, 163, 184, 0.045) 1px, transparent 1px);
  background-size: 52px 52px;
  mask-image: radial-gradient(circle at 55% 45%, black, transparent 78%);
}

.hero-beam {
  position: absolute;
  top: -18rem;
  left: 46%;
  width: 10rem;
  height: 90rem;
  background: linear-gradient(to right, transparent, rgba(94, 234, 212, 0.08), transparent);
  filter: blur(18px);
  transform: rotate(24deg);
  animation: spotlight-enter 2.2s cubic-bezier(0.16, 1, 0.3, 1) 700ms both;
}

.hero-orbit {
  position: absolute;
  top: 8%;
  right: -15%;
  width: min(54rem, 72vw);
  aspect-ratio: 1.5;
  border: 1px solid rgba(94, 234, 212, 0.1);
  border-radius: 50%;
  transform: rotate(-18deg);
}

.hero-layout {
  display: grid;
  grid-template-areas:
    'intro'
    'body'
    'console';
  gap: 2.5rem;
  align-items: center;
}

.hero-copy {
  display: contents;
}

.hero-intro {
  grid-area: intro;
}

.hero-body {
  grid-area: body;
}

.hero-console {
  grid-area: console;
}

.hero-name {
  color: transparent;
  background: linear-gradient(
    110deg,
    #f8fafc 0%,
    #cbd5e1 20%,
    #5eead4 44%,
    #818cf8 68%,
    #f8fafc 100%
  );
  background-size: 240% 100%;
  background-clip: text;
  animation: name-shift 8s ease-in-out infinite;
}

.hero-intro,
.hero-body,
.hero-console {
  animation: hero-enter 700ms cubic-bezier(0.22, 1, 0.36, 1) both;
}

.hero-body {
  animation-delay: 80ms;
}

.hero-console {
  animation-delay: 120ms;
}

.console-panel {
  transform: perspective(80rem) rotateY(-2.5deg) rotateX(1deg);
  transform-origin: center;
}

.console-sheen {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.06), transparent 28%),
    radial-gradient(circle at 100% 0%, rgba(94, 234, 212, 0.12), transparent 35%);
}

@keyframes hero-enter {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes spotlight-enter {
  from {
    opacity: 0;
  }

  65% {
    opacity: 1;
  }

  82% {
    opacity: 0.88;
  }

  to {
    opacity: 1;
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

@media (max-width: 1023px) {
  .console-panel {
    transform: none;
  }
}

@media (max-width: 639px) {
  .hero-surface {
    background:
      radial-gradient(circle at 72% 28%, rgba(20, 184, 166, 0.11), transparent 24rem),
      radial-gradient(circle at 88% 84%, rgba(124, 58, 237, 0.11), transparent 26rem),
      linear-gradient(145deg, #020611 0%, #04101c 52%, #050816 100%);
  }

  .hero-beam {
    background: linear-gradient(to right, transparent, rgba(94, 234, 212, 0.045), transparent);
  }

  .hero-orbit {
    border-color: rgba(94, 234, 212, 0.055);
  }
}

@media (min-width: 1024px) {
  .hero-layout {
    grid-template-areas:
      'intro console'
      'body console';
    grid-template-columns: minmax(0, 1.08fr) minmax(0, 0.92fr);
    column-gap: 4rem;
    row-gap: 2rem;
  }

  .hero-intro {
    align-self: end;
  }

  .hero-body {
    align-self: start;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-name,
  .hero-intro,
  .hero-body,
  .hero-console,
  .hero-beam {
    animation: none;
  }

  .hero-beam {
    opacity: 1;
    transform: rotate(24deg);
  }
}
</style>
