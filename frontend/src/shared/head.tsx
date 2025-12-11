import React, { useEffect } from 'react';
import {urls} from '@/urls';

const Head: React.FC = () => {
    const trackVisitor = async () => {
        try {
            // [1] 방문자 카운팅 API 엔드포인트 호출
            await fetch(`${urls.apiurl}/api/set/count`, {
                method: 'POST',
                credentials: 'include', // 백엔드와 쿠키를 주고받기 위해 필수
                headers: {'Content-Type': 'application/json',},
            });
            
        } catch {}
    };

    useEffect(() => {
        trackVisitor();
    }, []);

    return (
        <div style={{ display: 'none' }}>
            {/* 시각적으로는 보이지 않지만, 기능적으로만 존재하는 div */}
        </div>
    );
};

export default Head;