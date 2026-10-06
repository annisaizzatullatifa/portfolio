<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

// Interactive Parallax State
const heroRef = ref(null)
const mouseX = ref(0)
const mouseY = ref(0)
const currentX = ref(0)
const currentY = ref(0)
let animationFrameId = null

// Copy Email Interaction State
const email = 'annisaizzatullatifa@gmail.com'
const copied = ref(false)
let copyTimeout = null

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(email)
    copied.value = true
    if (copyTimeout) clearTimeout(copyTimeout)
    copyTimeout = setTimeout(() => {
      copied.value = false
    }, 2400)
  } catch {
    // Fallback for older environments
    const textarea = document.createElement('textarea')
    textarea.value = email
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
    copied.value = true
    if (copyTimeout) clearTimeout(copyTimeout)
    copyTimeout = setTimeout(() => {
      copied.value = false
    }, 2400)
  }
}

// Mouse movement handler with smooth interpolation
const handleMouseMove = (e) => {
  if (!heroRef.value) return
  const rect = heroRef.value.getBoundingClientRect()
  // Normalized between -1 and 1
  const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
  const y = ((e.clientY - rect.top) / rect.height) * 2 - 1
  mouseX.value = Math.max(-1, Math.min(1, x))
  mouseY.value = Math.max(-1, Math.min(1, y))
}

const handleMouseLeave = () => {
  mouseX.value = 0
  mouseY.value = 0
}

// Smooth linear interpolation loop (LERP)
const animateParallax = () => {
  currentX.value += (mouseX.value - currentX.value) * 0.08
  currentY.value += (mouseY.value - currentY.value) * 0.08
  animationFrameId = requestAnimationFrame(animateParallax)
}

// Computed 3D transforms for different depth layers
const bgTextTransform = computed(() => ({
  transform: `translate3d(${currentX.value * 12}px, ${currentY.value * 8}px, 0)`,
}))

const photoTransform = computed(() => ({
  transform: `translate3d(${currentX.value * 24}px, ${currentY.value * 16}px, 0) scale(${1 + Math.abs(currentX.value) * 0.015})`,
}))

const creativeTransform = computed(() => ({
  transform: `translate3d(${currentX.value * 36}px, ${currentY.value * 26}px, 0) rotate(${-10 + currentX.value * 5}deg)`,
}))

const ticketTransform = computed(() => ({
  transform: `translate3d(${currentX.value * -26}px, ${currentY.value * -18}px, 0)`,
}))

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/annisaizzatull',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/annisaizzatullatifa',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/annisaizzatull.a.s',
  },
]

const cvUrl = 'https://drive.google.com/file/d/1s-PLymWLnDsYRtL0GIWAShSC4IKXftTr/view?usp=sharing'

