const ORDERED_LIST_RE = /^\s*(\d+)\.\s+(.*)$/
const UNORDERED_LIST_RE = /^\s*[-*•]\s+(.*)$/
const HEADING_RE = /^\s{0,3}(#{1,3})\s+(.*)$/
const CODE_FENCE_RE = /^\s*```/

/**
 * Normalize escaped newline sequences and Windows line endings.
 * @param {string} rawText
 * @returns {string}
 */
function normalizeText(rawText) {
  if (typeof rawText !== 'string') return ''
  return rawText.replace(/\r\n?/g, '\n').replace(/\\n/g, '\n').trim()
}

/**
 * Parse inline markdown tokens (`**bold**`, `*italic*`, `` `code` ``, `[label](url)`).
 * Produces structured tokens so the UI never needs `v-html`.
 * @param {string} text
 * @returns {Array<object>}
 */
export function parseInlineMarkdown(text) {
  if (!text) return []

  const tokens = []
  const pattern =
    /(`[^`\n]+`)|(\*\*[^*\n]+(?:\*[^*\n]+)*\*\*)|(\*[^*\n]+\*)|(\[[^\]\n]+\]\(https?:\/\/[^\s)]+\))/g

  let lastIndex = 0
  let match

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      tokens.push({ type: 'text', content: text.slice(lastIndex, match.index) })
    }

    const [full, codeToken, boldToken, italicToken, linkToken] = match

    if (codeToken) {
      tokens.push({ type: 'code', content: codeToken.slice(1, -1) })
    } else if (boldToken) {
      tokens.push({
        type: 'bold',
        tokens: parseInlineMarkdown(boldToken.slice(2, -2)),
      })
    } else if (italicToken) {
      tokens.push({ type: 'italic', content: italicToken.slice(1, -1) })
    } else if (linkToken) {
      const sepIndex = linkToken.indexOf('](')
      const label = linkToken.slice(1, sepIndex)
      const href = linkToken.slice(sepIndex + 2, -1)
      tokens.push({ type: 'link', label, href })
    } else {
      tokens.push({ type: 'text', content: full })
    }

    lastIndex = pattern.lastIndex
  }

  if (lastIndex < text.length) {
    tokens.push({ type: 'text', content: text.slice(lastIndex) })
  }

  return tokens
}

function isBlockBoundary(line) {
  return (
    !line.trim() ||
    ORDERED_LIST_RE.test(line) ||
    UNORDERED_LIST_RE.test(line) ||
    HEADING_RE.test(line) ||
    CODE_FENCE_RE.test(line)
  )
}

function collectListItems(lines, startIndex, itemPattern, textGroupIndex) {
  const items = []
  let i = startIndex

  while (i < lines.length) {
    const match = lines[i].match(itemPattern)
    if (!match) break

    let itemText = match[textGroupIndex].trim()
    i += 1
    while (i < lines.length && !isBlockBoundary(lines[i])) {
      itemText += ` ${lines[i].trim()}`
      i += 1
    }
    items.push(parseInlineMarkdown(itemText))
  }

  return { items, nextIndex: i }
}

/**
 * Parse chat message text into structured block nodes for safe rendering.
 * @param {string} rawText
 * @returns {Array<object>}
 */
export function parseChatMarkdown(rawText) {
  const text = normalizeText(rawText)
  if (!text) return []

  const lines = text.split('\n')
  const blocks = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (!line.trim()) {
      i += 1
      continue
    }

    if (CODE_FENCE_RE.test(line)) {
      const codeLines = []
      i += 1
      while (i < lines.length && !CODE_FENCE_RE.test(lines[i])) {
        codeLines.push(lines[i])
        i += 1
      }
      if (i < lines.length && CODE_FENCE_RE.test(lines[i])) {
        i += 1
      }
      blocks.push({ type: 'code-block', code: codeLines.join('\n') })
      continue
    }

    const headingMatch = line.match(HEADING_RE)
    if (headingMatch) {
      blocks.push({
        type: 'heading',
        level: headingMatch[1].length,
        tokens: parseInlineMarkdown(headingMatch[2].trim()),
      })
      i += 1
      continue
    }

    const orderedMatch = line.match(ORDERED_LIST_RE)
    if (orderedMatch) {
      const start = Number.parseInt(orderedMatch[1], 10) || 1
      const { items, nextIndex } = collectListItems(lines, i, ORDERED_LIST_RE, 2)
      blocks.push({ type: 'ordered-list', start, items })
      i = nextIndex
      continue
    }

    if (UNORDERED_LIST_RE.test(line)) {
      const { items, nextIndex } = collectListItems(lines, i, UNORDERED_LIST_RE, 1)
      blocks.push({ type: 'unordered-list', items })
      i = nextIndex
      continue
    }

    const paragraphLines = []
    while (i < lines.length && !isBlockBoundary(lines[i])) {
      paragraphLines.push(parseInlineMarkdown(lines[i].trim()))
      i += 1
    }
    blocks.push({ type: 'paragraph', lines: paragraphLines })
  }

  return blocks
}
