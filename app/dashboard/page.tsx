"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
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

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check for user data in localStorage
    const userData = localStorage.getItem("userData")

    if (!userData) {
      // No user data found, redirect to auth
      router.push("/auth")
      return
    }

    try {
      const parsedUser: User = JSON.parse(userData)
      setUser(parsedUser)
    } catch (error) {
      // Invalid user data, redirect to auth
      localStorage.removeItem("userData")
      router.push("/auth")
      return
    }

    setIsLoading(false)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("userData")
    router.push("/auth")
  }

  if (isLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null // Will redirect to auth
  }

  return (
    <div className={styles.container}>
      <div className={styles.dashboard}>
        <header className={styles.header}>
          <div className={styles.userInfo}>
            <img src={user.picture.large || "/placeholder.svg"} alt="User Avatar" className={styles.avatar} />
            <div className={styles.userDetails}>
              <h1 className={styles.welcome}>Welcome to the Dashboard</h1>
              <p className={styles.userName}>
                {user.name.first} {user.name.last}
              </p>
              <p className={styles.userEmail}>{user.email}</p>
            </div>
          </div>

          <Button variant="outline" size="medium" onClick={handleLogout}>
            Logout
          </Button>
        </header>

        <main className={styles.content}>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Dashboard Overview</h2>
            <p className={styles.cardDescription}>
              You have successfully logged in! This is your personal dashboard where you can manage your account and
              access various features.
            </p>
          </div>

          <div className={styles.grid}>
            <div className={styles.gridItem}>
              <h3>Profile</h3>
              <p>Manage your personal information</p>
            </div>
            <div className={styles.gridItem}>
              <h3>Settings</h3>
              <p>Configure your preferences</p>
            </div>
            <div className={styles.gridItem}>
              <h3>Analytics</h3>
              <p>View your activity statistics</p>
            </div>
            <div className={styles.gridItem}>
              <h3>Support</h3>
              <p>Get help and contact support</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
