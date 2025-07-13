'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Download } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatedBackground } from '../layout/AnimatedBackground';
import { Section } from '../layout/Section';

type Props = {
  scrollToSection: (id: string) => void;
};

// Motion variants for staggered animation
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const HeroSection = ({ scrollToSection }: Props) => {
  const t = useTranslations('Hero');
  const locale = useLocale();

  console.log('Current locale:', locale); // For debugging or logic

  return (
    <Section
      id="hero"
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
    >
      {/* Animated glow background */}
      <AnimatedBackground />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Profile Image with pulsing ring */}
        <motion.div variants={fadeUpVariants}>
          <div className="relative w-42 h-42 mx-auto mb-6">
            <div className="absolute inset-0 rounded-full animate-pulse ring-4 ring-primary/30" />
            <Image
              src="/avatar.jpg"
              alt="Damilola Bada"
              fill
              className="rounded-full border-4 border-primary shadow-lg object-cover object-top-right select-none"
            />
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-sm text-muted-foreground uppercase tracking-wide mb-3"
          variants={fadeUpVariants}
        >
          {t('tagline')}
        </motion.p>

        {/* Heading */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold leading-tight mb-6"
          variants={fadeUpVariants}
        >
          {t('greeting')}{' '}
          <span className="text-primary font-extrabold"> {t('name')} </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
          variants={fadeUpVariants}
        >
          {t('description_1')}{' '}
          <span className="text-primary font-semibold"> {t('years')} </span>{' '}
          {t('description_2')}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={fadeUpVariants}
        >
          <Button size="lg" onClick={() => scrollToSection('projects')}>
            {t('cta')} <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href={locale === 'de' ? '/lebenslauf.pdf' : '/resume.pdf'} target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" /> {t('download_cv')}
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10"
      >
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </motion.div>
    </Section>
  );
};

export default HeroSection;
