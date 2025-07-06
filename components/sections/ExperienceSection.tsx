import { SectionHeading } from "@/components/layout/SectionHeading"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { experiences } from '@/lib/constants'
import { motion } from "framer-motion"
import { Section } from '../layout/Section'

const ExperienceSection = () => (
  <Section id="experience">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading title="Experience" />
      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{exp.title}</CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {exp.company} · <span>{exp.location}</span>
                    </CardDescription>
                  </div>
                  <Badge variant="outline">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>{exp.description}</p>
                <ul className="list-disc list-inside space-y-1 pl-1">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}

      </div>
    </div>
  </Section>
)

export default ExperienceSection