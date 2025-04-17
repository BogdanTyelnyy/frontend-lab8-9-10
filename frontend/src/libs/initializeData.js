import Place from "../classes/Place";
import Counter from "../classes/Counter";

export function initializeHalls(data) {
    const res = [];
    for(let hall of data) {
        const counter = Counter();
        res.push({
            number: hall.number, 
            places: [],
        });
        const { rows, columns } = hall.size;
        for(let row = 0; row < rows; row++) {
            res.at(-1).places.push([]);
            for(let column = 0; column < columns; column++) {
                res.at(-1).places.at(-1).push(new Place(counter()));
            }
        }
    }
    return res;
}