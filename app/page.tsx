import Link from "next/link"
import { ArrowRight, Code, Github, Package, Star, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Package className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">modKit</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/yourusername/typesdk" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-24 md:py-32 lg:py-40 border-b">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    The TypeScript SDK for MYMOD applications
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    A powerful, type-safe library that makes building MYMOD applications faster, safer, and more enjoyable.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" disabled>
                    Coming soon
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Package className="h-4 w-4" />
                    <span>MIT License</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="rounded-xl border bg-muted/50 p-4 lg:p-6">
                  <pre className="overflow-x-auto text-sm font-mono">
                    <code className="language-typescript">
                      {`// Install the SDK
npm install @endr/modkit-ts

// Import and use
import { createClient } from '@endr/modkit-ts'

const client = createClient({
  apiKey: process.env.API_KEY
})

// Type-safe API calls
const result = await client.data.query<User[]>({
  filter: { active: true },
  sort: { createdAt: 'desc' }
})

// Enjoy full TypeScript support
result.forEach(user => {
  console.log(user.name)
})`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="community" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Community
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Join our growing community</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  TypeSDK is built by developers for developers. Join us and contribute to the future of TypeScript
                  development.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>GitHub</CardTitle>
                  <CardDescription>Star the repository, report issues, and contribute code.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="https://github.com/endrtech/mymod-ts-sdk" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full">
                      <Github className="mr-2 h-4 w-4" />
                      Visit Repository
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Discord</CardTitle>
                  <CardDescription>Join our Discord server to chat with other developers.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="https://discord.gg/VNfWcyd8hq" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4"
                      >
                        <circle cx="9" cy="12" r="1" />
                        <circle cx="15" cy="12" r="1" />
                        <path d="M7.5 7.5c3.5-1 5.5-1 9 0" />
                        <path d="M7 16.5c3.5 1 6.5 1 10 0" />
                        <path d="M15.5 17c0 1 1.5 3 2 3 1.5 0 2-1.5 2-3 0-1.5-3-1.5-3-6 0-4.5 1.5-5.5 3-5.5 1.5 0 1.5 1.5 1.5 3" />
                        <path d="M8.5 17c0 1-1.5 3-2 3-1.5 0-2-1.5-2-3 0-1.5 3-1.5 3-6 0-4.5-1.5-5.5-3-5.5-1.5 0-1.5 1.5-1.5 3" />
                      </svg>
                      Join Discord
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Twitter</CardTitle>
                  <CardDescription>Follow us for updates, tips, and announcements.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="https://x.com/@hellomymod" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                      Follow on Twitter
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Package className="h-6 w-6 text-primary" />
            <p className="text-sm text-muted-foreground">© 2025 ENDR Australia. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <Link href="https://endr.tech/legal/terms" className="text-sm text-muted-foreground hover:underline">
              Terms
            </Link>
            <Link href="https://endr.tech/legal/privacy" className="text-sm text-muted-foreground hover:underline">
              Privacy
            </Link>
            <Link href="https://endr.tech" className="text-sm text-muted-foreground hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
