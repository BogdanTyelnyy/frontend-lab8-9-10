export default function Counter() {
    let count = 0;
    return function() {
        return count++;
    }
}