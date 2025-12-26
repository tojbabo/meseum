import React, { useState, useEffect } from 'react';

const Pamphlet: React.FC = () => {
    const [openflag, setOpen] = useState(false);
    
    const closeside = () => {
        setOpen(false)

    }
    const openside = () => {
        setOpen(true)
    }

    useEffect(() => {
    }, []);

    return (
        <div style={{
            left:'0',
            position: 'absolute',
            zIndex: '2',
            width: openflag? '100%' : '45px',  
            height: '100%',
            display: 'flex',
            flexFlow: 'row',
            transition: 'all 0.4s ease'
            }}>

            {/** 아이콘 바 */}
            <div style={{
                // borderRight: '1px solid #cccccc',
                backgroundColor:'#2a2a2a',
                width: '45px',
                height: '100%',
                padding: '0.8rem'
            }}
            onClick={openside}
            onMouseOver={openside}
            >
                <div>
                    <img
                    src={"/src/assets/mainicon.png"}
                    style={{width:"100%"}}
                    />
                </div>
                

            </div>

            {/** 텍스트 버튼 바 */}
            <div style={{
                // borderRight: '1px solid #cccccc',
                backgroundColor:'#2a2a2a',
                width: openflag? '200px' : '0',
                height: '100%',
                transition: 'all 0.2s ease'
            }}>
            </div>
            
            {/** 암흑 공간 */}
            <div style={{
                flexGrow: '1',
                height: '100%',
                backgroundColor: '#000000a0',
                
            }} 
            onClick={closeside}
            onMouseOver={closeside}
            />
        </div>
    );
};

export default Pamphlet;