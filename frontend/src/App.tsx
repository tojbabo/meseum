
import './App.css'
import { Routes, Route } from "react-router-dom";
import Head from "@/shared/head";
import HomePage from "./features/entrance/pages/hompage";

function App() {
  return (
    <div>
      <Head/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App
