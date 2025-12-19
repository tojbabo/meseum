// HomePage.tsx
import React, { useState, useRef, useEffect} from "react";
import { Link } from "react-router-dom";
import {urls} from "@/urls.ts";
import { getTodayCount, setEntranceLocation, getEntranceLocation } from "@/features/entrance/api";
import Docent from "@/shared/docent";

export default function HomePage() {
  const imgRef = useRef<HTMLImageElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  const [boxsz, setBoxsz] = useState({width:0, height:0});
  const [imgwidth, setWidth] = useState(0);
  const [pos, setPos] = useState({x:0, y:0});
  const [dragging, setDragging] = useState(false);
  const [start, setStart] = useState({x:0, y:0});
  const [imgSize, setImgSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
  },[]);
  

  return (
    <div
      className="homepage-container"
    >
      <div className="homepage-content">
        <div style={{textAlign : "center"}}>
          <Link to="/write" className="entrance-button">
            입장
          </Link>
        </div>
        <div
          style={{
            padding: '0.5rem',
          }}>
        </div>

        <hr/>
        <Docent/>
      </div>
    </div>
  );
}
