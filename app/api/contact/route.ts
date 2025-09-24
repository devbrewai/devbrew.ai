import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { ContactSchema } from '@/modules/contact/schema'

export const runtime = 'nodejs'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const parsed = ContactSchema.safeParse(body)

    // Honeypot: if website field is populated, silently succeed without sending
    if (!parsed.success) {
      const isHoneypot = parsed.error.issues.some((i) => i.path[0] === 'website')
      if (isHoneypot) {
        return NextResponse.json({ ok: true })
      }
      const errors: Record<string, string> = {}
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0])
        if (key) errors[key] = issue.message
      }
      return NextResponse.json({ error: 'Validation failed', errors }, { status: 400 })
    }
    const data = parsed.data

    const to = process.env.CONTACT_TO_EMAIL
    const fromEmail = process.env.CONTACT_FROM_EMAIL
    const fromName = process.env.CONTACT_FROM_NAME
    const from = fromName && fromEmail ? `${fromName} <${fromEmail}>` : fromEmail || ''

    const subject = `New website inquiry from ${data.fullName}`
    const text =
      `New inquiry submitted on devbrew.ai\n\n` +
      `Name: ${data.fullName}\n` +
      `Email: ${data.email}\n` +
      `Title: ${data.title || '-'}\n` +
      `Company: ${data.company || '-'}\n` +
      `Phone: ${data.phone || '-'}\n` +
      `Service: ${data.service || '-'}\n` +
      `Timeline: ${data.timeline || '-'}\n` +
      `Consent: ${data.consent ? 'yes' : 'no'}\n\n` +
      `Message:\n${data.message}`

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      // In local/dev or when key is not configured, do not crash build; log and no-op.
      console.warn('[API_CONTACT_POST] RESEND_API_KEY is not set. Skipping email send.')
      return NextResponse.json({ ok: true, skipped: true })
    }

    // Ensure required email envs are present. Skip in dev, error in prod.
    if (!to || !fromEmail) {
      const isDev = process.env.NODE_ENV !== 'production'
      const msg = '[API_CONTACT_POST] Missing CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL. '
      if (isDev) {
        console.warn(msg + 'Skipping email send in development.')
        return NextResponse.json({ ok: true, skipped: true })
      }
      console.error(msg + 'Failing in production.')
      return NextResponse.json({ error: 'Server not configured' }, { status: 500 })
    }

    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from,
      to,
      subject,
      text,
      reply_to: data.email,
    })

    if (error) {
      console.error('[API_CONTACT_POST] Resend error', error)
      return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[API_CONTACT_POST] Error', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
