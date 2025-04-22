import { useRef } from "react";
import "./ConfirmBooking.css";
export default function ConfirmBooking({ hide, confirm }) {
    const ref = useRef();
    function handleClick(e) {
        if(e.target === ref.current) {
            hide();
        }
    }
    return (
        <div 
            ref={ref}
            className="confirm-booking-overlay"
            onClick={handleClick}>
            <div className="confirm-booking">
                <input></input>
                <input></input>
                <input></input>
                <button onClick={confirm}>Confirm</button>
            </div>
        </div>
    );
}