<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const baseUrl = import.meta.env.BASE_URL

// In-Page Lightbox Modal State for Image Previews
const activePreview = ref(null)

const openPreview = (item) => {
  activePreview.value = item
  document.body.style.overflow = 'hidden'
}

const closePreview = () => {
  activePreview.value = null
  document.body.style.overflow = ''
}

const handleKeydown = (e) => {
  if (e.key === 'Escape' && activePreview.value) {
    closePreview()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})

// Social Links & CV matching Hero Section
const cvUrl = 'https://drive.google.com/file/d/1s-PLymWLnDsYRtL0GIWAShSC4IKXftTr/view?usp=sharing'
const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/annisaizzatull' },
  { name: 'GitHub', url: 'https://github.com/annisaizzatullatifa' },
  { name: 'Instagram', url: 'https://www.instagram.com/annisaizzatull.a.s' },
]

// Background Stars Flanking Left and Right (Matching HeroSection.vue)
const backgroundStars = [
  // === Left Flank Cluster ===
  { id: 'l1', top: '4%', left: '3%', size: 'w-4 h-4', color: 'text-amber-400', opacity: 'opacity-70', delay: '0.2s', duration: '3.2s' },
  { id: 'l2', top: '10%', left: '6%', size: 'w-2.5 h-2.5', color: 'text-yellow-200', opacity: 'opacity-40', delay: '1.2s', duration: '2.8s' },
  { id: 'l3', top: '18%', left: '2%', size: 'w-5 h-5', color: 'text-amber-300', opacity: 'opacity-65', delay: '0.6s', duration: '3.6s' },
  { id: 'l4', top: '26%', left: '5%', size: 'w-3 h-3', color: 'text-amber-400', opacity: 'opacity-45', delay: '2.0s', duration: '3.0s' },
  { id: 'l5', top: '35%', left: '3%', size: 'w-4 h-4', color: 'text-yellow-100', opacity: 'opacity-50', delay: '1.5s', duration: '3.8s' },
  { id: 'l6', top: '44%', left: '7%', size: 'w-2 h-2', color: 'text-white', opacity: 'opacity-35', delay: '0.9s', duration: '4.0s' },
  { id: 'l7', top: '53%', left: '2%', size: 'w-4.5 h-4.5', color: 'text-amber-400', opacity: 'opacity-60', delay: '2.3s', duration: '3.3s' },
  { id: 'l8', top: '62%', left: '5%', size: 'w-3 h-3', color: 'text-yellow-300', opacity: 'opacity-45', delay: '0.4s', duration: '3.5s' },
  { id: 'l9', top: '71%', left: '3%', size: 'w-3.5 h-3.5', color: 'text-amber-300', opacity: 'opacity-55', delay: '1.8s', duration: '3.1s' },
  { id: 'l10', top: '80%', left: '6%', size: 'w-2.5 h-2.5', color: 'text-white', opacity: 'opacity-30', delay: '2.6s', duration: '4.2s' },
  { id: 'l11', top: '89%', left: '2%', size: 'w-4 h-4', color: 'text-amber-400', opacity: 'opacity-65', delay: '1.0s', duration: '3.4s' },
  { id: 'l12', top: '96%', left: '5%', size: 'w-3 h-3', color: 'text-yellow-200', opacity: 'opacity-40', delay: '0.7s', duration: '3.7s' },

  // === Right Flank Cluster ===
  { id: 'r1', top: '3%', right: '4%', size: 'w-4 h-4', color: 'text-amber-300', opacity: 'opacity-65', delay: '0.4s', duration: '3.1s' },
  { id: 'r2', top: '9%', right: '2%', size: 'w-5 h-5', color: 'text-amber-400', opacity: 'opacity-75', delay: '1.6s', duration: '3.4s' },
  { id: 'r3', top: '17%', right: '6%', size: 'w-2.5 h-2.5', color: 'text-yellow-200', opacity: 'opacity-40', delay: '2.2s', duration: '2.9s' },
  { id: 'r4', top: '25%', right: '3%', size: 'w-3.5 h-3.5', color: 'text-white', opacity: 'opacity-35', delay: '0.8s', duration: '3.9s' },
  { id: 'r5', top: '34%', right: '5%', size: 'w-4 h-4', color: 'text-amber-400', opacity: 'opacity-55', delay: '1.9s', duration: '3.3s' },
  { id: 'r6', top: '43%', right: '2%', size: 'w-2.5 h-2.5', color: 'text-yellow-300', opacity: 'opacity-40', delay: '0.5s', duration: '3.6s' },
  { id: 'r7', top: '52%', right: '6%', size: 'w-4 h-4', color: 'text-amber-300', opacity: 'opacity-60', delay: '2.4s', duration: '3.0s' },
  { id: 'r8', top: '61%', right: '3%', size: 'w-3 h-3', color: 'text-yellow-100', opacity: 'opacity-45', delay: '1.1s', duration: '4.1s' },
  { id: 'r9', top: '70%', right: '5%', size: 'w-5 h-5', color: 'text-amber-400', opacity: 'opacity-70', delay: '0.3s', duration: '3.5s' },
  { id: 'r10', top: '79%', right: '2%', size: 'w-2.5 h-2.5', color: 'text-yellow-200', opacity: 'opacity-40', delay: '1.7s', duration: '2.8s' },
  { id: 'r11', top: '88%', right: '6%', size: 'w-3.5 h-3.5', color: 'text-amber-300', opacity: 'opacity-50', delay: '2.1s', duration: '3.7s' },
  { id: 'r12', top: '95%', right: '3%', size: 'w-4 h-4', color: 'text-amber-400', opacity: 'opacity-65', delay: '0.9s', duration: '3.2s' },
]

