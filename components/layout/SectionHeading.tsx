import { motion } from "framer-motion"
import { FC } from "react"

type Props = {
  title: string
  subtitle?: string
}

export const SectionHeading: FC<Props> = ({ title, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-center mb-16"
  >
    <h2 className="text-3xl font-bold mb-4">{title}</h2>
    <div className="w-16 h-0.5 bg-primary mx-auto mb-2" />
    {subtitle && <p className="text-lg max-w-2xl mx-auto">{subtitle}</p>}
  </motion.div>
)