import type { LucideIcon } from 'lucide-react'
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Flower2,
  GraduationCap,
  Laptop,
  Mail,
  MapPin,
  Music2,
  Phone,
  Scissors,
  Sparkles,
  Waves,
  Dumbbell,
  Facebook,
} from 'lucide-react'
import { LightboxGallery } from '@/components/lightbox-gallery'
import { SchoolBrand } from '@/components/school-brand'
import { schoolPhotos } from '@/lib/school-data'

const phoneNumbers = [
  { label: '+258 84 488 8011', href: 'tel:+258844888011' },
  { label: '+258 86 773 3137', href: 'tel:+258867733137' },
]

export function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <img className="hero-photo" src={schoolPhotos[3].src} alt={schoolPhotos[3].alt} fetchPriority="high" />
      <div className="hero-overlay" />
      <div className="page-wrap hero-inner">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Escola Privada Lírio dos Vales</p>
          <h1 id="hero-title">Aprender hoje.<br /><em>Florescer sempre.</em></h1>
          <p className="hero-description">Educação nacional da pré-primária à 6.ª classe, num ambiente apropriado, seguro e acolhedor.</p>
          <div className="hero-actions">
            <a className="button button-gold" href="#matriculas">Informações sobre matrículas <ArrowRight aria-hidden="true" /></a>
            <a className="hero-link" href="#escola">Conheça a escola <ArrowRight aria-hidden="true" /></a>
          </div>
        </div>
        <div className="hero-caption"><span className="caption-flower"><Flower2 aria-hidden="true" /></span><span>Uma comunidade<br />que cresce junta</span></div>
      </div>
      <a className="hero-scroll" href="#escola" aria-label="Descer para conhecer a escola"><span>Descubra</span><ArrowRight aria-hidden="true" /></a>
    </section>
  )
}

export function AboutSection() {
  return (
    <section className="intro-section section-pad" id="escola">
      <div className="page-wrap intro-grid">
        <div className="intro-heading">
          <p className="eyebrow"><span /> A nossa escola</p>
          <h2>Um lugar onde<br /><em>cada talento conta.</em></h2>
        </div>
        <div className="intro-copy">
          <p className="intro-lead">Na Escola Privada Lírio dos Vales, aprender é também descobrir, criar e ganhar confiança.</p>
          <p>Acompanhamos crianças da pré-primária à 6.ª classe, com educação nacional e actividades que estimulam a curiosidade, a expressão e o gosto por aprender.</p>
          <p className="intro-motto"><Flower2 aria-hidden="true" /> Um ambiente apropriado, seguro e acolhedor.</p>
        </div>
      </div>
      <div className="page-wrap school-facts" aria-label="Informações da escola">
        <div><span>01</span><strong>Pré-primária</strong><small>Aprender desde cedo</small></div>
        <div><span>02</span><strong>1.ª à 6.ª classe</strong><small>Ensino nacional</small></div>
        <div><span>03</span><strong>Matola</strong><small>Tchumene II</small></div>
      </div>
    </section>
  )
}

type Offer = { icon: LucideIcon; title: string; details: string }
const coreLearning: Offer[] = [
  { icon: BookOpen, title: 'Ensino nacional', details: 'Da pré-primária à 6.ª classe.' },
  { icon: Laptop, title: 'Informática', details: 'Competências digitais e descoberta da tecnologia.' },
  { icon: Music2, title: 'Música e expressão', details: 'Aulas de música, criatividade e expressão artística.' },
  { icon: Flower2, title: 'Línguas e cidadania', details: 'Inglês, francês, moral e cívica.' },
  { icon: BookOpen, title: 'Clube de leitura', details: 'Um espaço para explorar histórias e desenvolver a leitura.' },
]
const activities: Offer[] = [
  { icon: GraduationCap, title: 'Estudo orientado', details: 'Apoio complementar à aprendizagem.' },
  { icon: Dumbbell, title: 'Taekwondo', details: 'Movimento, disciplina e confiança.' },
  { icon: Waves, title: 'Natação', details: 'Actividade física e aprendizagem aquática.' },
  { icon: Scissors, title: 'Corte e costura', details: 'Criatividade posta em prática.' },
  { icon: Sparkles, title: 'Dança', details: 'Ritmo, expressão e alegria.' },
]

function OfferCard({ offer, index }: { offer: Offer; index: number }) {
  const Icon = offer.icon
  return (
    <article className="offer-card">
      <span className="offer-index">{String(index + 1).padStart(2, '0')}</span>
      <span className="offer-icon"><Icon aria-hidden="true" /></span>
      <h3>{offer.title}</h3>
      <p>{offer.details}</p>
    </article>
  )
}

