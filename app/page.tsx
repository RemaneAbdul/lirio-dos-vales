import { MotionSystem } from '@/components/motion-system'
import { SchoolHeader } from '@/components/school-header'
import {
  AboutSection,
  AdmissionsSection,
  ContactSection,
  GallerySection,
  FAQSection,
  HeroSection,
  LearningSection,
  SchoolFooter,
} from '@/components/school-site'

export default function HomePage() {
  return (
    <main id="inicio">
      <MotionSystem />
      <SchoolHeader />
      <HeroSection />
      <AboutSection />
      <LearningSection />
      <GallerySection />
      <AdmissionsSection />
      <FAQSection />
      <ContactSection />
      <SchoolFooter />
    </main>
  )
}
