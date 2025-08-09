import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home/home";
import './App.css'
import Desktop5 from './desktop5/desktop5';

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
    </>
  )
}

export default App
