'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

type GalleryImage = {
  src: string
  alt: string
}

export function LightboxGallery({ images }: { images: GalleryImage[] }) {
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
      <button className="lightbox-trigger" type="button" aria-label="Ampliar ilustração editorial" onClick={() => openAt(0)}>
        <Image src={images[0].src} alt={images[0].alt} fill sizes="(max-width: 700px) 100vw, 50vw" />
        <span className="lightbox-hint">Ampliar ilustração</span>
      </button>
      <dialog
        ref={dialogRef}
        className="lightbox-dialog"
        aria-label="Visualizador de imagem"
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
              <p>{activeImage.alt}</p>
              <button className="lightbox-close" type="button" aria-label="Fechar imagem" onClick={close}><X aria-hidden="true" /></button>
            </div>
            <div className="lightbox-image-area">
              <Image src={activeImage.src} alt={activeImage.alt} fill sizes="90vw" priority />
            </div>
            {images.length > 1 && (
              <div className="lightbox-controls">
                <button type="button" aria-label="Imagem anterior" onClick={() => move(-1)}><ChevronLeft aria-hidden="true" /></button>
                <span>{activeIndex + 1} / {images.length}</span>
                <button type="button" aria-label="Imagem seguinte" onClick={() => move(1)}><ChevronRight aria-hidden="true" /></button>
              </div>
            )}
          </div>
        )}
      </dialog>
    </>
  )
}
