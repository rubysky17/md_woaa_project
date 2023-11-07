import type { Metadata } from 'next'
import localFont from '@next/font/local'
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

import './globals.css'

export const metadata: Metadata = {
  title: 'Woaa',
  description: 'Mô tả website',
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'vi' }];
}

// const avoFont = localFont({
//   src: [
//     {
//       path: '../../public/fonts/Avo.ttf',
//       weight: '400'
//     },
//     {
//       path: '../../public/fonts/AvoBold.ttf',
//       weight: '500'
//     }
//   ],
//   variable: '--font-avo'
// })

export default async function LocaleLayout({ children, params: { locale } }: any) {
  let messages;

  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
