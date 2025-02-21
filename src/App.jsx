import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Homepage from './assets/Homepage/homepage'
import AboutUs from "./assets/AboutUs/about-us";
import Services from "./assets/Services/Services";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} /> {/* Path to desired page */}
        <Route path="/home" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element= {<Services />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
