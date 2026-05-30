import type { Metadata } from 'next';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Fábrica de Software Acadêmica - IFRS Osório',
  description:
    'Incubadora de software acadêmica. Transformando ideias em produtos tecnológicos com excelência e inovação.',
  keywords: [
    'software',
    'incubadora',
    'desenvolvimento',
    'IFRS',
    'Osório',
    'tecnologia',
  ],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
