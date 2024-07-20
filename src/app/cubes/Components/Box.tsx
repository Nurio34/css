import { useEffect, useState } from "react";

let time: null | NodeJS.Timeout = null;

function Box({ ind, currentBoxes }: { ind: number; currentBoxes: number[] }) {
    const [isFloating, setIsFloating] = useState<boolean>(false);

    useEffect(() => {
        if (currentBoxes.includes(ind)) {
            setIsFloating(true);
        }
    }, [currentBoxes, ind]);

    useEffect(() => {
        if (isFloating) {
            time = setTimeout(() => {
                setIsFloating(false);
            }, 4000);
        }
    }, [isFloating]);

    return (
        <div
            className="Animation3_Box transition-all"
            style={
                {
                    "--i": ind,
                    "--translateX": ind % 10,
                    "--line": Math.floor(ind / 10),
                    transform: `perspective(1000px) rotateX(-30deg) rotateY(30deg)
                                translateX(calc(70px * var(--translateX)))
                                translateZ(calc(-70px * var(--line))) translateY(${
                                    isFloating ? "-100px" : "0px"
                                })`,
                    transitionDelay: `${
                        isFloating ? currentBoxes.indexOf(ind) * 0.2 : 0.5
                    }s`,
                } as React.CSSProperties
            }
        >
            <span
                style={
                    {
                        "--bg": "purple",
                        "--rotateX": "0deg",
                        "--rotateY": 0,
                    } as React.CSSProperties
                }
            ></span>
            <span
                style={
                    {
                        "--bg": "yellow",
                        "--rotateX": "0deg",
                        "--rotateY": "90deg",
                    } as React.CSSProperties
                }
            ></span>
            <span
                style={
                    {
                        "--bg": "orange",
                        "--rotateX": "0deg",
                        "--rotateY": "180deg",
                    } as React.CSSProperties
                }
            ></span>
            <span
                style={
                    {
                        "--bg": "pink",
                        "--rotateX": "0deg",
                        "--rotateY": "270deg",
                    } as React.CSSProperties
                }
            ></span>
            <span
                style={
                    {
                        "--bg": "blue",
                        "--rotateX": "90deg",
                        "--rotateY": "0deg",
                    } as React.CSSProperties
                }
            ></span>
            <span
                style={
                    {
                        "--bg": "purple",
                        "--rotateX": "270deg",
                        "--rotateY": "0deg",
                    } as React.CSSProperties
                }
            ></span>
        </div>
    );
}

export default Box;
