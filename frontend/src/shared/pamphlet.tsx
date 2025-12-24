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
            width: openflag? '100%' : '30px',  
            height: '100%',
            display: 'flex',
            flexFlow: 'row'
            }}>

            <div style={{
                // borderRight: '1px solid #cccccc',
                backgroundColor:'#2a2a2a',
                width: '30px',
                height: '100%'
            }}
            onClick={openside}
            >

            </div>

            <div style={{
                display: openflag? 'block' : 'none',
                // borderRight: '1px solid #cccccc',
                backgroundColor:'#2a2a2a',
                width: '200px',
                height: '100%'
            }}>
            </div>
            
            <div style={{
                flexGrow: '1',
                height: '100%',
                display: openflag? 'block' : 'none',
                backgroundColor: '#000000a0'
                
            }} onClick={closeside}/>
        </div>
    );
};

export default Pamphlet;