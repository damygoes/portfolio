import { SectionHeading } from '@/components/layout/SectionHeading';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Experience } from '@/lib/types';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Section } from '../layout/Section';

const ExperienceSection = () => {
  const t = useTranslations('Experience');

  // Cast the translation result directly to Experience[]
  const experiences = t.raw('experiences') as Experience[];

  return (
    <Section id="experience">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t('title')} />
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
                    <Badge variant="outline">{exp.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>{exp.description}</p>
                  <ul className="list-disc list-inside space-y-1 pl-1">
                    {exp.responsibilities.map((item: string, i: number) => (
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
  );
};

export default ExperienceSection;
