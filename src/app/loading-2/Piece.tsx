import "./index.css";

const colorArray = [
  "#ffcccc",
  "#ffb3b3",
  "#ff9999",
  "#ff8080",
  "#ff6666",
  "#ff4d4d",
  "#ff3333",
  "#ff1a1a",
  "#ff66cc",
  "#ff33cc",
  "#cc66ff",
  "#b366ff",
  "#9966ff",
  "#7f66ff",
  "#6666ff",
  "#4d66ff",
  "#3399ff",
  "#66b3ff",
  "#99ccff",
  "#cce0ff",
];

function Piece({ totalPieces, index }: { totalPieces: number; index: number }) {
  return (
    <li
      className="Piece w-1 h-7 rounded-full absolute "
      style={
        {
          "--i": index,
          "--total": totalPieces,
          "--bg": colorArray[index],
        } as React.CSSProperties
      }
    >
      <div className="Piece_Inside w-full h-full "></div>
    </li>
  );
}

export default Piece;
