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
    id: 'lgbtq',
    name: 'LGBTQ Center',
    color: 'bg-violet-900',
    accent: 'border-violet-400',
    description: 'Room G988, Hicks Undergraduate Library',
  },
  {
    id: 'bcc',
    name: 'Black Cultural Center',
    color: 'bg-amber-900',
    accent: 'border-amber-400',
    description: 'Founded 1970 · 18,500 sq ft · Walter Blackburn architect',
  },
  {
    id: 'aaarcc',
    name: 'AAARCC',
    color: 'bg-red-900',
    accent: 'border-red-400',
    description: 'Asian American & Asian Resource and Cultural Center · 915 5th St',
  },
  {
    id: 'lcc',
    name: 'Latino Cultural Center',
    color: 'bg-green-900',
    accent: 'border-green-400',
    description: 'Todos son bienvenidos · 426 Waldron St',
  },
  {
    id: 'naecc',
    name: 'NAECC',
    color: 'bg-orange-900',
    accent: 'border-orange-400',
    description: 'Native American Educational & Cultural Center · 903 5th St',
  },
]

// ── ADD YOUR PHOTOS HERE ──────────────────────────────────────────────────────
// Format: { src: '/images/<center>/<filename>', caption: 'optional caption' }
const PHOTOS = {
  lgbtq: [
    { src: '/images/lgbtq/lgbtq-1.jpg', caption: 'LGBTQ Center — Room G988, Hicks Undergraduate Library' },
    { src: '/images/lgbtq/lgbtq-2.jpg', caption: 'LGBTQ Center' },
    { src: '/images/lgbtq/lgbtq-3.jpg', caption: 'Message Board — Hicks Library' },
    { src: '/images/lgbtq/lgbtq-4.jpg', caption: 'Message Board up close' },
    { src: '/images/lgbtq/lgbtq-5.jpg', caption: 'Inside Hicks Library' },
    { src: '/images/lgbtq/lgbtq-6.jpg', caption: 'LGBTQ Center visit' },
  ],
  bcc: [
    { src: '/images/bcc/bcc-1.jpg', caption: 'Black History Month 2026 — Celebrating 100 Years of Black History Commemorations' },
    { src: '/images/bcc/bcc-2.jpg', caption: 'A Journey Through Black Excellence — The BCC: A 50 Year Retrospective' },
    { src: '/images/bcc/bcc-3.jpg', caption: 'Antonio & Betty Zamora Performing Arts Studio' },
    { src: '/images/bcc/bcc-4.jpg', caption: 'Inside the Black Cultural Center' },
  ],
  aaarcc: [
    { src: '/images/aaarcc/aaarcc-1.jpg', caption: 'AAARCC — converted house with lounge · 915 5th Street' },
  ],
  lcc: [
    { src: '/images/lcc/lcc-1.jpg', caption: 'Latino Cultural Center — 426 Waldron Street' },
  ],
  naecc: [
    { src: '/images/naecc/naecc-1.jpg', caption: 'NAECC lounge — 903 5th Street · 65+ tribal nations' },
    { src: '/images/naecc/naecc-2.jpg', caption: 'NAECC — brick fireplace lounge' },
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
          A photographic walk through five of Purdue's cultural centers —
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
