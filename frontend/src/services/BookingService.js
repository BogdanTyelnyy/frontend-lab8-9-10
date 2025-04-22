export function getBookedPlaces(film) {
    const res = localStorage.getItem(toString(film));
    console.log(res);
}

export function setBookedPlaces(film, places) {
    let res = [];
    for(let i = 0; i < places.length; i++) {
        for(let j = 0; j < places[i].length; j++) {
            if(!places[i][j].isEmpty()) {
                res.push(places[i][j].number);
            }
        }
    }
    localStorage.setItem(film, JSON.stringify(res));
}