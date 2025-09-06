import { z } from 'zod'

export const SERVICE_OPTIONS = [
  'AI Advisory',
  'AI Prototype Accelerator',
  'AI MVP Deployment',
  'AI Scale Partnership',
] as const

export const TIMELINE_OPTIONS = [
  'Urgent (≤ 2 weeks)',
  'This month (2–4 weeks)',
  'This quarter (4–8 weeks)',
  'Exploring / scoping',
] as const

export const ContactSchema = z
  .object({
    fullName: z.string().min(2, 'Full name is required'),
    email: z.string().email('Please enter a valid email address'),
    title: z.string().max(120, 'Title is too long').optional().or(z.literal('')),
    company: z.string().min(1, 'Company is required').max(200, 'Company name is too long'),
    phone: z.string().max(50, 'Phone is too long').optional().or(z.literal('')),
    service: z.enum(SERVICE_OPTIONS),
    timeline: z.enum(TIMELINE_OPTIONS).optional().or(z.literal('')),
    message: z.string().min(10, 'Please provide a bit more detail (≥ 10 chars)'),
    consent: z.boolean().refine((v) => v === true, { message: 'Consent is required' }),
    // Honeypot field for bots. Must remain empty.
    website: z.string().optional(),
  })
  .refine((v) => (v.website ?? '') === '', {
    path: ['website'],
    message: 'Spam detected',
  })

export type ContactInput = z.infer<typeof ContactSchema>
