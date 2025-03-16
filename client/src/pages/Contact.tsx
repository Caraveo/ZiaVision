import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Link,
  useTheme,
} from '@mui/material';
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
} from '@mui/icons-material';

const Contact: React.FC = () => {
  const theme = useTheme();

  const contactInfo = [
    {
      icon: <PhoneIcon sx={{ fontSize: 40 }} />,
      title: 'Phone',
      content: '(575) 231-4271',
      link: 'tel:+15752314271',
    },
    {
      icon: <EmailIcon sx={{ fontSize: 40 }} />,
      title: 'Email',
      content: 'Jon@Ziavision.com',
      link: 'mailto:Jon@Ziavision.com',
    },
    {
      icon: <LocationIcon sx={{ fontSize: 40 }} />,
      title: 'Address',
      content: '800 S Roselawn Ave, A 104\nARTESIA, NM 88210',
      link: 'https://maps.google.com/?q=800+S+Roselawn+Ave+A+104+ARTESIA+NM+88210',
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          py: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 6,
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{
            textAlign: 'center',
            fontWeight: 800,
            mb: 2,
          }}
        >
          Contact Us
        </Typography>

        <Typography
          variant="h5"
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            maxWidth: 800,
            mb: 4,
          }}
        >
          Ready to explore the future of spatial computing? Get in touch with us.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {contactInfo.map((info, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  borderRadius: 4,
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <Box
                  sx={{
                    color: 'primary.main',
                    mb: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {info.icon}
                </Box>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    mb: 2,
                    fontWeight: 600,
                  }}
                >
                  {info.title}
                </Typography>
                <Link
                  href={info.link}
                  target={info.title === 'Address' ? '_blank' : undefined}
                  rel={info.title === 'Address' ? 'noopener noreferrer' : undefined}
                  sx={{
                    textDecoration: 'none',
                    color: 'text.primary',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  <Typography
                    sx={{
                      whiteSpace: 'pre-line',
                      fontFamily: '"Montserrat", "Arial", sans-serif',
                    }}
                  >
                    {info.content}
                  </Typography>
                </Link>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Box
          component="iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3389.5531139777187!2d-104.40531492428297!3d32.84850517424455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e37913051594f1%3A0x8f6d9e5c7b0832a0!2s800%20S%20Roselawn%20Ave%2C%20Artesia%2C%20NM%2088210!5e0!3m2!1sen!2sus!4v1710531144604!5m2!1sen!2sus"
          sx={{
            width: '100%',
            height: '400px',
            border: 0,
            borderRadius: 2,
            boxShadow: 3,
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Box>
    </Container>
  );
};

export default Contact; 