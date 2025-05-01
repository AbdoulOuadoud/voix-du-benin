import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AuthWrapper from '@/components/layout/AuthWrapper';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Voix du Bénin - Préservation des langues béninoises',
  description: 'Plateforme collaborative de préservation et valorisation des langues du Bénin à travers des enregistrements audio.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${poppins.className} bg-background text-text-primary min-h-screen flex flex-col`}>
        <AuthWrapper>
          <Navbar />
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
        </AuthWrapper>
      </body>
    </html>
  );
}
