import { SectionHeading } from '@/components/layout/SectionHeading';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Section } from '../layout/Section';

const AboutSection = () => (
  <Section id="about" className="bg-background/50 py-16">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading title="About Me" />

      <div className="grid md:grid-cols-2 gap-12 items-center mt-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.1, rotate: 3, y: -5 }}
          transition={{
            duration: 0.5,
            type: 'spring',
            stiffness: 120,
            damping: 12,
          }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Image
            src="/avatar.jpg"
            alt="Damilola Bada"
            width={500}
            height={500}
            priority
            className="select-none rounded-r-full shadow-lg border-4 border-primary"
          />
        </motion.div>

        <div className="space-y-6 text-lg leading-relaxed text-foreground max-w-xl mx-auto">
          {[
            'I got into fullstack development because I wanted to build things that actually help people. What started as curiosity quickly turned into a passion for building web and mobile apps that just get the job done — without over-complicating things.',
            'Along the way, I taught myself React and Next.js on the frontend, and Node.js and NestJS on the backend. Writing code that’s clear and easy to fix is important to me — it means less headaches for everyone, especially the people I work with.',
            'I believe technology should solve real problems simply and reliably — that’s what motivates me every day. That’s also why I enjoy collaborating with people who care about building the right things for the people who actually use them.',
            'Every project is a new chance to learn and make a difference, and I’m excited to keep growing, both as a developer and as part of the teams I work with.',
          ].map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              {text}
            </motion.p>
          ))}

          <motion.p
            className="text-foreground"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            viewport={{ once: true }}
          >
            If you’re curious to learn more or want to chat about building
            something meaningful, feel free to{' '}
            <Link
              href="https://www.linkedin.com/in/damilolabada/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium underline underline-offset-2 hover:opacity-80 transition"
            >
              reach out
            </Link>
            .
          </motion.p>
        </div>
      </div>
    </div>
  </Section>
);

export default AboutSection;
