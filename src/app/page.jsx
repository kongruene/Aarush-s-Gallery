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
    description: 'Native American Educational & Cultural Center · 903 5th St · Since 2007',
  },
]

// ── ADD YOUR PHOTOS HERE ──────────────────────────────────────────────────────
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
  aaarcc: [
    { src: '/images/aaarcc/aaarcc-1.jpg', caption: 'AAARCC main lounge — colorful prayer flags & community space' },
    { src: '/images/aaarcc/aaarcc-2.jpg', caption: 'AAARCC library — Asian American literature collection' },
    { src: '/images/aaarcc/aaarcc-3.jpg', caption: 'AAARCC Library Catalog — 10th Anniversary' },
    { src: '/images/aaarcc/aaarcc-4.jpg', caption: 'AAARCC meeting room — fortune cookies & cultural art' },
    { src: '/images/aaarcc/aaarcc-5.jpg', caption: 'AAARCC lounge — Korean snacks & library catalog display' },
    { src: '/images/aaarcc/aaarcc-6.jpg', caption: 'Aarush at AAARCC — red Chinese lantern selfie' },
    { src: '/images/aaarcc/aaarcc-7.jpg', caption: 'AAARCC — teal floral mural & computer station' },
  ],
  lcc: [
    { src: '/images/lcc/lcc-1.jpg', caption: 'Latino Cultural Center — colorful teal & yellow exterior' },
    { src: '/images/lcc/lcc-2.jpg', caption: 'LCC library — Latin America collection' },
    { src: '/images/lcc/lcc-3.jpg', caption: 'LCC bookshelf — "I am Loved, Beautiful, Smart, Powerful"' },
    { src: '/images/lcc/lcc-4.jpg', caption: 'LCC community heart mural — unity & solidarity' },
    { src: '/images/lcc/lcc-5.jpg', caption: 'LCC staircase — community photo wall' },
    { src: '/images/lcc/lcc-6.jpg', caption: 'LCC cozy reading nook upstairs' },
    { src: '/images/lcc/lcc-7.jpg', caption: 'Aarush at LCC — heart mural selfie' },
    { src: '/images/lcc/lcc-8.jpg', caption: 'Aarush at LCC — upstairs computer lab' },
  ],
  naecc: [
    { src: '/images/naecc/naecc-1.jpg', caption: 'NAECC entrance sign — "Stop by for a FREE Popsicle"' },
    { src: '/images/naecc/naecc-2.jpg', caption: 'NAECC main lounge — traditional regalia & medicine wheel' },
    { src: '/images/naecc/naecc-3.jpg', caption: 'Aarush at NAECC — traditional regalia on display' },
    { src: '/images/naecc/naecc-4.jpg', caption: 'NAECC — birchbark canoe display' },
    { src: '/images/naecc/naecc-5.jpg', caption: 'NAECC kitchen & community resources' },
    { src: '/images/naecc/naecc-6.jpg', caption: 'NAECC — "I am a Native" Sitting Bull portrait' },
    { src: '/images/naecc/naecc-7.jpg', caption: 'Aarush in the NAECC green room' },
    { src: '/images/naecc/naecc-8.jpg', caption: 'NAECC hallway — Sitting Bull portrait at the end' },
    { src: '/images/naecc/naecc-9.jpg', caption: 'NAECC sewing room — "No More Stolen Sisters" #MMIWG display' },
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
