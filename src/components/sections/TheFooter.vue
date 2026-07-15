<script setup lang="ts">
const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' }
]

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer
    class="page-footer deferred-section relative overflow-hidden border-t border-white/[0.06] bg-[#030610]"
  >
    <div
      class="pointer-events-none absolute -bottom-40 left-1/2 size-96 -translate-x-1/2 rounded-full bg-teal-400/[0.06] blur-3xl"
      aria-hidden="true"
    />

    <div class="container relative py-9 sm:py-11">
      <div class="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
        <a href="#home" class="group flex w-fit items-center gap-3" aria-label="Emad Rahimi, home">
          <img
            src="@/assets/images/logos/er-mark.svg"
            class="size-10 transition-transform duration-300 group-hover:-translate-y-0.5"
            alt=""
          />
          <span>
            <span class="block text-sm font-semibold text-slate-200">Emad Rahimi</span>
            <span class="block text-[11px] text-slate-400">Full-Stack Product Developer</span>
          </span>
        </a>

        <div class="flex w-full items-center justify-between gap-4 sm:contents">
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
            © {{ currentYear }}
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
