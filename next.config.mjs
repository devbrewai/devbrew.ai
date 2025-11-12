import { withContentlayer } from 'next-contentlayer2'
import bundleAnalyzer from '@next/bundle-analyzer'

// Enable analyzer via ANALYZE=true
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

// You might need to insert additional domains in script-src if you are using external services
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' giscus.app analytics.umami.is us.umami.is cloud.umami.is;
  style-src 'self' 'unsafe-inline';
  img-src * blob: data:;
  media-src *.s3.amazonaws.com;
  connect-src *;
  font-src 'self';
  frame-src giscus.app
`

const securityHeaders = [
  { key: 'Content-Security-Policy', value: ContentSecurityPolicy.replace(/\n/g, '') },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
]

const output = process.env.EXPORT ? 'export' : undefined
const basePath = process.env.BASE_PATH || undefined
const unoptimized = process.env.UNOPTIMIZED ? true : undefined

export default () => {
  const plugins = [withContentlayer, withBundleAnalyzer]
  return plugins.reduce((acc, next) => next(acc), {
    output,
    basePath,
    reactStrictMode: true,
    trailingSlash: false,
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    eslint: { dirs: ['app', 'components', 'layouts', 'scripts', 'modules'] },
    images: {
      remotePatterns: [
        { protocol: 'https', hostname: 'picsum.photos' },
        { protocol: 'http', hostname: 'localhost' },
        { protocol: 'https', hostname: 'www.devbrew.ai' },
        { protocol: 'https', hostname: 'devbrew.ai' },
      ],
      unoptimized,
    },
    async headers() {
      return [{ source: '/(.*)', headers: securityHeaders }]
    },
    async redirects() {
      return [
        { source: '/start', destination: '/contact', permanent: true },
        { source: '/get-started', destination: '/contact', permanent: true },
        { source: '/consult', destination: '/contact', permanent: true },
        { source: '/book', destination: '/contact', permanent: true },
        { source: '/call', destination: '/contact', permanent: true },
        { source: '/schedule-call', destination: '/contact', permanent: true },
      ]
    },
    webpack: (config) => {
      config.module.rules.push({ test: /\.svg$/, use: ['@svgr/webpack'] })
      return config
    },
  })
}
