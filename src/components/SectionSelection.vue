<script setup>
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()

const baseUrl = import.meta.env.BASE_URL
// Cinema "NOW SHOWING" Sections Data
const sections = [
  {
    id: 'education',
    name: 'EDUCATION',
    status: 'SHOWING NOW',
    path: '',
    image: `${baseUrl}telkomUniversity.png`,
  },
  {
    id: 'experience',
    name: 'EXPERIENCE',
    status: 'SHOWING NOW',
    path: '',
    image: `${baseUrl}fmlx.jpeg`,
  },
  {
    id: 'projects',
    name: 'PROJECTS',
    status: 'SHOWING NOW',
    path: '',
    image: `${baseUrl}porto.png`,
  },
]

// Navigation handler for plaques
const handleNavigate = (path, event) => {
  if (!path) {
    event?.preventDefault()
    return
  }
  if (path.startsWith('http://') || path.startsWith('https://')) {
    event?.preventDefault()
    window.location.href = path
    return
  }
  if (router) {
    router.push(path)
  } else {
    window.location.href = path
  }
}
</script>

<template>
  <div class="flex flex-col items-center text-center w-full">
    <!-- Section Heading -->
    <h3
      class="font-anton uppercase tracking-tight text-3xl sm:text-4xl md:text-5xl text-neutral-950 mb-2 drop-shadow-sm leading-tight">
      PORTFOLIO SECTIONS
    </h3>

    <!-- Section Subtitle -->
    <p class="font-poppins text-xs sm:text-sm text-neutral-900 font-medium max-w-lg mb-8 sm:mb-10">
      Select a section that you want to know more
    </p>

    <!-- 3 "NOW SHOWING" Cinema Plaques Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full">
      <RouterLink v-for="(section, index) in sections" :key="section.id" :to="section.path || ''"
        @click="handleNavigate(section.path, $event)"
        class="group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-neutral-950 text-white border-2 border-neutral-900 shadow-[0_16px_36px_rgba(0,0,0,0.3)] hover:shadow-[0_24px_54px_rgba(0,0,0,0.48),0_0_35px_rgba(255,174,0,0.22)] hover:border-amber-400/70 hover:-translate-y-2 transition-all duration-300 overflow-hidden cursor-pointer p-3 sm:p-4 text-left">
        <!-- Light Shimmer Sweep across Plaque -->
        <div
          class="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none transition-transform">
        </div>

        <!-- Marquee Top Header: Customizable Status Title with alight bulbs -->
        <div
          class="relative w-full bg-gradient-to-b from-[#1b1b1b] to-[#101010] rounded-xl px-3 py-2.5 sm:py-3 border border-neutral-800/90 shadow-[inset_0_1px_4px_rgba(255,255,255,0.08)] flex flex-col items-center justify-center overflow-hidden">
          <!-- Top Row of Alight Bulbs -->
          <div class="flex items-center justify-between w-full max-w-[220px] mb-2 px-1">
            <span v-for="b in 7" :key="`bulb-row-${b}`"
              class="bulb-alight w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#fffbeb] border border-amber-300 shrink-0 transition-transform duration-300 group-hover:scale-115"
              :style="{ animationDelay: `${(b * 0.2).toFixed(1)}s` }"></span>
          </div>

          <!-- Status Title with dynamic value (e.g. SHOWING NOW / COMING SOON) -->
          <div class="flex items-center justify-center w-full">
            <span
              class="font-anton text-xs sm:text-sm tracking-[0.26em] uppercase text-amber-300 drop-shadow-[0_0_8px_rgba(253,224,71,0.55)] group-hover:text-amber-200 transition-colors select-none">
              {{ section.status || 'NOW SHOWING' }}
            </span>
          </div>
        </div>

        <!-- Poster Picture Area (Placeholder) -->
        <div
          class="relative w-full aspect-[3/4] my-3 sm:my-3.5 rounded-xl overflow-hidden bg-[#121212] border border-neutral-800/90 shadow-[inset_0_2px_12px_rgba(0,0,0,0.85)] group-hover:border-amber-400/40 transition-colors">
          <!-- Real Poster Image (when provided) -->
          <img v-if="section.image" :src="section.image" :alt="`${section.name} Poster`"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />

          <!-- Cinema Poster Artwork Placeholder -->
          <div v-else
            class="relative w-full h-full flex flex-col items-center justify-between p-4 sm:p-5 select-none bg-gradient-to-b from-[#191919] via-[#111111] to-[#0a0a0a]">
            <!-- Projector Cone Light Ambience -->
            <div
              class="absolute -top-12 inset-x-0 h-40 bg-gradient-to-b from-amber-400/15 via-amber-400/5 to-transparent blur-xl pointer-events-none">
            </div>

            <!-- Viewfinder Cinema Corner Marks -->
            <div class="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-amber-400/40"></div>
            <div class="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-amber-400/40"></div>
            <div class="absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-amber-400/40"></div>
            <div class="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-amber-400/40"></div>

            <!-- Top Header in Poster -->
            <div class="relative z-10 flex items-center justify-between w-full pt-1">
              <span class="text-[9px] sm:text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                SCENE // 0{{ index + 1 }}
              </span>
              <span class="text-[9px] sm:text-[10px] font-mono tracking-widest text-amber-400/70 uppercase">
                35MM
              </span>
            </div>

            <!-- Center Artwork Placeholder Visual -->
            <div class="relative z-10 flex flex-col items-center my-auto">
              <!-- Lens Ring with Thematic Icon -->
              <div
                class="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-neutral-900/90 border border-amber-400/30 flex items-center justify-center text-amber-300 shadow-[0_0_20px_rgba(255,174,0,0.15)] group-hover:scale-110 group-hover:border-amber-400/60 group-hover:text-amber-200 transition-all duration-300">
                <!-- Education Icon -->
                <svg v-if="section.id === 'education'" class="w-8 h-8 sm:w-9 sm:h-9" fill="none" stroke="currentColor"
                  stroke-width="1.8" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 14v7" />
                </svg>

                <!-- Experience Icon -->
                <svg v-else-if="section.id === 'experience'" class="w-8 h-8 sm:w-9 sm:h-9" fill="none"
                  stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>

                <!-- Projects Icon -->
                <svg v-else class="w-8 h-8 sm:w-9 sm:h-9" fill="none" stroke="currentColor" stroke-width="1.8"
                  viewBox="0 0 24 24">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              </div>

              <!-- Placeholder Label -->
              <span class="mt-3 text-[10px] sm:text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
                POSTER PLACEHOLDER
              </span>
              <span class="text-[9px] font-poppins text-neutral-500 mt-0.5">
                Artwork Display Area
              </span>
            </div>

            <!-- Poster Bottom Metadata Frame -->
            <div
              class="relative z-10 w-full flex items-center justify-between border-t border-white/5 pt-2 text-[9px] font-mono text-neutral-500">
              <span>FORMAT: 3:4</span>
              <span>PREMIERE</span>
            </div>

            <!-- Glass Reflection Glare -->
            <div
              class="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent pointer-events-none">
            </div>
          </div>
        </div>

        <!-- Bottom Plaque Section Name Plate -->
        <div class="w-full pt-1 pb-1 px-1 flex flex-col items-center text-center">
          <h4
            class="font-anton uppercase text-2xl sm:text-3xl tracking-wider text-white group-hover:text-amber-300 transition-colors drop-shadow-sm">
            {{ section.name }}
          </h4>
          <span
            class="inline-flex items-center gap-1 text-[11px] font-poppins font-medium text-amber-400/80 group-hover:text-amber-300 mt-1 transition-colors">
            <span>Explore Section</span>
            <svg class="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none"
              stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
/* Glowing Cinema Marquee Bulb Effect */
.bulb-alight {
  box-shadow:
    0 0 4px #fef08a,
    0 0 10px #facc15,
    0 0 18px rgba(234, 179, 8, 0.75);
  animation: bulbPulse 2.5s ease-in-out infinite alternate;
}

@keyframes bulbPulse {
  0% {
    opacity: 0.85;
    box-shadow:
      0 0 3px #fef08a,
      0 0 8px #facc15,
      0 0 14px rgba(234, 179, 8, 0.65);
  }

  100% {
    opacity: 1;
    box-shadow:
      0 0 5px #fef08a,
      0 0 12px #facc15,
      0 0 20px rgba(234, 179, 8, 0.9);
  }
}

.group:hover .bulb-alight {
  animation-duration: 1.2s;
}
</style>
