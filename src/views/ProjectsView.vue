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

// Social Links & CV matching Hero Section & Education / Experience pages
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

// ==================== 1. UNIQUE FULL-WIDTH FEATURED CARD ====================
const featuredProject = {
  id: 'recommender-system',
  title: 'Hybrid Video Game Recommender System',
  roles: ['Machine Learning Engineer'],
  techStackCategories: [
    { label: 'Environment', items: ['Python (Jupyter Notebook)'] },
    {
      label: 'Architecture',
      items: [
        'Collaborative Filtering',
        'Content-Based Filtering',
        'Sentiment Analysis',
        'Hybrid Model',
        'Grid Search',
      ],
    },
    {
      label: 'Machine Learning',
      items: ['DistilBERT', 'PyTorch', 'Scikit-learn', 'SciPy'],
    },
    {
      label: 'Data Preprocessing',
      items: ['Pandas', 'NumPy'],
    },
    {
      label: 'Data Visualization',
      items: ['Matplotlib', 'tqdm'],
    },
  ],
  bullets: [
    {
      summary: 'Hybrid model architecture',
      detail:
        'Engineered an end-to-end video game recommendation system on the Steam dataset, integrating Content-Based and Collaborative Filtering techniques.',
    },
    {
      summary: 'NLP sentiment analysis',
      detail:
        'Leveraged BERT to extract semantic insights from user reviews, outperforming baseline recommendation models that lacked sentiment analysis.',
    },
    {
      summary: 'Empirical evaluation',
      detail:
        'Benchmarked multiple model configurations against baseline metrics, validating measurable accuracy and relevance gains driven by textual review data.',
    },
    {
      summary: 'Academic publication',
      detail:
        'Authored and published a research paper detailing the methodology, development, and evaluation at ICSECS 2025, a Scopus-indexed international conference.',
    },
  ],
  image: `${baseUrl}recommender.png`,
  url: 'https://github.com/annisaizzatullatifa/Hybrid-with-Sentiment-Game-Recommender-System',
  paperUrl: 'https://ieeexplore.ieee.org/document/11279202/',
  paperActionText: 'Open Paper in IEEEXplore',
  actionType: 'github',
  actionText: 'Open GitHub Repository',
  badgeLabel: 'GitHub Repository',
}

