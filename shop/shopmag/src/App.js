import { ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import HomePage from './Pages/Home/HomePage';
import GoToTop from './Pages/GlobalComponents/GoToTop';
import Catalog from './Pages/Catalog/Catalog';
import About from './Pages/About/About';
import ProductDetails from './Pages/ProductDetails/ProductDetails';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  link
} from "react-router-dom";

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: {
    nigga: createColor('#000000'),
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <GoToTop />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/about' element={<About />} />
            <Route path='/product-details' element={<ProductDetails />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
