'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import type { SchoolPhoto } from '@/lib/school-data'

export function LightboxGallery({ images }: { images: SchoolPhoto[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const activeImage = activeIndex === null ? null : images[activeIndex]

  useEffect(() => {
    if (activeIndex === null) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [activeIndex])

  const openAt = (index: number) => {
    setActiveIndex(index)
    if (!dialogRef.current?.open) dialogRef.current?.showModal()
  }

  const close = () => {
    if (dialogRef.current?.open) dialogRef.current.close()
    setActiveIndex(null)
  }

  const move = (direction: number) => {
    if (!images.length || activeIndex === null) return
    setActiveIndex((activeIndex + direction + images.length) % images.length)
  }

  return (
    <>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <figure className={`gallery-item gallery-item-${index + 1}`} key={image.src}>
            <button className="gallery-trigger" type="button" aria-label={`Ampliar fotografia: ${image.caption}`} onClick={() => openAt(index)}>
              <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
              <span className="gallery-zoom" aria-hidden="true">Ver fotografia</span>
            </button>
            <figcaption><span>{String(index + 1).padStart(2, '0')}</span>{image.caption}</figcaption>
          </figure>
        ))}
      </div>
      <dialog
        ref={dialogRef}
        className="lightbox-dialog"
        aria-label="Galeria de fotografias"
        onClick={(event) => {
          if (event.target === event.currentTarget) close()
        }}
        onClose={() => setActiveIndex(null)}
        onKeyDown={(event) => {
          if (event.key === 'ArrowRight') {
            event.preventDefault()
            move(1)
          }
          if (event.key === 'ArrowLeft') {
            event.preventDefault()
            move(-1)
          }
        }}
      >
        {activeImage && activeIndex !== null && (
          <div className="lightbox-panel">
            <div className="lightbox-toolbar">
              <p>{activeImage.caption}</p>
              <button className="lightbox-close" type="button" aria-label="Fechar fotografia" onClick={close}><X aria-hidden="true" /></button>
            </div>
            <div className="lightbox-image-area">
              <img src={activeImage.src} alt={activeImage.alt} />
            </div>
            <div className="lightbox-controls">
              <button type="button" aria-label="Fotografia anterior" onClick={() => move(-1)}><ChevronLeft aria-hidden="true" /></button>
              <span>{activeIndex + 1} / {images.length}</span>
              <button type="button" aria-label="Fotografia seguinte" onClick={() => move(1)}><ChevronRight aria-hidden="true" /></button>
            </div>
          </div>
        )}
      </dialog>
    </>
  )
}
