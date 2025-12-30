function Card({ children }) {
    const style = {
        border: "1px solid #ccc",
        padding: "1rem",
        margin: "1rem 0"   
    };
    return <div style={style}>{children}</div>
}
export default Card;