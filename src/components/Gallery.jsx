'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function Gallery({ photos, centers }) {
  const [lightbox, setLightbox] = useState(null)

  const getCenterColor = (centerId) => {
    const center = centers.find(c => c.id === centerId)
    return center?.accent || 'border-neutral-400'
  }

  return (
    <>
      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-3">
        {photos.map((photo, idx) => (
          <div
            key={idx}
            className={`
              break-inside-avoid cursor-pointer group relative overflow-hidden rounded-lg
              border-2 ${getCenterColor(photo.center)} border-opacity-0
              hover:border-opacity-100 transition-all duration-200
            `}
            onClick={() => setLightbox(idx)}
          >
            <img
              src={photo.src}
              alt={photo.caption || `Photo from ${photo.center}`}
              className="w-full h-auto block group-hover:scale-[1.02] transition-transform duration-300"
              loading="lazy"
            />
            {photo.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                <p className="text-white text-sm">{photo.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl hover:text-neutral-400 transition-colors"
            onClick={() => setLightbox(null)}
          >
            ×
          </button>

          {/* Prev */}
          {lightbox > 0 && (
            <button
              className="absolute left-4 text-white text-4xl hover:text-neutral-400 transition-colors px-2"
              onClick={(e) => { e.stopPropagation(); setLightbox(lightbox - 1) }}
            >
              ‹
            </button>
          )}

          {/* Image */}
          <div onClick={e => e.stopPropagation()} className="max-w-4xl max-h-[90vh]">
            <img
              src={photos[lightbox].src}
              alt={photos[lightbox].caption || ''}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
            {photos[lightbox].caption && (
              <p className="text-neutral-400 text-sm text-center mt-3">
                {photos[lightbox].caption}
              </p>
            )}
            <p className="text-neutral-600 text-xs text-center mt-1">
              {lightbox + 1} / {photos.length}
            </p>
          </div>

          {/* Next */}
          {lightbox < photos.length - 1 && (
            <button
              className="absolute right-4 text-white text-4xl hover:text-neutral-400 transition-colors px-2"
              onClick={(e) => { e.stopPropagation(); setLightbox(lightbox + 1) }}
            >
              ›
            </button>
          )}
        </div>
      )}
    </>
  )
}
