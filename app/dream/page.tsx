import { Button } from "@/components/ui/button"
import Link from "next/link"
import VideoPlayer from "@/components/video-player"

export default function DreamPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto prism-container p-6">
        
        <div className="mb-8">
          <VideoPlayer
            videoId="dream-video"
            title="Our Dream"
            posterColor="blue"
            videoUrl="https://zia-vision.s3.us-west-2.amazonaws.com/Dream.mp4"
          />
        </div>

        <div className="prose max-w-none mb-8">
          <p className="text-lg text-blue-100">
            Our dream at Zia Vision is to create a world where technology enhances human potential rather than replacing
            it. We envision a future where our innovations empower people to achieve more, connect deeper, and live
            better.
          </p>

          <p className="text-lg text-blue-100">
            We're dreamers and builders, constantly imagining what could be and then making it reality. Our dream drives
            us to explore uncharted territories and develop solutions that seemed impossible just years ago.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button asChild className="bg-blue-600/70 hover:bg-blue-600/90">
            <Link href="/learn">Explore Learning</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-blue-500/30 text-blue-300 hover:bg-blue-500/20 hover:text-blue-200"
          >
            <Link href="/business-plan">View Business Plan</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

