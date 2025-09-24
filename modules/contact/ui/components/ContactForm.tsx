'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ContactSchema, type ContactInput } from '@/modules/contact/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
// import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'

export default function ContactForm() {
  const form = useForm<ContactInput>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      fullName: '',
      email: '',
      title: '',
      company: '',
      phone: '',
      timeline: '',
      message: '',
      consent: false,
      website: '',
    },
  })

  const [success, setSuccess] = useState(false)

  async function onSubmit(values: ContactInput) {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) {
        type ApiErrorPayload = { error?: string; errors?: Record<string, string> }
        let payload: ApiErrorPayload | null = null
        try {
          payload = (await res.json()) as ApiErrorPayload
        } catch {
          // Leave payload as null if response isn't JSON
          payload = null
        }
        if (payload?.errors && typeof payload.errors === 'object') {
          for (const [key, message] of Object.entries(payload.errors as Record<string, string>)) {
            form.setError(key as keyof ContactInput, { message: message as string })
          }
          throw new Error(payload.error || 'Validation failed')
        }
        const fallback = payload?.error || (await res.text())
        throw new Error(fallback || 'Failed to submit')
      }
      toast.success('Thanks — we got your request')
      setSuccess(true)
      form.reset()
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      toast.error(message)
    }
  }

  if (success) {
    return (
      <div className="text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/15 text-green-600 dark:text-green-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12a9.75 9.75 0 1119.5 0 9.75 9.75 0 01-19.5 0zm14.28-2.28a.75.75 0 10-1.06-1.06L10.5 13.94 8.53 11.97a.75.75 0 10-1.06 1.06l2.5 2.5a.75.75 0 001.06 0l5.5-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h2 className="text-xl font-semibold">Thanks — we got your request</h2>
        <p className="text-muted-foreground mt-2">We’ll reply within one business day.</p>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormField<ContactInput, 'fullName'>
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full name*</FormLabel>
                <FormControl>
                  <Input placeholder="Jane Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField<ContactInput, 'email'>
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email*</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="jane@company.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField<ContactInput, 'title'>
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Head of Data" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField<ContactInput, 'company'>
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company*</FormLabel>
                <FormControl>
                  <Input placeholder="Acme Inc." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField<ContactInput, 'phone'>
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="sm:col-span-2">
                <FormLabel>Phone (optional)</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="+1 234 567 8901" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Timeline field hidden for now
          <FormField<ContactInput, 'timeline'>
            control={form.control}
            name="timeline"
            render={({ field }) => (
              <FormItem className="sm:col-span-2">
                <FormLabel>Timeline</FormLabel>
                <FormControl>
                  <Select value={field.value || undefined} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select…" />
                    </SelectTrigger>
                    <SelectContent>
                      {TIMELINE_OPTIONS.map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          */}
          <FormField<ContactInput, 'message'>
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="sm:col-span-2">
                <FormLabel>Tell us about your needs*</FormLabel>
                <FormControl>
                  <Textarea rows={5} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField<ContactInput, 'consent'>
          control={form.control}
          name="consent"
          render={({ field }) => (
            <FormItem>
              <div className="flex min-w-0 items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                <FormControl>
                  <Checkbox
                    checked={!!field.value}
                    onCheckedChange={(checked) => field.onChange(!!checked)}
                    className="cursor-pointer"
                  />
                </FormControl>
                <Label className="block min-w-0 flex-1 text-xs leading-normal break-words hyphens-auto">
                  I agree to the Devbrew{' '}
                  <Link
                    href="/terms-of-service"
                    className="hover:text-primary underline underline-offset-2"
                  >
                    Terms
                  </Link>{' '}
                  and{' '}
                  <Link
                    href="/privacy-policy"
                    className="hover:text-primary underline underline-offset-2"
                  >
                    Privacy Policy
                  </Link>{' '}
                  and consent to be contacted about this request.*
                </Label>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Honeypot field for bots (leave hidden) */}
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden
          {...form.register('website')}
        />

        <div className="flex items-center gap-3 pt-2">
          <Button type="submit" disabled={form.formState.isSubmitting} className="px-6">
            {form.formState.isSubmitting ? 'Sending…' : 'Submit'}
          </Button>
        </div>
      </form>
    </Form>
  )
}