const sparkles = [
  // Top Left cluster (near Creative script)
  { id: 1, top: '16%', left: '8%', size: 'w-5 h-5', color: 'text-amber-400', opacity: 'opacity-70', delay: '0s', duration: '3.2s', layer: 'creative' },
  { id: 2, top: '24%', left: '15%', size: 'w-3 h-3', color: 'text-yellow-200', opacity: 'opacity-40', delay: '1.2s', duration: '2.8s', layer: 'creative' },
  { id: 3, top: '11%', left: '26%', size: 'w-2.5 h-2.5', color: 'text-amber-300', opacity: 'opacity-30', delay: '0.6s', duration: '3.6s', layer: 'bg' },
  { id: 4, top: '30%', left: '5%', size: 'w-3.5 h-3.5', color: 'text-amber-400', opacity: 'opacity-45', delay: '2.0s', duration: '3.0s', layer: 'creative' },

  // Center / Background cluster (flanking PORTFOLIO)
  { id: 5, top: '36%', left: '19%', size: 'w-2 h-2', color: 'text-white', opacity: 'opacity-25', delay: '1.8s', duration: '4.0s', layer: 'bg' },
  { id: 6, top: '40%', right: '23%', size: 'w-2.5 h-2.5', color: 'text-amber-200', opacity: 'opacity-35', delay: '0.9s', duration: '3.5s', layer: 'bg' },
  { id: 7, top: '18%', right: '30%', size: 'w-2 h-2', color: 'text-yellow-100', opacity: 'opacity-20', delay: '2.4s', duration: '4.2s', layer: 'bg' },
  { id: 8, top: '60%', left: '14%', size: 'w-3 h-3', color: 'text-amber-400', opacity: 'opacity-30', delay: '1.5s', duration: '3.4s', layer: 'bg' },

  // Top Right cluster (above / around Ticket)
  { id: 9, top: '18%', right: '11%', size: 'w-4 h-4', color: 'text-amber-300', opacity: 'opacity-65', delay: '0.4s', duration: '3.1s', layer: 'ticket' },
  { id: 10, top: '26%', right: '18%', size: 'w-2.5 h-2.5', color: 'text-yellow-300', opacity: 'opacity-40', delay: '1.7s', duration: '2.9s', layer: 'ticket' },
  { id: 11, top: '10%', right: '15%', size: 'w-2 h-2', color: 'text-amber-200', opacity: 'opacity-30', delay: '2.2s', duration: '3.8s', layer: 'ticket' },
  { id: 12, top: '33%', right: '7%', size: 'w-3 h-3', color: 'text-amber-400', opacity: 'opacity-45', delay: '1.0s', duration: '3.3s', layer: 'ticket' },

  // Lower Atmospheric cluster (floating gently in lower regions)
  { id: 13, top: '74%', left: '9%', size: 'w-3.5 h-3.5', color: 'text-amber-400', opacity: 'opacity-35', delay: '0.8s', duration: '3.6s', layer: 'creative' },
  { id: 14, top: '82%', left: '20%', size: 'w-2 h-2', color: 'text-yellow-200', opacity: 'opacity-20', delay: '2.5s', duration: '4.0s', layer: 'bg' },
  { id: 15, top: '76%', right: '27%', size: 'w-2 h-2', color: 'text-white', opacity: 'opacity-20', delay: '1.4s', duration: '3.7s', layer: 'bg' },
  { id: 16, top: '84%', right: '12%', size: 'w-3 h-3', color: 'text-amber-300', opacity: 'opacity-30', delay: '1.9s', duration: '3.2s', layer: 'ticket' },
]

const getSparkleTransform = (layer) => {
  if (layer === 'creative') return creativeTransform.value
  if (layer === 'ticket') return ticketTransform.value
  return bgTextTransform.value
}

onMounted(() => {
  // Only activate parallax if user does not prefer reduced motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!prefersReduced) {
    animationFrameId = requestAnimationFrame(animateParallax)
  }
})

onUnmounted(() => {
  if (animationFrameId) cancelAnimationFrame(animationFrameId)
  if (copyTimeout) clearTimeout(copyTimeout)
})
</script>

