import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  CardActions,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const tools = [
  {
    title: 'X Studio',
    description: 'A visual planning tool for creating spatial computing applications.',
    image: '/images/tool1.png',
    downloadUrl: 'https://github.com/Caraveo/Memory',
  },
  {
    title: 'Aske Assistant',
    description: 'An intuitive tool for initializing computing applications.',
    image: '/images/tool2.png',
    downloadUrl: 'https://github.com/Caraveo/Aske',
  },
  {
    title: 'Sol Ai',
    description: 'A tool that allows developers to use AI in their terminal.',
    image: '/images/tool3.png',
    downloadUrl: 'https://github.com/Caraveo/solai',
  },
];

const Tools: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8 }}>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            textAlign: 'center',
            fontWeight: 800,
            mb: 2,
          }}
        >
          Development Tools
        </Typography>
        <Typography
          variant="h5"
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            maxWidth: 800,
            mx: 'auto',
            mb: 6,
          }}
        >
          Empower your spatial computing projects with our suite of professional development tools
        </Typography>

        <Grid container spacing={4}>
          {tools.map((tool, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={tool.image}
                  alt={tool.title}
                  sx={{
                    objectFit: 'cover',
                    backgroundColor: 'grey.200',
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    sx={{
                      fontWeight: 600,
                      fontFamily: '"Montserrat", "Arial", sans-serif',
                    }}
                  >
                    {tool.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      mb: 2,
                      fontFamily: '"Roboto", "Arial", sans-serif',
                    }}
                  >
                    {tool.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button
                    variant="contained"
                    startIcon={<DownloadIcon />}
                    fullWidth
                    href={tool.downloadUrl}
                    sx={{
                      textTransform: 'none',
                      fontFamily: '"Montserrat", "Arial", sans-serif',
                    }}
                  >
                    Download
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Tools; 