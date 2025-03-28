import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Code, Cpu, Database, Globe, Layers, Wand2 } from "lucide-react"

export default function ToolsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-300 to-blue-500 text-transparent bg-clip-text mb-6">
          Our Tools
        </h1>

        <div className="prose max-w-none mb-8">
          <p className="text-xl text-blue-100 mb-8">
            Zia Vision provides a comprehensive suite of tools designed to empower creators, developers, and businesses
            to build immersive experiences and push the boundaries of what's possible.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <div className="bg-blue-500/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-blue-300" />
                </div>
                <CardTitle className="text-blue-300">Developer SDK</CardTitle>
                <CardDescription className="text-blue-200">
                  Comprehensive tools for building immersive applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-blue-100">
                  Our SDK provides everything developers need to create cutting-edge applications with support for
                  multiple platforms and programming languages.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-blue-300 hover:text-blue-200 hover:bg-blue-500/20 p-0"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-blue-500/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Wand2 className="h-6 w-6 text-blue-300" />
                </div>
                <CardTitle className="text-blue-300">Design Studio</CardTitle>
                <CardDescription className="text-blue-200">
                  Intuitive tools for creating immersive experiences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-blue-100">
                  Our design tools make it easy to create stunning visuals, interactive elements, and immersive
                  environments without extensive technical knowledge.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-blue-300 hover:text-blue-200 hover:bg-blue-500/20 p-0"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-blue-500/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-blue-300" />
                </div>
                <CardTitle className="text-blue-300">Data Platform</CardTitle>
                <CardDescription className="text-blue-200">Powerful analytics and data management</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-blue-100">
                  Our data platform provides real-time analytics, user insights, and powerful data management tools to
                  optimize your applications and experiences.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-blue-300 hover:text-blue-200 hover:bg-blue-500/20 p-0"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-blue-500/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Layers className="h-6 w-6 text-blue-300" />
                </div>
                <CardTitle className="text-blue-300">Content Creation</CardTitle>
                <CardDescription className="text-blue-200">Tools for creating engaging digital content</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-blue-100">
                  Create stunning 3D models, animations, and interactive content with our suite of content creation
                  tools designed for creators of all skill levels.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-blue-300 hover:text-blue-200 hover:bg-blue-500/20 p-0"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-blue-500/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Cpu className="h-6 w-6 text-blue-300" />
                </div>
                <CardTitle className="text-blue-300">AI Framework</CardTitle>
                <CardDescription className="text-blue-200">
                  Intelligent solutions for next-gen applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-blue-100">
                  Our AI framework provides advanced machine learning capabilities, natural language processing, and
                  computer vision tools to create intelligent applications.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-blue-300 hover:text-blue-200 hover:bg-blue-500/20 p-0"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-blue-500/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-blue-300" />
                </div>
                <CardTitle className="text-blue-300">Deployment Platform</CardTitle>
                <CardDescription className="text-blue-200">Seamless publishing and hosting solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-blue-100">
                  Deploy your applications globally with our scalable infrastructure, content delivery network, and
                  comprehensive monitoring tools.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-blue-300 hover:text-blue-200 hover:bg-blue-500/20 p-0"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        

        <div className="flex flex-wrap gap-4">
          <Button asChild className="bg-blue-600/70 hover:bg-blue-600/90">
            <Link href="/learn">
              Explore Learning Resources
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-blue-500/30 text-blue-300 hover:bg-blue-500/20 hover:text-blue-200"
          >
            <Link href="/business-plan">Back to Business Plan</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

