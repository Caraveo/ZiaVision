import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-blue-500/20">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold bg-gradient-to-r from-white via-white/90 to-white/80 text-transparent bg-clip-text">
              Zia Vision
            </h3>
            <p className="text-sm text-blue-200">Building the next generation of connected experiences.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-white via-white/90 to-white/80 text-transparent bg-clip-text">
              Videos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/vision" className="text-sm text-blue-200 hover:text-blue-100 transition-colors">
                  Vision
                </Link>
              </li>
              <li>
                <Link href="/dream" className="text-sm text-blue-200 hover:text-blue-100 transition-colors">
                  Dream
                </Link>
              </li>
              <li>
                <Link href="/learn" className="text-sm text-blue-200 hover:text-blue-100 transition-colors">
                  Learn
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-white via-white/90 to-white/80 text-transparent bg-clip-text">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/pitch" className="text-sm text-blue-200 hover:text-blue-100 transition-colors">
                  Pitch
                </Link>
              </li>
              <li>
                <Link href="/business-plan" className="text-sm text-blue-200 hover:text-blue-100 transition-colors">
                  Business Plan
                </Link>
              </li>
              <li>
                <Link href="/tools" className="text-sm text-blue-200 hover:text-blue-100 transition-colors">
                  Tools
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-white via-white/90 to-white/80 text-transparent bg-clip-text">
              Connect
            </h3>
            <ul className="space-y-2">
              <li>
                <span className="text-sm text-black opacity-50 cursor-not-allowed select-none">
                  Twitter (Coming Soon)
                </span>
              </li>
              <li>
                <span className="text-sm text-black opacity-50 cursor-not-allowed select-none">
                  Instagram (Coming Soon)
                </span>
              </li>
              <li>
                <Link 
                  href="https://www.linkedin.com/company/zia-vision" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-blue-200 hover:text-blue-100 transition-colors"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-blue-500/20 text-center">
          <p className="text-sm text-blue-200">© {new Date().getFullYear()} Zia Vision. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

