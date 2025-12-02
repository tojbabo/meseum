// HomePage.tsx
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {Images} from "@/urls.ts";
import { fetchExampleData } from "../api";

export default function HomePage() {
  const boxwidth = 300;
  const boxheight = 200;
  const imgRef = useRef<HTMLImageElement>(null);
  const [pos, setPos] = useState({x:0, y:0});
  const [dragging, setDragging] = useState(false);
  const [start, setStart] = useState({x:0, y:0});
  const [imgSize, setImgSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if(imgRef.current){
      const rect = imgRef.current.getBoundingClientRect();
      const rw = rect.width;
      const rh = rect.height;
      setImgSize({width: rw, height: rh});

      const nw = (rw/2 - boxwidth/2) * -1
      const nh = (rh/2 - boxheight/2) * -1

      setPos({x:nw, y:nh})
    }

  }, []);
  
  const onMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setStart({x: e.clientX - pos.x, y: e.clientY - pos.y});
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if(!dragging) return;
    const mx = boxwidth - imgSize.width;
    const my = boxheight - imgSize.height;

    let nx = e.clientX - start.x;
    let ny = e.clientY - start.y;

    if(nx > 0) nx = 0;
    else if(nx < mx) nx = mx;

    if(ny > 0) ny = 0;
    else if(ny < my) ny = my;

    setPos({x:nx, y:ny});
  };

  const onMouseUp = () => {
    setDragging(false);
    fetchExampleData({x: pos.x, y: pos.y});
  }



  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "40px" }}>
        안녕하세요
      </h1>

      <div
        style={{
          width: `${boxwidth}px`,
          height: `${boxheight}px`,
          border: "1px solid #ccc",
          margin: "0 auto 40px",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden"
        }}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
      >
        <img 
          ref={imgRef}
          src={Images.entranceimg}
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
        style={{
          padding: "12px 24px",
          border: "1px solid #333",
          borderRadius: "6px",
          textDecoration: "none",
          color: "#333"
        }}
      >
        접속하기
      </Link>
    </div>
  );
}
