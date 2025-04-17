import { Routes, Route } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Home from "./pages/Home/Home";
import Booking from "./pages/Booking/Booking";

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
                <Route path="/" element={<Home />} />
                <Route path="/booking" element={<Booking />} />
            </Routes>
        </filmsContext.Provider>
    );
}

export default App;