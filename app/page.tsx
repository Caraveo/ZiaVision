import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <div className="relative w-full h-[500px] mb-8 rounded-lg overflow-hidden">
          <Image
            src="/InTheAir.png"
            alt="In The Air"
            fill
            style={{ objectFit: 'contain' }}
            priority
            className="backdrop-blur-sm"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 text-transparent bg-clip-text mb-6">
          Welcome to Zia Vision
        </h1>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
          Explore our vision, dreams, and learning resources through immersive video experiences.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild className="bg-blue-600/70 hover:bg-blue-600/90">
            <Link href="/vision">Explore Vision</Link>
          </Button>
          <Button asChild className="bg-blue-600/70 hover:bg-blue-600/90">
            <Link href="/dream">Explore Dream</Link>
          </Button>
          <Button asChild className="bg-blue-600/70 hover:bg-blue-600/90">
            <Link href="/learn">Explore Learn</Link>
          </Button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card className="border-blue-500/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-blue-300 mb-4">Vision</h2>
            <p className="text-blue-100 mb-4">
              Discover our vision for the future and how we're working to make it a reality.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-blue-500/30 text-blue-300 hover:bg-blue-500/20 hover:text-blue-200"
            >
              <Link href="/vision">Watch Video</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-blue-500/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-blue-300 mb-4">Dream</h2>
            <p className="text-blue-100 mb-4">
              Explore the dreams that drive our innovation and creativity in everything we do.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-blue-500/30 text-blue-300 hover:bg-blue-500/20 hover:text-blue-200"
            >
              <Link href="/dream">Watch Video</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-blue-500/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-blue-300 mb-4">Learn</h2>
            <p className="text-blue-100 mb-4">
              Access educational resources and learn about our technologies and methodologies.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-blue-500/30 text-blue-300 hover:bg-blue-500/20 hover:text-blue-200"
            >
              <Link href="/learn">Watch Video</Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      <section className="text-center prism-container p-8">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-300 to-blue-500 text-transparent bg-clip-text">
          Our Mission
        </h2>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
          We're building the next generation of connected experiences, bringing people together in new ways through
          innovative technology and creative solutions.
        </p>
      </section>
    </div>
  )
}

