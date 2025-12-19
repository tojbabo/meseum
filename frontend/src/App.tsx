
import './App.css'
import { Routes, Route } from "react-router-dom";
import Head from "@/shared/head";
import Entrance from "./features/entrance/entrance";
import HomePage from './features/home/homepage';
import WritePage from './features/write/writepage';

function App() {
  return (
    <div>
      <Head/>
      <Routes>
        <Route path="/" element={<Entrance />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/write" element={<WritePage />} />
      </Routes>
    </div>
  )
}

export default App
