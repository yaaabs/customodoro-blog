"use client"

import * as React from "react"

// Minimal type-only exports to satisfy `hooks/use-toast.ts`.
// The real UI implementation can be added or replaced later.

export type ToastActionElement = React.ReactNode

export type ToastProps = {
  id?: string
  open?: boolean
  onOpenChange?: (open: boolean) => void
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

export default function ToastDemo(_: ToastProps) {
  return null
}
