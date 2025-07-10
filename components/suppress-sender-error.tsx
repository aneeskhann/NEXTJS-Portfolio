"use client"

import { useEffect } from "react"

export function SuppressSenderError() {
  useEffect(() => {
    // Suppress the wallet extension error by overriding the sender object
    if (typeof window !== "undefined") {
      // Delete the sender object if it exists
      if ((window as any).sender) {
        delete (window as any).sender
      }

      // Override console.error to filter out sender-related errors
      const originalConsoleError = console.error
      console.error = (...args: any[]) => {
        const message = args.join(" ")
        if (
          message.includes("sender_getProviderState") ||
          message.includes("No account exist") ||
          message.includes("Sender:")
        ) {
          return // Suppress these specific errors
        }
        originalConsoleError.apply(console, args)
      }

      // Clean up on unmount
      return () => {
        console.error = originalConsoleError
      }
    }
  }, [])

  return null
}
