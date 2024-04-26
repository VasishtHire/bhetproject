import './App.css';
import * as React from 'react';
import Home from './components/Home';
import { Route, Routes } from 'react-router';
import AppNavbar from './components/NavBar';
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';
import Team from './components/Team';
import DonateNow from './components/DonateNow';
import ContactUs from './components/ContactUs';
import LoginRegister from './components/LoginRegister';
import { createTheme, colors} from '@mui/material';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#f50057',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className='App'>
    <AppNavbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Home" element={<Home />} />
      <Route path="About" element={<AboutUs />} />
      <Route path="Gallery" element={<Gallery />} />
      <Route path="Team" element={<Team/>} />
      <Route path="Donate" element={<DonateNow/>} />
      <Route path="Contact" element={<ContactUs/>} />
      {/* <Route path="Login/Register" element={<LoginRegister/>} /> */}
    </Routes>
    </div>
    </ThemeProvider>
    );
}

export default App;
