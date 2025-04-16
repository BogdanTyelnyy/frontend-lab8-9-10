import "./FilmCard.css";
export default function FilmCard({ film }) {
    const {
        poster, title, description, genre, showtime, 
    } = film;
    return (
        <div className="film-card">
            <img src={poster}/>
            <label>{title}</label>
            <p>{description}</p>
            <p>{genre}</p>
            <p>{Date(showtime)}</p>
        </div>
    );
}