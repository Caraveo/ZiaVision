import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import {
  Box,
  Container,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
  ZoomIn,
  ZoomOut,
} from '@mui/icons-material';

// Set worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const BusinessPlan: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const nextPage = () => {
    if (pageNumber < (numPages || 0)) {
      setPageNumber(pageNumber + 1);
    }
  };

  const prevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const zoomIn = () => {
    setScale(prev => Math.min(prev + 0.1, 2));
  };

  const zoomOut = () => {
    setScale(prev => Math.max(prev - 0.1, 0.5));
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextPage();
      if (e.key === 'ArrowLeft') prevPage();
      if (e.key === '+') zoomIn();
      if (e.key === '-') zoomOut();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [pageNumber, numPages]);

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          py: 4,
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Business Plan
        </Typography>

        <Box
          sx={{
            display: 'flex',
            gap: 2,
            mb: 2,
          }}
        >
          <IconButton onClick={zoomOut} color="primary">
            <ZoomOut />
          </IconButton>
          <IconButton onClick={zoomIn} color="primary">
            <ZoomIn />
          </IconButton>
        </Box>

        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 3,
            p: 2,
            minHeight: '80vh',
          }}
        >
          <IconButton
            onClick={prevPage}
            disabled={pageNumber <= 1}
            sx={{
              position: 'absolute',
              left: 16,
              zIndex: 2,
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
              maxWidth: '100%',
              overflow: 'auto',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Document
              file="/BusinessPlan.PDF"
              onLoadSuccess={onDocumentLoadSuccess}
              loading={
                <Typography>Loading PDF...</Typography>
              }
              error={
                <Typography color="error">
                  Error loading PDF. Please make sure BusinessPlan.PDF exists in the public folder.
                </Typography>
              }
            >
              <Page
                pageNumber={pageNumber}
                scale={scale}
                width={isMobile ? undefined : 800}
              />
            </Document>
          </Box>

          <IconButton
            onClick={nextPage}
            disabled={pageNumber >= (numPages || 0)}
            sx={{
              position: 'absolute',
              right: 16,
              zIndex: 2,
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
        </Box>

        <Box
          sx={{
            display: 'flex',
            gap: 2,
            alignItems: 'center',
            bgcolor: 'background.paper',
            px: 3,
            py: 1,
            borderRadius: 2,
            boxShadow: 1,
          }}
        >
          <Typography>
            Page {pageNumber} of {numPages}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default BusinessPlan; 