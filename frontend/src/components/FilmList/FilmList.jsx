import { useContext, useState } from "react";
import { filmsContext } from "../../App";
import FilmCard from "../FilmCard/FilmCard";

export default function FilmList() {
    const { films, loaded } = useContext(filmsContext);
    const [search, setSearch] = useState('');

    if(!loaded) return (<div>Завантаження</div>);
    return (
        <div className="film-list">
            <input 
                placeholder="Search by name..." 
                onChange={e => setSearch(e.target.value.trim().toLowerCase())}/>
            {
                films
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