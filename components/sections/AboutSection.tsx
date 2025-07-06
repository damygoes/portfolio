import { SectionHeading } from "@/components/layout/SectionHeading"
import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"
import Image from 'next/image'

const AboutSection = () => (
  <section id="about" className="py-20">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading title="About Me" />
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="w-80 h-80 mx-auto bg-background rounded-xl flex items-center justify-center border" >
            <Image
              src='/avatar.jpg'
              alt="Profile Picture"
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-lg leading-relaxed">
            I&apos;m a passionate{" "}
            <span className="text-primary font-semibold">fullstack developer</span> with over{" "}
            <span className="text-primary font-semibold">3 years</span> of experience building scalable web and mobile
            applications. My focus on user experience and performance drives me to create solutions that not only
            work flawlessly but also delight users.
          </p>
          <p className="text-lg leading-relaxed">
            I specialize in modern JavaScript ecosystems, from React and Next.js on the frontend to Node.js and
            NestJS on the backend, with expertise in both SQL and NoSQL databases.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Remote / Global</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span>
                <span className="text-primary font-semibold">3+ Years</span> Experience
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
)

export default AboutSection
