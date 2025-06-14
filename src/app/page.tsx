import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import FaqSection from '@/components/home/FaqSection';
import SupportSection from '@/components/home/SupportSection';
import NewsletterSection from '@/components/home/NewsletterSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <SupportSection />
      <NewsletterSection />
      <FaqSection />
    </main>
  );
}
