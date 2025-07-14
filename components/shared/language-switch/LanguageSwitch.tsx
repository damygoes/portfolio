'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  DEFAULT_LOCALE,
  type Locale,
  LOCALE_LABELS,
  SUPPORTED_LOCALES,
} from '@/lib/i18n/config';
import { usePathname, useRouter } from '@/lib/i18n/navigation';
import { useLocale } from 'next-intl';

type Props = {
  __storybookLocaleOverride?: Locale;
  onLocaleChange?: (locale: Locale) => void;
};

export function LanguageSwitch({
  __storybookLocaleOverride,
  onLocaleChange,
}: Props) {
  const localeFromHook = useLocale();
  const validatedLocale = SUPPORTED_LOCALES.includes(localeFromHook as Locale)
    ? (localeFromHook as Locale)
    : DEFAULT_LOCALE;

  const currentLocale = __storybookLocaleOverride ?? validatedLocale;

  const pathname = usePathname();
  const router = useRouter();

  const handleLocaleChange = (locale: Locale) => {
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
    <DropdownMenu>
      <DropdownMenuTrigger className="inline-flex items-center px-3 py-2 rounded-md border bg-background text-foreground text-sm">
        {LOCALE_LABELS[currentLocale]}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup
          value={currentLocale}
          onValueChange={(value) => handleLocaleChange(value as Locale)}
        >
          {SUPPORTED_LOCALES.map((locale) => (
            <DropdownMenuRadioItem key={locale} value={locale}>
              {LOCALE_LABELS[locale]}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
