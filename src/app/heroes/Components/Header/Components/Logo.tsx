import React, { Dispatch, SetStateAction } from "react";

function Logo({
    isRotating,
    setIsRotating,
}: {
    isRotating: boolean;
    setIsRotating: Dispatch<SetStateAction<boolean>>;
}) {
    return (
        <div
            className=" font-bold text-2xl font-serif *:
                bg-gradient-to-br from-red-500 via-purple-500 to-orange-500 text-transparent bg-clip-text
            "
            style={{ fontVariant: "small-caps" }}
        >
            Heroes
        </div>
    );
}

export default Logo;
