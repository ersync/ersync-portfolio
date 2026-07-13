<script setup lang="ts">
const year = new Date().getFullYear()

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' }
]
</script>

<template>
  <footer class="relative overflow-hidden border-t border-white/[0.06] bg-[#030610]">
    <div
      class="pointer-events-none absolute -bottom-40 left-1/2 size-96 -translate-x-1/2 rounded-full bg-teal-400/[0.06] blur-3xl"
      aria-hidden="true"
    />

    <div class="container relative py-10 sm:py-14">
      <div class="grid items-end gap-8 border-b border-white/[0.07] pb-9 md:grid-cols-[1fr_auto]">
        <div>
          <p class="font-display text-xs font-semibold tracking-[0.06em] text-teal-200 uppercase">
            End of page, not the conversation
          </p>
          <p
            class="mt-3 max-w-2xl font-display text-2xl font-semibold tracking-[-0.035em] text-white sm:text-3xl"
          >
            Thanks for making it this far.
          </p>
        </div>

        <a
          href="#home"
          class="group inline-flex items-center gap-3 text-sm font-semibold text-slate-400 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300"
        >
          Back to top
          <span
            class="flex size-10 items-center justify-center rounded-full border border-white/[0.09] transition group-hover:border-teal-300/40 group-hover:bg-teal-400/10 group-hover:text-teal-200"
          >
            <svg
              class="size-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              aria-hidden="true"
            >
              <path d="m7 14 5-5 5 5" />
            </svg>
          </span>
        </a>
      </div>

      <div class="flex flex-col gap-7 pt-7 sm:flex-row sm:items-center sm:justify-between">
        <a href="#home" class="group flex w-fit items-center gap-3" aria-label="Emad Rahimi, home">
          <span
            class="flex size-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] font-display text-sm font-bold text-white transition-colors group-hover:border-teal-300/30 group-hover:text-teal-200"
          >
            ER
          </span>
          <span>
            <span class="block text-sm font-semibold text-slate-200">Emad Rahimi</span>
            <span class="block text-[11px] text-slate-400">Full-stack developer</span>
          </span>
        </a>

        <nav class="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer navigation">
          <a
            v-for="link in links"
            :key="link.href"
            :href="link.href"
            class="text-xs font-medium text-slate-400 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300"
          >
            {{ link.label }}
          </a>
        </nav>

        <p class="font-mono text-[10px] tracking-[0.08em] text-slate-400 uppercase">
          © {{ year }} · Iran
        </p>
      </div>
    </div>
  </footer>
</template>