// Executive Academic Highlights for Quick HR Scanning
const hrHighlights = [
  {
    id: 'degree',
    label: 'ACADEMIC DEGREE',
    value: 'Cum Laude (3.75 GPA)',
    sub: 'Bachelor of Computer Science (S.Kom), Faculty of Informatics',
  },
  {
    id: 'standing',
    label: 'FACULTY RANKING',
    value: '#2 in Indonesia',
    sub: 'Ranked 2nd best CS faculty by THE & 7th best by QS World Rankings',
  },
  {
    id: 'publication',
    label: 'RESEARCH PUBLICATION',
    value: 'IEEE ICSECS 2025',
    sub: 'Oral Presenter on Machine Learning at 9th International Conference',
  },
  {
    id: 'bootcamp',
    label: 'INDUSTRY BOOTCAMP',
    value: 'UI/UX & Web Dev',
    sub: 'Figma, ReactJS, Express JS & MySQL Full Stack with Celerates',
  },
]

// 6 Education Milestones Data (Optimized for conciseness & rapid scanning)
const educationItems = [
  {
    sceneNumber: '01',
    category: 'BACHELOR DEGREE',
    title: 'Graduated with Cum Laude honor (3.75 GPA) from Faculty of Informatics, Telkom University',
    description:
      'Telkom University has one of the top faculty for Computer Science and Informatics in Indonesia, jointly ranked 2nd best in Indonesia by Times Higher Education (THE) and 7th best in Indonesia by QS World University Rankings.',
    badges: [
      'Cum Laude (3.75 GPA)',
      'Faculty of Informatics',
      'THE #2 in ID',
      'QS #7 in ID',
      'Telkom University',
    ],
    image: `${baseUrl}ijazah_redacted.jpg`,
    pdfUrl: 'https://drive.google.com/file/d/1bjA86PQFuxFK46Gx2FiJbt5wvAr40GCC/view?usp=sharing',
    actionText: 'View Degree Certificate (PDF)',
    isClickable: true,
  },
  {
    sceneNumber: '02',
    category: 'ACADEMIC EXCELLENCE',
    title: 'Academic Excellence Across Various Classes',
    description:
      'Maintained consistent high academic achievement across core disciplines, scoring the highest letter grade ("A") across foundational and advanced computer science coursework.',
    badges: [
      'Statistics (A)',
      'Human Computer Interaction (A)',
      'Software Engineering (A)',
      'Machine Learning (A)',
      'Recommender System (A)',
      'Database (A)',
    ],
    image: `${baseUrl}transcribe.jpg`,
    pdfUrl: 'https://drive.google.com/file/d/1vnoQBKDaCDJUNZ73DnWfpO9ULMLivsgD/view?usp=sharing',
    actionText: 'View Score Transcript (PDF)',
    isClickable: true,
  },
  {
    sceneNumber: '03',
    category: 'INDUSTRY BOOTCAMP',
    title: 'Bootcamp in UI/UX and Web Development at Celerates x MBKM',
    description:
      'I gained proficiency of design thinking, Figma (low-fi & high-fi design, prototyping), and various web stacks, such as: HTML, CSS, JavaScript, ReactJS, Bootstrap, Express JS, and MySQL. I also actively contribute as a UI/UX designer and front-end web developer for various projects.',
    badges: [
      'Design Thinking',
      'Figma (Lo-fi & Hi-fi)',
      'ReactJS',
      'JavaScript',
      'Express JS',
      'MySQL',
      'Bootstrap',
      'HTML/CSS',
    ],
    image: `${baseUrl}celerates.jpg`,
    pdfUrl: 'https://drive.google.com/file/d/1EI2J0JIzFxbfMFGJYSKjV1SZgz-fqXof/view?usp=sharing',
    actionText: 'View Bootcamp Certificate (PDF)',
    isClickable: true,
  },
  {
    sceneNumber: '04',
    category: 'CONFERENCE PRESENTATION',
    title: 'Presenter at an IEEE International Conference with Machine Learning topic',
    description:
      'My paper was selected to the ninth IEEE International Conference on Software Engineering & Computer Science (ICSECS 2025) and I presented my paper on applied machine learning.',
    badges: [
      'IEEE ICSECS 2025',
      'Machine Learning',
      'Paper Presenter',
      'International Conference',
    ],
    image: `${baseUrl}icsecs25.jpg`,
    pdfUrl: 'https://drive.google.com/file/d/1useMxLvhoWTqF0FpmgkEzoBYgQEqx1wH/view?usp=sharing',
    actionText: 'View Presenter Certificate (PDF)',
    isClickable: true,
    paperUrl: 'https://ieeexplore.ieee.org/document/11279202/',
    paperActionText: 'Open the Paper in IEEEXplore',
  },
  {
    sceneNumber: '05',
    category: 'LAB & HACKATHON',
    title: 'Active Participation in Laboratory',
    description:
      'Actively participate as UI/UX Study Group Member at Mobile Innovation Laboratory (Motion) in Telkom University where I gained more knowledge in UI/UX design and participate in a hackathon as UI/UX designer creating low-fi and hi-fi design for a food ordering app for MSMEs.',
    badges: [
      'Motion Laboratory',
      'Motionhack Finalist',
      'MSME Food Ordering App',
      'UI/UX Design',
      'Wireframing & Prototyping',
    ],
    image: `${baseUrl}motion.jpg`,
    pdfUrl: 'https://drive.google.com/file/d/1kcMOpL6t2_eAmr9t6oHb2lZCRVJ6_9wi/view?usp=sharing',
    actionText: 'View Motionhack Certificate (PDF)',
    isClickable: true,
  },
  {
    sceneNumber: '06',
    category: 'VOLUNTEERING & LEADERSHIP',
    title: 'Responsibility, Leadership, and Time Management from Volunteering and Organization',
    description:
      'Active member of various Organizing Committees, such as Fortran (orientation for new Informatics students), Hello World (welcoming party for new Informatics students), Interfest (yearly Informatics festival and competition). I was also an active member of Al-Fath (Islamic students organization).',
    badges: [
      'Fortran Committee',
      'Hello World Committee',
      'Interfest Committee',
      'Al-Fath Organization',
      'Event Leadership',
    ],
    image: `${baseUrl}collage_education.jpg`,
    pdfUrl: null,
    actionText: null,
    isClickable: false,
  },
]
</script>

