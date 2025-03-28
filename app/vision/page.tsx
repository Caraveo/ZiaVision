import { Button } from "@/components/ui/button"
import Link from "next/link"
import VideoPlayer from "@/components/video-player"

export default function VisionPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto prism-container p-6">
        

        <div className="mb-8">
          <VideoPlayer
            videoId="vision-video"
            title="Our Vision"
            posterColor="blue"
            videoUrl="https://zia-vision.s3.us-west-2.amazonaws.com/Bike.mp4"
          />
        </div>

        <div className="prose max-w-none mb-8">
          <p className="text-lg text-blue-100">
            At Zia Vision, our vision is to create a more connected world through innovative technology. We believe in
            pushing boundaries and exploring new frontiers to build solutions that bring people together.
          </p>

          <p className="text-lg text-blue-100">
            Through our cutting-edge research and development, we're working to create immersive experiences that
            transcend physical limitations and open up new possibilities for human connection.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button asChild className="bg-blue-600/70 hover:bg-blue-600/90">
            <Link href="/dream">Explore Our Dream</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-blue-500/30 text-blue-300 hover:bg-blue-500/20 hover:text-blue-200"
          >
            <Link href="/pitch">View Our Pitch</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

