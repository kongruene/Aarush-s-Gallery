'use client'
import { useState } from 'react'
import Gallery from '../components/Gallery'

const CENTERS = [
  {
    id: 'bcc',
    name: 'Black Cultural Center',
    color: 'bg-amber-900',
    accent: 'border-amber-400',
    description: 'Founded 1970 · 18,500 sq ft · Walter Blackburn architect',
  },
]

// ── ADD YOUR PHOTOS HERE ──────────────────────────────────────────────────────
// Format: { src: '/images/<center>/<filename>', caption: 'optional caption' }
const PHOTOS = {
  bcc: [
    { src: '/images/bcc/bcc-1.jpg', caption: 'Black Cultural Center — selfie with BCC banner' },
    { src: '/images/bcc/bcc-2.jpg', caption: 'Antonio & Betty Zamora Performing Arts Studio' },
    { src: '/images/bcc/bcc-3.jpg', caption: 'A Journey Through Black Excellence — 50 Year Retrospective' },
    { src: '/images/bcc/bcc-4.jpg', caption: 'Pop-Up Pantry — BCC community resource' },
    { src: '/images/bcc/bcc-5.jpg', caption: 'Black History Month 2026 — 100 Years of Commemorations' },
  ],
}

export default function Home() {
  const displayPhotos = (PHOTOS['bcc'] || []).map(p => ({ ...p, center: 'bcc' }))
  const activeCenter = CENTERS[0]

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="px-6 pt-16 pb-10 max-w-5xl mx-auto">
        <p className="text-neutral-500 text-sm uppercase tracking-widest mb-3">
          Purdue University · Spring 2026
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Aarush's Cultural<br />Immersion Week
        </h1>
        <p className="mt-4 text-neutral-400 text-lg max-w-xl">
          A photographic walk through Purdue's Black Cultural Center —
          its history, space, and story.
        </p>
      </header>

      {/* Center Info */}
      <div className="px-6 max-w-5xl mx-auto mb-10">
        <p className="text-neutral-500 text-sm">
          {activeCenter.description}
        </p>
      </div>

      {/* Photo count */}
      <div className="px-6 max-w-5xl mx-auto mb-6">
        <p className="text-neutral-600 text-sm">
          {displayPhotos.length} photo{displayPhotos.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Gallery */}
      <section className="px-6 max-w-5xl mx-auto pb-20">
        {displayPhotos.length === 0 ? (
          <div className="text-center py-24 text-neutral-700">
            <p className="text-lg">No photos yet.</p>
            <p className="text-sm mt-2">Add images to <code>public/images/bcc/</code></p>
          </div>
        ) : (
          <Gallery photos={displayPhotos} centers={CENTERS} />
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-900 px-6 py-8 text-center text-neutral-700 text-sm">
        Aarush Shah · AMST 10100 · Purdue University
      </footer>
    </main>
  )
}
