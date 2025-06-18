"use client"

import { useEffect, useRef, useState } from "react"

interface VideoIntroSectionProps {
  onVideoFinishScroll: () => void
}

export default function VideoIntroSection({ onVideoFinishScroll }: VideoIntroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [scrolledOnce, setScrolledOnce] = useState(false)

  // Effect for video playback setup
  useEffect(() => {
    const videoElement = videoRef.current
    if (!videoElement) return

    const attemptPlay = () => {
      // The `autoPlay` attribute should handle this, but this is an explicit attempt.
      // It's important that the video is `muted` for autoplay to work in most browsers.
      videoElement.play().catch((error) => {
        // AbortError is common if the video is paused or component unmounts during play attempt.
        // Don't log AbortError as a critical failure.
        if (error.name !== "AbortError") {
          console.error("Video play attempt failed:", error)
        }
      })
    }

    // Check if video metadata is loaded, otherwise wait for `canplay`
    if (videoElement.readyState >= videoElement.HAVE_METADATA) {
      attemptPlay()
    } else {
      const canPlayListener = () => {
        attemptPlay()
      }
      videoElement.addEventListener("canplay", canPlayListener, { once: true })
      return () => {
        videoElement.removeEventListener("canplay", canPlayListener)
      }
    }

    // Cleanup: pause video if component unmounts
    return () => {
      if (videoElement) {
        videoElement.pause()
      }
    }
  }, []) // Empty dependency array: run once on mount and clean up on unmount

  // Effect for auto-scrolling
  useEffect(() => {
    let scrollTimerId: NodeJS.Timeout | undefined = undefined

    if (!scrolledOnce) {
      scrollTimerId = setTimeout(() => {
        onVideoFinishScroll()
        setScrolledOnce(true)
      }, 8000) // 8 seconds
    }

    return () => {
      if (scrollTimerId) {
        clearTimeout(scrollTimerId)
      }
    }
  }, [onVideoFinishScroll, scrolledOnce])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <video
        ref={videoRef}
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover transform -translate-x-1/2 -translate-y-1/2"
        playsInline
        autoPlay // Primary mechanism for autoplay
        muted // Essential for autoplay
        loop
        preload="auto" // Hint to browser to load video metadata/data
      >
        <source src="/videos/novagent-logo-reveal.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  )
}
