import React, { useRef, useEffect, useState } from 'react';
import {
  Box,
  Container,
  Card,
  CardContent,
  IconButton,
  Stack,
  Slider,
  Tooltip,
} from '@mui/material';
import {
  VolumeUp as VolumeUpIcon,
  VolumeOff as VolumeOffIcon,
  PlayArrow as PlayArrowIcon,
  Pause as PauseIcon,
  Fullscreen as FullscreenIcon,
} from '@mui/icons-material';

const Learn: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState<number>(80);
  const [showControls, setShowControls] = useState(true);
  const controlsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume / 100;
    }
  }, [volume]);

  const resetControlsTimeout = () => {
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    setShowControls(true);
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }
  };

  const handleMouseMove = () => {
    resetControlsTimeout();
  };

  const handleMouseLeave = () => {
    if (isPlaying) {
      setShowControls(false);
    }
  };

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
      resetControlsTimeout();
    }
  };

  const handleVolumeChange = (event: Event, newValue: number | number[]) => {
    const newVolume = newValue as number;
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume / 100;
    }
  };

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          py: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Card
          sx={{
            width: '100%',
            maxWidth: 1200,
            bgcolor: 'background.paper',
            borderRadius: 2,
            overflow: 'hidden',
            boxShadow: 3,
          }}
        >
          <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                pt: '56.25%',
                '&:hover': {
                  '& .controls-overlay': {
                    opacity: 1,
                  },
                },
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <Box
                component="video"
                ref={videoRef}
                src="/videos/Zia.mp4"
                autoPlay
                loop
                playsInline
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  cursor: 'pointer',
                }}
                onClick={handlePlayPause}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />
              
              {/* Center Play Button */}
              {!isPlaying && (
                <IconButton
                  onClick={handlePlayPause}
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    backdropFilter: 'blur(8px)',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.7)',
                      transform: 'translate(-50%, -50%) scale(1.1)',
                    },
                    transition: 'all 0.2s',
                    padding: 3,
                  }}
                >
                  <PlayArrowIcon sx={{ fontSize: 60, color: 'white' }} />
                </IconButton>
              )}

              {/* Controls Overlay */}
              <Box
                className="controls-overlay"
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.7))',
                  backdropFilter: 'blur(8px)',
                  padding: 2,
                  opacity: showControls ? 1 : 0,
                  transition: 'opacity 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{ width: '100%' }}
                >
                  <IconButton 
                    onClick={handlePlayPause}
                    sx={{ color: 'white' }}
                    size="large"
                  >
                    {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
                  </IconButton>
                  <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    sx={{ flexGrow: 1, maxWidth: 200 }}
                  >
                    <IconButton 
                      onClick={handleMuteToggle}
                      sx={{ color: 'white' }}
                      size="large"
                    >
                      {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
                    </IconButton>
                    <Slider
                      value={volume}
                      onChange={handleVolumeChange}
                      aria-labelledby="volume-slider"
                      sx={{
                        color: 'white',
                        '& .MuiSlider-thumb': {
                          width: 12,
                          height: 12,
                        },
                      }}
                    />
                  </Stack>
                  <Tooltip title="Fullscreen">
                    <IconButton 
                      onClick={handleFullscreen}
                      sx={{ color: 'white' }}
                      size="large"
                    >
                      <FullscreenIcon />
                    </IconButton>
                  </Tooltip>
                </Stack>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Learn; 