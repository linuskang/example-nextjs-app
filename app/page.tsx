"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { format } from "date-fns"
import { Providers } from "@/app/providers"

function HomeContent() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <main className="flex justify-center items-center min-h-screen bg-background text-foreground">
      {session ? (
        <Card className="max-w-md w-full shadow-lg">
          <CardHeader>
            <CardTitle>Welcome, {session.user?.name ?? "User"}!</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <Avatar className="w-24 h-24">
              <AvatarImage src={session.user?.image ?? undefined} />
              <AvatarFallback>
                {session.user?.name?.[0] ?? "?"}
              </AvatarFallback>
            </Avatar>
            <p className="text-center text-sm text-muted-foreground">
              Email: {session.user?.email ?? "Not available"}
            </p>
            {session.expires && (
              <p className="text-center text-xs text-muted-foreground">
                Session expires:{" "}
                {format(new Date(session.expires), "PPpp")}
              </p>
            )}
          </CardContent>
          <Separator />
          <CardFooter className="flex justify-center">
            <Button variant="destructive" onClick={() => signOut()}>
              Sign Out
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <Button onClick={() => signIn("discord")}>Sign in with Discord</Button>
      )}
    </main>
  )
}

export default function Home() {
  return (
    <Providers>
      <HomeContent />
    </Providers>
  )
}
