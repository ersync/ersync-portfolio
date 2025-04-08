<script setup lang="ts">
import { onMounted, ref, onUnmounted, nextTick, computed } from 'vue'
import Typed from 'typed.js'
import BaseIcon from '@/ui/base/BaseIcon.vue'
import { useNavigationStore } from '@/stores/navigationStore'
import type { NavItemName } from '@/stores/navigationStore'

const navigation = useNavigationStore()

const heroVisible = ref(false)
const typedElement = ref<HTMLElement | null>(null)
const isMobile = ref(window.innerWidth < 768)
const mousePosition = ref({ x: 0, y: 0 })
let typedInstance: Typed | null = null

const socialLinks = [
  {
    icon: 'github',
    url: 'https://github.com/ersync',
    label: 'GitHub',
    color: 'from-slate-700 to-slate-800',
    hoverGlow: 'rgba(20, 184, 166, 0.2)'
  },
  {
    icon: 'linkedin',
    url: 'https://linkedin.com/in/erahimidev',
    label: 'LinkedIn',
    color: 'from-teal-800 to-teal-900',
    hoverGlow: 'rgba(20, 184, 166, 0.2)'
  },
  {
    icon: 'x',
    url: 'https://x.com/emadrahimidev',
    label: 'Twitter',
    color: 'from-slate-700 to-slate-800',
    hoverGlow: 'rgba(20, 184, 166, 0.2)'
  }
]

const handleResize = () => {
  isMobile.value = window.innerWidth < 768
}

const handleMouseMove = (e: MouseEvent) => {
  mousePosition.value = {
    x: (e.clientX / window.innerWidth) * 2 - 1,
    y: (e.clientY / window.innerHeight) * 2 - 1
  }
}

const initializeTyped = () => {
  if (typedElement.value) {
    typedInstance = new Typed(typedElement.value, {
      strings: [
        'Full-Stack Developer',
        'Vue.js Artist',
        'Rails Architect',
        'Problem Solver',
        'Nature Explorer',
        'Coffee-to-Code Converter'
      ],
      typeSpeed: 80,
      backSpeed: 60,
      backDelay: 2500,
      loop: true,
      smartBackspace: true
    })
  }
}

const destroyTyped = () => {
  typedInstance?.destroy()
  typedInstance = null
}

const initializeWithSequence = async () => {
  heroVisible.value = true
  await nextTick()

  if (typedElement.value) {
    setTimeout(initializeTyped, isMobile.value ? 600 : 1000)
  }
}

const scrollToSection = (sectionId: NavItemName): void => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    navigation.setActiveSection(sectionId)
  }
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
  window.addEventListener('mousemove', handleMouseMove)

  setTimeout(initializeWithSequence, 100)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('mousemove', handleMouseMove)
  destroyTyped()
})

const getAnimationDelay = (index: number) => {
  return { '--el-index': isMobile.value ? index * 0.5 : index }
}

const bgOffset = computed(() => {
  if (isMobile.value) return { transform: 'none' }

  const offsetX = mousePosition.value.x * 5
  const offsetY = mousePosition.value.y * 5

  return {
    transform: `translate(${offsetX}px, ${offsetY}px)`
  }
})
</script>

