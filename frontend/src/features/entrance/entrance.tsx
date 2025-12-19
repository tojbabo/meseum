// HomePage.tsx
import React, { useState, useRef, useEffect} from "react";
import { Link } from "react-router-dom";
import {urls} from "@/urls.ts";
import { getTodayCount, setEntranceLocation, getEntranceLocation } from "@/features/entrance/api";
import Docent from "@/shared/docent";

export default function Entrance() {
  const imgRef = useRef<HTMLImageElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  const [boxsz, setBoxsz] = useState({width:0, height:0});
  const [imgwidth, setWidth] = useState(0);
  const [pos, setPos] = useState({x:0, y:0});
  const [dragging, setDragging] = useState(false);
  const [start, setStart] = useState({x:0, y:0});
  const [imgSize, setImgSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    const imgfetch = async () => {
      const loadlocation = await getEntranceLocation()
      let nx = 0
      let ny = 0
      if(loadlocation != null){
        nx = loadlocation.x * imgSize.width;
        ny = loadlocation.y * imgSize.height;
      }
      else{
        nx = (imgSize.width/2 - boxsz.width/2)
        ny = (imgSize.height/2 - boxsz.height/2)
      }
      setPos({x:nx, y:ny})
    };

    if(boxsz.width == 0){
      if(boxRef.current){
        const rect = boxRef.current.getBoundingClientRect();
        const bw = rect.width;
        const bh = rect.height;
        setBoxsz({width:bw, height:bh});
        setWidth(bw * 2)
      }
    }
    else if(imgSize.width == 0){
      if(imgRef.current){
        const rect = imgRef.current.getBoundingClientRect();
        const rw = rect.width;
        const rh = rect.height;
        setImgSize({width: rw, height: rh});
      }
    }
    else{
      getTodayCount();
      imgfetch();
    }
  },[imgwidth, imgSize]);
  
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
    const x = pos.x /imgSize.width
    const y = pos.y /imgSize.height
    setEntranceLocation(validxy(x, y));
  };
  
  const validxy = (x:number, y:number) => {
    const mx = boxsz.width - imgSize.width;
    const my = boxsz.height - imgSize.height;

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
        <div
          style={{
            padding: '0.5rem',
          }}>
          <div className="image-container" ref={boxRef}>
            <img
              ref={imgRef}
              src={urls.entranceimg}
              style={{
                userSelect: "none",
                position: "absolute",
                width: `${imgwidth}px`,
                left: pos.x,
                top: pos.y,
                cursor: dragging ? "grabbing" : "grab"
              }}
              onDragStart={(e)=>e.preventDefault()}
              onMouseDown={onMouseDown}
            />
          </div>
        </div>

        <div style={{textAlign : "center"}}>
          <Link to="/home" className="entrance-button">
            입장
          </Link>
        </div>
        <hr/>
        <Docent/>
      </div>
    </div>
  );
}
