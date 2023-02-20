import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Layout from './pages/Layout';
import Home from './pages/Home';
import { Contact } from './pages/Contact';
import About from './pages/About';
import Faqs from './pages/Faqs';
import { Pricing } from './pages/Pricing';
import Notfound from './pages/Notfound';

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<Faqs />} />
            <Route path='/pricing' element={<Pricing />} />
            <Route path="*" element={<Notfound />} />
            </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
