import { useContext } from "react";
import { filmsContext } from "../../App";
import FilmCard from "../FilmCard/FilmCard";

export default function FilmList() {
    const { films, loaded } = useContext(filmsContext);

    if(!loaded) return (<div>Завантаження</div>);
    return (
        <div className="film-list">
            {films.map((film, key) => {
                return (<FilmCard key={key} film={film}/>);
            })}
        </div>
    );
}