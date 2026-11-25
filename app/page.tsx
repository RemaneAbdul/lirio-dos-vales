import Image from 'next/image'
import Link from 'next/link'
import { LightboxGallery } from '@/components/lightbox-gallery'
import { MotionSystem } from '@/components/motion-system'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  ChevronDown,
  Flower2,
  GraduationCap,
  Leaf,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

const navigation = [
  { label: 'A escola', href: '#escola' },
  { label: 'Ensino', href: '#ensino' },
  { label: 'Vida escolar', href: '#vida-escolar' },
  { label: 'Matrículas', href: '#matriculas' },
  { label: 'Contactos', href: '#contactos' },
]

const pendingHighlights = [
  { icon: BookOpen, title: 'Oferta educativa', body: 'Níveis e classes a confirmar com a instituição.' },
  { icon: Leaf, title: 'Identidade e valores', body: 'A apresentação será publicada após validação oficial.' },
  { icon: ShieldCheck, title: 'Informação segura', body: 'Sem contactos, preços ou dados inventados.' },
]

const pendingContent = [
  { icon: GraduationCap, title: 'Níveis de ensino', body: 'A oferta educativa oficial será adicionada após confirmação.' },
  { icon: Sparkles, title: 'Actividades', body: 'Actividades e projectos serão apresentados com informação validada.' },
  { icon: CalendarDays, title: 'Calendário escolar', body: 'Datas e comunicados serão publicados pelos canais oficiais.' },
]

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow"><span aria-hidden="true" />{children}</p>
}

