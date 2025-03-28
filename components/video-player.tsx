"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw } from "lucide-react"

interface VideoPlayerProps {
  videoId: string
  title: string
  posterColor: "blue" | "purple" | "pink"
  videoUrl: string
}

export default function VideoPlayer({ videoId, title, posterColor, videoUrl }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Generate gradient based on color
  const getGradient = () => {
    switch (posterColor) {
      case "blue":
        return "from-blue-400 to-blue-600"
      case "purple":
        return "from-purple-400 to-purple-600"
      case "pink":
        return "from-pink-400 to-pink-600"
      default:
        return "from-blue-400 to-blue-600"
    }
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const updateTime = () => setCurrentTime(video.currentTime)
    const updateDuration = () => setDuration(video.duration)
    const handleEnded = () => setIsPlaying(false)

    video.addEventListener("timeupdate", updateTime)
    video.addEventListener("durationchange", updateDuration)
    video.addEventListener("ended", handleEnded)

    return () => {
      video.removeEventListener("timeupdate", updateTime)
      video.removeEventListener("durationchange", updateDuration)
      video.removeEventListener("ended", handleEnded)
    }
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch((error) => {
          console.error("Error playing video:", error)
          setIsPlaying(false)
        })
      } else {
        videoRef.current.pause()
      }
    }
  }, [isPlaying])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted
    }
  }, [isMuted])

  const togglePlay = () => setIsPlaying(!isPlaying)
  const toggleMute = () => setIsMuted(!isMuted)

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current || duration === 0) return

    const progressBar = e.currentTarget
    const rect = progressBar.getBoundingClientRect()
    const pos = (e.clientX - rect.left) / rect.width
    const newTime = pos * duration

    videoRef.current.currentTime = newTime
    setCurrentTime(newTime)
  }

  const handleFullscreen = () => {
    if (!videoRef.current) return

    if (document.fullscreenElement) {
      document.exitFullscreen().catch((err) => {
        console.error(`Error attempting to exit fullscreen: ${err.message}`)
      })
    } else {
      videoRef.current.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`)
      })
    }
  }

  const handleRestart = () => {
    if (!videoRef.current) return
    videoRef.current.currentTime = 0
    setCurrentTime(0)
    setIsPlaying(true)
  }

  return (
    <div className="rounded-xl overflow-hidden border shadow-sm">
      <div className={`aspect-video bg-gradient-to-br ${getGradient()} relative`}>
        <video ref={videoRef} className="w-full h-full object-cover" playsInline onClick={togglePlay} src={videoUrl} />

        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <div className="text-white text-center">
              <h3 className="text-2xl font-bold mb-2">{title}</h3>
              <p className="text-sm opacity-80 mb-4">Click to play this video</p>
              <Button
                variant="secondary"
                size="lg"
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm"
                onClick={togglePlay}
              >
                <Play className="h-5 w-5 text-white mr-2" />
                Play Video
              </Button>
            </div>
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-2">
          {/* Progress bar */}
          <div className="w-full h-1 bg-white/30 rounded-full mb-2 cursor-pointer" onClick={handleProgressClick}>
            <div
              className={`h-full rounded-full ${
                posterColor === "blue" ? "bg-blue-500" : posterColor === "purple" ? "bg-purple-500" : "bg-pink-500"
              }`}
              style={{ width: `${(currentTime / duration) * 100}%` }}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-white/20" onClick={togglePlay}>
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                <span className="sr-only">{isPlaying ? "Pause" : "Play"}</span>
              </Button>

              <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-white/20" onClick={toggleMute}>
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                <span className="sr-only">{isMuted ? "Unmute" : "Mute"}</span>
              </Button>

              <span className="text-xs text-white">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-white hover:bg-white/20"
                onClick={handleRestart}
              >
                <RotateCcw className="h-4 w-4" />
                <span className="sr-only">Restart</span>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-white hover:bg-white/20"
                onClick={handleFullscreen}
              >
                <Maximize className="h-4 w-4" />
                <span className="sr-only">Fullscreen</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

