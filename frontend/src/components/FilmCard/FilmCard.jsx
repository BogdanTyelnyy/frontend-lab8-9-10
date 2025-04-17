import { useNavigate } from "react-router-dom";
import "./FilmCard.css";
export default function FilmCard({ film }) {
    const {
        poster, title, description, genre, showtime, hall,
    } = film;
    const navigate = useNavigate();
    function handleClick(e) {
        navigate(`/booking:${hall}`);
    }
    return (
        <div className="film-card">
            <img src={poster}/>
            <label><strong>Title: </strong>{title}</label>
            <p><strong>Description: </strong>{description}</p>
            <p><strong>Genre: </strong>{genre}</p>
            <p><strong>Showtime: </strong>{Date(showtime)}</p>
            <button onClick={handleClick}>Reserve</button>
        </div>
    );
}