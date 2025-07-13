'use client';

import { SectionHeading } from '@/components/layout/SectionHeading';
import { contacts } from '@/lib/constants';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Footer from '../layout/Footer';
import { Section } from '../layout/Section';

const ContactLink = ({ icon, title, link }: (typeof contacts)[0]) => (
  <Link
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex flex-col items-center gap-2 rounded-lg p-6 hover:bg-primary/70 transition cursor-pointer"
  >
    <div className="text-primary group-hover:text-white">{icon}</div>
    <h3 className="font-semibold">{title}</h3>
  </Link>
);

const ContactSection = () => {
  const t = useTranslations('Contact');

  return (
    <Section
      id="contact"
      className="flex flex-col items-center justify-between"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t('title')} subtitle={t('subtitle')} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto grid md:grid-cols-3 gap-8 mb-12"
        >
          {contacts.map((contact) => (
            <ContactLink key={contact.title} {...contact} />
          ))}
        </motion.div>
      </div>
      <Footer />
    </Section>
  );
};

export default ContactSection;
