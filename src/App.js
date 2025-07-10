import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Properties from './components/Properties';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/propiedades" element={<Properties />} />
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
