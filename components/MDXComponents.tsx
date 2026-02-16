import TOCInline from 'pliny/ui/TOCInline'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from './Link'
import TableWrapper from './TableWrapper'
import NewsletterForm from './NewsletterForm'
import { CustomPre } from './Pre'
import Mermaid from './Mermaid'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Alert, AlertDescription } from './ui/alert'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { Badge } from './ui/badge'

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: CustomPre,
  table: TableWrapper,
  BlogNewsletterForm: NewsletterForm,
  Mermaid,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Alert,
  AlertDescription,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Badge,
}
