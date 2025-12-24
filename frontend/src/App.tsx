
import './App.css'
import { Routes, Route, useLocation } from "react-router-dom";
import Head from "@/shared/head";
import Entrance from "./features/entrance/entrance";
import HomePage from './features/home/homepage';
import WritePage from './features/write/writepage';
import Pamphlet from './shared/pamphlet';

function App() {
  const { pathname } = useLocation();
  return (
    <div className='basediv'>
    <Head/>
      {pathname !== "/" && <Pamphlet />}
      <div className='basecontents'>
        <Routes>
          <Route path="/" element={<Entrance />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/write" element={<WritePage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
