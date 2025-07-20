import { type InputHTMLAttributes, forwardRef } from "react"
import styles from "./Input.module.css"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  fullWidth?: boolean
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, fullWidth = true, className, ...props }, ref) => {
    return (
      <div className={`${styles.inputWrapper} ${fullWidth ? styles.fullWidth : ""}`}>
        {label && <label className={styles.label}>{label}</label>}
        <input ref={ref} className={`${styles.input} ${error ? styles.error : ""} ${className || ""}`} {...props} />
        {error && <span className={styles.errorMessage}>{error}</span>}
      </div>
    )
  },
)

Input.displayName = "Input"

export default Input
