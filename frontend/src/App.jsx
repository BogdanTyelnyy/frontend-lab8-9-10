import { Routes, Route } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import FilmList from "./components/FilmList/FilmList";

export const filmsContext = createContext(null);

function App() {
    const [films, setFilms] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        async function fetchFilms() {
            try {
                const res = await axios.get('http://localhost:5000/films');
                setFilms(res.data);
            } finally {
                setLoaded(true);
            }
        }
        fetchFilms();
    }, []);

    return (
        <filmsContext.Provider value={{films, loaded}}>
            <Routes>
                <Route path="/" element={<FilmList />} />
                <Route path="/test" element={<div>Test</div>} />
            </Routes>
        </filmsContext.Provider>
    );
}

export default App;