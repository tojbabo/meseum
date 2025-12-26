// HomePage.tsx
import {useEffect} from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  useEffect(() => {
  },[]);
  

  return (
    <div className="homepage-container">
      <div className="homepage-content">
        <div className="flexline">
          <p style={{flexGrow:'1', fontSize: '12px'}}>공지사항</p>
          <Link className="iconbtn" to="/write">+</Link>
        </div>
        <hr style={{marginTop: '0.1rem'}}/>
        <div
          style={{
            padding: '0.5rem',
          }}>
        </div>

      </div>
    </div>
  );
}
