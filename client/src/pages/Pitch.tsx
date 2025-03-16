import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  useTheme,
} from '@mui/material';
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from '@mui/icons-material';

const Pitch: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);
  const theme = useTheme();

  useEffect(() => {
    const loadImages = async () => {
      try {
        const images = Array.from({ length: 12 }, (_, i) => `${i + 1}.png`);
        setLoadedImages(images);
      } catch (error) {
        console.error('Error loading images:', error);
      }
    };
    loadImages();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % loadedImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + loadedImages.length) % loadedImages.length);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [loadedImages.length]);

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
        <Typography
          variant="h2"
          component="h1"
          sx={{
            textAlign: 'center',
            fontWeight: 800,
            mb: 6,
          }}
        >
          Pitch Deck
        </Typography>

        <Box
          sx={{
            width: '100%',
            height: '600px',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 3,
            overflow: 'hidden',
          }}
        >
          <IconButton
            onClick={prevSlide}
            sx={{
              position: 'absolute',
              left: 16,
              zIndex: 2,
              color: 'text.primary',
              bgcolor: 'background.paper',
              boxShadow: 2,
              '&:hover': {
                bgcolor: 'background.paper',
                opacity: 0.9,
              },
            }}
          >
            <KeyboardArrowLeft />
          </IconButton>

          <Box
            sx={{ 
              position: 'absolute',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: 4,
            }}
          >
            <Box
              component="img"
              src={`/PITCH/${loadedImages[currentSlide]}`}
              alt={`Slide ${currentSlide + 1}`}
              sx={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
              }}
            />
          </Box>

          <IconButton
            onClick={nextSlide}
            sx={{
              position: 'absolute',
              right: 16,
              zIndex: 2,
              color: 'text.primary',
              bgcolor: 'background.paper',
              boxShadow: 2,
              '&:hover': {
                bgcolor: 'background.paper',
                opacity: 0.9,
              },
            }}
          >
            <KeyboardArrowRight />
          </IconButton>

          <Box
            sx={{
              position: 'absolute',
              bottom: 20,
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: 1,
              zIndex: 2,
              bgcolor: 'rgba(255, 255, 255, 0.8)',
              borderRadius: 5,
              p: 1,
            }}
          >
            {loadedImages.map((_, index) => (
              <Box
                key={index}
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: index === currentSlide ? 'primary.main' : 'grey.300',
                  transition: 'background-color 0.3s ease',
                  cursor: 'pointer',
                }}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </Box>

          <Box
            sx={{
              position: 'absolute',
              bottom: 20,
              right: 20,
              zIndex: 2,
              bgcolor: 'rgba(255, 255, 255, 0.8)',
              px: 2,
              py: 0.5,
              borderRadius: 2,
              fontSize: '0.9rem',
            }}
          >
            {currentSlide + 1} / {loadedImages.length}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Pitch; 