<template>
  <section id="home" class="hero-section min-h-screen">
    <!-- Background elements -->
    <div class="hero-background">
      <div class="gradient-bg"></div>

      <!-- Subtle grid -->
      <div class="grid-pattern"></div>

      <div
        class="absolute left-20 top-10 md:h-64 md:w-64 h-32 w-32 rounded-full bg-teal-400/10 blur-3xl animate-float-reverse glow"
        :style="bgOffset"
      ></div>
      <div
        class="absolute -right-2 bottom-1/4 md:h-72 md:w-72 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl animate-float-delay glow indigo-glow"
        :style="bgOffset"
      ></div>

      <div class="orb orb-accent" :style="bgOffset"></div>

      <div class="backdrop-mesh"></div>
    </div>

    <!-- Hero content -->
    <div class="hero-container">
      <div class="hero-content">
        <div class="hero-split mt-10 sm:mt-24">
          <div class="hero-left">
            <transition-group appear name="stagger-fade" tag="div" class="content-wrapper">
              <!-- Badge -->
              <div
                v-if="heroVisible"
                key="badge"
                class="hero-badge px-2 py-1 sm:px-4 sm:py-2 -mb-2"
                :style="getAnimationDelay(0)"
              >
                <div class="flex justify-center items-center badge-text">
                  <span
                    class="w-1 h-1 bg-teal-400 rounded-full mr-1 sm:-mb-0.5 inline-block animate-pulse"
                  ></span>
                  <span class="max-sm:text-[11px]">Available for Work</span>
                </div>
              </div>

              <h1 v-if="heroVisible" key="name" class="hero-name" :style="getAnimationDelay(1)">
                Emad Rahimi
              </h1>

              <div v-if="heroVisible" key="role" class="hero-role" :style="getAnimationDelay(2)">
                I'm a&nbsp;<span ref="typedElement" class="typed-text"></span>
              </div>

              <p
                v-if="heroVisible"
                key="description"
                class="hero-description hidden sm:block"
                :style="getAnimationDelay(3)"
              >
                Crafting exceptional digital experiences that combine
                <span class="highlight">elegant design</span> with
                <span class="highlight">powerful functionality</span>.
              </p>

              <!-- Mobile version -->
              <p
                v-if="heroVisible"
                key="description-mobile"
                class="hero-description-mobile block sm:hidden"
                :style="getAnimationDelay(3)"
              >
                Crafting exceptional <span class="highlight">digital experiences</span>.
              </p>

              <!-- CTA buttons -->
              <div v-if="heroVisible" key="cta" class="hero-cta" :style="getAnimationDelay(4)">
                <button @click="scrollToSection('projects')" class="btn-primary">
                  <span>View Projects</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
                <button @click="scrollToSection('contact')" class="btn-secondary">
                  Contact Me
                </button>
              </div>
            </transition-group>
          </div>

          <!-- Right content area - visual element -->
          <div class="hero-right">
            <div v-if="heroVisible" class="hero-visual" :style="getAnimationDelay(1)">
              <div class="code-container">
                <div class="code-header">
                  <div class="code-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div class="code-title">talent.js</div>
                </div>
                <div class="code-content">
                  <pre><code><span class="code-keyword">const</span> <span class="code-variable">developer</span> = {
  <span class="code-property">name</span>: <span class="code-string">'Emad Rahimi'</span>,
  <span class="code-property">role</span>: <span class="code-string">'Full-Stack Dev'</span>,
  <span class="code-property">expertise</span>: [<span class="code-string">'Ruby On Rails'</span>, <span class="code-string">'Vue'</span>],
  <span class="code-property">available</span>: <span class="code-boolean">true</span>
};</code></pre>
                </div>
                <div class="cv-download-container code-footer">
                  <a href="/emad_rahimi_cv.pdf" download class="cv-download-button group">
                    <div class="cv-download-frame"></div>
                    <div class="cv-download-content">
                      <div class="cv-download-glow"></div>
                      <div class="cv-download-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="7 10 12 15 17 10"></polyline>
                          <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                      </div>
                      <span class="cv-download-text">Download CV</span>
                    </div>
                  </a>
                </div>
              </div>
              <div class="visual-decoration"></div>
            </div>
          </div>
        </div>

        <!-- Social links in footer -->
        <div v-if="heroVisible" :style="getAnimationDelay(6)">
          <div class="social-links">
            <a
              v-for="{ icon, url, label, color, hoverGlow } in socialLinks"
              :key="url"
              :href="url"
              :aria-label="label"
              rel="noopener noreferrer"
              target="_blank"
              class="social-link group relative flex items-center justify-center overflow-hidden rounded-xl border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm transition-all duration-300 hover:border-teal-400/30"
              :style="`--hover-glow: ${hoverGlow}`"
            >
              <div
                class="absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-20"
                :class="`bg-gradient-to-br ${color}`"
              ></div>
              <base-icon
                :name="icon"
                class="relative z-10 text-slate-300 transition-all duration-300 group-hover:text-teal-400"
              />

              <!-- Circular ripple effect on hover -->
              <div
                class="absolute inset-0 rounded-xl bg-teal-500/5 opacity-0 transition-transform duration-700 ease-out group-hover:opacity-100 group-hover:scale-[2.5]"
              ></div>
            </a>
          </div>
        </div>

        <div class="scroll-indicator cursor-pointer" @click="scrollToSection('about')">
          <span>Scroll Down</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
