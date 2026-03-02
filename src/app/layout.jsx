import './globals.css'

export const metadata = {
  title: "Aarush's Cultural Immersion Week",
  description: "A photographic journey through Purdue University's cultural centers — Spring 2026",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-white min-h-screen">
        {children}
      </body>
    </html>
  )
}
