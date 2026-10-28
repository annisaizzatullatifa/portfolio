<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const baseUrl = import.meta.env.BASE_URL

// Social Links & CV matching Hero Section & Education
const cvUrl = 'https://drive.google.com/file/d/1s-PLymWLnDsYRtL0GIWAShSC4IKXftTr/view?usp=sharing'
const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/annisaizzatull' },
  { name: 'GitHub', url: 'https://github.com/annisaizzatullatifa' },
  { name: 'Instagram', url: 'https://www.instagram.com/annisaizzatull.a.s' },
]

// Background Stars Flanking Left and Right (Matching HeroSection.vue & EducationView.vue)
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

// Executive Experience Highlights for Quick HR Scanning
// eslint-disable-next-line no-unused-vars
const hrHighlights = [
  {
    id: 'internships',
    label: 'EXPERIENCE TRACK',
    value: '3 Industry Internships',
    sub: 'Formulatrix, PT Wesclic Indonesia Neotech, and Telkomsel',
  },
  {
    id: 'specialization',
    label: 'PRIMARY SPECIALIZATION',
    value: 'UI/UX & Product Design',
    sub: 'Design systems, interactive prototyping, and user journey optimization',
  },
  {
    id: 'automation',
    label: 'ENTERPRISE DOMAIN',
    value: 'Lab Automation & Healthtech',
    sub: 'Streamlining complex workflows for high-throughput instrumentation',
  },
  {
    id: 'engineering',
    label: 'TECHNICAL DEPTH',
    value: 'Full-Stack & Applied ML',
    sub: 'Python Flask, telecommunication packet diagnostics, and web UI integration',
  },
]

