// HomePage.tsx
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {urls} from "@/urls.ts";
import { getTodayCount, setEntranceLocation, getEntranceLocation } from "../api";


export default function HomePage() {
  const boxwidth = 400;
  const boxheight = 280;
  const imgRef = useRef<HTMLImageElement>(null);
  const [pos, setPos] = useState({x:0, y:0});
  const [dragging, setDragging] = useState(false);
  const [start, setStart] = useState({x:0, y:0});
  const [imgSize, setImgSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    getTodayCount();

    const imgfetch = async () => {
      const loadlocation = await getEntranceLocation()
      let nx = 0
      let ny = 0

      if(loadlocation != null){
        nx = loadlocation.x;
        ny = loadlocation.y;
      }
      else{
        nx = (imgSize.width/2 - boxwidth/2) * -1
        ny = (imgSize.height/2 - boxheight/2) * -1
      }

      setPos({x:nx, y:ny})
    };
    if(imgRef.current){
      const rect = imgRef.current.getBoundingClientRect();
      const rw = rect.width;
      const rh = rect.height;
      setImgSize({width: rw, height: rh});

      imgfetch();
    }

  },[]);
  
  const onMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setStart({x: e.clientX - pos.x, y: e.clientY - pos.y});
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if(!dragging) return;

    const nx = e.clientX - start.x;
    const ny = e.clientY - start.y;

    setPos(validxy(nx,ny));
  };

  const onMouseUp = () => {
    if(!dragging) return
    setDragging(false);

    setEntranceLocation(validxy(pos.x, pos.y));
  };
  
  const validxy = (x:number, y:number) => {
    const mx = boxwidth - imgSize.width;
    const my = boxheight - imgSize.height;

    if(x > 0) x = 0;
    else if(x < mx) x = mx;

    if(y > 0) y = 0;
    else if(y < my) y = my;

    return {x:x, y:y}

  };

  return (
    <div
      className="homepage-container"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseUp}
      onMouseUp={onMouseUp}
    >
      <div className="homepage-content">
        <h1 className="homepage-title">
          안녕하세요
        </h1>

        <div className="image-container">
          <img
            ref={imgRef}
            src={urls.entranceimg}
            style={{
              userSelect: "none",
              position: "absolute",
              width: "600px",
              left: pos.x,
              top: pos.y,
              cursor: dragging ? "grabbing" : "grab"
            }}
            onDragStart={(e)=>e.preventDefault()}
            onMouseDown={onMouseDown}
          />
        </div>

        <Link
          to="/login"
          className="entrance-button"
        >
          접속하기
        </Link>
      </div>
    </div>
  );
}
