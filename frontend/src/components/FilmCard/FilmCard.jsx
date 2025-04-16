import "./FilmCard.css";
export default function FilmCard({ film }) {
    const {
        poster, title, description, genre, showtime, 
    } = film;
    return (
        <div className="film-card">
            <img src={poster}/>
            <label><strong>Title: </strong>{title}</label>
            <p><strong>Description: </strong>{description}</p>
            <p><strong>Genre: </strong>{genre}</p>
            <p><strong>Showtime: </strong>{Date(showtime)}</p>
        </div>
    );
}