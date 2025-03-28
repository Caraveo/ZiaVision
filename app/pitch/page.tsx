import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, BarChart3, Globe, Lightbulb, Target, Users } from "lucide-react"

export default function PitchPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto prism-container p-6">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-300 to-blue-500 text-transparent bg-clip-text mb-6">
          Our Pitch
        </h1>

        <div className="prose max-w-none mb-8">
          <p className="text-xl text-blue-100 mb-8">
            Zia Vision is revolutionizing how people connect, create, and collaborate in digital spaces. Our platform
            combines cutting-edge technology with intuitive design to create immersive experiences that transcend
            physical limitations.
          </p>

          <h2 className="text-2xl font-bold text-blue-300 mb-4">The Opportunity</h2>

          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500/20 p-3 rounded-full">
                    <Globe className="h-6 w-6 text-blue-300" />
                  </div>
                  <div>
                    <h3 className="font-medium text-blue-200">Global Market</h3>
                    <p className="text-sm text-blue-100">$500B+ market opportunity by 2028</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-500/20 p-3 rounded-full">
                    <BarChart3 className="h-6 w-6 text-blue-300" />
                  </div>
                  <div>
                    <h3 className="font-medium text-blue-200">Growth Trajectory</h3>
                    <p className="text-sm text-blue-100">125% YoY user growth</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-500/20 p-3 rounded-full">
                    <Users className="h-6 w-6 text-blue-300" />
                  </div>
                  <div>
                    <h3 className="font-medium text-blue-200">User Base</h3>
                    <p className="text-sm text-blue-100">10M+ active monthly users</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-500/20 p-3 rounded-full">
                    <Target className="h-6 w-6 text-blue-300" />
                  </div>
                  <div>
                    <h3 className="font-medium text-blue-200">Market Fit</h3>
                    <p className="text-sm text-blue-100">95% customer satisfaction</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold text-blue-300 mb-4">Our Solution</h2>

          <p className="text-lg text-blue-100 mb-4">Zia Vision offers a comprehensive platform that includes:</p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <div className="bg-blue-500/20 p-2 rounded-full mt-1">
                <Lightbulb className="h-4 w-4 text-blue-300" />
              </div>
              <div>
                <h3 className="font-medium text-blue-200">Immersive Collaboration</h3>
                <p className="text-blue-100">
                  Real-time virtual workspaces that bring teams together regardless of physical location.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-blue-500/20 p-2 rounded-full mt-1">
                <Lightbulb className="h-4 w-4 text-blue-300" />
              </div>
              <div>
                <h3 className="font-medium text-blue-200">Creative Tools</h3>
                <p className="text-blue-100">
                  Intuitive design and development tools that empower creators to build without limitations.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-blue-500/20 p-2 rounded-full mt-1">
                <Lightbulb className="h-4 w-4 text-blue-300" />
              </div>
              <div>
                <h3 className="font-medium text-blue-200">Social Experiences</h3>
                <p className="text-blue-100">
                  Next-generation social features that create meaningful connections in digital spaces.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button asChild className="bg-blue-600/70 hover:bg-blue-600/90">
            <Link href="/business-plan">
              View Business Plan
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-blue-500/30 text-blue-300 hover:bg-blue-500/20 hover:text-blue-200"
          >
            <Link href="/vision">Watch Our Vision</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

