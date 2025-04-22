import BookingPlace from "../BookingPlace/BookingPlace";
import "./BookingMatrix.css";
export default function BookingMatrix({ hall, setHall }) {
    return (
        <div className="booking-matrix">
            {
                hall.places.map((row, row_ind) => {
                    return (
                        <div key={row_ind} className="booking-matrix-row">
                            {
                                row.map((el, col_ind) => {
                                    return (
                                        <BookingPlace 
                                            key={el.number} 
                                            text = {el.number}
                                            state={el.state}
                                            handleClick={e => setHall(row_ind, col_ind, 'used')}
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