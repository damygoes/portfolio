import { SectionHeading } from '@/components/layout/SectionHeading';
import { aboutMeTexts } from '@/lib/constants';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { Section } from '../layout/Section';

const AboutSection = () => {
  const t = useTranslations('About');

  return (
    <Section id="about" className="bg-background/50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t('title')} />

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
            {aboutMeTexts.map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                {t(`paragraphs.${text}`)}
              </motion.p>
            ))}

            <motion.p
              className="text-foreground"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.8 }}
              viewport={{ once: true }}
            >
              {t('cta')}{' '}
              <Link
                href="https://www.linkedin.com/in/damilolabada/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium underline underline-offset-2 hover:opacity-80 transition"
              >
                {t('link')}
              </Link>
              .
            </motion.p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