/* Main layout */
.hero-section {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-background {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
}

.gradient-bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 10% 20%, #0f172a 0%, #020617 100%);
}

.grid-pattern {
  position: absolute;
  inset: 0;
  background: conic-gradient(
      from 0deg at 50% 50%,
      rgba(56, 189, 248, 0.03) 0%,
      rgba(20, 184, 166, 0.03) 25%,
      rgba(168, 85, 247, 0.03) 50%,
      rgba(244, 114, 182, 0.03) 75%,
      rgba(56, 189, 248, 0.03) 100%
    ),
    repeating-linear-gradient(
      to right,
      transparent,
      transparent calc(3vmin - 1px),
      rgba(255, 255, 255, 0.03) calc(3vmin - 1px),
      rgba(255, 255, 255, 0.03) 3vmin
    ),
    repeating-linear-gradient(
      to bottom,
      transparent,
      transparent calc(3vmin - 1px),
      rgba(255, 255, 255, 0.03) calc(3vmin - 1px),
      rgba(255, 255, 255, 0.03) 3vmin
    );

  mask-image: radial-gradient(
    ellipse at center,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.8) 70%,
    rgba(0, 0, 0, 0) 100%
  );

  animation: grid-rotate 60s linear infinite;
}

@keyframes grid-rotate {
  0% {
    background-position:
      0% 0%,
      0 0,
      0 0;
  }
  100% {
    background-position:
      100% 0%,
      50px 50px,
      50px 50px;
  }
}
.grid-pattern {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(
      circle at 50% 50%,
      transparent 0%,
      transparent 80%,
      rgba(20, 184, 166, 0.05) 80%,
      rgba(20, 184, 166, 0.05) 100%
    ),
    radial-gradient(
      circle at 0% 0%,
      transparent 0%,
      transparent 80%,
      rgba(56, 189, 248, 0.05) 80%,
      rgba(56, 189, 248, 0.05) 100%
    ),
    radial-gradient(
      circle at 100% 0%,
      transparent 0%,
      transparent 80%,
      rgba(168, 85, 247, 0.05) 80%,
      rgba(168, 85, 247, 0.05) 100%
    ),
    radial-gradient(
      circle at 0% 100%,
      transparent 0%,
      transparent 80%,
      rgba(244, 114, 182, 0.05) 80%,
      rgba(244, 114, 182, 0.05) 100%
    ),
    radial-gradient(
      circle at 100% 100%,
      transparent 0%,
      transparent 80%,
      rgba(251, 146, 60, 0.05) 80%,
      rgba(251, 146, 60, 0.05) 100%
    ),
    linear-gradient(to right, rgba(226, 232, 240, 0.02) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(226, 232, 240, 0.02) 1px, transparent 1px);

  background-size:
    150% 150%,
    150% 150%,
    150% 150%,
    150% 150%,
    150% 150%,
    clamp(10px, 2vw, 20px) clamp(10px, 2vw, 20px);

  opacity: 0.6;

  animation: perspective-shift 25s ease-in-out infinite alternate;
  transform-origin: center;
  transform-style: preserve-3d;
}

