import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Layout from './components/Layout';
import Vision from './pages/Vision';
import Dream from './pages/Dream';
import Learn from './pages/Learn';
import Contact from './pages/Contact';
import Pitch from './pages/Pitch';
import BusinessPlan from './pages/BusinessPlan';
import Tools from './pages/Tools';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Vision />} />
            <Route path="/pitch" element={<Pitch />} />
            <Route path="/business-plan" element={<BusinessPlan />} />
            <Route path="/dream" element={<Dream />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
