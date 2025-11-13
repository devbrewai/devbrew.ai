import TOCInline from 'pliny/ui/TOCInline'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from './Link'
import TableWrapper from './TableWrapper'
import NewsletterForm from './NewsletterForm'
import { CustomPre } from './Pre'
import Mermaid from './Mermaid'

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: CustomPre,
  table: TableWrapper,
  BlogNewsletterForm: NewsletterForm,
  Mermaid,
}
