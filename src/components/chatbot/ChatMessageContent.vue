<script setup>
import { computed, h } from 'vue'
import { parseChatMarkdown } from '@/utils/formatChatMarkdown'

const props = defineProps({
  content: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: 'assistant',
  },
})

const blocks = computed(() => {
  if (props.role === 'user') return []
  return parseChatMarkdown(props.content)
})

function renderInlineNodes(tokens) {
  return tokens.map((token, idx) => {
    if (token.type === 'bold') {
      return h(
        'strong',
        { key: idx, class: 'font-semibold text-amber-200' },
        renderInlineNodes(token.tokens),
      )
    }
    if (token.type === 'italic') {
      return h('em', { key: idx, class: 'italic text-neutral-100' }, token.content)
    }
    if (token.type === 'code') {
      return h(
        'code',
        {
          key: idx,
          class:
            'px-1.5 py-0.5 rounded bg-white/10 border border-white/10 text-amber-300 font-mono text-[11px]',
        },
        token.content,
      )
    }
    if (token.type === 'link') {
      return h(
        'a',
        {
          key: idx,
          href: token.href,
          target: '_blank',
          rel: 'noopener noreferrer',
          class:
            'text-amber-300 underline decoration-amber-400/60 underline-offset-2 hover:text-amber-200 transition-colors',
        },
        token.label,
      )
    }
    return token.content
  })
}

const InlineTokens = (tokenProps) => renderInlineNodes(tokenProps.tokens)
</script>

<template>
  <p v-if="role === 'user'" class="whitespace-pre-wrap break-words leading-relaxed">
    {{ content }}
  </p>

  <div v-else class="space-y-2.5 leading-relaxed break-words">
    <template v-for="(block, blockIdx) in blocks" :key="blockIdx">
      <p v-if="block.type === 'paragraph'">
        <template v-for="(lineTokens, lineIdx) in block.lines" :key="lineIdx">
          <br v-if="lineIdx > 0" />
          <InlineTokens :tokens="lineTokens" />
        </template>
      </p>

      <p
        v-else-if="block.type === 'heading'"
        class="font-semibold text-amber-300 tracking-wide pt-0.5"
      >
        <InlineTokens :tokens="block.tokens" />
      </p>

      <ol
        v-else-if="block.type === 'ordered-list'"
        :start="block.start"
        class="list-decimal pl-5 space-y-1.5 marker:text-amber-400 marker:font-semibold"
      >
        <li v-for="(itemTokens, itemIdx) in block.items" :key="itemIdx" class="pl-0.5">
          <InlineTokens :tokens="itemTokens" />
        </li>
      </ol>

      <ul
        v-else-if="block.type === 'unordered-list'"
        class="list-disc pl-5 space-y-1.5 marker:text-amber-400"
      >
        <li v-for="(itemTokens, itemIdx) in block.items" :key="itemIdx" class="pl-0.5">
          <InlineTokens :tokens="itemTokens" />
        </li>
      </ul>

      <pre
        v-else-if="block.type === 'code-block'"
        class="p-2.5 rounded-xl bg-black/70 border border-white/10 overflow-x-auto font-mono text-[11px] text-amber-200"
      ><code>{{ block.code }}</code></pre>
    </template>
  </div>
</template>