<template>
  <section ref="heroRef" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave"
    class="relative min-h-screen w-full bg-[#0a0a0a] text-white flex flex-col justify-between overflow-hidden select-none">
    <!-- Ambient Background Lighting -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-gradient-to-tr from-amber-500/15 via-orange-500/10 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse-glow">
    </div>

    <!-- Decorative Subtle Grid Texture Overlay -->
    <div
      class="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none opacity-60">
    </div>

    <!-- ==================== TOP NAVIGATION / SOCIALS ==================== -->
    <header
      class="relative z-30 w-full px-6 sm:px-10 lg:px-16 pt-7 sm:pt-9 flex flex-col sm:flex-row items-center justify-between gap-4">
      <!-- Curriculum Vitae / Resume Button (All-out Sparkles & Gold Theme) -->
      <a :href="cvUrl" target="_blank" rel="noopener noreferrer"
        class="group relative inline-flex items-center gap-2.5 px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-amber-500/15 via-yellow-400/10 to-amber-500/15 border border-amber-400/50 backdrop-blur-md text-xs sm:text-sm font-poppins text-neutral-200 shadow-[0_0_24px_rgba(255,174,0,0.22)] transition-all duration-300 hover:border-amber-300 hover:text-white hover:shadow-[0_0_35px_rgba(255,174,0,0.55)] hover:scale-105 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
        title="View Annisa's CV (Google Drive)">
        <!-- Shimmer Sweep on Hover -->
        <div class="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
          <div
            class="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform">
          </div>
        </div>

        <!-- Floating Sparkle Star at Top-Left -->
        <span
          class="absolute -top-2.5 -left-1.5 text-xs animate-twinkle pointer-events-none z-20 drop-shadow-[0_0_10px_rgba(255,174,0,0.9)] select-none">
          ✨
        </span>

        <!-- CV Document Outline Icon -->
        <svg
          class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 group-hover:text-amber-300 group-hover:scale-110 transition-transform duration-300 shrink-0"
          fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          viewBox="0 0 24 24">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>

        <!-- Button Label -->
        <span class="font-semibold tracking-wide text-white group-hover:text-amber-200 transition-colors">
          Curriculum Vitae
        </span>

        <!-- External Link Arrow -->
        <svg
          class="w-3 h-3 text-amber-400/90 group-hover:text-amber-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0"
          fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          viewBox="0 0 24 24">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      </a>

      <!-- Social Navigation Links -->
      <nav aria-label="Social Profiles" class="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5">
        <a v-for="social in socialLinks" :key="social.name" :href="social.url" target="_blank" rel="noopener noreferrer"
          class="group relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md text-xs sm:text-sm font-poppins text-neutral-300 transition-all duration-300 hover:text-white hover:border-amber-400/50 hover:bg-white/[0.08] hover:shadow-[0_0_22px_rgba(255,174,0,0.32)] hover:-translate-y-0.5 active:scale-95"
          :title="`Visit Annisa's ${social.name}`">
          <!-- Shimmer Sweep on Hover (Inner clipped layer) -->
          <div class="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
            <div
              class="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform">
            </div>
          </div>

          <!-- Twinkling Sparkle Star (Prominently visible above the button) -->
          <span
            class="absolute -top-2 -right-1.5 text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 animate-twinkle pointer-events-none z-20 drop-shadow-[0_0_8px_rgba(255,174,0,0.85)]">
            ✨
          </span>

          <!-- Official Social Outline SVG Icons (Consistent Type, Stroke 2, Size w-4 h-4, No Rotation) -->
          <!-- LinkedIn Outline -->
          <svg v-if="social.name === 'LinkedIn'"
            class="w-4 h-4 text-neutral-300 group-hover:text-amber-400 group-hover:scale-110 transition-all duration-300 shrink-0"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>

          <!-- GitHub Outline -->
          <svg v-else-if="social.name === 'GitHub'"
            class="w-4 h-4 text-neutral-300 group-hover:text-amber-400 group-hover:scale-110 transition-all duration-300 shrink-0"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round">
            <path
              d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>

          <!-- Instagram Outline -->
          <svg v-else-if="social.name === 'Instagram'"
            class="w-4 h-4 text-neutral-300 group-hover:text-amber-400 group-hover:scale-110 transition-all duration-300 shrink-0"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>

          <!-- Label -->
          <span class="font-medium tracking-wide">{{ social.name }}</span>

          <!-- External link arrow with playful jump -->
          <svg
            class="w-3 h-3 text-neutral-400 group-hover:text-amber-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0"
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            viewBox="0 0 24 24">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      </nav>
    </header>

    <!-- ==================== CENTER HERO STAGE ==================== -->
    <div
      class="relative flex-1 flex items-center justify-center w-full min-h-[520px] sm:min-h-[600px] lg:min-h-[660px]">

      <!-- Layer 0: Giant "PORTFOLIO" Typography (Behind Annisa) -->
      <div :style="bgTextTransform"
        class="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none z-10 transition-transform duration-75 ease-out">
        <h1
          class="font-anton uppercase tracking-[-0.02em] text-[18vw] leading-none text-white whitespace-nowrap drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)] selection:bg-transparent">
          <span class="font-great-vibes-bold inline-block text-[1.1em] pr-[0.1em] align-baseline">P</span>ORTFOLIO
        </h1>
      </div>

      <!-- Playful Decorative Multi-Depth Sparkles (Varied Opacity & Organic Twinkle) -->
      <div v-for="s in sparkles" :key="s.id"
        class="absolute z-20 pointer-events-none transition-transform duration-75 ease-out" :class="s.opacity" :style="{
          top: s.top,
          left: s.left,
          right: s.right,
          ...getSparkleTransform(s.layer),
        }">
        <svg :class="[s.size, s.color, 'animate-twinkle']" :style="{
          animationDelay: s.delay,
          animationDuration: s.duration,
        }" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      </div>

      <!-- Layer 2 (Front Left): "Creative" Handwritten Script Badge -->
      <div :style="creativeTransform"
        class="absolute top-[14%] sm:top-[16%] md:top-[18%] left-[6%] sm:left-[12%] md:left-[16%] lg:left-[20%] z-25 group cursor-pointer">
        <div
          class="relative inline-block transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
          <span
            class="font-dancing text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#FFAE00] drop-shadow-[0_4px_16px_rgba(255,174,0,0.5)] select-none">
            Creative
          </span>
          <!-- Playful mini hover indicator dot -->
          <span
            class="absolute -top-1 -right-3 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            ✨
          </span>
        </div>
      </div>

      <!-- Layer 1: Subject Photo (Annisa Full-Body Cutout in Foreground) -->
      <div :style="photoTransform"
        class="relative z-20 flex items-end justify-center h-full w-full pointer-events-none">
        <div class="relative bottom-0 flex justify-center items-end max-w-full pb-2 sm:pb-3.5">
          <img src="/formal_photo_full_body.png" alt="Annisa Izzatul Latifa"
            class="h-[56vh] sm:h-[66vh] md:h-[74vh] lg:h-[80vh] xl:h-[84vh] max-h-[820px] 2xl:max-h-[860px] w-auto object-contain filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.9)] select-none"
            draggable="false" loading="eager" />
        </div>
      </div>

      <!-- Layer 2 (Front Right): Revamped Sparkling Bold Ticket Pass & Email Badge -->
      <div :style="ticketTransform"
        class="absolute bottom-[20%] sm:bottom-[22%] md:bottom-[24%] right-[3%] sm:right-[5%] md:right-[8%] lg:right-[12%] z-30">
        <div class="relative group cursor-pointer" @click="copyEmail" title="Click to copy email">
          <!-- Glowing Amber Ambient Aura (Visible through transparent cutouts!) -->
          <div
            class="absolute -inset-1.5 bg-gradient-to-r from-amber-500/35 via-yellow-400/40 to-orange-500/35 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 pointer-events-none">
          </div>

          <!-- Stylized Golden Corner Brackets with Twinkling Sparkles -->
          <div
            class="absolute -top-2.5 -left-2.5 w-7 h-7 border-t-2 border-l-2 border-amber-400 pointer-events-none transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
          </div>
          <div
            class="absolute -bottom-2.5 -right-2.5 w-7 h-7 border-b-2 border-r-2 border-amber-400 pointer-events-none hidden sm:block transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1">
          </div>

          <!-- Left Transparent Ticket Cutout Notch Curved Arc Outline -->
          <div class="absolute -left-3.5 top-1/2 -translate-y-1/2 w-7 h-7 pointer-events-none z-10">
            <svg class="w-full h-full" viewBox="0 0 28 28" fill="none">
              <path d="M 14 0 A 14 14 0 0 1 14 28" stroke="rgba(252, 211, 77, 0.75)" stroke-width="1.5" />
            </svg>
          </div>

          <!-- Right Transparent Ticket Cutout Notch Curved Arc Outline -->
          <div class="absolute -right-3.5 top-1/2 -translate-y-1/2 w-7 h-7 pointer-events-none z-10">
            <svg class="w-full h-full" viewBox="0 0 28 28" fill="none">
              <path d="M 14 0 A 14 14 0 0 0 14 28" stroke="rgba(252, 211, 77, 0.75)" stroke-width="1.5" />
            </svg>
          </div>

          <!-- The Ticket Body with Transparent Cutout Mask -->
          <div
            class="ticket-cutout-mask relative flex items-stretch bg-gradient-to-br from-[#FFC226] via-[#FFAE00] to-[#F59E0B] text-black rounded-2xl border border-amber-300/80 shadow-[0_16px_40px_rgba(255,174,0,0.38)] transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-[0_22px_50px_rgba(255,174,0,0.55)] active:scale-95 overflow-hidden select-none">
            <!-- Light Shimmer Sweep Effect across Ticket Surface -->
            <div
              class="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-white/35 to-transparent pointer-events-none transition-transform ease-in-out">
            </div>

            <!-- Main Ticket Body -->
            <div class="px-5 sm:px-7 py-4 sm:py-5 flex flex-col justify-center gap-2 text-left">
              <!-- Name & Degree: Enlarged, Matching in Size, Horizontally Aligned -->
              <div class="flex items-center gap-2 sm:gap-2.5 flex-wrap">
                <h3
                  class="font-anton uppercase tracking-wide text-neutral-950 text-xl sm:text-2xl md:text-3xl lg:text-[2rem] leading-none drop-shadow-sm group-hover:text-black transition-colors">
                  ANNISA IZZATUL LATIFA
                </h3>
                <span
                  class="font-anton uppercase tracking-wide text-neutral-900/90 text-xl sm:text-2xl md:text-3xl lg:text-[2rem] leading-none drop-shadow-sm">
                  S.KOM
                </span>
              </div>

              <!-- Sleek High-Contrast Obsidian Email Capsule Button -->
              <div
                class="flex items-center justify-between gap-3 px-3.5 py-1.5 sm:py-2 rounded-xl bg-neutral-950/90 text-amber-300 text-xs sm:text-sm font-poppins font-medium shadow-md border border-amber-400/40 group-hover:border-amber-300 group-hover:bg-black transition-all">
                <div class="flex items-center gap-2">
                  <svg class="w-3.5 h-3.5 text-amber-400 shrink-0" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span class="tracking-wide text-neutral-100 font-semibold">{{ email }}</span>
                </div>
                <div
                  class="flex items-center gap-1.5 pl-2.5 border-l border-white/15 text-amber-400 text-xs font-bold tracking-wider group-hover:text-amber-300 shrink-0">
                  <span>COPY</span>
                </div>
              </div>
            </div>

            <!-- Perforated Dashed Divider (Matching Real Ticket) -->
            <div
              class="hidden sm:flex flex-col justify-between py-2 border-l-2 border-dashed border-neutral-900/30 relative">
            </div>

            <!-- Right Ticket Stub: Clean LET'S CONNECT text without sparkles -->
            <div class="hidden sm:flex items-center justify-center bg-black/[0.05]">
              <span
                class="font-anton uppercase text-[11px] sm:text-xs tracking-widest text-neutral-900 -rotate-90 select-none whitespace-nowrap">
                LET'S CONNECT
              </span>
            </div>

            <!-- Sparkling Confetti Toast Overlay on Copy (Enlarged) -->
            <transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0 scale-95"
              enter-to-class="opacity-100 scale-100" leave-active-class="transition duration-150 ease-in"
              leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
              <div v-if="copied"
                class="absolute inset-0 bg-[#0a0a0a]/95 text-amber-400 font-poppins flex flex-col items-center justify-center gap-2 p-4 sm:p-6 backdrop-blur-md z-20 border border-amber-400/50">
                <div class="flex items-center gap-2.5 sm:gap-3">
                  <span class="text-xl sm:text-2xl animate-bounce">✨</span>
                  <span
                    class="font-anton uppercase tracking-wider text-xl sm:text-2xl md:text-3xl text-white drop-shadow-[0_2px_8px_rgba(255,174,0,0.4)]">
                    EMAIL COPIED!
                  </span>
                  <span class="text-xl sm:text-2xl animate-bounce">✨</span>
                </div>
                <p class="text-xs sm:text-sm md:text-base text-amber-300 font-medium tracking-wide">
                  Ready to connect & collaborate!
                </p>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>
.ticket-cutout-mask {
  mask-image:
    radial-gradient(circle 14px at 0% 50%, transparent 14px, #000 14.5px),
    radial-gradient(circle 14px at 100% 50%, transparent 14px, #000 14.5px);
  mask-position:
    left center,
    right center;
  mask-size:
    51% 100%,
    51% 100%;
  mask-repeat: no-repeat;
  -webkit-mask-image:
    radial-gradient(circle 14px at 0% 50%, transparent 14px, #000 14.5px),
    radial-gradient(circle 14px at 100% 50%, transparent 14px, #000 14.5px);
  -webkit-mask-position:
    left center,
    right center;
  -webkit-mask-size:
    51% 100%,
    51% 100%;
  -webkit-mask-repeat: no-repeat;
}
</style>
