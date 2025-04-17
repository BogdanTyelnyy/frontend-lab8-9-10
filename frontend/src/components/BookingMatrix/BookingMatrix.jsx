import BookingPlace from "../BookingPlace/BookingPlace";
import "./BookingMatrix.css";
export default function BookingMatrix({ hall }) {
    return (
        <div className="booking-matrix">
            {
                hall.places.map((row, ind) => {
                    return (
                        <div key={ind} className="booking-matrix-row">
                            {
                                row.map(el => {
                                    return (
                                        <BookingPlace 
                                            key={el.number} 
                                            text = {el.number}
                                            />
                                    );
                                })
                            }
                        </div>
                    );
                })
            }
        </div>
    );
}