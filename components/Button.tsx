import type { ButtonHTMLAttributes, ReactNode } from "react"
import styles from "./Button.module.css"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "small" | "medium" | "large"
  fullWidth?: boolean
  loading?: boolean
  children: ReactNode
}

export default function Button({
  variant = "primary",
  size = "medium",
  fullWidth = false,
  loading = false,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : "",
    loading ? styles.loading : "",
    className || "",
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <button className={buttonClasses} disabled={disabled || loading} {...props}>
      {loading && <span className={styles.spinner}></span>}
      <span className={loading ? styles.hiddenText : ""}>{children}</span>
    </button>
  )
}