// ==================== 2-8. TWO-COLUMN PROJECT CARDS ====================
const standardProjects = [
  {
    id: 'packet-loss',
    title: 'Packet Loss Prediction Machine Learning Model and Website',
    roles: ['ML Engineer', 'Full-stack web developer'],
    bullets: [
      {
        summary: 'Project scope',
        detail:
          'Spearheaded the end-to-end development of a packet loss prediction model and interactive website as part of an engineering internship at Telkomsel Bandung.',
      },
      {
        summary: 'Predictive modeling',
        detail:
          'Built and evaluated a high-performing Random Forest model to classify distinct types of network packet loss across telecommunication infrastructure.',
      },
      {
        summary: 'Data preprocessing',
        detail:
          'Cleaned complex network telemetry data and resolved severe class imbalance using SMOTE to boost classification accuracy and stability.',
      },
      {
        summary: 'Full-stack integration',
        detail:
          'Designed and developed the web interface from scratch, seamlessly deploying the trained machine learning model to deliver intuitive, real-time predictions.',
      },
    ],
    tools: ['Python (Flask)', 'SMOTE', 'Bootstrap', 'Random Forest'],
    image: `${baseUrl}packetloss.jpg`,
    actionType: 'pdf',
    url: 'https://drive.google.com/file/d/1_CJZTyASjYByfuQlOYAiPxVbQCLy2y51/view?usp=sharing',
    actionText: 'View Internship Report (PDF)',
    badgeLabel: 'Internship Report PDF',
  },
  {
    id: 'fmlx-automation',
    title: 'UI/UX for a Lab Automation Software',
    roles: ['UI Designer', 'UX Researcher'],
    bullets: [
      {
        summary: 'End-to-end design',
        detail:
          'Delivered comprehensive UI/UX solutions in Figma—from initial user flows to high-fidelity interactive prototypes—for specialized laboratory automation software.',
      },
      {
        summary: 'Requirements translation',
        detail:
          'Transformed intricate scientific workflows into clear, user-centric interfaces through direct stakeholder collaboration and user need analysis.',
      },
      {
        summary: 'Cross-functional collaboration',
        detail:
          'Partnered with PMs, Developers, and QA specialists to validate technical constraints and guarantee seamless product delivery.',
      },
      {
        summary: 'Design handoff',
        detail:
          'Produced and maintained detailed UX documentation alongside iterative design handoff specs for engineering alignment.',
      },
    ],
    note: "As I fully respect Formulatrix's NDA, I didn't showcase my design here.",
    tools: ['Figma', 'FigJam', 'Lab Automation Software', 'Design System'],
    image: `${baseUrl}fmlx_experience.jpg`,
    actionType: 'modal',
    url: null,
    actionText: 'View Photographic Showcase',
    badgeLabel: 'Photo Showcase',
  },
  {
    id: 'wesclic-studio',
    title: 'Wesclic Studio Website',
    roles: ['UI/UX Designer'],
    bullets: [
      {
        summary: 'UX optimization',
        detail:
          'Overhauled the multi-step checkout funnel in Figma, identifying friction points to streamline the purchasing pathway and elevate user satisfaction.',
      },
      {
        summary: 'Accessible web design',
        detail:
          'Engineered tailored digital platforms for local civic and community institutions, adhering strictly to usability heuristics and accessibility standards.',
      },
      {
        summary: 'End-to-end execution',
        detail:
          'Led end-to-end design iterations while collaborating side-by-side with developers to ensure technical feasibility and preserve visual integrity through launch.',
      },
    ],
    tools: ['Figma', 'Checkout Optimization', 'Usability & Accessibility'],
    image: `${baseUrl}wesclic.jpg`,
    actionType: 'modal',
    url: null,
    actionText: 'View Design Screenshot',
    badgeLabel: 'Design Showcase',
  },
  {
    id: 'goodplant',
    title: 'Goodplant Website',
    roles: ['UI/UX Designer', 'Front-end Developer'],
    bullets: [
      {
        summary: 'Dual-role',
        detail:
          'UI/UX Designer & Web Developer, final capstone project of Kampus Merdeka (PT Mitra Talenta Grup).',
      },
      {
        summary: 'End-to-end scope',
        detail:
          'Led end-to-end UX research (user interviews and user persona development), user flows, and interactive prototyping using Figma.',
      },
      {
        summary: 'Feature strategy',
        detail:
          'Designed an agriculture productivity web platform featuring crop growth tracking, plant care resources, and pest diagnosis insights.',
      },
      {
        summary: 'Front-end development',
        detail:
          'Translated design mockups directly into functional web interfaces, supporting front-end implementation to ensure visual and interactive fidelity.',
      },
    ],
    tools: ['Figma', 'React', 'User Research', 'Interactive Prototyping'],
    image: `${baseUrl}goodplant.jpg`,
    actionType: 'figma',
    url: 'https://www.figma.com/design/uQtRhiQ9PwYtIP2fhuGvGr/Wireframe-Prototype-Group-B15-Afternoon?node-id=117-43&t=k9ESNS66BHc27kRl-1',
    actionText: 'View Figma Prototype',
    badgeLabel: 'Figma Prototype',
  },
  {
    id: 'palsfood',
    title: 'Palsfood',
    roles: ['UI/UX Designer', 'Project Manager'],
    bullets: [
      {
        summary: 'Background',
        detail:
          'Developed as part of the Telkom University Mobile Innovation Laboratory (Motion) Hackathon.',
      },
      {
        summary: 'End-to-end product design',
        detail:
          'Drove the complete UI/UX lifecycle in Figma, designing an intuitive mobile app that supports local MSMEs (UMKM) through on-demand food ordering alongside government social program hubs.',
      },
      {
        summary: 'Product management',
        detail:
          'Acted as project coordinator, structuring basic delivery timelines, aligning team priorities, and keeping cross-functional hackathon tasks on track.',
      },
      {
        summary: 'Product documentation',
        detail:
          'Authored core product requirements, feature briefs, and user journey documentation to maintain clarity and design alignment throughout the sprint.',
      },
      {
        summary: 'Social impact strategy',
        detail:
          'Synthesized commercial food delivery flows with public sector engagement, translating government social initiatives into actionable, community-focused in-app features.',
      },
    ],
    tools: ['Figma', 'Jira', 'Mobile App UI/UX', 'Product Coordination'],
    image: `${baseUrl}palsfood.jpg`,
    actionType: 'figma',
    url: 'https://www.figma.com/design/D0El4EhWV1X9926puGSePB/Tim-11?node-id=1222-1393&t=KM8SksxGiuo5MszN-1',
    actionText: 'View Figma Prototype',
    badgeLabel: 'Figma Prototype',
  },
  {
    id: 'rasa-dewata',
    title: 'Rasa Dewata: Restaurant Recommendation Website',
    roles: ['UI/UX Designer', 'Front-end Developer'],
    bullets: [
      {
        summary: 'End-to-end design',
        detail:
          'Spearheaded the product design lifecycle in Figma, navigating from initial research objectives to structured user flows and interactive prototypes.',
      },
      {
        summary: 'Front-End development',
        detail:
          'Translated design mockups directly into functional web interfaces, supporting front-end implementation to ensure visual and interactive fidelity.',
      },
    ],
    tools: ['Figma', 'React', 'Interactive Mockups', 'Web UI'],
    image: `${baseUrl}rasadewata.jpg`,
    actionType: 'figma',
    url: 'https://www.figma.com/design/nFitMN9EQWv2oPcUZ6LCh8/High-Fidelity?node-id=314-3814&t=FFLQMoNTjCny5WaP-1',
    actionText: 'View Figma Prototype',
    badgeLabel: 'Figma Prototype',
  },
  {
    id: 'researead',
    title: 'Researead: Book Recommendation and Reading Tracking Website',
    roles: ['UI/UX Designer', 'Front-end Developer'],
    bullets: [
      {
        summary: 'Core features',
        detail:
          'Built structured, multi-genre book catalogs paired with a dedicated tracking dashboard for users to log and monitor reading progress.',
      },
      {
        summary: 'Front-end development',
        detail:
          'Translated interface mockups into interactive, high-fidelity client-side components to ensure seamless visual consistency and navigation.',
      },
      {
        summary: 'Experience design',
        detail:
          'Crafted clear discovery and habit-tracking user flows to streamline book browsing and encourage consistent reading engagement.',
      },
    ],
    tools: ['Figma', 'React', 'Client-Side UI', 'UX Flow Design'],
    image: `${baseUrl}researead.jpg`,
    actionType: 'figma',
    url: 'https://www.figma.com/design/ktGVmbvrLIru6n3onSj3ht/web-ReseaRead?node-id=1499-7528&t=iicfAHseIan00h15-1',
    actionText: 'View Figma Prototype',
    badgeLabel: 'Figma Prototype',
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

    <!-- Ambient Flanking Stars across Left and Right (HeroSection & Education style) -->
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
    <section class="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 pt-8 pb-8 text-center">
      <!-- Status Badge with Glowing Bulbs -->
      <div
        class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-amber-500/30 shadow-[0_0_18px_rgba(255,174,0,0.12)] mb-4 select-none">
        <span class="bulb-alight w-2 h-2 rounded-full bg-[#fffbeb] border border-amber-300"></span>
        <span
          class="font-anton text-xs tracking-[0.24em] uppercase text-amber-300 drop-shadow-[0_0_8px_rgba(253,224,71,0.55)]">
          NOW SHOWING • FEATURED PROJECTS
        </span>
        <span class="bulb-alight w-2 h-2 rounded-full bg-[#fffbeb] border border-amber-300"></span>
      </div>

      <!-- Main Headline -->
      <h1
        class="font-anton uppercase tracking-tight text-3xl sm:text-5xl md:text-6xl text-white leading-tight drop-shadow-md">
        PROJECTS <span
          class="font-great-vibes-semibold text-amber-400 inline-block text-[1.12em] mx-1 align-baseline">&</span>
        PORTFOLIO WORKS
      </h1>

      <p class="font-poppins text-xs sm:text-sm md:text-base text-neutral-300 max-w-2xl mx-auto mt-2 leading-relaxed">
        Machine learning, UI/UX, and web applications.
      </p>
    </section>

    <!-- ==================== MAIN CONTENT: 2-COLUMN GRID (WITH UNIQUE FULL-WIDTH CARD 1) ==================== -->
    <main class="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 pb-20">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">

        <!-- ========================================================================= -->
        <!-- CARD 1: UNIQUE FULL-WIDTH ROW WITH HEADER, 2-COL BODY, AND FOOTER         -->
        <!-- ========================================================================= -->
        <article
          class="col-span-1 md:col-span-2 group relative rounded-2xl sm:rounded-3xl bg-neutral-950/95 text-white border border-neutral-800 shadow-[0_14px_36px_rgba(0,0,0,0.55)] hover:border-amber-400/50 hover:shadow-[0_18px_46px_rgba(255,174,0,0.14)] transition-all duration-300 p-5 sm:p-7 lg:p-8 overflow-hidden flex flex-col">

          <!-- ==================== 1. FULL-WIDTH HEADER ==================== -->
          <div class="w-full pb-4 mb-5 border-b border-white/10">
            <!-- Title -->
            <h2
              class="font-anton uppercase tracking-wide text-2xl sm:text-3xl md:text-4xl text-white group-hover:text-amber-200 transition-colors leading-tight mb-3">
              {{ featuredProject.title }}
            </h2>

            <!-- Role Subtitle matching standard cards -->
            <div class="flex flex-wrap items-center gap-2">
              <span class="text-xs font-mono text-neutral-400 uppercase tracking-wider">Role:</span>
              <span v-for="role in featuredProject.roles" :key="role"
                class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-amber-400/10 border border-amber-400/30 text-xs font-poppins font-medium text-amber-300">
                {{ role }}
              </span>
            </div>
          </div>

          <!-- ==================== 2. TWO-COLUMN MIDDLE SECTION: BULLETS & IMAGE ==================== -->
          <div class="w-full flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8 flex-1">
            <!-- Left Column: Bullet Points -->
            <div class="flex-1 min-w-0 flex flex-col justify-center">
              <ul class="space-y-3.5">
                <li v-for="(bullet, bIdx) in featuredProject.bullets" :key="bIdx"
                  class="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed">
                  <span class="text-amber-400 text-xs mt-1 shrink-0 select-none">★</span>
                  <div>
                    <span class="font-semibold text-white tracking-wide mr-1.5">{{ bullet.summary }}:</span>
                    <span class="text-neutral-300">{{ bullet.detail }}</span>
                  </div>
                </li>
              </ul>
            </div>

            <!-- Right Column: Interactive Media Preview (Recommender System Image) -->
            <div class="w-full lg:w-[420px] xl:w-[460px] shrink-0 flex flex-col justify-center">
              <div
                class="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#121212] border border-neutral-800 shadow-[inset_0_2px_10px_rgba(0,0,0,0.85)] group-hover:border-amber-400/40 transition-colors">
                <a :href="featuredProject.url" target="_blank" rel="noopener noreferrer"
                  class="w-full h-full block cursor-pointer relative group/thumb text-left select-none"
                  :title="`Open ${featuredProject.title} on GitHub`">
                  <img :src="featuredProject.image" :alt="featuredProject.title"
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
                    <span>Open GitHub Repository</span>
                    <span class="text-amber-300">↗</span>
                  </div>

                  <!-- Badge Indicator -->
                  <div class="absolute bottom-2.5 right-2.5 z-10">
                    <span
                      class="px-2.5 py-1 rounded-full bg-black/85 border border-white/15 text-[10px] font-mono text-neutral-300 uppercase shadow-md flex items-center gap-1.5">
                      <svg class="w-3 h-3 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2">
                        <path
                          d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                      <span>{{ featuredProject.badgeLabel }}</span>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <!-- ==================== 3. FULL-WIDTH FOOTER: TECH STACKS & ACTIONS ==================== -->
          <div class="w-full pt-5 mt-5 border-t border-white/10 space-y-4">
            <!-- Categorized Tech Stack Badges Section -->
            <div class="space-y-2.5">
              <div
                class="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>Tech Stacks & Architecture</span>
              </div>
              <div class="space-y-2">
                <div v-for="cat in featuredProject.techStackCategories" :key="cat.label"
                  class="flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-2">
                  <span class="text-xs font-mono text-amber-300/90 font-medium shrink-0 sm:min-w-[150px]">
                    {{ cat.label }}:
                  </span>
                  <div class="flex flex-wrap gap-1.5">
                    <span v-for="item in cat.items" :key="item"
                      class="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-poppins font-medium bg-[#141414] border border-amber-500/20 text-neutral-200">
                      {{ item }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Call-To-Action Buttons: GitHub Repo & Research Paper -->
            <div class="pt-2 flex flex-wrap items-center gap-3">
              <!-- GitHub Link Button -->
              <a :href="featuredProject.url" target="_blank" rel="noopener noreferrer"
                class="group/btn inline-flex items-center gap-2.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-gradient-to-r from-amber-500/20 via-yellow-400/10 to-amber-500/20 border border-amber-400/60 hover:border-amber-300 text-white font-poppins text-xs sm:text-sm font-semibold shadow-[0_0_18px_rgba(255,174,0,0.18)] hover:shadow-[0_0_28px_rgba(255,174,0,0.4)] hover:scale-105 active:scale-95 transition-all duration-300">
                <!-- GitHub Icon -->
                <svg class="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path
                    d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                <span>{{ featuredProject.actionText }}</span>
                <span class="text-amber-300">↗</span>
              </a>

              <!-- IEEE Conference Paper Button -->
              <a v-if="featuredProject.paperUrl" :href="featuredProject.paperUrl" target="_blank"
                rel="noopener noreferrer"
                class="group/btn inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-white/[0.05] border border-white/15 hover:border-amber-400/50 hover:bg-white/[0.08] text-neutral-200 hover:text-white font-poppins text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95"
                title="Open the Published Research Paper in IEEEXplore">
                <svg class="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" stroke-width="2"
                  viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
                <span>{{ featuredProject.paperActionText }}</span>
                <span class="text-neutral-400 group-hover:text-amber-300">↗</span>
              </a>
            </div>
          </div>
        </article>

        <!-- ========================================================================= -->
        <!-- CARDS 2 TO 8: TWO-COLUMN CARDS (MATCHING EDUCATIONVIEW DESIGN)            -->
        <!-- ========================================================================= -->
        <article v-for="item in standardProjects" :key="item.id"
          class="group relative rounded-2xl bg-neutral-950/90 text-white border border-neutral-800 shadow-[0_12px_32px_rgba(0,0,0,0.5)] hover:border-amber-400/50 hover:shadow-[0_16px_40px_rgba(255,174,0,0.12)] transition-all duration-300 flex flex-col p-5 sm:p-6 overflow-hidden">

          <!-- Card Title -->
          <h2
            class="font-anton uppercase tracking-wide text-xl sm:text-2xl text-white group-hover:text-amber-200 transition-colors leading-snug mb-2">
            {{ item.title }}
          </h2>

          <!-- Role Subtitle -->
          <div class="flex flex-wrap items-center gap-2 mb-3">
            <span class="text-xs font-mono text-neutral-400 uppercase tracking-wider">Role:</span>
            <span v-for="role in item.roles" :key="role"
              class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-amber-400/10 border border-amber-400/30 text-xs font-poppins font-medium text-amber-300">
              {{ role }}
            </span>
          </div>

          <!-- Media Preview Thumbnail -->
          <div
            class="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#121212] border border-neutral-800 shadow-[inset_0_2px_10px_rgba(0,0,0,0.85)] group-hover:border-amber-400/40 transition-colors my-2.5">

            <!-- Case A: In-Page Lightbox Modal Viewer (Formulatrix NDA, Wesclic) -->
            <button v-if="item.actionType === 'modal'" type="button" @click="openPreview(item)"
              class="w-full h-full block cursor-pointer relative group/thumb text-left select-none"
              :title="`Click to expand ${item.title} photo showcase`">
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

              <!-- Badge Indicator -->
              <div class="absolute bottom-2 right-2 z-10">
                <span
                  class="px-2.5 py-1 rounded-full bg-black/85 border border-white/15 text-[10px] font-mono text-neutral-300 uppercase shadow-md flex items-center gap-1">
                  <span>{{ item.badgeLabel }}</span>
                  <span class="text-amber-300">⛶</span>
                </span>
              </div>
            </button>

            <!-- Case B: External Link (PDF or Figma) -->
            <a v-else :href="item.url" target="_blank" rel="noopener noreferrer"
              class="w-full h-full block cursor-pointer relative group/thumb text-left select-none"
              :title="`Open ${item.actionText}`">
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
                <span>{{ item.actionText }}</span>
                <span class="text-amber-300">↗</span>
              </div>

              <!-- Badge Indicator -->
              <div class="absolute bottom-2 right-2 z-10">
                <span
                  class="px-2.5 py-1 rounded-full bg-black/85 border border-white/15 text-[10px] font-mono text-neutral-300 uppercase shadow-md flex items-center gap-1">
                  <!-- PDF Icon -->
                  <svg v-if="item.actionType === 'pdf'" class="w-3 h-3 text-red-400" fill="none" stroke="currentColor"
                    stroke-width="2" viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  <!-- Figma Icon -->
                  <img v-else-if="item.actionType === 'figma'" :src="`${baseUrl}figma-logo.png`" alt="Figma"
                    class="w-2.5 h-3.5 object-contain" />
                  <span>{{ item.badgeLabel }}</span>
                  <span class="text-amber-300">↗</span>
                </span>
              </div>
            </a>
          </div>

          <!-- Special NDA Disclaimer Callout for Formulatrix -->
          <div v-if="item.note"
            class="my-2.5 px-3 py-2 rounded-xl bg-amber-500/10 border border-amber-500/25 text-xs text-amber-200/90 flex items-start gap-2">
            <span class="text-amber-400 shrink-0 text-sm">🔒</span>
            <span class="italic font-poppins leading-relaxed">{{ item.note }}</span>
          </div>

          <!-- Structured Bullet Points -->
          <ul class="space-y-2.5 my-3 flex-1">
            <li v-for="(bullet, bIdx) in item.bullets" :key="bIdx"
              class="flex items-start gap-2 text-xs sm:text-[13px] leading-relaxed">
              <span class="text-amber-400 text-xs mt-1 shrink-0 select-none">★</span>
              <div>
                <span class="font-semibold text-white tracking-wide mr-1">{{ bullet.summary }}:</span>
                <span class="text-neutral-300">{{ bullet.detail }}</span>
              </div>
            </li>
          </ul>

          <!-- Action Button (Interactive Link) -->
          <div class="mt-2 mb-3.5">
            <!-- Modal Button -->
            <button v-if="item.actionType === 'modal'" type="button" @click="openPreview(item)"
              class="group/btn inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500/15 via-yellow-400/10 to-amber-500/15 border border-amber-400/50 hover:border-amber-300 text-amber-300 hover:text-white font-poppins text-xs font-semibold shadow-[0_0_14px_rgba(255,174,0,0.12)] hover:shadow-[0_0_20px_rgba(255,174,0,0.35)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
              <span>{{ item.actionText }}</span>
              <span class="text-amber-300">⛶</span>
            </button>

            <!-- External Link Button (PDF or Figma) -->
            <a v-else :href="item.url" target="_blank" rel="noopener noreferrer"
              class="group/btn inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500/15 via-yellow-400/10 to-amber-500/15 border border-amber-400/50 hover:border-amber-300 text-amber-300 hover:text-white font-poppins text-xs font-semibold shadow-[0_0_14px_rgba(255,174,0,0.12)] hover:shadow-[0_0_20px_rgba(255,174,0,0.35)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
              <!-- PDF Icon -->
              <svg v-if="item.actionType === 'pdf'" class="w-3.5 h-3.5 text-amber-400" fill="none" stroke="currentColor"
                stroke-width="2" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              <!-- Figma Icon -->
              <img v-else-if="item.actionType === 'figma'" :src="`${baseUrl}figma-logo.png`" alt="Figma"
                class="w-3 h-4 object-contain" />
              <span>{{ item.actionText }}</span>
              <svg
                class="w-3.5 h-3.5 text-amber-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                viewBox="0 0 24 24">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>

          <!-- Tools Used / Tech Badges Pills -->
          <div class="flex flex-wrap gap-1.5 pt-2 border-t border-white/5 mt-auto">
            <span v-for="tool in item.tools" :key="tool"
              class="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-poppins font-medium bg-[#141414] border border-amber-500/20 text-amber-200/90">
              {{ tool }}
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

    <!-- ==================== FULL-SCREEN IN-PAGE LIGHTBOX MODAL ==================== -->
    <Transition name="fade">
      <div v-if="activePreview"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md"
        @click.self="closePreview">
        <div
          class="relative max-w-4xl w-full max-h-[90vh] bg-neutral-950 border border-amber-400/40 rounded-2xl shadow-[0_0_50px_rgba(255,174,0,0.25)] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">

          <!-- Modal Header Bar -->
          <div
            class="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-gradient-to-r from-neutral-900 to-neutral-950">
            <div class="flex items-center gap-2.5">
              <span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              <h3 class="font-anton uppercase tracking-wide text-sm sm:text-base text-white truncate max-w-md">
                {{ activePreview.title }}
              </h3>
            </div>

            <!-- Close Button -->
            <button type="button" @click="closePreview"
              class="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-neutral-300 hover:text-white transition-all cursor-pointer"
              title="Close Preview (Escape)">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Modal Image Body -->
          <div class="relative flex-1 overflow-auto p-3 sm:p-4 bg-black flex items-center justify-center">
            <img :src="activePreview.image" :alt="activePreview.title"
              class="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl" />
          </div>

          <!-- Modal Footer Bar -->
          <div
            class="px-5 py-2.5 border-t border-white/10 bg-neutral-950 flex items-center justify-between text-xs font-mono text-neutral-400">
            <span class="truncate max-w-xs sm:max-w-md">
              {{ activePreview.badgeLabel || 'High Resolution Preview' }}
            </span>
            <span class="hidden sm:inline text-neutral-500">Press ESC or click outside to close</span>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