export function LearningSection() {
  return (
    <section className="learning-section section-pad" id="ensino">
      <div className="page-wrap">
        <div className="section-heading">
          <div><p className="eyebrow"><span /> Aprendizagem com propósito</p><h2>Conhecimento para<br /><em>abrir novos caminhos.</em></h2></div>
          <p>Uma base sólida de educação nacional, enriquecida com experiências dentro e fora da sala de aula.</p>
        </div>
        <div className="offer-grid">
          {coreLearning.map((offer, index) => <OfferCard key={offer.title} offer={offer} index={index} />)}
        </div>
        <div className="activities-block">
          <div className="activities-title"><span className="section-stamp"><Flower2 aria-hidden="true" /></span><div><p className="eyebrow"><span /> Depois das aulas</p><h3>Actividades extracurriculares</h3></div></div>
          <div className="activity-list">
            {activities.map(({ icon: Icon, title }) => <span className="activity-pill" key={title}><Icon aria-hidden="true" />{title}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}

export function GallerySection() {
  return (
    <section className="gallery-section section-pad" id="galeria">
      <div className="page-wrap">
        <div className="section-heading gallery-heading">
          <div><p className="eyebrow"><span /> Vida escolar</p><h2>Aprender também<br /><em>é viver momentos.</em></h2></div>
          <p>Um olhar sobre as actividades, descobertas e encontros que fazem parte da comunidade Lírio dos Vales.</p>
        </div>
        <LightboxGallery images={schoolPhotos} />
      </div>
    </section>
  )
}

export function AdmissionsSection() {
  return (
    <section className="admissions-section section-pad" id="matriculas">
      <div className="page-wrap admissions-card">
        <div className="admissions-copy">
          <p className="eyebrow"><span /> Matrículas e admissões</p>
          <h2>O próximo passo<br /><em>começa com uma conversa.</em></h2>
          <p>Consulte a secretaria para informações actualizadas sobre vagas, requisitos e prazos de matrícula para o próximo ano lectivo.</p>
          <div className="admission-range"><GraduationCap aria-hidden="true" /><span>Pré-primária à 6.ª classe</span></div>
        </div>
        <div className="admissions-side">
          <span className="admissions-icon"><CalendarDays aria-hidden="true" /></span>
          <p className="side-eyebrow">Estamos disponíveis para ajudar</p>
          <h3>Encontre a melhor opção para a sua criança.</h3>
          <p>Fale directamente com a escola e esclareça as suas dúvidas sobre admissões e oferta educativa.</p>
          <a className="button button-dark" href="tel:+258844888011"><Phone aria-hidden="true" /> Ligar para a secretaria</a>
          <a className="admissions-email" href="mailto:liriodosvaleslda@gmail.com">Ou envie-nos um email <ArrowRight aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  )
}

export function ContactSection() {
  return (
    <section className="contact-section section-pad" id="contactos">
      <div className="page-wrap contact-layout">
        <div className="contact-heading">
          <p className="eyebrow"><span /> Estamos por aqui</p>
          <h2>Venha conhecer<br /><em>a nossa escola.</em></h2>
          <p>Entre em contacto ou visite-nos em Tchumene II, Matola.</p>
        </div>
        <div className="contact-card">
          <div className="contact-row"><span><MapPin aria-hidden="true" /></span><div><small>Morada</small><strong>Bairro Tchumene II, Q25, Casa 218<br />Matola, Moçambique</strong></div></div>
          <div className="contact-row"><span><Phone aria-hidden="true" /></span><div><small>Telefone</small>{phoneNumbers.map((number) => <a key={number.href} href={number.href}>{number.label}</a>)}</div></div>
          <div className="contact-row"><span><Mail aria-hidden="true" /></span><div><small>Email</small><a href="mailto:liriodosvaleslda@gmail.com">liriodosvaleslda@gmail.com</a></div></div>
          <a className="map-link" href="https://maps.google.com/?q=Bairro+Tchumene+II%2C+Matola%2C+Mozambique" target="_blank" rel="noreferrer">Abrir localização no mapa <ArrowRight aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  )
}

export function SchoolFooter() {
  return (
    <footer className="site-footer">
      <div className="page-wrap footer-main">
        <div><SchoolBrand /><p className="footer-tagline">Educação para florescer.<br />Uma comunidade que cresce junta.</p></div>
        <div className="footer-address"><MapPin aria-hidden="true" /><span>Bairro Tchumene II, Q25, Casa 218<br />Matola, Moçambique</span></div>
        <nav className="footer-links" aria-label="Ligações do rodapé">
          <a href="#escola">A escola</a><a href="#ensino">Ensino</a><a href="#galeria">Galeria</a><a href="#contactos">Contactos</a><a href="https://www.facebook.com/CentroInfantilLiriodosVales" target="_blank" rel="noopener noreferrer" aria-label="Visitar a página da Escola Privada Lírio dos Vales no Facebook"><Facebook aria-hidden="true" /> Facebook</a>
        </nav>
      </div>
      <div className="page-wrap footer-bottom"><span>© {new Date().getFullYear()} Escola Privada Lírio dos Vales</span><span>Matola, Moçambique</span><a href="#inicio">Voltar ao topo ↑</a></div>
    </footer>
  )
}
