"use client"

import { useEffect, useRef, useState } from "react"
import NovagentLoading from "./novagent-loading"

interface VideoIntroSectionProps {
  onVideoFinishScroll: () => void
}

export default function VideoIntroSection({ onVideoFinishScroll }: VideoIntroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [scrolledOnce, setScrolledOnce] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const videoElement = videoRef.current
    if (!videoElement) return

    const handleCanPlay = () => {
      videoElement.play().catch((error) => {
        if (error.name !== "AbortError") {
          console.error("Video play failed:", error)
        }
      })
      setIsLoading(false)
    }

    videoElement.addEventListener("canplay", handleCanPlay, { once: true })

    return () => {
      videoElement.removeEventListener("canplay", handleCanPlay)
      if (videoElement) {
        videoElement.pause()
      }
    }
  }, [])

  useEffect(() => {
    let scrollTimerId: NodeJS.Timeout | undefined = undefined
    if (!scrolledOnce) {
      scrollTimerId = setTimeout(() => {
        onVideoFinishScroll()
        setScrolledOnce(true)
      }, 8000)
    }
    return () => {
      if (scrollTimerId) {
        clearTimeout(scrollTimerId)
      }
    }
  }, [onVideoFinishScroll, scrolledOnce])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {isLoading && <NovagentLoading />}
      
      {/* --- FIX IS HERE: A single video element for all screen sizes --- */}
      <video
        ref={videoRef}
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover transform -translate-x-1/2 -translate-y-1/2"
        playsInline
        autoPlay
        muted
        loop
        preload="auto"
        // The 'hidden' class is removed when isLoading is false to ensure visibility
        style={{ visibility: isLoading ? 'hidden' : 'visible' }}
      >
        <source src="/videos/novagent-logo-reveal.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  )
}
