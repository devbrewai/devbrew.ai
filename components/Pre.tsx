import Pre from 'pliny/ui/Pre'
import Mermaid from './Mermaid'
import { isValidElement, type ComponentProps, type ReactNode } from 'react'

type PreProps = {
  children?: React.ReactElement<{ children?: string | React.ReactNode; className?: string }>
  raw?: string
} & Omit<ComponentProps<typeof Pre>, 'children'>

function extractTextFromChildren(children: ReactNode): string {
  if (typeof children === 'string' || typeof children === 'number') {
    return String(children)
  }

  if (Array.isArray(children)) {
    return children.map(extractTextFromChildren).join('')
  }

  if (isValidElement<{ children?: ReactNode }>(children)) {
    return extractTextFromChildren(children.props.children ?? '')
  }

  return ''
}

export function CustomPre({ children, raw, ...props }: PreProps) {
  // Check if this is a mermaid code block
  // The structure from rehype-prism-plus is: <pre><code className="language-mermaid">content</code></pre>
  const codeElement = children as React.ReactElement<{
    className?: string
    children?: string | React.ReactNode
    raw?: string
  }>
  const className = codeElement?.props?.className || ''

  if (className.includes('language-mermaid')) {
    // Try to get content from raw prop first (rehype-prism-plus provides this)
    const content =
      codeElement?.props?.raw || raw || extractTextFromChildren(codeElement?.props?.children)

    if (content && content.trim()) {
      return <Mermaid>{content.trim()}</Mermaid>
    }
  }

  // Fall back to default Pre component for other code blocks
  return <Pre {...props}>{children}</Pre>
}
