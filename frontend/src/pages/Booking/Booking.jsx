import { useEffect, useState } from "react";
import { initializeHalls } from "../../libs/initializeData";
import axios from "axios";
import BookingMatrix from "../../components/BookingMatrix/BookingMatrix";
import ScrollBar from "../../components/ScrollBar/ScrollBar";

export default function Booking() {
    const [halls, setHalls] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [currentHall, setCurrentHall] = useState(0);
    useEffect(() => {
        async function fetchHalls() {
            try {
                const res = await axios.get('http://localhost:5000/halls');
                setHalls(initializeHalls(res.data));
            } finally {
                setLoaded(true);
            }
        }
        fetchHalls();
    }, []);
    if(!loaded) return (<>Завантаження</>);
    return(
        <div className="booking-overlay">
            <ScrollBar 
                handlePrev={e => setCurrentHall(prev => Math.max(prev - 1, 0))}
                handleNext={e => setCurrentHall(prev => Math.min(prev + 1, halls.length - 1))}
                text={halls[currentHall]?.number}/>
            <BookingMatrix hall={halls[currentHall]}/>
        </div>
    );
}