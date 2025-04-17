import { useContext, useState } from "react";
import { filmsContext } from "../../App";
import FilmCard from "../FilmCard/FilmCard";
import "./FilmList.css";

export default function FilmList({ search }) {
    const { films, loaded } = useContext(filmsContext);
    if(!loaded) return (<div>Завантаження</div>);
    return (
        <div className="film-list">
            {films
                .filter(film => {
                    return film.title.toLowerCase().includes(search) || search == '';
                })
                .map((film, key) => {
                    return (<FilmCard key={key} film={film}/>);
                })
            }
        </div>
    );
}