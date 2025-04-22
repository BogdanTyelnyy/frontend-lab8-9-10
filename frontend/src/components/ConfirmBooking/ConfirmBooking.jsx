import { useRef } from "react";
import "./ConfirmBooking.css";
export default function ConfirmBooking({ hide, confirm }) {
    const ref = useRef();
    function handleOutsideClick(e) {
        if(e.target === ref.current) {
            hide();
        }
    }
    function check(e) {
        const form = e.target;
        if(form[0].value === '') 
            throw form[0];
        if(form[1].value === '')
            throw form[1];
        if(form[2].value === '')
            throw form[2];
        for(let i of form[1].value) {
            if(!('0123456789'.includes(i))) throw form[1];
        }
        return true;
    }
    function handleConfirmation(e) {
        e.preventDefault();
        try {
            if(check(e)) {
                confirm();
            }
        } catch(err) {
            err.style.border = "1px solid red";
            setTimeout(() => {
                err.style.border = "";
            }, 1000);
        }
    }
    return (
        <form
            ref={ref}
            onSubmit={handleConfirmation}
            className="confirm-booking-overlay"
            onClick={handleOutsideClick}>
            <div className="confirm-booking">
                <strong>Input your data:</strong>
                <input type="text" placeholder="Name..."></input>
                <label>+38<input type="tel" placeholder="XXXXXXXXXX"></input></label>
                <input type="email" placeholder="example@mail.com"></input>
                <button type="submit">Confirm</button>
            </div>
        </form>
    );
}