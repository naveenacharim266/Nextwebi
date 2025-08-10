import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home/home";
import './App.css'
import Desktop5 from './desktop5/desktop5';
import ServicesSection from './servicessection/ServicesSection.jsx'
import Overview from './overview/company-overview.jsx';
import CaseStudies from './casestudies/CaseStudies.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />

    //   </Routes>
    // </Router>
    <>
    <Home/>
    <Desktop5/>
    <ServicesSection/>
    <Overview/>
    <CaseStudies/>
    </>
  )
}

export default App
