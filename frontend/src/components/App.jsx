import { useState } from 'react';
import '../static/css/App.css';
import 'react-languages-select/css/react-languages-select.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FAB from './FAB';
import ScrollToTop from './ScrollBackBtn';

import Footer from './Footer';
import Button from './Button';
import Home from './home/home';
import About from './about/about';
import Header from './Header';
import Gallery from './gallery/gallery';
import Contact from './contact/contact';
import Menu from './menu';
import Reservation from './reservation/reservation';

function App() {
  const [count, setCount] = useState(0)

  return (<>
    <Router>
      <div>
        <Header />
        <FAB />
        <ScrollToTop />
      </div>
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/réservation" element={<Reservation />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
      </Routes>

      <div>
        <Button />
        <Footer />
      </div>
    </Router>
      
    </>
  )
}
export default App

