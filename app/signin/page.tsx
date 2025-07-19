"use client"

import { Button } from "@/components/ui/button"
import { signIn } from "next-auth/react"

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <Button onClick={() => signIn("discord")}>Sign in with Discord</Button>
    </main>
  )
}