import { Button } from "@/components/ui/button"
import Link from "next/link"
import VideoPlayer from "@/components/video-player"

export default function LearnPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto prism-container p-6">
        
        <div className="mb-8">
          <VideoPlayer
            videoId="learn-video"
            title="Learning Resources"
            posterColor="blue"
            videoUrl="https://zia-vision.s3.us-west-2.amazonaws.com/Zia.mp4"
          />
        </div>

        <div className="prose max-w-none mb-8">
          <p className="text-lg text-blue-100">
            Education and knowledge sharing are core values at Zia Vision. We believe in democratizing access to
            information and providing resources that help people understand and utilize our technologies.
          </p>

          <p className="text-lg text-blue-100">
            Our learning platform offers comprehensive guides, tutorials, and courses designed to empower developers,
            creators, and users to make the most of our ecosystem and build amazing experiences.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button asChild className="bg-blue-600/70 hover:bg-blue-600/90">
            <Link href="/tools">Explore Our Tools</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-blue-500/30 text-blue-300 hover:bg-blue-500/20 hover:text-blue-200"
          >
            <Link href="/vision">Back to Vision</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

