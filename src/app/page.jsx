'use client'
import { useState } from 'react'
import Gallery from '../components/Gallery'

const CENTERS = [
  {
    id: 'all',
    name: 'All Photos',
    color: 'bg-neutral-700',
    accent: 'border-neutral-400',
    description: 'Every photo from the immersion week',
  },
  {
    id: 'bcc',
    name: 'Black Cultural Center',
    color: 'bg-amber-900',
    accent: 'border-amber-400',
    description: 'Founded 1970 · 18,500 sq ft · Walter Blackburn architect',
  },
  {
    id: 'lgbtq',
    name: 'LGBTQ Center',
    color: 'bg-violet-900',
    accent: 'border-violet-400',
    description: 'Room G988, Hicks Undergraduate Library',
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
  lgbtq: [
    { src: '/images/lgbtq/lgbtq-1.jpg', caption: 'LGBTQ Center — computer lab, Hicks Undergraduate Library' },
    { src: '/images/lgbtq/lgbtq-2.jpg', caption: 'Reading lounge — "Silence = Death" Keith Haring print' },
    { src: '/images/lgbtq/lgbtq-3.jpg', caption: 'Aarush at the LGBTQ Center library' },
    { src: '/images/lgbtq/lgbtq-4.jpg', caption: 'Selfie at the LGBTQ Center bookshelf' },
    { src: '/images/lgbtq/lgbtq-5.jpg', caption: '1993 March on Washington — Keith Haring poster' },
    { src: '/images/lgbtq/lgbtq-6.jpg', caption: 'LGBTQ Center kitchen — pride flag magnets & community notices' },
  ],
}

export default function Home() {
  const [active, setActive] = useState('all')

  const allPhotos = Object.entries(PHOTOS).flatMap(([center, photos]) =>
    photos.map(p => ({ ...p, center }))
  )

  const displayPhotos = active === 'all'
    ? allPhotos
    : (PHOTOS[active] || []).map(p => ({ ...p, center: active }))

  const activeCenter = CENTERS.find(c => c.id === active)

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
          A photographic walk through Purdue's cultural centers —
          each with its own history, space, and story.
        </p>
      </header>

      {/* Center Tabs */}
      <nav className="px-6 max-w-5xl mx-auto mb-10">
        <div className="flex flex-wrap gap-2">
          {CENTERS.map(center => (
            <button
              key={center.id}
              onClick={() => setActive(center.id)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-all border
                ${active === center.id
                  ? `${center.color} ${center.accent} text-white`
                  : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600'
                }
              `}
            >
              {center.name}
            </button>
          ))}
        </div>

        {/* Active center description */}
        {activeCenter && activeCenter.id !== 'all' && (
          <p className="mt-4 text-neutral-500 text-sm">
            {activeCenter.description}
          </p>
        )}
      </nav>

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
            <p className="text-lg">No photos yet for this center.</p>
            <p className="text-sm mt-2">Add images to <code>public/images/{active}/</code></p>
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
