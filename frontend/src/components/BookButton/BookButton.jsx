import "./BookButton.css";
export default function BookButton({handleClick}) {
    return (
        <button
            className="save-choosen-places"
            onClick={handleClick}>
            Book
        </button>
    );
}