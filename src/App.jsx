import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home pages/Home';
import Services from './pages/Services pages/Services';
import Contact from './pages/ContactUs pages/Contact';
import About from './pages/About Pages/AboutUs';

import Navbar from './component/Navbar';
import Footer from './component/Footer';

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


