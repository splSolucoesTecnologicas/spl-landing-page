import { ChessProcessSection } from './components/ChessProcessSection'
import { ContactSection, ManifestoSection, Marquee, SolutionsSection, ThumdraSection } from './components/ContentSections'
import { HeroSection } from './components/HeroSection'
import { SiteFooter, SiteNavigation } from './components/SiteChrome'

export default function App() {
  return (
    <>
      <SiteNavigation />
      <main>
        <HeroSection />
        <ChessProcessSection />
        <Marquee />
        <ManifestoSection />
        <SolutionsSection />
        <ThumdraSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