<template>
  <div
    class="relative min-h-screen w-full bg-[#0a0a0a] text-white selection:bg-amber-400 selection:text-black overflow-x-hidden">
    <!-- Ambient Background Cinema Spotlight Glow -->
    <div
      class="fixed top-24 left-1/2 -translate-x-1/2 w-[750px] h-[550px] bg-gradient-to-tr from-amber-500/12 via-orange-500/6 to-transparent rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow">
    </div>

    <!-- Subtle Dot Grid Overlay -->
    <div
      class="fixed inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none -z-10 opacity-70">
    </div>

    <!-- Ambient Flanking Stars across Left and Right (HeroSection style) -->
    <div
      v-for="s in backgroundStars"
      :key="s.id"
      class="absolute z-20 pointer-events-none select-none transition-transform duration-75"
      :class="s.opacity"
      :style="{ top: s.top, left: s.left, right: s.right }">
      <svg
        :class="[s.size, s.color, 'animate-twinkle']"
        :style="{ animationDelay: s.delay, animationDuration: s.duration }"
        viewBox="0 0 24 24"
        fill="currentColor">
        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
      </svg>
    </div>

    <!-- ==================== TOP NAVIGATION BAR ==================== -->
    <header
      class="sticky top-0 z-40 w-full backdrop-blur-xl bg-neutral-950/85 border-b border-white/10 px-4 sm:px-8 lg:px-14 py-3 transition-all">
      <div class="max-w-6xl mx-auto flex items-center justify-between gap-3">
        <!-- Return to Home / Cinema Lobby Button -->
        <RouterLink to="/"
          class="group relative inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-amber-500/15 via-yellow-400/10 to-amber-500/15 border border-amber-400/50 backdrop-blur-md text-xs sm:text-sm font-poppins text-neutral-200 shadow-[0_0_18px_rgba(255,174,0,0.18)] transition-all duration-300 hover:border-amber-300 hover:text-white hover:shadow-[0_0_26px_rgba(255,174,0,0.45)] hover:scale-105 active:scale-95 cursor-pointer">
          <div class="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
            <div
              class="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform">
            </div>
          </div>
          <svg class="w-4 h-4 text-amber-400 group-hover:-translate-x-0.5 transition-transform duration-300 shrink-0"
            fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span class="font-semibold tracking-wide text-white group-hover:text-amber-200 transition-colors">
            Back to Lobby
          </span>
          <span class="text-xs text-amber-300 animate-twinkle select-none ml-0.5">✨</span>
        </RouterLink>

        <!-- Right Quick Links: CV & Socials -->
        <div class="flex items-center gap-2 sm:gap-3">
          <!-- CV Shortcut -->
          <a :href="cvUrl" target="_blank" rel="noopener noreferrer"
            class="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/10 hover:border-amber-400/50 hover:bg-white/[0.08] text-xs font-poppins text-neutral-300 hover:text-white transition-all duration-300"
            title="View Annisa's CV (Google Drive)">
            <svg class="w-3.5 h-3.5 text-amber-400" fill="none" stroke="currentColor" stroke-width="2"
              viewBox="0 0 24 24">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
            <span class="font-medium hidden sm:inline">Curriculum Vitae</span>
            <span class="font-medium sm:hidden">CV</span>
            <svg class="w-3 h-3 text-neutral-400 group-hover:text-amber-300" fill="none" stroke="currentColor"
              stroke-width="2" viewBox="0 0 24 24">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>

          <!-- Social Icons -->
          <div class="flex items-center gap-1.5">
            <a v-for="social in socialLinks" :key="social.name" :href="social.url" target="_blank"
              rel="noopener noreferrer"
              class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-neutral-300 hover:text-amber-400 hover:border-amber-400/50 hover:scale-110 transition-all duration-300"
              :title="`Visit ${social.name}`">
              <!-- LinkedIn -->
              <svg v-if="social.name === 'LinkedIn'" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <!-- GitHub -->
              <svg v-else-if="social.name === 'GitHub'" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path
                  d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              <!-- Instagram -->
              <svg v-else class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>

    <!-- ==================== PAGE HEADER ==================== -->
    <section class="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 pt-8 pb-6 text-center">
      <!-- Status Badge with Glowing Bulbs -->
      <div
        class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-amber-500/30 shadow-[0_0_18px_rgba(255,174,0,0.12)] mb-4 select-none">
        <span class="bulb-alight w-2 h-2 rounded-full bg-[#fffbeb] border border-amber-300"></span>
        <span
          class="font-anton text-xs tracking-[0.24em] uppercase text-amber-300 drop-shadow-[0_0_8px_rgba(253,224,71,0.55)]">
          NOW SHOWING • EDUCATION
        </span>
        <span class="bulb-alight w-2 h-2 rounded-full bg-[#fffbeb] border border-amber-300"></span>
      </div>

      <!-- Main Headline -->
      <h1
        class="font-anton uppercase tracking-tight text-3xl sm:text-5xl md:text-6xl text-white leading-tight drop-shadow-md">
        EDUCATION <span
          class="font-great-vibes-semibold text-amber-400 inline-block text-[1.12em] mx-1 align-baseline">&</span>
        ACADEMIC CREDENTIALS
      </h1>

      <p class="font-poppins text-xs sm:text-sm md:text-base text-neutral-300 max-w-xl mx-auto mt-2 leading-relaxed">
        Academic excellence, international conference publication, industry training, and student leadership.
      </p>

      <!-- ==================== EXECUTIVE HIGHLIGHTS STRIP (FOR HR QUICK SCANNING) ==================== -->
      <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 text-left">
        <div
          v-for="(hl, idx) in hrHighlights"
          :key="hl.id"
          class="relative p-[1.5px] rounded-2xl overflow-hidden bg-amber-400/20 shadow-[0_10px_28px_rgba(0,0,0,0.5)]">
          <!-- Continuous Rotating Golden Glow Border Beam (Full Perimeter amber-400 Color) -->
          <div
            class="absolute inset-[-150%] bg-[conic-gradient(from_0deg_at_50%_50%,rgba(251,191,36,0.2)_0deg,rgba(251,191,36,0.3)_60deg,rgba(251,191,36,0.6)_140deg,rgba(251,191,36,0.9)_200deg,#fbbf24_240deg,rgba(251,191,36,0.9)_280deg,rgba(251,191,36,0.5)_320deg,rgba(251,191,36,0.2)_360deg)] animate-border-spin pointer-events-none"
            :style="{ animationDelay: `${idx * -2.25}s` }">
          </div>

          <!-- Inner Card Content (Stationary, no hover animation) -->
          <div
            class="relative h-full w-full rounded-[calc(1rem-1.5px)] bg-gradient-to-b from-[#181818] via-[#121212] to-[#0a0a0a] p-5 flex flex-col justify-between">
            <div>
              <!-- Category Label (No Pill Badge) -->
              <div
                class="text-[11px] sm:text-xs font-poppins font-bold tracking-wider text-amber-400 uppercase flex items-center gap-1.5 mb-2">
                <span class="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                <span>{{ hl.label }}</span>
              </div>

              <!-- Headline Value (Stationary) -->
              <div
                class="font-anton text-lg sm:text-xl text-white tracking-wide leading-snug drop-shadow-[0_0_8px_rgba(255,174,0,0.2)] my-2">
                {{ hl.value }}
              </div>
            </div>

            <!-- Details / Subtitle (Matches item.description) -->
            <div
              class="font-poppins text-neutral-300 text-xs sm:text-sm leading-relaxed font-normal pt-2.5 border-t border-white/5">
              {{ hl.sub }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== MAIN CONTENT: 6 COMPACT SCENE CARDS (2-COLUMN GRID) ==================== -->
    <main class="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 pb-20">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        <article v-for="item in educationItems" :key="item.sceneNumber"
          class="group relative rounded-2xl bg-neutral-950/90 text-white border border-neutral-800 shadow-[0_12px_32px_rgba(0,0,0,0.5)] hover:border-amber-400/50 hover:shadow-[0_16px_40px_rgba(255,174,0,0.12)] transition-all duration-300 flex flex-col p-4 sm:p-5 overflow-hidden">

          <!-- Top Row: Scene Tag & Category -->
          <div
            class="flex items-center justify-between text-xs font-mono text-neutral-400 pb-2.5 border-b border-white/5 mb-3">
            <span class="text-amber-400 font-semibold tracking-wider flex items-center gap-1.5">
              <span class="text-[10px] text-amber-400">★</span>
              <span>SCENE {{ item.sceneNumber }}</span>
              <span class="text-neutral-600">//</span>
              <span class="text-neutral-300">{{ item.category }}</span>
            </span>
          </div>

          <!-- Card Heading -->
          <h2
            class="font-anton uppercase tracking-wide text-lg sm:text-xl text-white group-hover:text-amber-200 transition-colors leading-snug mb-2.5">
            {{ item.title }}
          </h2>

          <!-- Media Preview Thumbnail (Contained, non-bloated height for fast visual context) -->
          <div
            class="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-48 rounded-xl overflow-hidden bg-[#121212] border border-neutral-800 shadow-[inset_0_2px_10px_rgba(0,0,0,0.85)] group-hover:border-amber-400/40 transition-colors my-2.5">
            <!-- Clickable wrapper for items 1-5 -->
            <a v-if="item.isClickable && item.pdfUrl" :href="item.pdfUrl" target="_blank" rel="noopener noreferrer"
              class="w-full h-full block cursor-pointer relative"
              :title="`Open ${item.actionText} (Google Drive PDF)`">
              <img :src="item.image" :alt="item.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104"
                loading="lazy" />

              <!-- Corner Viewfinder Marks -->
              <div class="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-amber-400/80"></div>
              <div class="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-amber-400/80"></div>
              <div class="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-amber-400/80"></div>
              <div class="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-amber-400/80"></div>

              <!-- Hover Cue -->
              <div
                class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-1.5 text-xs font-poppins font-semibold text-white">
                <span>Open PDF Document</span>
                <span class="text-amber-300">↗</span>
              </div>
            </a>

            <!-- Interactive wrapper for item 6 (collage) with in-page popup -->
            <button v-else type="button" @click="openPreview(item)"
              class="w-full h-full block cursor-pointer relative group/thumb text-left select-none"
              title="Click to expand photographic collage">
              <img :src="item.image" :alt="item.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104"
                loading="lazy" />

              <!-- Corner Viewfinder Marks -->
              <div class="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-amber-400/80"></div>
              <div class="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-amber-400/80"></div>
              <div class="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-amber-400/80"></div>
              <div class="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-amber-400/80"></div>

              <!-- Hover Cue -->
              <div
                class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-1.5 text-xs font-poppins font-semibold text-white">
                <span>View Photo Showcase</span>
                <span class="text-amber-300">⛶</span>
              </div>

              <div class="absolute bottom-2 right-2 z-10">
                <span
                  class="px-2 py-0.5 rounded-full bg-black/80 border border-white/10 text-[9px] font-mono text-neutral-300 uppercase">
                  Photo Archive
                </span>
              </div>
            </button>
          </div>

          <!-- Concise Description for HR Scanning -->
          <p class="font-poppins text-neutral-300 text-xs sm:text-sm leading-relaxed mt-2.5 mb-3 font-normal">
            {{ item.description }}
          </p>

          <!-- Publication / Paper External Link Button (e.g. IEEE Conference) -->
          <div v-if="item.paperUrl" class="mb-3.5">
            <a :href="item.paperUrl" target="_blank" rel="noopener noreferrer"
              class="group/btn inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500/15 via-yellow-400/10 to-amber-500/15 border border-amber-400/50 hover:border-amber-300 text-amber-300 hover:text-white font-poppins text-xs font-semibold shadow-[0_0_14px_rgba(255,174,0,0.12)] hover:shadow-[0_0_20px_rgba(255,174,0,0.35)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
              <span>{{ item.paperActionText || 'Open the Paper in IEEEXplore' }}</span>
              <svg class="w-3.5 h-3.5 text-amber-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                viewBox="0 0 24 24">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>

          <!-- Badges / Skills Pills -->
          <div class="flex flex-wrap gap-1.5">
            <span v-for="badge in item.badges" :key="badge"
              class="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-poppins font-medium bg-[#141414] border border-amber-500/20 text-amber-200/90">
              {{ badge }}
            </span>
          </div>
        </article>
      </div>
    </main>

    <!-- ==================== FOOTER ==================== -->
    <footer
      class="relative w-full bg-neutral-950 border-t border-white/10 pt-8 pb-12 px-5 sm:px-8 text-center select-none">
      <div class="max-w-2xl mx-auto flex flex-col items-center">
        <!-- Return to Lobby Button -->
        <RouterLink to="/"
          class="group relative inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500/20 via-yellow-400/10 to-amber-500/20 border border-amber-400/60 font-poppins font-semibold text-xs sm:text-sm text-white shadow-[0_0_20px_rgba(255,174,0,0.18)] hover:shadow-[0_0_30px_rgba(255,174,0,0.45)] hover:border-amber-300 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer mb-5">
          <svg class="w-4 h-4 text-amber-400 group-hover:-translate-x-1 transition-transform" fill="none"
            stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Return to Cinema Lobby</span>
          <span class="text-xs text-amber-300 animate-twinkle">✨</span>
        </RouterLink>

        <!-- Copyright -->
        <div class="text-[11px] font-mono text-neutral-500">
          PROD: ANNISA IZZATUL LATIFA, S.KOM • © 2026
        </div>
      </div>
    </footer>

    <!-- ==================== IN-PAGE IMAGE LIGHTBOX MODAL ==================== -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95">
        <div
          v-if="activePreview"
          class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
          @click.self="closePreview"
          role="dialog"
          aria-modal="true"
          :aria-label="activePreview.title">
          <div
            class="relative max-w-4xl w-full bg-neutral-950 border border-amber-400/30 rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col max-h-[92vh]">
            
            <!-- Modal Header Bar -->
            <div
              class="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-white/10 bg-neutral-900/80">
              <div class="flex items-center gap-2 text-xs font-mono">
                <span class="text-amber-400 font-semibold flex items-center gap-1.5">
                  <span class="text-xs">★</span>
                  <span>SCENE {{ activePreview.sceneNumber }}</span>
                  <span class="text-neutral-600">//</span>
                  <span class="text-neutral-300 uppercase">{{ activePreview.category }}</span>
                </span>
              </div>

              <!-- Close Button -->
              <button
                type="button"
                @click="closePreview"
                class="group inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-amber-400/20 border border-white/10 hover:border-amber-400/50 text-xs font-poppins text-neutral-300 hover:text-white transition-all cursor-pointer"
                title="Close (Esc)">
                <span class="hidden sm:inline font-mono text-[10px] text-neutral-400 group-hover:text-amber-200">ESC</span>
                <span class="text-sm leading-none font-bold">✕</span>
              </button>
            </div>

            <!-- Modal Image Container -->
            <div class="relative w-full flex-1 min-h-0 bg-[#0d0d0d] flex items-center justify-center p-2 sm:p-4 overflow-auto">
              <div class="relative inline-block max-w-full max-h-full">
                <img
                  :src="activePreview.image"
                  :alt="activePreview.title"
                  class="max-h-[72vh] w-auto max-w-full object-contain rounded-lg border border-white/10 shadow-2xl" />

                <!-- Corner Viewfinder Marks -->
                <div class="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-amber-400/90 pointer-events-none"></div>
                <div class="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-amber-400/90 pointer-events-none"></div>
                <div class="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-amber-400/90 pointer-events-none"></div>
                <div class="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-amber-400/90 pointer-events-none"></div>
              </div>
            </div>

            <!-- Modal Footer / Caption -->
            <div class="px-4 sm:px-6 py-2.5 border-t border-white/10 bg-neutral-900/60 flex items-center justify-between text-xs text-neutral-400">
              <span class="font-poppins truncate pr-4 text-neutral-300 text-[11px] sm:text-xs">
                {{ activePreview.title }}
              </span>
              <span class="text-[10px] font-mono text-neutral-500 shrink-0 uppercase">
                Photo Showcase
              </span>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
/* Glowing Cinema Marquee Bulb Effect */
.bulb-alight {
  box-shadow:
    0 0 4px #fef08a,
    0 0 10px #facc15,
    0 0 16px rgba(234, 179, 8, 0.75);
  animation: bulbPulse 2.5s ease-in-out infinite alternate;
}

@keyframes bulbPulse {
  0% {
    opacity: 0.85;
    box-shadow:
      0 0 3px #fef08a,
      0 0 8px #facc15,
      0 0 12px rgba(234, 179, 8, 0.65);
  }

  100% {
    opacity: 1;
    box-shadow:
      0 0 5px #fef08a,
      0 0 12px #facc15,
      0 0 18px rgba(234, 179, 8, 0.9);
  }
}

/* Rotating Golden Border Glow Beam */
@keyframes borderRotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.animate-border-spin {
  animation: borderRotate 9s linear infinite;
  will-change: transform;
}
</style>
