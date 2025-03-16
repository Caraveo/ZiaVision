import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const menuItems = [
    { text: 'Vision', path: '/' },
    { text: 'Dream', path: '/dream' },
    { text: 'Learn', path: '/learn' },
    { text: 'Tools', path: '/tools' },
    { text: 'Contact', path: '/contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem
          key={item.text}
          component={RouterLink}
          to={item.path}
          onClick={handleDrawerToggle}
          sx={{
            fontFamily: '"Montserrat", "Arial", sans-serif',
            fontWeight: 400,
            fontSize: '1.1rem',
            letterSpacing: '0.02em',
            color: 'text.primary',
            textDecoration: 'none',
            '&:hover': {
              color: 'primary.main',
            },
          }}
        >
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar 
        position="sticky" 
        sx={{ 
          bgcolor: 'background.paper',
          boxShadow: 1
        }}
      >
        <Toolbar>
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, color: 'text.primary' }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              flexGrow: 1,
            }}
          >
            <Box
              component="img"
              src="/Ziawe.png"
              alt="ZiaVision Logo"
              sx={{
                height: 40,
                mr: 1,
                display: 'block',
              }}
            />
          </Box>
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 3 }}>
              {menuItems.map((item) => (
                <Link
                  key={item.text}
                  component={RouterLink}
                  to={item.path}
                  sx={{
                    mx: 2,
                    color: 'text.primary',
                    textDecoration: 'none',
                    fontFamily: '"Montserrat", "Arial", sans-serif',
                    fontWeight: 400,
                    fontSize: '1.1rem',
                    letterSpacing: '0.02em',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  {item.text}
                </Link>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 240,
            bgcolor: 'background.paper'
          },
        }}
      >
        {drawer}
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1 }}>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          {children}
        </Container>
      </Box>

      <Box
        component="footer"
        sx={{
          py: 4,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) => theme.palette.grey[200],
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: 3,
                mb: 2,
              }}
            >
              <Link
                component={RouterLink}
                to="/tools"
                sx={{
                  color: 'text.secondary',
                  textDecoration: 'none',
                  fontFamily: '"Montserrat", "Arial", sans-serif',
                  fontWeight: 400,
                  fontSize: '0.9rem',
                  letterSpacing: '0.02em',
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                Tools
              </Link>
              <Link
                component={RouterLink}
                to="/pitch"
                sx={{
                  color: 'text.secondary',
                  textDecoration: 'none',
                  fontFamily: '"Montserrat", "Arial", sans-serif',
                  fontWeight: 400,
                  fontSize: '0.9rem',
                  letterSpacing: '0.02em',
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                Pitch
              </Link>
              <Link
                component={RouterLink}
                to="/business-plan"
                sx={{
                  color: 'text.secondary',
                  textDecoration: 'none',
                  fontFamily: '"Montserrat", "Arial", sans-serif',
                  fontWeight: 400,
                  fontSize: '0.9rem',
                  letterSpacing: '0.02em',
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                Business Plan
              </Link>
            </Box>
            <Typography 
              variant="body2" 
              color="text.secondary" 
              align="center"
              sx={{
                fontFamily: '"Montserrat", "Arial", sans-serif',
                fontWeight: 400,
                letterSpacing: '0.02em',
              }}
            >
              © {new Date().getFullYear()} ZiaVision. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout; 