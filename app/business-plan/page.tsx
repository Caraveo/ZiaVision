import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, BarChart3, DollarSign, LineChart, Target, Users } from "lucide-react"

export default function BusinessPlanPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto prism-container p-6">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-300 to-blue-500 text-transparent bg-clip-text mb-6">
          Business Plan
        </h1>

        <div className="prose max-w-none mb-8">
          <p className="text-xl text-blue-100 mb-8">
            Our comprehensive business strategy outlines how Zia Vision will revolutionize digital experiences while
            building a sustainable and profitable business model.
          </p>

          <h2 className="text-2xl font-bold text-blue-300 mb-4">Executive Summary</h2>

          <p className="text-lg text-blue-100 mb-8">
            Zia Vision is positioned to become the leading platform for immersive digital experiences, targeting both
            enterprise and consumer markets with a scalable SaaS model and innovative technology stack.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-blue-300">Revenue Model</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-blue-300" />
                    <span className="text-blue-100">Subscription tiers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-blue-300" />
                    <span className="text-blue-100">Enterprise licensing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-blue-300" />
                    <span className="text-blue-100">Creator marketplace</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-blue-300" />
                    <span className="text-blue-100">API access</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-blue-300">Growth Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-blue-300" />
                    <span className="text-blue-100">Strategic partnerships</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-blue-300" />
                    <span className="text-blue-100">Developer ecosystem</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-blue-300" />
                    <span className="text-blue-100">International expansion</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-blue-300" />
                    <span className="text-blue-100">Vertical integration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold text-blue-300 mb-4">Financial Projections</h2>

          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium flex items-center gap-2 text-blue-200">
                    <LineChart className="h-5 w-5 text-blue-300" />
                    Revenue Growth
                  </h3>
                  <div className="h-4 w-full bg-blue-900/30 rounded-full mt-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm text-blue-100 mt-1">
                    <span>Year 1: $10M</span>
                    <span>Year 5: $250M</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium flex items-center gap-2 text-blue-200">
                    <Users className="h-5 w-5 text-blue-300" />
                    User Acquisition
                  </h3>
                  <div className="h-4 w-full bg-blue-900/30 rounded-full mt-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm text-blue-100 mt-1">
                    <span>Year 1: 1M</span>
                    <span>Year 5: 50M</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium flex items-center gap-2 text-blue-200">
                    <BarChart3 className="h-5 w-5 text-blue-300" />
                    Market Penetration
                  </h3>
                  <div className="h-4 w-full bg-blue-900/30 rounded-full mt-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                      style={{ width: "40%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm text-blue-100 mt-1">
                    <span>Year 1: 2%</span>
                    <span>Year 5: 15%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button asChild className="bg-blue-600/70 hover:bg-blue-600/90">
            <Link href="/tools">
              Explore Our Tools
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-blue-500/30 text-blue-300 hover:bg-blue-500/20 hover:text-blue-200"
          >
            <Link href="/pitch">Back to Pitch</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

