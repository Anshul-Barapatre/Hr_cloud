import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Homepages/Home';
import Services from './pages/Servicespages/Services';
import Contact from './pages/ContactUspages/Contact';
// import About from './pages/About Pages/AboutUs'/;

import Navbar from './component/Navbar';
import Footer from './component/Footer';
import About from './pages/AboutPages/Aboutus';

const  App =() => {
  return (
    <Router>
       
      <Navbar />
      <main className="f">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
         
          
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;


