<script setup>
import SectionSelection from './SectionSelection.vue'

// Ambient decorative sparkles for Summary Section
const summarySparkles = [
  { top: '8%', left: '4%', size: 'w-4 h-4', opacity: 'opacity-40', delay: '0.2s' },
  { top: '15%', right: '6%', size: 'w-5 h-5', opacity: 'opacity-50', delay: '1.4s' },
  { top: '38%', left: '7%', size: 'w-3 h-3', opacity: 'opacity-30', delay: '0.8s' },
  { top: '48%', right: '5%', size: 'w-3.5 h-3.5', opacity: 'opacity-45', delay: '2.1s' },
  { top: '72%', left: '5%', size: 'w-4 h-4', opacity: 'opacity-35', delay: '1.7s' },
  { top: '85%', right: '8%', size: 'w-3 h-3', opacity: 'opacity-30', delay: '0.5s' },
]
</script>

<template>
  <section id="summary" class="relative w-full bg-[#FFAE00] text-neutral-950 overflow-hidden select-none">
    <!-- ================================================================= -->
    <!-- [ISOLATED TRANSITION: HERO TO SUMMARY FILM STRIP TRANSITION]       -->
    <!-- To remove or adjust this transition, simply remove/edit this block -->
    <!-- ================================================================= -->
    <div class="relative w-full select-none overflow-hidden transition-all duration-500">
      <!-- Dark Space connecting to Hero Section & 35mm Cinema Film Roll Track -->
      <div class="w-full bg-[#0a0a0a] pt-14 pb-0">
        <div class="relative w-full bg-[#141414] border-y border-amber-500/40 shadow-2xl py-3.5">
          <!-- Top Sprocket Perforations Row -->
          <div class="flex items-center justify-between px-3 gap-2 overflow-hidden opacity-75">
            <div v-for="i in 28" :key="`sprocket-top-${i}`"
              class="w-3.5 h-2 rounded-xs bg-[#0a0a0a] border border-amber-500/30 shrink-0"></div>
          </div>

          <!-- Cinema Marquee Reel Ticker (Infinite CSS Marquee) -->
          <div class="marquee-strip relative flex overflow-x-hidden my-2.5">
            <!-- Track 1 -->
            <div
              class="flex items-center shrink-0 animate-marquee font-anton uppercase tracking-widest text-xs sm:text-sm">
              <span v-for="i in 24" :key="`ticker-a-${i}`" class="inline-flex items-center">
                <span class="text-amber-300 mx-4 sm:mx-5">SUMMARY</span>
                <span class="text-amber-500/60">•</span>
              </span>
            </div>
            <!-- Track 2 (Exact duplicate for seamless infinite loop) -->
            <div
              class="flex items-center shrink-0 animate-marquee font-anton uppercase tracking-widest text-xs sm:text-sm"
              aria-hidden="true">
              <span v-for="i in 24" :key="`ticker-b-${i}`" class="inline-flex items-center">
                <span class="text-amber-300 mx-4 sm:mx-5">SUMMARY</span>
                <span class="text-amber-500/60">•</span>
              </span>
            </div>
          </div>

          <!-- Bottom Sprocket Perforations Row -->
          <div class="flex items-center justify-between px-3 gap-2 overflow-hidden opacity-75">
            <div v-for="i in 28" :key="`sprocket-bottom-${i}`"
              class="w-3.5 h-2 rounded-xs bg-[#0a0a0a] border border-amber-500/30 shrink-0"></div>
          </div>
        </div>
      </div>

      <!-- Soft Eased Shadow Transition below Film Track into Golden Section -->
      <div class="h-8 sm:h-10 w-full pointer-events-none"
        style="background: linear-gradient(to bottom, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.28) 25%, rgba(0, 0, 0, 0.14) 50%, rgba(0, 0, 0, 0.04) 75%, transparent 100%);">
      </div>
    </div>
    <!-- ================================================================= -->
    <!-- [END ISOLATED TRANSITION]                                         -->
    <!-- ================================================================= -->

    <!-- Ambient Sparkle Atmosphere across Summary Section -->
    <div v-for="(sp, idx) in summarySparkles" :key="`sum-sparkle-${idx}`"
      class="absolute pointer-events-none z-10 transition-transform duration-75" :class="sp.opacity"
      :style="{ top: sp.top, left: sp.left, right: sp.right }">
      <svg :class="[sp.size, 'text-neutral-950 animate-twinkle']" :style="{ animationDelay: sp.delay }"
        viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
      </svg>
    </div>

    <!-- Retro Subtle Texture Pattern -->
    <div
      class="absolute inset-0 bg-[radial-gradient(#00000010_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40">
    </div>

    <!-- MAIN CONTENT CONTAINER -->
    <div class="relative z-20 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-8 pb-20 sm:pb-28">

      <!-- ==================== PART 1: CINEMA SCENE HEADER ==================== -->
      <div class="flex flex-col items-center text-center mb-10 sm:mb-14">
        <!-- Main Section Headline -->
        <h2
          class="font-anton uppercase tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-neutral-950 mt-4 leading-none drop-shadow-sm">
          BRIDGING DESIGN <span
            class="font-great-vibes-semibold inline-block text-[1.32em] pr-[0.1em] mx-1 sm:mx-2 align-baseline">&</span>
          CODE
        </h2>

        <!-- Subtitle Tagline in Poppins -->
        <p class="font-poppins text-base sm:text-lg md:text-xl font-medium text-neutral-900 mt-2 tracking-wide">
          "Where user intuition meets technical execution"
        </p>
      </div>

      <!-- ==================== PART 2: THE SUMMARY FEATURE CARD (OPEN CLAPPERBOARD) ==================== -->
      <div class="relative mb-16 sm:mb-20 pt-4 sm:pt-6">
        <!-- Opened Top Clapper Stick (Artistic Tilt with Hinge Bolt) -->
        <div
          class="relative w-[96%] sm:w-[98%] mx-auto z-10 origin-bottom-left -rotate-[2.5deg] sm:-rotate-[3.5deg] -mb-1 sm:-mb-1.5 transition-transform duration-300">
          <div
            class="relative h-7 sm:h-9 w-full bg-neutral-950 rounded-t-xl sm:rounded-t-2xl border border-neutral-800 overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.5)]">
            <!-- Diagonal Alternating Amber/Black Clapper Stripes -->
            <div
              class="absolute inset-0 bg-[repeating-linear-gradient(45deg,#FFAE00,#FFAE00_16px,#141414_16px,#141414_32px)]">
            </div>
          </div>
          <!-- Left Hinge Bolt / Pin -->
          <div
            class="absolute -bottom-1.5 left-2 sm:left-4 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-neutral-200 border-2 border-neutral-800 shadow-md flex items-center justify-center z-20">
            <div class="w-2 sm:w-2.5 h-0.5 bg-neutral-700"></div>
          </div>
        </div>

        <!-- Main Slate Body (Strictly Horizontal, Hovering 3D Deep Shadow) -->
        <div
          class="relative bg-neutral-950 text-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-[0_30px_70px_-10px_rgba(0,0,0,0.65),0_16px_36px_-5px_rgba(0,0,0,0.5),0_2px_10px_rgba(0,0,0,0.4)] border border-neutral-900 overflow-hidden transition-all duration-300 hover:shadow-[0_38px_85px_-10px_rgba(0,0,0,0.75),0_20px_45px_-5px_rgba(0,0,0,0.55)]">
          <!-- Fixed Lower Clapper Lip Stripe -->
          <div
            class="h-3 sm:h-3.5 -mx-6 sm:-mx-10 md:-mx-12 -mt-6 sm:-mt-10 md:-mt-12 mb-6 bg-[repeating-linear-gradient(-45deg,#FFAE00,#FFAE00_16px,#141414_16px,#141414_32px)] border-b border-neutral-800/80">
          </div>

          <!-- Cinema Light Ambience within Slate -->
          <div class="absolute -top-20 -right-20 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none">
          </div>

          <!-- Clapperboard Slate Header: Enlarged Prod Title with Subtle Low Opacity -->
          <div class="pb-5 border-b border-white/10 flex items-center justify-between">
            <h3
              class="font-anton tracking-widest sm:tracking-[0.2em] text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/10 uppercase select-none">
              PROD: ANNISA IZZATUL LATIFA, S.KOM
            </h3>
          </div>

          <!-- Feature Pillars Styled as Digital Clapperboard Timer LED Display (Positioned on Top) -->
          <div
            class="my-6 p-2 sm:p-2.5 rounded-2xl bg-[#080808] border border-amber-500/20 shadow-[inset_0_2px_12px_rgba(0,0,0,0.9),0_0_20px_rgba(255,174,0,0.06)]">
            <!-- Digital LED Timecode Header Strip -->
            <div class="px-3 py-1 text-[10px] sm:text-[11px] font-mono mb-2 text-neutral-500">
              <span class="inline-block w-2 h-2 rounded-full bg-red-500 animate-pulse mr-2"></span>
              <span class="text-red-400 font-bold tracking-wider">DOMAINS & SKILLS</span>
            </div>

            <!-- 4 Pillar LED Segment Modules -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
              <div
                class="flex flex-col p-3 rounded-xl bg-black/60 border border-amber-500/15 text-left relative overflow-hidden group hover:border-amber-400/40 transition-colors">
                <div class="absolute top-0 inset-x-0 h-0.5 bg-amber-400/30 group-hover:bg-amber-400 transition-colors">
                </div>
                <div class="flex items-baseline justify-between">
                  <span
                    class="text-amber-400 font-anton text-base sm:text-lg md:text-xl tracking-wider drop-shadow-[0_0_8px_rgba(255,174,0,0.4)]">
                    UI / UX
                  </span>
                </div>
                <span class="text-[11px] sm:text-xs text-neutral-400 font-poppins mt-0.5 line-clamp-1">
                  Design Systems & Figma
                </span>
              </div>

              <div
                class="flex flex-col p-3 rounded-xl bg-black/60 border border-amber-500/15 text-left relative overflow-hidden group hover:border-amber-400/40 transition-colors">
                <div class="absolute top-0 inset-x-0 h-0.5 bg-amber-400/30 group-hover:bg-amber-400 transition-colors">
                </div>
                <div class="flex items-baseline justify-between">
                  <span
                    class="text-amber-400 font-anton text-base sm:text-lg md:text-xl tracking-wider drop-shadow-[0_0_8px_rgba(255,174,0,0.4)]">
                    WEB DEVELOPMENT
                  </span>
                </div>
                <span class="text-[11px] sm:text-xs text-neutral-400 font-poppins mt-0.5 line-clamp-1">
                  Frontend & Full-Stack
                </span>
              </div>

              <div
                class="flex flex-col p-3 rounded-xl bg-black/60 border border-amber-500/15 text-left relative overflow-hidden group hover:border-amber-400/40 transition-colors">
                <div class="absolute top-0 inset-x-0 h-0.5 bg-amber-400/30 group-hover:bg-amber-400 transition-colors">
                </div>
                <div class="flex items-baseline justify-between">
                  <span
                    class="text-amber-400 font-anton text-base sm:text-lg md:text-xl tracking-wider drop-shadow-[0_0_8px_rgba(255,174,0,0.4)]">
                    MACHINE LEARNING
                  </span>
                </div>
                <span class="text-[11px] sm:text-xs text-neutral-400 font-poppins mt-0.5 line-clamp-1">
                  AI & Recommender System
                </span>
              </div>

              <div
                class="flex flex-col p-3 rounded-xl bg-black/60 border border-amber-500/15 text-left relative overflow-hidden group hover:border-amber-400/40 transition-colors">
                <div class="absolute top-0 inset-x-0 h-0.5 bg-amber-400/30 group-hover:bg-amber-400 transition-colors">
                </div>
                <div class="flex items-baseline justify-between">
                  <span
                    class="text-amber-400 font-anton text-base sm:text-lg md:text-xl tracking-wider drop-shadow-[0_0_8px_rgba(255,174,0,0.4)]">
                    PRODUCT
                  </span>
                </div>
                <span class="text-[11px] sm:text-xs text-neutral-400 font-poppins mt-0.5 line-clamp-1">
                  Cross-Functional Delivery
                </span>
              </div>
            </div>
          </div>

          <!-- THE FRIEND SUMMARY BODY (Strictly Horizontal & Easy to Read) -->
          <div>
            <p
              class="font-poppins text-base sm:text-lg md:text-xl text-neutral-200 leading-relaxed sm:leading-loose font-normal text-left">
              Informatics graduate from <span class="text-amber-300 font-semibold">Telkom
                University</span> blending hands-on experience in <span class="text-amber-300 font-semibold">UI/UX
                design</span>, <span class="text-amber-300 font-semibold">web development</span>, and <span
                class="text-amber-300 font-semibold">applied machine learning</span>. Proven ability to bridge
              user-centered design with technical execution, utilizing <span class="text-white font-semibold">Figma, web
                stacks, and data analysis</span> to deliver end-to-end digital solutions. Demonstrated strong
              problem-solving and cross-functional collaboration through various internships and projects experience.
              Highly adaptive and eager to drive impact across <span class="text-amber-300 font-semibold">software
                engineering, product, or data roles</span>.
            </p>
          </div>
        </div>
      </div>

      <!-- ==================== PART 3: PORTFOLIO SECTIONS SELECTION ==================== -->
      <SectionSelection />
    </div>
  </section>
</template>

<style scoped>
/* Keyframes for Truly Seamless Infinite 35mm Marquee */
@keyframes marqueeScroll {
  0% {
    transform: translate3d(0, 0, 0);
  }

  100% {
    transform: translate3d(-100%, 0, 0);
  }
}

.animate-marquee {
  display: flex;
  flex-shrink: 0;
  animation: marqueeScroll 25s linear infinite;
  will-change: transform;
}

.marquee-strip:hover .animate-marquee {
  animation-play-state: paused;
}
</style>
