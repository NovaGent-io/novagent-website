"use client"

// NOTE: This is a simplified version for debugging.
// All loading logic has been temporarily removed.

interface VideoIntroSectionProps {
  // The onVideoFinishScroll prop is no longer used in this version,
  // but we keep it so the rest of the app doesn't break.
  onVideoFinishScroll: () => void
}

export default function VideoIntroSection({ onVideoFinishScroll }: VideoIntroSectionProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <video
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover transform -translate-x-1/2 -translate-y-1/2"
        playsInline
        autoPlay
        muted
        loop
        preload="auto"
      >
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  )
}
