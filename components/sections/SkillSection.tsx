'use client';

import { SectionHeading } from '@/components/layout/SectionHeading';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { skills } from '@/lib/constants';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Section } from '../layout/Section';
import { Button } from '../ui/button';

const SkillsSection = () => {
  const t = useTranslations('Skills');

  return (
    <Section id="skills">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t('title')} />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader className="text-center pb-4">
                  <Button size="icon" className="mx-auto">
                    {category.icon}
                  </Button>
                  <CardTitle className="text-lg">
                    {t(`category.${category.title}`)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default SkillsSection;
