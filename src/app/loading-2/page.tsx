"use client";

import Piece from "./Piece";
import "./index.css";

function Loading2() {
  const totalPieces = 20;

  return (
    <main className=" w-full min-h-screen grid place-content-center">
      <ul className="Container w-20 aspect-square rounded-full relative flex justify-center items-center">
        {[...Array(totalPieces)].map((_, index) => (
          <Piece key={index} totalPieces={totalPieces} index={index} />
        ))}
      </ul>
    </main>
  );
}

export default Loading2;
