import React, { useState } from 'react';
import '@/Button.css';

const Docent: React.FC = () => {
    const [showDescription, setShowDescription] = useState(false);

    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };

    return (
        <div style={{
            marginTop:"1rem",
            position: "relative",
        }}>
            <button 
                style={
                    {
                        border: '1px solid white',
                        color: 'white',
                        borderRadius: '30px',
                        padding: '0px 5px',
                        fontSize: '0.7em',
                        fontWeight: '600',
                    }
                }
                onClick={toggleDescription}>
                docent</button>
            <div
                style={{
                    position: 'absolute',
                    top: '100%',
                    left: '0',
                    width: '100%',
                    maxHeight: showDescription ? '200px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease-in-out',
                    zIndex: 10,
                }}>

                <div style={{
                    padding: showDescription ? '10px' : '0 10px',
                    backgroundColor: '#f0f0f0',
                    borderRadius: '5px',
                    marginTop: '5px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}>
                    <p>&lt;설명란&gt; 입장 화면으로 각 사용자가 조절한 이미지 위치가 서버에 반영되는 페이지.</p>
                </div>
            </div>
        </div>
    );
};

export default Docent;