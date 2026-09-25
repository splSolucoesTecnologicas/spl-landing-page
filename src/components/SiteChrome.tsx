import { usePageInteractions } from '../hooks/usePageInteractions'
import { Brand } from './Brand'

export function SiteNavigation() {
  const isScrolled = usePageInteractions()

  return (
    <nav id="nav" className={isScrolled ? 'scrolled' : undefined}>
      <div className="nav-inner">
        <Brand />
        <a className="btn" href="https://wa.me/5562994614940" target="_blank" rel="noopener noreferrer">
          Falar sobre um projeto <span className="arr" aria-hidden="true">→</span>
        </a>
      </div>
    </nav>
  )
}

export function SiteFooter() {
  return (
    <footer>
      <div className="wrap foot-grid">
        <Brand compact />
        <nav className="foot-links" aria-label="Navegação do rodapé">
          <a href="#solucoes">Soluções</a>
          <a href="#thumdra">Thumdra</a>
          <a href="#processo">Como jogamos</a>
          <a href="#contato">Contato</a>
        </nav>
        <div className="foot-note">
          <span>© 2026 SPL Soluções Tecnológicas. Todos os direitos reservados.</span>
          <span>Estratégia · Tecnologia · Resultados</span>
        </div>
      </div>
    </footer>
  )
}
