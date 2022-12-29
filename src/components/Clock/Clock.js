import { useEffect, useState } from "react";

import './Clock.css';

export default function Clock(props) {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, [])
    
    return (
        <div className="time">
            {time.toLocaleTimeString()}
        </div>
    );
}