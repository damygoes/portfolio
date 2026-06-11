import { SplitTextReveal } from '@/components/animation/SplitTextReveal';
import { FC } from 'react';

type Props = {
  index: string;
  title: string;
};

export const SectionHeading: FC<Props> = ({ index, title }) => (
  <div className="mb-14 md:mb-24">
    <span className="text-meta block text-primary">({index})</span>
    <SplitTextReveal
      as="h2"
      className="mt-3 font-display text-[clamp(2.25rem,7vw,5.5rem)] font-bold uppercase leading-[0.95] tracking-tight"
    >
      {title}
    </SplitTextReveal>
  </div>
);
