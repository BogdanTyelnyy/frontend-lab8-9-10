import FilmList from "../../components/FilmList/FilmList";
import { useState } from "react";
import "./Home.css";

export default function Home() {
    const [search, setSearch] = useState('');
    return (
        <div className="home">
            <input 
                className="search"
                placeholder="Search by name..." 
                onChange={e => setSearch(e.target.value.trim().toLowerCase())}/>
            <FilmList search={search}/>
        </div>
    );
}