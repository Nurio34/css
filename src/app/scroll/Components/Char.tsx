import React, { useState, useEffect } from "react";

function Char({
    ch,
    ind,
    scrollTop,
    length,
}: {
    ch: string;
    ind: number;
    scrollTop: number;
    length: number;
}) {
    const [randomX, setRandomX] = useState<number>(0);
    const [randomY, setRandomY] = useState<number>(0);

    useEffect(() => {
        const maxWidth = window.innerWidth;
        setRandomX(Math.floor(Math.random() * maxWidth));
        setRandomY(Math.floor(Math.random() * window.innerHeight));
    }, []);

    return (
        <span
            key={ind}
            className={`absolute transition-transform ${
                scrollTop >= (ind + 1) * 100
                    ? "text-primary top-0 left-0 capitalize font-bold"
                    : ""
            }`}
            style={{
                top: scrollTop >= (ind + 1) * 100 ? "50%" : randomY,
                left:
                    scrollTop >= (ind + 1) * 100 ? `${50 + length}%` : randomX,
                transform: `${
                    scrollTop >= (ind + 1) * 100
                        ? `translateY(-50%) translateX(calc(-50% - ${
                              (length - ind) * 1
                          }rem))`
                        : ""
                }`,
                filter: `${
                    scrollTop >= (ind + 1) * 100
                        ? "drop-shadow(0 0 10px white) drop-shadow(0 0 20px white)"
                        : ""
                }`,
            }}
        >
            {ch}
        </span>
    );
}

export default Char;
