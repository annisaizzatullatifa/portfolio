<script setup>
import { ref, watch, nextTick, onMounted, onUnmounted } from 'vue'
import ChatMessageContent from './ChatMessageContent.vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  messages: {
    type: Array,
    required: true,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  starterPrompts: {
    type: Array,
    default: () => [],
  },
  logoUrl: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['close', 'send', 'reset'])

const draft = ref('')
const messagesContainerRef = ref(null)
const inputRef = ref(null)

const scrollToBottom = async (behavior = 'smooth') => {
  await nextTick()
  const el = messagesContainerRef.value
  if (el) {
    el.scrollTo({ top: el.scrollHeight, behavior })
  }
}

const resetTextareaHeight = () => {
  if (!inputRef.value) return
  inputRef.value.style.height = 'auto'
}

const autoResizeTextarea = () => {
  const el = inputRef.value
  if (!el) return
  el.style.height = 'auto'
  el.style.height = `${Math.min(el.scrollHeight, 112)}px`
}

const submitMessage = () => {
  const trimmed = draft.value.trim()
  if (!trimmed || props.isLoading) return
  emit('send', trimmed)
  draft.value = ''
  nextTick(resetTextareaHeight)
}

const handleKeydown = (event) => {
  if (event.key === 'Enter' && !event.shiftKey && !event.isComposing) {
    event.preventDefault()
    submitMessage()
  }
}

const handleStarterClick = (promptText) => {
  if (props.isLoading) return
  emit('send', promptText)
}

const handleGlobalKeydown = (event) => {
  if (event.key === 'Escape' && props.isOpen) {
    emit('close')
  }
}

watch(
  () => props.isOpen,
  async (open) => {
    if (open) {
      await scrollToBottom('instant')
      await nextTick()
      inputRef.value?.focus()
    }
  },
)

watch(
  () => [props.messages.length, props.isLoading],
  () => {
    if (props.isOpen) {
      scrollToBottom('smooth')
    }
  },
)

onMounted(() => {
  window.addEventListener('keydown', handleGlobalKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleGlobalKeydown)
})
</script>

