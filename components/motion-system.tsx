'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowUp } from 'lucide-react'

const revealGroups = [
  '.hero-content > *',
  '.intro-grid > *',
  '.trust-card',
  '.learning-section .section-heading > *, .learning-card',
  '.story-visual, .story-copy > *',
  '.news-section .section-heading > *, .empty-news',
  '.admissions-card > *',
  '.contact-grid > *',
  '.footer-main > *',
]

function getRevealType(element: HTMLElement) {
  if (element.matches('h1, h2')) return 'text'
  if (element.matches('.story-visual')) return 'clip'
  if (element.matches('.intro-heading, .admissions-copy')) return 'left'
  if (element.matches('.intro-copy, .admissions-side')) return 'right'
  if (element.matches('.hero-content .eyebrow')) return 'down'
  if (element.matches('.hero-description')) return 'blur'
  if (element.matches('.trust-card')) return 'zoom-in'
  if (element.matches('.learning-card')) return 'zoom-out'
  return 'up'
}

export function MotionSystem() {
  const progressRef = useRef<HTMLDivElement>(null)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let revealObserver: IntersectionObserver | undefined

    if ('IntersectionObserver' in window && !reducedMotion) {
      const revealTargets = new Map<Element, Set<HTMLElement>>()
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          revealTargets.get(entry.target)?.forEach((element) => element.classList.add('is-visible'))
          revealObserver?.unobserve(entry.target)
        })
      }, { threshold: 0.14, rootMargin: '0px 0px -36px 0px' })

      revealGroups.forEach((selector) => {
        document.querySelectorAll<HTMLElement>(selector).forEach((element, index) => {
          element.dataset.reveal = getRevealType(element)
          element.style.setProperty('--reveal-delay', `${Math.min(index, 4) * 90}ms`)
          const target = element.parentElement ?? element
          const elements = revealTargets.get(target) ?? new Set<HTMLElement>()
          elements.add(element)
          revealTargets.set(target, elements)
          revealObserver?.observe(target)
        })
      })
      root.classList.add('motion-ready')
    }

    const activeSectionObserver = 'IntersectionObserver' in window
      ? new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting || !entry.target.id) return
            const hash = `#${entry.target.id}`
            document.querySelectorAll<HTMLAnchorElement>('.desktop-nav a, .nav-dropdown .dropdown-menu a').forEach((link) => {
              link.classList.toggle('is-active', link.getAttribute('href') === hash)
            })
          })
        }, { rootMargin: '-22% 0px -68% 0px', threshold: 0 })
      : undefined

    document.querySelectorAll<HTMLElement>('main section[id]').forEach((section) => activeSectionObserver?.observe(section))

    let scrollFrame = 0
    const updateScrollState = () => {
      const scrollableHeight = root.scrollHeight - window.innerHeight
      const progress = scrollableHeight > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollableHeight)) : 0
      progressRef.current?.style.setProperty('--scroll-progress', String(progress))
      progressRef.current?.setAttribute('aria-valuenow', String(Math.round(progress * 100)))
      document.querySelector('.site-header')?.classList.toggle('is-scrolled', window.scrollY > 12)
      setShowBackToTop(window.scrollY > 600)
    }
    const scheduleScrollUpdate = () => {
      if (scrollFrame) return
      scrollFrame = window.requestAnimationFrame(() => {
        scrollFrame = 0
        updateScrollState()
      })
    }
    updateScrollState()
    window.addEventListener('scroll', scheduleScrollUpdate, { passive: true })
    window.addEventListener('resize', scheduleScrollUpdate, { passive: true })

    const disclosureTimers = new WeakMap<HTMLDetailsElement, number>()
    const closeDisclosure = (menu: HTMLDetailsElement) => {
      if (!menu.open) return
      const previousTimer = disclosureTimers.get(menu)
      if (previousTimer) window.clearTimeout(previousTimer)
      menu.classList.add('is-closing')
      const timer = window.setTimeout(() => {
        menu.open = false
        menu.classList.remove('is-closing')
        disclosureTimers.delete(menu)
      }, 180)
      disclosureTimers.set(menu, timer)
    }
    const closeOpenMenus = (event: PointerEvent) => {
      const target = event.target
      if (!(target instanceof Element)) return
      document.querySelectorAll<HTMLDetailsElement>('.nav-dropdown[open], .mobile-nav[open]').forEach((menu) => {
        if (!menu.contains(target)) closeDisclosure(menu)
      })
    }
    const handleSummaryClick = (event: MouseEvent) => {
      const target = event.target
      if (!(target instanceof Element)) return
      const summary = target.closest('summary')
      const menu = summary?.closest<HTMLDetailsElement>('.nav-dropdown, .mobile-nav')
      if (!menu) return
      if (menu.open) {
        event.preventDefault()
        closeDisclosure(menu)
      } else {
        menu.classList.remove('is-closing')
      }
    }
    const closeMenuAfterNavigation = (event: MouseEvent) => {
      const target = event.target
      if (!(target instanceof Element)) return
      if (!target.closest('.mobile-nav nav a, .nav-dropdown .dropdown-menu a')) return
      const menu = target.closest<HTMLDetailsElement>('details')
      if (menu) closeDisclosure(menu)
    }
    document.addEventListener('pointerdown', closeOpenMenus)
    document.addEventListener('click', handleSummaryClick)
    document.addEventListener('click', closeMenuAfterNavigation)

    const magneticTargets = Array.from(document.querySelectorAll<HTMLElement>('[data-magnetic]'))
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
    const supportsHover = finePointer.matches && !reducedMotion
    const dropdownTimers = new WeakMap<HTMLDetailsElement, number>()
    const dropdowns = Array.from(document.querySelectorAll<HTMLDetailsElement>('.nav-dropdown'))
    const openDropdown = (event: Event) => {
      const menu = (event.currentTarget as HTMLElement).closest<HTMLDetailsElement>('.nav-dropdown')
      if (!menu) return
      const timer = dropdownTimers.get(menu)
      if (timer) window.clearTimeout(timer)
      const closingTimer = disclosureTimers.get(menu)
      if (closingTimer) window.clearTimeout(closingTimer)
      disclosureTimers.delete(menu)
      menu.classList.remove('is-closing')
      menu.open = true
    }
    const closeDropdownLater = (event: Event) => {
      const menu = (event.currentTarget as HTMLElement).closest<HTMLDetailsElement>('.nav-dropdown')
      if (!menu) return
      const timer = window.setTimeout(() => {
        dropdownTimers.delete(menu)
        closeDisclosure(menu)
      }, 180)
      dropdownTimers.set(menu, timer)
    }
    if (supportsHover) {
      dropdowns.forEach((menu) => {
        menu.addEventListener('pointerenter', openDropdown)
        menu.addEventListener('pointerleave', closeDropdownLater)
        menu.querySelector('.dropdown-menu')?.addEventListener('pointerenter', openDropdown)
        menu.querySelector('.dropdown-menu')?.addEventListener('pointerleave', closeDropdownLater)
      })
    }
    const supportsMagnetism = supportsHover
    const onMagneticMove = (event: PointerEvent) => {
      const target = event.currentTarget as HTMLElement
      const bounds = target.getBoundingClientRect()
      const offsetX = (event.clientX - (bounds.left + bounds.width / 2)) * 0.12
      const offsetY = (event.clientY - (bounds.top + bounds.height / 2)) * 0.12
      target.style.setProperty('--magnetic-x', `${Math.max(-6, Math.min(6, offsetX)).toFixed(1)}px`)
      target.style.setProperty('--magnetic-y', `${Math.max(-5, Math.min(5, offsetY)).toFixed(1)}px`)
    }
    const resetMagnetic = (event: PointerEvent) => {
      const target = event.currentTarget as HTMLElement
      target.style.setProperty('--magnetic-x', '0px')
      target.style.setProperty('--magnetic-y', '0px')
    }
    if (supportsMagnetism) {
      magneticTargets.forEach((target) => {
        target.addEventListener('pointermove', onMagneticMove)
        target.addEventListener('pointerleave', resetMagnetic)
      })
    }

    return () => {
      revealObserver?.disconnect()
      activeSectionObserver?.disconnect()
      root.classList.remove('motion-ready')
      window.removeEventListener('scroll', scheduleScrollUpdate)
      window.removeEventListener('resize', scheduleScrollUpdate)
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame)
      document.removeEventListener('pointerdown', closeOpenMenus)
      document.removeEventListener('click', handleSummaryClick)
      document.removeEventListener('click', closeMenuAfterNavigation)
      document.querySelectorAll<HTMLDetailsElement>('.nav-dropdown, .mobile-nav').forEach((menu) => {
        const timer = disclosureTimers.get(menu)
        if (timer) window.clearTimeout(timer)
        menu.classList.remove('is-closing')
      })
      if (supportsHover) {
        dropdowns.forEach((menu) => {
          menu.removeEventListener('pointerenter', openDropdown)
          menu.removeEventListener('pointerleave', closeDropdownLater)
          menu.querySelector('.dropdown-menu')?.removeEventListener('pointerenter', openDropdown)
          menu.querySelector('.dropdown-menu')?.removeEventListener('pointerleave', closeDropdownLater)
          const timer = dropdownTimers.get(menu)
          if (timer) window.clearTimeout(timer)
        })
      }
      if (supportsMagnetism) {
        magneticTargets.forEach((target) => {
          target.removeEventListener('pointermove', onMagneticMove)
          target.removeEventListener('pointerleave', resetMagnetic)
        })
      }
    }
  }, [])

  const scrollToTop = () => {
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
    window.scrollTo({ top: 0, behavior })
  }

  return (
    <>
      <div ref={progressRef} className="scroll-progress" role="progressbar" aria-label="Progresso da página" aria-valuemin={0} aria-valuemax={100} aria-valuenow={0} />
      <button
        className={`back-to-top${showBackToTop ? ' is-visible' : ''}`}
        type="button"
        aria-label="Voltar ao topo"
        tabIndex={showBackToTop ? 0 : -1}
        onClick={scrollToTop}
      >
        <ArrowUp aria-hidden="true" />
      </button>
    </>
  )
}