@keyframes perspective-shift {
  0%,
  100% {
    background-position:
      0% 0%,
      0% 0%,
      0% 0%,
      0% 0%,
      0% 0%,
      0 0;
    background-size:
      150% 150%,
      150% 150%,
      150% 150%,
      150% 150%,
      150% 150%,
      clamp(10px, 2vw, 20px) clamp(10px, 2vw, 20px);
  }
  50% {
    background-position:
      100% 100%,
      100% 0%,
      0% 100%,
      100% 100%,
      0% 0%,
      5px 5px;
    background-size:
      100% 100%,
      100% 100%,
      100% 100%,
      100% 100%,
      100% 100%,
      clamp(15px, 2.5vw, 25px) clamp(15px, 2.5vw, 25px);
  }
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(70px);
  opacity: 0.5;
  transition: transform 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.orb-primary {
  width: 50vh;
  height: 50vh;
  top: -15vh;
  right: -15vh;
  background: radial-gradient(circle at center, rgba(14, 165, 233, 0.15), rgba(56, 189, 248, 0));
  animation: float-slow 20s infinite alternate;
}

.orb-secondary {
  width: 40vh;
  height: 40vh;
  bottom: -10vh;
  left: -10vh;
  background: radial-gradient(circle at center, rgba(20, 184, 166, 0.15), rgba(45, 212, 191, 0));
  animation: float-slow 25s infinite alternate-reverse;
}

.orb-accent {
  width: 30vh;
  height: 30vh;
  top: 40%;
  left: 60%;
  background: radial-gradient(circle at center, rgba(168, 85, 247, 0.1), rgba(192, 132, 252, 0));
  animation: float-slow 18s infinite alternate;
}

.backdrop-mesh {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(226, 232, 240, 0.1) 1px, transparent 1px);
  background-size: 30px 30px;
  background-position: -15px -15px;
  opacity: 0.3;
}

.hero-container {
  position: relative;
  width: 100%;
  max-width: 1200px;
  padding: 0 1rem;
  z-index: 10;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (min-width: 768px) {
  .hero-container {
    padding-left: calc(60px + 1.5rem);
    padding-right: 1.5rem;
  }
}

.hero-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.hero-split {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 1024px) {
  .hero-split {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
}

.hero-left {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-right {
  display: flex;
  justify-content: center;
  align-items: center;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

@media (min-width: 768px) {
  .content-wrapper {
    gap: 1.5rem;
  }
}

.hero-badge {
  display: inline-flex;
  background: rgba(20, 184, 166, 0.1);
  border: 1px solid rgba(20, 184, 166, 0.2);
  border-radius: 9999px;
  backdrop-filter: blur(8px);
  width: fit-content;
}

.badge-text {
  font-size: 0.875rem;
  font-weight: 500;
  color: #2dd4bf;
}

.hero-name {
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.2;
  background: linear-gradient(to right, #2dd4bf, #5eead4);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin: 0;
}

@media (min-width: 640px) {
  .hero-name {
    font-size: 3rem;
  }
}

@media (min-width: 768px) {
  .hero-name {
    font-size: 3.5rem;
  }
}

.hero-role {
  display: flex;
  font-size: 1.125rem;
  font-weight: 500;
  color: #e2e8f0;
}

@media (min-width: 640px) {
  .hero-role {
    font-size: 1.5rem;
  }
}

.typed-text {
  color: #2dd4bf;
  font-weight: 600;
}

.hero-description {
  max-width: 36rem;
  font-size: 0.9375rem;
  line-height: 1.6;
  color: #94a3b8;
  margin: 0;
}

@media (min-width: 640px) {
  .hero-description {
    font-size: 1.125rem;
  }
}

.highlight {
  color: #2dd4bf;
  font-weight: 500;
  position: relative;
}

.highlight::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.25rem;
  background: rgba(45, 212, 191, 0.2);
  border-radius: 4px;
  z-index: -1;
}

.hero-cta {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 0.5rem;
}

.btn-primary {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;
  background: linear-gradient(to right, #0f766e, #0d9488);
  color: white;
  font-weight: 500;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 10px 15px -3px rgba(15, 118, 110, 0.2);
  position: relative;
  overflow: hidden;
  font-size: 0.875rem;
  cursor: pointer;
  border: none;
  outline: none;
}

@media (min-width: 640px) {
  .btn-primary {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }
}

.btn-primary::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.3) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: rotate(30deg);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 20px -3px rgba(15, 118, 110, 0.3);
}

.btn-primary:hover::after {
  animation: shine 1.5s ease;
}

.btn-secondary {
  padding: 0.625rem 1.25rem;
  background: rgba(30, 41, 59, 0.5);
  color: #e2e8f0;
  font-weight: 500;
  border-radius: 0.5rem;
  border: 1px solid rgba(71, 85, 105, 0.3);
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);
  font-size: 0.875rem;
  cursor: pointer;
  outline: none;
}

@media (min-width: 640px) {
  .btn-secondary {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }
}

.btn-secondary:hover {
  background: rgba(30, 41, 59, 0.7);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);
}

/* Code visual */
.hero-visual {
  position: relative;
  width: 100%;
  max-width: 100%;
  opacity: 0;
  animation: fade-in-up 1s forwards;
  animation-delay: 0.3s;
  scale: 0.85;
  transform-origin: center;
}

@media (min-width: 480px) {
  .hero-visual {
    scale: 0.9;
  }
}

@media (min-width: 640px) {
  .hero-visual {
    scale: 0.95;
    max-width: 90%;
  }
}

@media (min-width: 768px) {
  .hero-visual {
    scale: 1;
    max-width: 420px;
  }
}

.code-container {
  background: rgba(15, 23, 42, 0.7);
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 8px 10px -6px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(51, 65, 85, 0.5);
  transform: perspective(1000px) rotateY(-5deg) rotateX(2deg);
  transition: transform 0.3s ease;
}

.code-container:hover {
  transform: perspective(1000px) rotateY(-2deg) rotateX(1deg) translateY(-5px);
}

.code-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.625rem 0.75rem;
  background: rgba(30, 41, 59, 0.7);
  border-bottom: 1px solid rgba(51, 65, 85, 0.7);
}

