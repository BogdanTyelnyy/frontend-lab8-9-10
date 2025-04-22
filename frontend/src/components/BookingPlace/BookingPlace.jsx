import { useRef } from "react";
import "./BookingPlace.css";
export default function BookingPlace({ text, state, handleClick }) {
    const ref = useRef();
    return (
        <div 
            className={`booking-place ${state}`}
            ref={ref} 
            onClick={state === 'booked' ? null : handleClick}>
            { text }
        </div>
    );
}