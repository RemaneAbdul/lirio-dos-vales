'use client'

import { useState } from 'react'
import { ArrowDownRight, ArrowRight, MapPin, Menu, X } from 'lucide-react'
import { SchoolBrand } from '@/components/school-brand'

const navigation = [
  { label: 'A escola', href: '#escola' },
  { label: 'Ensino', href: '#ensino' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Matrículas', href: '#matriculas' },
  { label: 'Contactos', href: '#contactos' },
]

export function SchoolHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div className="topline">
        <div className="page-wrap topline-inner">
          <span>Educação para florescer</span>
          <span><MapPin aria-hidden="true" /> Matola, Moçambique</span>
        </div>
      </div>
      <header className="site-header">
        <div className="nav-shell page-wrap">
          <SchoolBrand />
          <nav className="desktop-nav" aria-label="Navegação principal">
            {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
          <a className="nav-cta" href="#matriculas">Fale connosco <ArrowDownRight aria-hidden="true" /></a>
          <button
            className="mobile-menu-button"
            type="button"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
        {menuOpen && (
          <nav className="mobile-nav page-wrap" id="mobile-navigation" aria-label="Navegação móvel">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
            ))}
            <a className="mobile-nav-cta" href="#matriculas" onClick={() => setMenuOpen(false)}>Fale connosco <ArrowRight aria-hidden="true" /></a>
          </nav>
        )}
      </header>
    </>
  )
}
