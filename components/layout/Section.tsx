import { cn } from '@/lib/utils';
import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  children: React.ReactNode;
  className?: string;
  /** Set false for full-bleed content (e.g. marquees). */
  contained?: boolean;
}

export const Section = ({
  id,
  className,
  children,
  contained = true,
  ...props
}: SectionProps) => {
  return (
    <section
      id={id}
      className={cn('scroll-mt-24 py-24 md:py-40', className)}
      {...props}
    >
      {contained ? (
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">{children}</div>
      ) : (
        children
      )}
    </section>
  );
};
