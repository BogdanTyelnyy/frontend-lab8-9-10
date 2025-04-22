export function getBookedPlaces(film) {
    const res = localStorage.getItem(film);
    return res ? JSON.parse(res) : [];
}

export function setBookedPlaces(film, halls) {
    let res = [];
    for(const {places} of halls) {
        for(let i = 0; i < places.length; i++) {
            for(let j = 0; j < places[i].length; j++) {
                if(!places[i][j].isEmpty()) {
                    res.push(places[i][j].number);
                }
            }
        }
    }
    localStorage.setItem(film, JSON.stringify(res));
}