// 3 Experience Milestones Data
const experienceItems = [
  {
    sceneNumber: '01',
    category: 'ENTERPRISE LAB AUTOMATION',
    role: 'UX Designer Intern',
    company: 'Formulatrix Indonesia',
    date: 'February 2026 – August 2026',
    location: 'Salatiga, Central Java',
    bullets: [
      {
        summary: 'End-to-end product design',
        detail:
          'Designed detailed user flows, wireframes, and interactive high-fidelity prototypes in Figma for complex laboratory automation software, reducing manual steps through user-focused design.',
      },
      {
        summary: 'Stakeholder collaboration',
        detail:
          'Led user requirement analysis alongside key business stakeholders, translating high-level operational demands into actionable UI layouts and validated user journeys.',
      },
      {
        summary: 'Agile teamwork',
        detail:
          'Synchronized daily with PMs, Developers, and QA throughout the development lifecycle to ensure design consistency, prevent UI regression, and align with front-end technical feasibility.',
      },
      {
        summary: 'Handoff & documentation',
        detail:
          'Standardized design deliverables by producing clear documentation and behavioral specs, speeding up developer implementation and minimizing revision cycles.',
      },
    ],
    badges: [
      'UX Design',
      'Figma (Hi-fi & Lo-fi)',
      'Lab Automation Software',
      'Agile Cross-Functional',
      'Design System & Handoff',
    ],
    image: `${baseUrl}fmlx_experience.jpg`,
    type: 'modal',
    pdfUrl: null,
    actionText: 'View Photographic Collage',
    badgeLabel: 'Photo Showcase',
  },
  {
    sceneNumber: '02',
    category: 'DIGITAL AGENCY & CLIENT PLATFORMS',
    role: 'UI/UX Designer Intern',
    company: 'PT Wesclic Indonesia Neotech',
    date: 'February 2025 – May 2025',
    location: 'Yogyakarta',
    bullets: [
      {
        summary: 'Interface design & optimization',
        detail:
          'Revamped the checkout page UI with Figma for WesclicStudio, simplifying multi-step purchase journeys and resolving user friction points to elevate the transaction experience.',
      },
      {
        summary: 'Client website development',
        detail:
          'Designed tailored, user-centric website Uis with Figma for village institution clients, focusing on core usability, accessibility, and modern design principles.',
      },
      {
        summary: 'End-to-end design & collaboration',
        detail:
          'Navigated the full design lifecycle, partnering closely with developers to ensure seamless design handoffs and technical implementation readiness.',
      },
    ],
    badges: [
      'UI/UX Design',
      'Checkout Flow Optimization',
      'Figma',
      'Usability & Accessibility',
      'Client Website Design',
    ],
    image: `${baseUrl}winnership.jpg`,
    type: 'pdf',
    pdfUrl: 'https://drive.google.com/file/d/1HGXucrHPa4geTSjeWEoqGwCVmVaTeP1A/view?usp=sharing',
    actionText: 'View Internship Certificate (PDF)',
    badgeLabel: 'Certificate PDF',
  },
  {
    sceneNumber: '03',
    category: 'TELECOMMUNICATION & APPLIED ML',
    role: 'Full-Stack Machine Learning Intern',
    company: 'Telkomsel',
    date: 'June 2024 – August 2024',
    location: 'Bandung, West Java',
    bullets: [
      {
        summary: 'Machine learning pipeline',
        detail:
          'Engineered an end-to-end telecommunication packet loss prediction pipeline, implementing data preprocessing techniques including MinMaxScaler normalization and SMOTE oversampling to handle imbalanced network data.',
      },
      {
        summary: 'Interactive web integration',
        detail:
          'Developed a responsive web tool using Python Flask, HTML, CSS, and Bootstrap that connects front-end transport parameters (such as network capacity, usage, and outage) directly to the underlying model for real-time diagnostics.',
      },
    ],
    badges: [
      'Applied Machine Learning',
      'Python Flask',
      'Data Preprocessing',
      'SMOTE & MinMaxScaler',
      'Bootstrap & Responsive UI',
    ],
    image: `${baseUrl}laporanKP.jpg`,
    type: 'pdf',
    pdfUrl: 'https://drive.google.com/file/d/1_CJZTyASjYByfuQlOYAiPxVbQCLy2y51/view?usp=sharing',
    actionText: 'View Internship Report (PDF)',
    badgeLabel: 'Internship Report PDF',
  },
]

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
    <div v-for="s in backgroundStars" :key="s.id"
      class="absolute z-20 pointer-events-none select-none transition-transform duration-75" :class="s.opacity"
      :style="{ top: s.top, left: s.left, right: s.right }">
      <svg :class="[s.size, s.color, 'animate-twinkle']"
        :style="{ animationDelay: s.delay, animationDuration: s.duration }" viewBox="0 0 24 24" fill="currentColor">
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
    <section class="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 pt-8 pb-10 text-center">
      <!-- Status Badge with Glowing Bulbs -->
      <div
        class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-amber-500/30 shadow-[0_0_18px_rgba(255,174,0,0.12)] mb-4 select-none">
        <span class="bulb-alight w-2 h-2 rounded-full bg-[#fffbeb] border border-amber-300"></span>
        <span
          class="font-anton text-xs tracking-[0.24em] uppercase text-amber-300 drop-shadow-[0_0_8px_rgba(253,224,71,0.55)]">
          NOW SHOWING • WORK EXPERIENCE
        </span>
        <span class="bulb-alight w-2 h-2 rounded-full bg-[#fffbeb] border border-amber-300"></span>
      </div>

      <!-- Main Headline -->
      <h1
        class="font-anton uppercase tracking-tight text-3xl sm:text-5xl md:text-6xl text-white leading-tight drop-shadow-md">
        WORK EXPERIENCE <span
          class="font-great-vibes-semibold text-amber-400 inline-block text-[1.12em] mx-1 align-baseline">&</span>
        CAREER JOURNEY
      </h1>

      <p class="font-poppins text-xs sm:text-sm md:text-base text-neutral-300 max-w-2xl mx-auto mt-2 leading-relaxed">
        Enterprise product design, web development, and applied machine learning.
      </p>
    </section>

    <!-- ==================== MAIN CONTENT: FULL-WIDTH SINGLE ROW CARDS ==================== -->
    <main class="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 pb-20">
      <div class="grid grid-cols-1 gap-6 sm:gap-8">
        <article v-for="item in experienceItems" :key="item.sceneNumber"
          class="group relative rounded-2xl sm:rounded-3xl bg-neutral-950/90 text-white border border-neutral-800 shadow-[0_12px_32px_rgba(0,0,0,0.5)] hover:border-amber-400/50 hover:shadow-[0_16px_40px_rgba(255,174,0,0.12)] transition-all duration-300 p-5 sm:p-7 lg:p-8 overflow-hidden flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8">

          <!-- Left Column: Career Information & Bullet Points -->
          <div class="flex-1 min-w-0 flex flex-col justify-between">
            <div>
              <!-- Heading: Role <newline> Company -->
              <div class="mb-3">
                <h2
                  class="font-anton uppercase tracking-wide text-2xl sm:text-3xl text-white group-hover:text-amber-200 transition-colors leading-tight">
                  {{ item.role }}
                </h2>
                <div class="font-poppins font-semibold text-amber-400 text-sm sm:text-base mt-1">
                  {{ item.company }}
                </div>
              </div>

              <!-- Metadata Row: Date & Location Badges -->
              <div
                class="flex flex-wrap items-center gap-2.5 text-xs font-mono text-neutral-400 mb-4 pb-3 border-b border-white/5">
                <span
                  class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-amber-300/95 font-medium">
                  <svg class="w-3.5 h-3.5 text-amber-400 shrink-0" fill="none" stroke="currentColor" stroke-width="2"
                    viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span>{{ item.date }}</span>
                </span>
                <span class="text-neutral-600">//</span>
                <span
                  class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-neutral-300 font-medium">
                  <svg class="w-3.5 h-3.5 text-amber-400 shrink-0" fill="none" stroke="currentColor" stroke-width="2"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                  <span>{{ item.location }}</span>
                </span>
              </div>

              <!-- Text / Bullet Points -->
              <ul class="space-y-3 mb-5">
                <li v-for="(bullet, bIdx) in item.bullets" :key="bIdx"
                  class="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed font-normal">
                  <span class="text-amber-400 text-xs mt-1 shrink-0 select-none">★</span>
                  <div>
                    <span class="font-semibold text-white tracking-wide mr-1.5">{{ bullet.summary }}:</span>
                    <span class="text-neutral-300">{{ bullet.detail }}</span>
                  </div>
                </li>
              </ul>
            </div>

            <!-- Skills & Tech Badges Pills -->
            <div class="flex flex-wrap gap-1.5 pt-2">
              <span v-for="badge in item.badges" :key="badge"
                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-poppins font-medium bg-[#141414] border border-amber-500/20 text-amber-200/90">
                {{ badge }}
              </span>
            </div>
          </div>

          <!-- Right Column: Interactive Media Preview -->
          <div class="w-full lg:w-[380px] xl:w-[420px] shrink-0 flex flex-col justify-center">
            <div
              class="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden bg-[#121212] border border-neutral-800 shadow-[inset_0_2px_10px_rgba(0,0,0,0.85)] group-hover:border-amber-400/40 transition-colors">

              <!-- Case A: In-Page Lightbox Popup (Card 1: Formulatrix) -->
              <button v-if="item.type === 'modal'" type="button" @click="openPreview(item)"
                class="w-full h-full block cursor-pointer relative group/thumb text-left select-none"
                :title="`Click to expand ${item.role} photographic showcase`">
                <img :src="item.image" :alt="`${item.role} - ${item.company}`"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104"
                  loading="lazy" />

                <!-- Corner Viewfinder Marks -->
                <div class="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-amber-400/80"></div>
                <div class="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-amber-400/80"></div>
                <div class="absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-amber-400/80"></div>
                <div class="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-amber-400/80"></div>

                <!-- Hover Cue -->
                <div
                  class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-1.5 text-xs font-poppins font-semibold text-white">
                  <span>View Photo Showcase</span>
                  <span class="text-amber-300">⛶</span>
                </div>

                <!-- Badge Indicator -->
                <div class="absolute bottom-2.5 right-2.5 z-10">
                  <span
                    class="px-2.5 py-1 rounded-full bg-black/85 border border-white/15 text-[10px] font-mono text-neutral-300 uppercase shadow-md">
                    {{ item.badgeLabel }}
                  </span>
                </div>
              </button>

              <!-- Case B: External PDF Link (Cards 2 & 3: Wesclic, Telkomsel) -->
              <a v-else-if="item.type === 'pdf' && item.pdfUrl" :href="item.pdfUrl" target="_blank"
                rel="noopener noreferrer"
                class="w-full h-full block cursor-pointer relative group/thumb text-left select-none"
                :title="`Open ${item.actionText} (Google Drive PDF)`">
                <img :src="item.image" :alt="`${item.role} - ${item.company}`"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104"
                  loading="lazy" />

                <!-- Corner Viewfinder Marks -->
                <div class="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-amber-400/80"></div>
                <div class="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-amber-400/80"></div>
                <div class="absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-amber-400/80"></div>
                <div class="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-amber-400/80"></div>

                <!-- Hover Cue -->
                <div
                  class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-1.5 text-xs font-poppins font-semibold text-white">
                  <span>Open PDF Document</span>
                  <span class="text-amber-300">↗</span>
                </div>

                <!-- Badge Indicator -->
                <div class="absolute bottom-2.5 right-2.5 z-10">
                  <span
                    class="px-2.5 py-1 rounded-full bg-black/85 border border-white/15 text-[10px] font-mono text-neutral-300 uppercase shadow-md">
                    {{ item.badgeLabel }}
                  </span>
                </div>
              </a>
            </div>
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
      <Transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100" leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
        <div v-if="activePreview"
          class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
          @click.self="closePreview" role="dialog" aria-modal="true" :aria-label="activePreview.role">
          <div
            class="relative max-w-4xl w-full bg-neutral-950 border border-amber-400/30 rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col max-h-[92vh]">

            <!-- Modal Header Bar -->
            <div class="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-white/10 bg-neutral-900/80">
              <div class="flex items-center gap-2 text-xs font-mono">
                <span class="text-amber-400 font-semibold flex items-center gap-1.5">
                  <span class="text-xs">★</span>
                  <span>SCENE {{ activePreview.sceneNumber }}</span>
                  <span class="text-neutral-600">//</span>
                  <span class="text-neutral-300 uppercase">{{ activePreview.company }}</span>
                </span>
              </div>

              <!-- Close Button -->
              <button type="button" @click="closePreview"
                class="group inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-amber-400/20 border border-white/10 hover:border-amber-400/50 text-xs font-poppins text-neutral-300 hover:text-white transition-all cursor-pointer"
                title="Close (Esc)">
                <span
                  class="hidden sm:inline font-mono text-[10px] text-neutral-400 group-hover:text-amber-200">ESC</span>
                <span class="text-sm leading-none font-bold">✕</span>
              </button>
            </div>

            <!-- Modal Image Container -->
            <div
              class="relative w-full flex-1 min-h-0 bg-[#0d0d0d] flex items-center justify-center p-2 sm:p-4 overflow-auto">
              <div class="relative inline-block max-w-full max-h-full">
                <img :src="activePreview.image" :alt="`${activePreview.role} - ${activePreview.company}`"
                  class="max-h-[72vh] w-auto max-w-full object-contain rounded-lg border border-white/10 shadow-2xl" />

                <!-- Corner Viewfinder Marks -->
                <div
                  class="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-amber-400/90 pointer-events-none">
                </div>
                <div
                  class="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-amber-400/90 pointer-events-none">
                </div>
                <div
                  class="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-amber-400/90 pointer-events-none">
                </div>
                <div
                  class="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-amber-400/90 pointer-events-none">
                </div>
              </div>
            </div>

            <!-- Modal Footer / Caption -->
            <div
              class="px-4 sm:px-6 py-2.5 border-t border-white/10 bg-neutral-900/60 flex items-center justify-between text-xs text-neutral-400">
              <span class="font-poppins truncate pr-4 text-neutral-300 text-[11px] sm:text-xs">
                {{ activePreview.role }} • {{ activePreview.company }}
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
