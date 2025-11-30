import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useNavigate, Routes, Route } from "react-router-dom";

import HomePage from "./features/home/pages/hompage";   // ← 네가 만든 메인페이지

function App() {
  const [count, setCount] = useState(0)
  const navigator = useNavigate()

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => navigator("/home")}>
        {/* <button onClick={() => setCount((count) => count + 1)}> */}
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Routes>
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