<template>
  <Transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0 scale-95 translate-y-3"
    enter-to-class="opacity-100 scale-100 translate-y-0"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="opacity-100 scale-100 translate-y-0"
    leave-to-class="opacity-0 scale-95 translate-y-3"
  >
    <section
      v-if="isOpen"
      role="dialog"
      aria-modal="false"
      aria-label="Annisa AI Assistant"
      class="fixed inset-x-3 bottom-22 top-6 sm:inset-auto sm:bottom-24 sm:right-6 z-40 sm:w-[390px] md:w-[410px] sm:h-[660px] md:h-[700px] max-h-[calc(100dvh-6rem)] sm:max-h-[calc(100dvh-7rem)] bg-neutral-950 border border-amber-400/35 rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.9),0_0_30px_rgba(255,174,0,0.14)] flex flex-col overflow-hidden"
    >
      <!-- Modal Header Bar -->
      <header
        class="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-neutral-900/80 shrink-0"
      >
        <div class="flex items-center gap-2.5 min-w-0">
          <div
            class="w-8 h-8 rounded-xl bg-neutral-950 border border-amber-400/45 flex items-center justify-center shadow-[0_0_16px_rgba(255,174,0,0.22)] shrink-0"
          >
            <img
              :src="logoUrl"
              alt="Annisa AI logo"
              class="w-5 h-5 object-contain"
              draggable="false"
            />
          </div>
          <div class="min-w-0">
            <h2
              class="font-anton uppercase tracking-wider text-base sm:text-lg text-white leading-tight truncate"
            >
              ANNISA AI ASSISTANT
            </h2>
          </div>
        </div>

        <div class="flex items-center gap-1.5 shrink-0">
          <!-- Clear / Reset Conversation Button -->
          <button
            v-if="messages.length > 1"
            type="button"
            @click="emit('reset')"
            :disabled="isLoading"
            class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 hover:bg-amber-400/20 border border-white/10 hover:border-amber-400/50 text-neutral-300 hover:text-amber-200 transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            title="Clear chat"
            aria-label="Clear chat"
          >
            <svg
              class="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
              <path d="M3 3v5h5" />
            </svg>
          </button>

          <!-- Close Button -->
          <button
            type="button"
            @click="emit('close')"
            class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 hover:bg-red-500/20 border border-white/10 hover:border-red-400/60 text-neutral-300 hover:text-red-300 transition-all cursor-pointer"
            title="Close (Esc)"
            aria-label="Close chat"
          >
            <svg
              class="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              stroke-width="2.2"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      <!-- Chat Body Wrapper (Static background prevents gradient repaint during scroll) -->
      <div class="relative flex-1 min-h-0 bg-[#0d0d0d] overflow-hidden">
        <div
          class="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"
        ></div>

        <!-- Scrollable Messages Area -->
        <div
          ref="messagesContainerRef"
          class="chatbot-scroll relative h-full overflow-y-auto px-3.5 sm:px-4 py-4 space-y-3.5"
        >
          <div
            v-for="msg in messages"
            :key="msg.id"
            v-memo="[msg.content, msg.isError, msg.isError && isLoading]"
            class="chat-message-item flex flex-col"
            :class="msg.role === 'user' ? 'items-end' : 'items-start'"
          >
            <div
              class="max-w-[86%] px-3.5 py-2.5 text-xs sm:text-[13px] font-poppins"
              :class="[
                msg.role === 'user'
                  ? 'bg-gradient-to-br from-[#FFC226] via-[#FFAE00] to-[#F59E0B] text-neutral-950 font-medium rounded-2xl rounded-br-sm shadow-[0_4px_14px_rgba(255,174,0,0.18)]'
                  : msg.isError
                    ? 'bg-red-950/40 border border-red-500/40 text-red-200 rounded-2xl rounded-bl-sm'
                    : 'bg-neutral-900 border border-white/10 text-neutral-200 rounded-2xl rounded-bl-sm',
              ]"
            >
              <ChatMessageContent :content="msg.content" :role="msg.role" />

              <button
                v-if="msg.isError && msg.retryText"
                type="button"
                @click="emit('send', msg.retryText)"
                :disabled="isLoading"
                class="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-400/15 hover:bg-amber-400/25 border border-amber-400/40 text-[11px] font-medium text-amber-300 transition-colors cursor-pointer disabled:opacity-50"
              >
                <span>Try again</span>
              </button>
            </div>
          </div>

          <!-- Starter Prompts (Shown only before first user message) -->
          <div
            v-if="messages.length === 1 && starterPrompts.length > 0 && !isLoading"
            class="pt-1 flex flex-wrap gap-2"
          >
            <button
              v-for="prompt in starterPrompts"
              :key="prompt"
              type="button"
              @click="handleStarterClick(prompt)"
              class="px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-amber-400/15 border border-amber-400/30 hover:border-amber-300 text-[11px] sm:text-xs font-poppins text-neutral-200 hover:text-amber-200 transition-all duration-200 cursor-pointer text-left"
            >
              {{ prompt }}
            </button>
          </div>

          <!-- Typing / Loading Indicator -->
          <div v-if="isLoading" class="flex items-start">
            <div
              class="px-4 py-3 rounded-2xl rounded-bl-sm bg-neutral-900 border border-white/10 inline-flex items-center gap-1.5"
              aria-label="Assistant is typing"
            >
              <span
                class="w-1.5 h-1.5 rounded-full bg-amber-400 animate-bounce [animation-delay:0ms]"
              ></span>
              <span
                class="w-1.5 h-1.5 rounded-full bg-amber-400 animate-bounce [animation-delay:150ms]"
              ></span>
              <span
                class="w-1.5 h-1.5 rounded-full bg-amber-400 animate-bounce [animation-delay:300ms]"
              ></span>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Input Composer -->
      <form
        @submit.prevent="submitMessage"
        class="p-3 border-t border-white/10 bg-neutral-900/80 shrink-0"
      >
        <div
          class="flex items-end gap-2 p-1.5 pl-3 rounded-xl bg-neutral-950/90 border border-white/15 focus-within:border-amber-400/60 focus-within:shadow-[0_0_16px_rgba(255,174,0,0.16)] transition-all"
        >
          <textarea
            ref="inputRef"
            v-model="draft"
            rows="1"
            @input="autoResizeTextarea"
            @keydown="handleKeydown"
            placeholder="Ask about Annisa's skills, experience..."
            aria-label="Type your question"
            class="flex-1 bg-transparent text-xs sm:text-sm font-poppins text-white placeholder:text-neutral-500 resize-none focus:outline-none py-1.5 max-h-28 leading-relaxed"
          ></textarea>

          <button
            type="submit"
            :disabled="!draft.trim() || isLoading"
            aria-label="Send message"
            title="Send (Enter)"
            class="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-[#FFC226] via-[#FFAE00] to-[#F59E0B] text-neutral-950 shadow-[0_0_14px_rgba(255,174,0,0.3)] hover:brightness-105 active:scale-95 transition-all shrink-0 cursor-pointer disabled:opacity-35 disabled:cursor-not-allowed disabled:shadow-none"
          >
            <svg
              class="w-4 h-4 translate-x-[1px]"
              fill="none"
              stroke="currentColor"
              stroke-width="2.2"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
        <p
          class="mt-1.5 px-1 text-[10px] font-mono text-neutral-500 flex items-center justify-between"
        >
          <span>Enter to send • Shift+Enter for new line</span>
          <span>Session-only memory</span>
        </p>
      </form>
    </section>
  </Transition>
</template>

<style scoped>
.chatbot-scroll {
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
  will-change: scroll-position;
  transform: translateZ(0);
  scrollbar-width: thin;
  scrollbar-color: rgba(251, 191, 36, 0.35) transparent;
}

.chat-message-item {
  contain: layout style;
}

.chatbot-scroll::-webkit-scrollbar {
  width: 6px;
}

.chatbot-scroll::-webkit-scrollbar-track {
  background: transparent;
}

.chatbot-scroll::-webkit-scrollbar-thumb {
  background-color: rgba(251, 191, 36, 0.3);
  border-radius: 9999px;
}

.chatbot-scroll::-webkit-scrollbar-thumb:hover {
  background-color: rgba(251, 191, 36, 0.5);
}
</style>
