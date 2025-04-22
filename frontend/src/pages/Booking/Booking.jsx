import { useEffect, useState } from "react";
import { initializeHalls, cloneHalls } from "../../libs/Data";
import axios from "axios";
import BookingMatrix from "../../components/BookingMatrix/BookingMatrix";
import ScrollBar from "../../components/ScrollBar/ScrollBar";
import { useParams, useNavigate } from "react-router-dom";
import { setBookedPlaces } from "../../services/BookingService";
import BookButton from "../../components/BookButton/BookButton";
import ConfirmBooking from "../../components/ConfirmBooking/ConfirmBooking";

export default function Booking() {
    const { id } = useParams();
    const [halls, setHalls] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [currentHall, setCurrentHall] = useState(0);
    const [confirmation, setConfirmation] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        async function fetchHalls() {
            try {
                const res = await axios.get('http://localhost:5000/halls');
                setHalls(initializeHalls(res.data, id));
            } finally {
                setLoaded(true);
            }
        }
        fetchHalls();
        console.log(id);
    }, []);
    function handleClick(e) {
        setConfirmation(true);
    }
    if(!loaded) return (<>Завантаження</>);
    return(
        <div className="booking-overlay">
            {confirmation && 
                <ConfirmBooking 
                    hide={() => setConfirmation(false)}
                    confirm={() => {
                        setBookedPlaces(id, halls);
                        navigate(0);
                    }}/>
            }
            <ScrollBar 
                handlePrev={e => setCurrentHall(prev => Math.max(prev - 1, 0))}
                handleNext={e => setCurrentHall(prev => Math.min(prev + 1, halls.length - 1))}
                text={halls[currentHall]?.number}/>
            <BookingMatrix 
                hall={halls[currentHall]} 
                setHall={(row, column) => {
                    setHalls(prev => {
                        const New = cloneHalls(prev);
                        New[currentHall].places[row][column].switchState();
                        return New;
                    })
            }}/>
            <BookButton handleClick={handleClick}/>
        </div>
    );
}