@media (min-width: 640px) {
  .code-header {
    padding: 0.75rem 1rem;
  }
}

.code-dots {
  display: flex;
  gap: 0.375rem;
}

.code-dots span {
  width: 0.625rem;
  height: 0.625rem;
  border-radius: 50%;
}

@media (min-width: 640px) {
  .code-dots span {
    width: 0.75rem;
    height: 0.75rem;
  }
}

.code-dots span:nth-child(1) {
  background-color: #f87171;
}

.code-dots span:nth-child(2) {
  background-color: #facc15;
}

.code-dots span:nth-child(3) {
  background-color: #4ade80;
}

.code-title {
  font-size: 0.75rem;
  font-weight: 500;
  color: #cbd5e1;
}

@media (min-width: 640px) {
  .code-title {
    font-size: 0.875rem;
  }
}

.code-content {
  padding: 1rem;
  font-family: 'Monaco', 'Consolas', monospace;
  font-size: 0.75rem;
  line-height: 1.7;
  color: #e2e8f0;
}

@media (min-width: 640px) {
  .code-content {
    padding: 1.5rem;
    font-size: 0.875rem;
  }
}

.code-keyword {
  color: #c084fc;
}

.code-variable {
  color: #38bdf8;
}

.code-property {
  color: #4ade80;
}

.code-string {
  color: #fb7185;
}

.code-boolean {
  color: #fb923c;
}

.visual-decoration {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 1.5rem;
  left: 1.5rem;
  background: linear-gradient(to bottom right, rgba(20, 184, 166, 0.2), rgba(56, 189, 248, 0.2));
  border-radius: 0.75rem;
  z-index: -1;
  opacity: 0.7;
}

.social-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.social-link {
  width: 3rem;
  height: 3rem;
  box-shadow:
    0 10px 15px -3px var(--hover-glow),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transform: translateY(-5px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 0.75rem;
  border: 1px solid rgba(20, 184, 166, 0.3);
  background: rgba(30, 41, 59, 0.7);
  backdrop-filter: blur(8px);
}

.social-link svg {
  color: #2dd4bf;
  animation: icon-pulse 3s infinite cubic-bezier(0.4, 0, 0.6, 1);
  position: relative;
  z-index: 10;
}

.social-link .absolute {
  opacity: 0.2;
}

.social-link .bg-gradient-to-br {
  position: absolute;
  inset: 0;
  opacity: 0.2;
}

.social-link .rounded-xl {
  position: absolute;
  inset: 0;
  background: rgba(20, 184, 166, 0.05);
  opacity: 1;
  transform: scale(2.5);
}

@keyframes icon-pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
}

