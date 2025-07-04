"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, ChevronDown, Download } from "lucide-react"
import Link from 'next/link'

type Props = {
  scrollToSection: (id: string) => void
}

const HeroSection = ({ scrollToSection }: Props) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-5xl md:text-6xl mb-6">
            Hey, I’m <span className="text-primary font-extrabold">Damilola Bada</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            I build web and mobile apps that just work — clean, fast, and easy to use. With over{" "}
            <span className="text-primary font-extrabold">3 years</span> of experience, I love turning ideas into reality and solving real problems for real people.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
            >
              Check Out My Work <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
            >
              <Link href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" /> Download CV
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="h-6 w-6 text-gray-400" />
      </motion.div>
    </section>
  )
}

export default HeroSection
