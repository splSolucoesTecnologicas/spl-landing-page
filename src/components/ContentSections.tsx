import knightImage from '../../knight.jpg'

export function Marquee() {
  const message = <>Estratégia <i className="dot">·</i> Tecnologia <i className="dot">·</i> Resultados <i className="dot">·</i> O futuro em movimento <i className="dot">·</i> Software sob medida <i className="dot">·</i> Produtos digitais <i className="dot">·</i> White label <i className="dot">·</i></>

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track"><span>{message}</span><span>{message}</span></div>
    </div>
  )
}

export function ManifestoSection() {
  return (
    <section className="manifesto">
      <div className="wrap mani-text">
        <div className="eyebrow rv">Nosso manifesto</div>
        <p className="mani-quote rv d1">Saber desenvolver é importante.<br /><span className="g">Saber jogar o jogo é essencial.</span></p>
        <p className="mani-note rv d2">Unimos visão de negócio, tecnologia e execução para construir soluções que realmente fazem sentido — gerando impacto real para empresas, produtos e pessoas.</p>
        <div className="mani-tag rv d3">Estratégia em cada movimento</div>
      </div>
    </section>
  )
}

const solutions = [
  { number: '01', title: 'Software sob medida', description: 'Sistemas, plataformas e soluções personalizadas para o seu negócio — do escopo à entrega.', icon: <><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" /><path d="m9.5 9.5 5 5m0-5-5 5" /></> },
  { number: '02', title: 'Produtos digitais', description: 'Da ideia ao mercado: criamos e evoluímos produtos escaláveis com visão de longo prazo.', icon: <><path d="m12 2 10 5-10 5L2 7l10-5Z" /><path d="m2 17 10 5 10-5M2 12l10 5 10-5" /></> },
  { number: '03', title: 'Soluções White Label', description: 'A tecnologia certa com a sua marca, pronta para o seu mercado — sem construir do zero.', icon: <><path d="M20 7h-9m9 10h-9M4 7h.01M4 17h.01" /><rect x="2" y="4" width="20" height="6" rx="2" /><rect x="2" y="14" width="20" height="6" rx="2" /></> },
]

export function SolutionsSection() {
  return (
    <section id="solucoes" className="solutions">
      <div className="sol-deco l" aria-hidden="true"><img src={knightImage} alt="" /></div>
      <div className="sol-deco r" aria-hidden="true"><img src={knightImage} alt="" /></div>
      <div className="wrap">
        <div className="eyebrow rv">O que fazemos</div>
        <h2 className="section-title rv d1">Soluções para o seu<br /><span className="g">próximo movimento.</span></h2>
        <div className="cards">
          {solutions.map((solution, index) => (
            <article className={`card rv d${index + 1}`} key={solution.number}>
              <div className="num">{solution.number}</div>
              <div className="ic"><svg viewBox="0 0 24 24" aria-hidden="true">{solution.icon}</svg></div>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
              <span className="more">Saiba mais →</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ThumdraSection() {
  return (
    <section className="thumdra" id="thumdra">
      <div className="wrap thm-grid">
        <div>
          <div className="eyebrow rv">Nosso produto</div>
          <h2 className="section-title rv d1 thm-title">Thumdra<span className="g">.</span></h2>
          <div className="thm-badge rv d2">Projeto desenvolvido na SPL</div>
          <p className="lead rv d2"><strong>CRM, automação e gestão comercial em uma única plataforma.</strong> A Thumdra centraliza operações, organiza contatos, estrutura pipelines, cria campanhas e automatiza processos.</p>
          <div className="thm-models">
            <article className="thm-model rv d3"><h3><span>◈</span> Consumo padrão</h3><p>Use a plataforma pronta, com a marca Thumdra — assine e comece a operar hoje.</p></article>
            <article className="thm-model rv d4"><h3><span>◈</span> White label</h3><p>A mesma tecnologia com a <em>sua marca</em>, para revender ao seu mercado.</p></article>
          </div>
          <a className="thm-link rv d4" href="https://thumdra.com" target="_blank" rel="noopener noreferrer">Conhecer em <em>thumdra.com</em> →</a>
        </div>
        <div className="rv d2">
          <div className="window">
            <div className="win-bar"><i /><i /><i /><span className="win-url"><b>thumdra.com</b>/dashboard</span></div>
            <div className="win-body">
              <div className="win-side"><i className="on" /><i /><i /><i /><i /></div>
              <div className="win-main">
                <div className="win-kpis"><div className="kpi"><small>Leads / mês</small><b className="g">1.284</b></div><div className="kpi"><small>Conversão</small><b>23,4%</b></div><div className="kpi"><small>Pipeline</small><b className="g">R$ 486k</b></div></div>
                <div className="win-chart">{[34, 52, 41, 66, 48, 74, 59, 86, 71, 96].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div>
                <div className="win-rows"><i /><i /><i /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ContactSection() {
  return (
    <section className="cta" id="contato">
      <div className="cta-bg" />
      <div className="wrap cta-inner">
        <div className="eyebrow rv">O futuro em movimento</div>
        <h2 className="rv d1">Sua próxima jogada<br /><span className="g">começa aqui.</span></h2>
        <p className="rv d2">Tem uma ideia, um processo para automatizar ou um software que sua empresa precisa construir? Vamos conversar.</p>
        <a className="btn solid rv d3" href="https://wa.me/5562994614940" target="_blank" rel="noopener noreferrer">Falar sobre o seu projeto <span className="arr" aria-hidden="true">→</span></a>
      </div>
    </section>
  )
}
