export default function Counter() {
    let count = 1;
    return function() {
        return count++;
    }
}