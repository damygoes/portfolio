import { cn } from '@/lib/utils';
import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export const Section = ({
  id,
  className,
  children,
  ...props
}: SectionProps) => {
  return (
    <section
      id={id}
      className={cn('min-h-[100vh] scroll-mt-32 py-24', className)}
      {...props}
    >
      {children}
    </section>
  );
};
