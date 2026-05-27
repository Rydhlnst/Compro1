"use client"

import type { ReactNode } from "react"
import { motion } from "motion/react"

type ScrollRevealProps = {
  children: ReactNode
  delay?: number
  y?: number
  duration?: number
  once?: boolean
}

export function ScrollReveal({
  children,
  delay = 0,
  y = 28,
  duration = 0.6,
  once = true,
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