function SchoolHeader() {
  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link className="brand" href="#inicio" aria-label="Lírio dos Vales — início">
          <span className="brand-mark" aria-hidden="true"><Flower2 /></span>
          <span className="brand-copy"><strong>Lírio dos Vales</strong><small>Instituição de ensino</small></span>
        </Link>
        <nav aria-label="Navegação principal" className="desktop-nav">
          {navigation.map((item) => item.label === 'Ensino' ? (
            <details className="nav-dropdown" key={item.href}>
              <summary>Ensino <ChevronDown aria-hidden="true" /></summary>
              <div className="dropdown-menu">
                <a href="#ensino">Oferta educativa</a>
                <a href="#vida-escolar">Vida escolar</a>
              </div>
            </details>
          ) : <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <a className="nav-cta" data-magnetic href="#matriculas">Informações <ArrowUpRight aria-hidden="true" /></a>
        <details className="mobile-nav">
          <summary aria-label="Abrir navegação"><span /><span /><span /></summary>
          <nav aria-label="Navegação móvel">
            {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
            <a className="mobile-nav-cta" href="#matriculas">Informações sobre matrículas <ArrowUpRight aria-hidden="true" /></a>
          </nav>
        </details>
      </div>
    </header>
  )
}

function PendingNote({ children }: { children: React.ReactNode }) {
  return <p className="pending-note"><span aria-hidden="true" />{children}</p>
}

export default function HomePage() {
  return (
    <main id="inicio">
      <MotionSystem />
      <SchoolHeader />
      <section className="hero" aria-labelledby="hero-title">
        <Image className="hero-art" src="/hero-editorial.png" alt="Ilustração botânica editorial em tons verdes; não representa uma fotografia da escola." fill priority sizes="100vw" />
        <div className="hero-wash" />
        <div className="hero-content page-wrap">
          <SectionEyebrow>Bem-vindo à nossa comunidade</SectionEyebrow>
          <h1 id="hero-title">Um lugar para<br /><em>crescer e florescer.</em></h1>
          <p className="hero-description">Conheça o Lírio dos Vales. Estamos a preparar este espaço para partilhar a informação oficial da nossa instituição.</p>
          <div className="hero-actions">
            <a className="button button-dark" data-magnetic href="#escola">Conheça a escola <ArrowRight aria-hidden="true" /></a>
            <a className="text-link" href="#ensino">Explorar o ensino <ArrowDown aria-hidden="true" /></a>
          </div>
          <div className="art-disclaimer">Ilustração editorial · fotografia institucional a adicionar após confirmação e autorização</div>
        </div>
        <div className="hero-index" aria-hidden="true"><span>01</span><i />03</div>
      </section>

      <section className="intro-section section-pad" id="escola">
        <div className="page-wrap intro-grid">
          <div className="intro-heading">
            <SectionEyebrow>Sobre a instituição</SectionEyebrow>
            <h2>Uma história que<br /><em>começa por conhecer.</em></h2>
          </div>
          <div className="intro-copy">
            <p className="intro-lead">Cada escola tem uma história, uma comunidade e um propósito. Queremos apresentar o Lírio dos Vales com a exactidão que merece.</p>
            <p>Os dados institucionais ainda estão a ser confirmados com as fontes oficiais. Assim que forem validados, esta página poderá contar a história da escola, a sua localização e a sua proposta educativa — sem suposições.</p>
            <PendingNote>Conteúdo institucional em validação</PendingNote>
          </div>
        </div>
      </section>

      <section className="trust-section" aria-label="Compromissos editoriais">
        <div className="page-wrap trust-grid">
          {pendingHighlights.map(({ icon: Icon, title, body }, index) => (
            <article className="trust-card" key={title}>
              <span className="trust-number">0{index + 1}</span>
              <Icon aria-hidden="true" />
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="learning-section section-pad" id="ensino">
        <div className="page-wrap">
          <div className="section-heading">
            <div><SectionEyebrow>Oferta educativa</SectionEyebrow><h2>Aprender com<br /><em>sentido e propósito.</em></h2></div>
            <p>Os níveis de ensino, classes, idades e serviços serão divulgados quando confirmados pela instituição.</p>
          </div>
          <div className="learning-grid">
            {pendingContent.map(({ icon: Icon, title, body }) => (
              <article className="learning-card" key={title}>
                <span className="learning-icon"><Icon aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{body}</p>
                <span className="card-status">Informação a confirmar</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="story-section" id="vida-escolar">
        <div className="story-visual">
          <LightboxGallery images={[{ src: '/hero-editorial.png', alt: 'Ilustração editorial de flores brancas num vale verde; não é uma fotografia da escola.' }]} />
          <span className="visual-tag">Imagem ilustrativa</span>
        </div>
        <div className="story-copy">
          <SectionEyebrow>Vida escolar</SectionEyebrow>
          <h2>Momentos que<br /><em>merecem ser partilhados.</em></h2>
          <p>Actividades, eventos e fotografias oficiais serão publicados aqui depois de confirmados. A privacidade e a autorização de imagem dos alunos serão respeitadas.</p>
          <PendingNote>Galeria e actividades em preparação</PendingNote>
          <a className="text-link dark-link" href="#contactos">Acompanhe as novidades <ArrowRight aria-hidden="true" /></a>
        </div>
      </section>

      <section className="news-section section-pad" aria-labelledby="news-title">
        <div className="page-wrap">
          <div className="section-heading news-heading">
            <div><SectionEyebrow>Actualizações</SectionEyebrow><h2 id="news-title">Da nossa<br /><em>comunidade.</em></h2></div>
            <a className="text-link dark-link" href="https://www.facebook.com/share/1A49e1PQo7/?mibextid=wwXIfr" target="_blank" rel="noreferrer">Visitar Facebook oficial <ArrowUpRight aria-hidden="true" /></a>
          </div>
          <div className="empty-news"><div className="empty-mark"><CalendarDays aria-hidden="true" /></div><div><h3>Novidades em breve</h3><p>As notícias e comunicados serão adicionados após validação dos canais oficiais.</p></div><span className="empty-label">Sem publicações confirmadas</span></div>
        </div>
      </section>

      <section className="admissions-section section-pad" id="matriculas">
        <div className="page-wrap admissions-card">
          <div className="admissions-copy">
            <SectionEyebrow>Admissões</SectionEyebrow>
            <h2>O próximo passo<br /><em>começa com informação.</em></h2>
            <p>Para que as famílias possam tomar decisões informadas, os períodos, requisitos, classes disponíveis e valores serão publicados apenas após confirmação da secretaria.</p>
            <PendingNote>Processo de matrículas por confirmar</PendingNote>
          </div>
          <div className="admissions-side">
            <div className="admissions-icon"><MessageCircle aria-hidden="true" /></div>
            <h3>Precisa de informações?</h3>
            <p>Os contactos oficiais ainda não foram confirmados. Consulte a página institucional no Facebook enquanto esta informação é preparada.</p>
            <a className="button button-light" data-magnetic href="https://www.facebook.com/share/1A49e1PQo7/?mibextid=wwXIfr" target="_blank" rel="noreferrer">Consultar fonte oficial <ArrowUpRight aria-hidden="true" /></a>
            <small>Pré-inscrições online indisponíveis nesta versão.</small>
          </div>
        </div>
      </section>

      <section className="contact-section section-pad" id="contactos">
        <div className="page-wrap contact-grid">
          <div>
            <SectionEyebrow>Fale connosco</SectionEyebrow>
            <h2>Estamos a preparar<br /><em>os canais de contacto.</em></h2>
            <p>Morada, telefone, WhatsApp, email e horário serão publicados assim que confirmados pela instituição.</p>
          </div>
          <div className="contact-pending">
            <span className="contact-icon"><MapPin aria-hidden="true" /></span>
            <div><strong>Informações de contacto</strong><p>A confirmar com a instituição</p></div>
            <span className="pending-pill">Em validação</span>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="page-wrap footer-main">
          <Link className="brand footer-brand" href="#inicio">
            <span className="brand-mark" aria-hidden="true"><Flower2 /></span>
            <span className="brand-copy"><strong>Lírio dos Vales</strong><small>Instituição de ensino</small></span>
          </Link>
          <p>Uma presença digital em preparação, com informação a confirmar junto dos canais institucionais.</p>
          <div className="footer-links"><a href="#escola">A escola</a><a href="#ensino">Oferta educativa</a><a href="#matriculas">Matrículas</a><a href="https://www.facebook.com/share/1A49e1PQo7/?mibextid=wwXIfr" target="_blank" rel="noreferrer">Facebook oficial <ArrowUpRight aria-hidden="true" /></a></div>
        </div>
        <div className="page-wrap footer-bottom"><span>© {new Date().getFullYear()} Lírio dos Vales</span><span>Conteúdo institucional sujeito a validação</span><a href="#inicio">Voltar ao início ↑</a></div>
      </footer>
    </main>
  )
}
