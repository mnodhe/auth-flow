"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem("userData")

    if (userData) {
      // User is logged in, redirect to dashboard
      router.push("/dashboard")
    } else {
      // User is not logged in, redirect to auth
      router.push("/auth")
    }
  }, [router])

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        color: "#6b7280",
      }}
    >
      <p>Redirecting...</p>
    </div>
  )
}
