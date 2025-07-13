import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');
  return (
    <footer className="py-8 border-t bg-background w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex justify-between items-center gap-8">
        <p>{t('copyright')}</p>
        <p>{t('info')}</p>
      </div>
    </footer>
  );
}
