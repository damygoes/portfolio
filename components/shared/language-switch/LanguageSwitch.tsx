'use client';

import {
  DEFAULT_LOCALE,
  type Locale,
  LOCALE_LABELS,
  SUPPORTED_LOCALES,
} from '@/lib/i18n/config';
import { usePathname, useRouter } from '@/lib/i18n/navigation';
import { cn } from '@/lib/utils';
import { useLocale } from 'next-intl';

type Props = {
  __storybookLocaleOverride?: Locale;
  onLocaleChange?: (locale: Locale) => void;
  className?: string;
};

export function LanguageSwitch({
  __storybookLocaleOverride,
  onLocaleChange,
  className,
}: Props) {
  const localeFromHook = useLocale();
  const validatedLocale = SUPPORTED_LOCALES.includes(localeFromHook as Locale)
    ? (localeFromHook as Locale)
    : DEFAULT_LOCALE;

  const currentLocale = __storybookLocaleOverride ?? validatedLocale;

  const pathname = usePathname();
  const router = useRouter();

  const handleLocaleChange = (locale: Locale) => {
    if (locale === currentLocale) return;

    if (onLocaleChange) {
      onLocaleChange(locale);
      return;
    }

    // Save scroll position before navigation
    sessionStorage.setItem('scrollY', window.scrollY.toString());

    // Navigate to new locale (triggers reload, but scroll will be restored)
    router.push(pathname, { locale });
  };

  return (
    <div className={cn('flex items-center font-mono text-xs', className)}>
      {SUPPORTED_LOCALES.map((locale, index) => (
        <span key={locale} className="flex items-center">
          {index > 0 && <span className="mx-1.5 text-border">/</span>}
          <button
            type="button"
            onClick={() => handleLocaleChange(locale)}
            className={cn(
              'cursor-pointer uppercase tracking-[0.15em] transition-colors',
              locale === currentLocale
                ? 'text-primary'
                : 'text-muted-foreground hover:text-foreground'
            )}
            aria-current={locale === currentLocale ? 'true' : undefined}
          >
            {LOCALE_LABELS[locale]}
          </button>
        </span>
      ))}
    </div>
  );
}
