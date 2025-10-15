'use client'

import { useState, useRef, FormEvent } from 'react'
import { Spinner } from '@/components/ui/spinner'

interface NewsletterFormProps {
  title?: string
  apiUrl?: string
}

export default function NewsletterForm({
  title = 'Subscribe to the newsletter',
  apiUrl = '/api/newsletter',
}: NewsletterFormProps) {
  const inputEl = useRef<HTMLInputElement>(null)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [loading, setLoading] = useState(false)

  const subscribe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const email = inputEl.current?.value
    if (!email) {
      setError(true)
      setMessage('Please enter your email address')
      return
    }

    setLoading(true)
    setError(false)
    setMessage('')

    try {
      const res = await fetch(apiUrl, {
        body: JSON.stringify({
          email,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })

      const { error: responseError } = await res.json()
      if (responseError) {
        setError(true)
        setMessage('Your e-mail address is invalid or you are already subscribed!')
        return
      }

      if (inputEl.current) {
        inputEl.current.value = ''
      }
      setError(false)
      setSubscribed(true)
      setMessage('Subscribe request sent. Please confirm your subscription on your email.')
    } catch (err) {
      setError(true)
      setMessage('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full">
      {title && <div className="pb-1 text-lg font-semibold text-gray-800">{title}</div>}
      <form className="flex w-full flex-col gap-3 sm:flex-row" onSubmit={subscribe}>
        <div className="flex-1">
          <label htmlFor="email-input" className="sr-only">
            Email address
          </label>
          <input
            autoComplete="email"
            className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            id="email-input"
            name="email"
            placeholder="Enter your email"
            ref={inputEl}
            required
            type="email"
            disabled={subscribed || loading}
          />
        </div>
        <div className="w-full sm:w-auto">
          <button
            className="flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-8 py-3 font-medium text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            type="submit"
            disabled={subscribed || loading}
          >
            {loading && <Spinner className="size-4" />}
            {subscribed ? 'Subscribed' : loading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>
      </form>
      {message && (
        <div className={`mt-3 text-sm ${error ? 'text-red-600' : 'text-primary-600'}`}>
          {message}
        </div>
      )}
    </div>
  )
}
