import "./ScrollBar.css";
export default function ScrollBar({handlePrev, handleNext, text}) {
    return (
        <div className="scroll-bar">
            <button onClick={handlePrev}>{"<"}</button>
            <p>Hall number {text}</p>
            <button onClick={handleNext}>{">"}</button>
        </div>
    );
}