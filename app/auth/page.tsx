"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Input from "@/components/Input"
import Button from "@/components/Button"
import styles from "./page.module.css"

interface User {
  name: {
    first: string
    last: string
  }
  email: string
  picture: {
    large: string
  }
}

export default function AuthPage() {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const validateIranianPhoneNumber = (phone: string): boolean => {
    // Iranian phone number: starts with 09, 11 digits total, numeric only
    const iranianPhoneRegex = /^09\d{9}$/
    return iranianPhoneRegex.test(phone)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Validate phone number
    if (!phoneNumber) {
      setError("Phone number is required")
      return
    }

    if (!validateIranianPhoneNumber(phoneNumber)) {
      setError("Please enter a valid Iranian phone number (e.g., 09123456789)")
      return
    }

    setIsLoading(true)

    try {
      // Fetch user data from randomuser.me API
      const response = await fetch("https://randomuser.me/api/?results=1&nat=us")
      const data = await response.json()

      if (data.results && data.results.length > 0) {
        const user: User = data.results[0]

        // Store user data in localStorage
        localStorage.setItem("userData", JSON.stringify(user))

        // Redirect to dashboard
        router.push("/dashboard")
      } else {
        setError("Failed to fetch user data. Please try again.")
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.authCard}>
        <div className={styles.header}>
          <h1 className={styles.title}>Welcome Back</h1>
          <p className={styles.subtitle}>Please sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <Input
              type="tel"
              placeholder="09123456789"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              label="Iranian Phone Number"
              error={error}
              disabled={isLoading}
            />
          </div>

          <Button type="submit" variant="primary" size="large" disabled={isLoading} loading={isLoading} fullWidth>
            {isLoading ? "Signing In..." : "Login"}
          </Button>
        </form>

        <div className={styles.footer}>
          <p className={styles.note}>Enter any valid Iranian phone number to continue</p>
        </div>
      </div>
    </div>
  )
}
