import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useNavigate, useLocation, Routes, Route } from "react-router-dom";

import HomePage from "./features/entrance/pages/hompage";

function App() {
  const [count, setCount] = useState(0)
  const navigator = useNavigate()
  const location = useLocation();

  useEffect(() => {
    console.log("route changed:", location.pathname);
  }, [location.pathname]);

  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<HomePage />} />
      </Routes>
  )
}

export default App
