<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import ChatbotModal from './ChatbotModal.vue'

const CHATBOT_PROXY_URL = 'https://n8n-proxy.annisaizzatullatifa.workers.dev/'
const LOGO_URL = `${import.meta.env.BASE_URL}annisa-initial.png`
const HEALTH_TIMEOUT_MS = 6000
const REQUEST_TIMEOUT_MS = 45000
const ERROR_1033_RE = /\berror\s*(?:code)?\s*:?\s*1033\b/i

const STARTER_PROMPTS = [
  'Tell me about AI & Machine Learning experience',
  'What UI/UX projects has Annisa worked on?',
  'Summarize Annisa’s education and internships',
]

const createSessionId = () => {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID()
  }
  return `session-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`
}

const createMessageId = () => `msg-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`

const createWelcomeMessage = () => ({
  id: createMessageId(),
  role: 'assistant',
  content:
    "Hi! I'm **Annisa's Portfolio Assistant**. Ask me anything about Annisa's internships, UI/UX & web projects, AI/ML work, or educational background. Feel free to ask in any language, including Bahasa Indonesia or English!",
})

const extractReplyText = (payload) => {
  if (!payload) return ''
  if (typeof payload === 'string') return payload.trim()

  const candidate = Array.isArray(payload) ? payload[0] : payload
  if (typeof candidate === 'string') return candidate.trim()
  if (candidate && typeof candidate === 'object') {
    const text =
      candidate.output ??
      candidate.text ??
      candidate.reply ??
      candidate.response ??
      candidate.message ??
      candidate.answer
    if (typeof text === 'string') return text.trim()
  }
  return ''
}

const isAvailable = ref(false)
const isOpen = ref(false)
const isLoading = ref(false)
const sessionId = ref(createSessionId())
const messages = ref([createWelcomeMessage()])

let activeRequestController = null

const checkAvailability = async () => {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), HEALTH_TIMEOUT_MS)

  try {
    const response = await fetch(CHATBOT_PROXY_URL, {
      method: 'GET',
      signal: controller.signal,
      cache: 'no-store',
    })

    // Cloudflare Error 1033 surfaces as HTTP 530 (or another 5xx).
    // Expected healthy response from the root URL is HTTP 404.
    if (response.status >= 500) {
      return false
    }

    const bodyText = await response.text()
    if (ERROR_1033_RE.test(bodyText)) {
      return false
    }

    return true
  } catch {
    // Network error, timeout, or CORS-blocked Cloudflare error page
    return false
  } finally {
    clearTimeout(timeoutId)
  }
}

const handleSend = async (rawText) => {
  const text = rawText.trim()
  if (!text || isLoading.value) return

  messages.value.push({
    id: createMessageId(),
    role: 'user',
    content: text,
  })

  isLoading.value = true
  const controller = new AbortController()
  activeRequestController = controller
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

  try {
    const response = await fetch(CHATBOT_PROXY_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chatInput: text,
        sessionId: sessionId.value,
      }),
      signal: controller.signal,
    })

    const rawBody = await response.text()
    if (!response.ok || ERROR_1033_RE.test(rawBody)) {
      throw new Error(`Request failed with status ${response.status}`)
    }

    let parsed = rawBody
    try {
      parsed = JSON.parse(rawBody)
    } catch {
      // Treat non-JSON response as plain text
    }

    const reply = extractReplyText(parsed)
    if (!reply) {
      throw new Error('Empty response received from assistant')
    }

    messages.value.push({
      id: createMessageId(),
      role: 'assistant',
      content: reply,
    })
  } catch (err) {
    if (err?.name === 'AbortError' && activeRequestController !== controller) {
      return
    }
    messages.value.push({
      id: createMessageId(),
      role: 'assistant',
      content:
        'Sorry, I could not reach the assistant right now. Please try sending your question again in a moment.',
      isError: true,
      retryText: text,
    })
  } finally {
    clearTimeout(timeoutId)
    if (activeRequestController === controller) {
      activeRequestController = null
    }
    isLoading.value = false
  }
}

const handleReset = () => {
  if (activeRequestController) {
    activeRequestController.abort()
    activeRequestController = null
  }
  isLoading.value = false
  sessionId.value = createSessionId()
  messages.value = [createWelcomeMessage()]
}

onMounted(async () => {
  isAvailable.value = await checkAvailability()
})

onUnmounted(() => {
  if (activeRequestController) {
    activeRequestController.abort()
    activeRequestController = null
  }
})
</script>

<template>
  <div v-if="isAvailable">
    <ChatbotModal
      :is-open="isOpen"
      :messages="messages"
      :is-loading="isLoading"
      :starter-prompts="STARTER_PROMPTS"
      :logo-url="LOGO_URL"
      @close="isOpen = false"
      @send="handleSend"
      @reset="handleReset"
    />

    <!-- Bottom-Right Floating Chatbot Trigger Button -->
    <Transition
      appear
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 scale-90 translate-y-2"
      enter-to-class="opacity-100 scale-100 translate-y-0"
    >
      <button
        type="button"
        @click="isOpen = !isOpen"
        :aria-expanded="isOpen"
        :aria-label="isOpen ? 'Close AI assistant chat' : 'Open AI assistant chat'"
        title="Ask Annisa's AI Assistant"
        class="group fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 inline-flex items-center gap-2.5 px-4 py-3 rounded-full bg-neutral-950/95 border border-amber-400/60 backdrop-blur-md text-white shadow-[0_12px_32px_rgba(0,0,0,0.75),0_0_24px_rgba(255,174,0,0.28)] transition-all duration-300 hover:border-amber-300 hover:shadow-[0_14px_38px_rgba(0,0,0,0.85),0_0_34px_rgba(255,174,0,0.52)] hover:scale-105 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
      >
        <!-- Shimmer Sweep on Hover -->
        <div class="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
          <div
            class="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-700 bg-gradient-to-r from-transparent via-amber-300/20 to-transparent transition-transform"
          ></div>
        </div>

        <!-- Floating Sparkle Accent -->
        <span
          v-if="!isOpen"
          class="absolute -top-2 -left-1 text-xs animate-twinkle pointer-events-none z-20 drop-shadow-[0_0_10px_rgba(255,174,0,0.9)] select-none"
        >
          ✨
        </span>

        <!-- Icon -->
        <span
          class="relative flex items-center justify-center w-7 h-7 rounded-full shrink-0 transition-colors"
          :class="
            isOpen
              ? 'bg-gradient-to-br from-[#FFC226] via-[#FFAE00] to-[#F59E0B] text-neutral-950'
              : 'bg-neutral-900 border border-amber-400/40'
          "
        >
          <img
            v-if="!isOpen"
            :src="LOGO_URL"
            alt=""
            class="w-4.5 h-4.5 object-contain"
            draggable="false"
          />
          <svg
            v-else
            class="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </span>

        <span
          class="relative font-poppins font-semibold text-xs sm:text-sm tracking-wide text-white group-hover:text-amber-200 transition-colors"
        >
          {{ isOpen ? 'Close Chat' : 'Ask AI' }}
        </span>
      </button>
    </Transition>
  </div>
</template>
