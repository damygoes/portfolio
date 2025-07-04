"use client"

import { navLinks } from '@/lib/constants'
import { motion } from "framer-motion"
import { FC } from "react"
import { ModeToggle } from '../shared/ModeToggle'
import { Button } from '../ui/button'

type NavbarProps = {
  activeSection: string
  scrollToSection: (id: string) => void
}

const Navbar: FC<NavbarProps> = ({ activeSection, scrollToSection }) => {

  return (
    <nav className="sticky top-4 z-50 backdrop-blur-sm w-fit mx-auto rounded-full px-8 py-2 bg-card shadow-md">
        <div className="flex justify-between items-center gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => scrollToSection("hero")}
          >
            <Button size='icon' variant="ghost" className='text-xl font-semibold transition-colors text-primary hover:bg-transparent hover:text-primary/70'>
              DB
            </Button>
          </motion.div>
          <div className='flex justify-between items-center gap-12 grow'>
            <div className="hidden md:flex gap-2 justify-end">
              {navLinks.map((item) => (
                <Button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  variant={activeSection === item.toLowerCase() ? "link" : "ghost"}
                  className='hover:text-primary hover:bg-transparent'
                >
                  {item}
                </Button>
              ))}
            </div>
            <ModeToggle />
          </div>
        </div>
    </nav>
  )
}

export default Navbar