@media (min-width: 640px) {
  .social-link {
    width: 2.5rem;
    height: 2.5rem;
  }
}

.group:hover svg {
  animation: icon-pulse 3s infinite cubic-bezier(0.4, 0, 0.6, 1);
}

@keyframes icon-pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
}

.scroll-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  color: #94a3b8;
  font-size: 0.75rem;
  animation: bounce 2s infinite;
}

@media (min-width: 640px) {
  .scroll-indicator {
    font-size: 0.875rem;
  }
}

@keyframes float-slow {
  0%,
  100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(20px, -20px);
  }
}

@keyframes shine {
  0% {
    opacity: 1;
    transform: translateX(-100%) rotate(30deg);
  }
  100% {
    opacity: 0;
    transform: translateX(100%) rotate(30deg);
  }
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.stagger-fade-enter-active {
  transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: calc(var(--el-index, 0) * 0.1s);
}

.stagger-fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.typed-cursor {
  color: #2dd4bf !important;
  font-weight: 600;
}

.cv-download-container {
  position: relative;
  margin-top: 1.5rem;
  width: 100%;
  perspective: 1000px;
}

.cv-download-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: fit-content;
  transform: rotate(-5deg);
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.cv-download-button:hover {
  transform: rotate(-8deg) translateY(-5px);
}

.cv-download-frame {
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border: 1px dashed rgba(20, 184, 166, 0.4);
  border-radius: 12px;
  transform: rotate(2deg);
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.cv-download-button:hover .cv-download-frame {
  transform: rotate(-1deg) scale(1.05);
  border-color: rgba(20, 184, 166, 0.8);
}

.cv-download-content {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.25rem;
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.4));
  border: 1px solid rgba(51, 65, 85, 0.5);
  border-radius: 8px;
  backdrop-filter: blur(8px);
  overflow: hidden;
  box-shadow:
    0 4px 15px -3px rgba(0, 0, 0, 0.1),
    0 2px 8px -2px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 0 rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.cv-download-button:hover .cv-download-content {
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.5));
  border-color: rgba(20, 184, 166, 0.3);
}

.cv-download-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 50% 50%, rgba(20, 184, 166, 0.15), transparent 70%);
  opacity: 0;
  transition: opacity 0.5s ease;
}

.cv-download-button:hover .cv-download-glow {
  opacity: 1;
}

.cv-download-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: rgba(20, 184, 166, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(20, 184, 166, 0.2);
  color: #2dd4bf;
  transition: all 0.3s ease;
}

.cv-download-button:hover .cv-download-icon {
  background: rgba(20, 184, 166, 0.2);
  border-color: rgba(20, 184, 166, 0.4);
  transform: translateY(-2px);
}

.cv-download-text {
  font-weight: 500;
  font-size: 0.9rem;
  color: #e2e8f0;
  letter-spacing: 0.02em;
  transition: all 0.3s ease;
}

.cv-download-button:hover .cv-download-text {
  color: #2dd4bf;
}

.cv-download-button:hover .cv-download-icon svg {
  animation: pulse-download 1.5s infinite;
}

@keyframes pulse-download {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(2px);
  }
}

@media (max-width: 640px) {
  .cv-download-container {
    margin-top: 0.75rem;
  }

  .cv-download-content {
    padding: 0.5rem 0.75rem;
  }

  .cv-download-icon {
    width: 24px;
    height: 24px;
  }

  .cv-download-text {
    font-size: 0.75rem;
  }
}

.code-footer {
  margin-top: 0;
  padding: 0.75rem;
  border-top: 1px solid rgba(51, 65, 85, 0.7);
  background: rgba(15, 23, 42, 0.6);
  display: flex;
  justify-content: center;
}

.code-footer .cv-download-container {
  margin-top: 0;
  width: auto;
}

.cv-download-button {
  transform: none;
}

.cv-download-button:hover {
  transform: translateY(-2px);
}
</style>
