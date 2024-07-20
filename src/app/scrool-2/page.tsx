"use client";

import { usePathname } from "next/navigation";
import { useGlobalContext } from "../GlobalProvider";
import { useEffect, useState } from "react";
import "./index.css";

function Scroll2() {
    const path = usePathname();
    const { setPage } = useGlobalContext();
    const [scrollY, setScrollY] = useState<number>(0);
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
    const size = 320;
    const pieces_per_floor = 20;
    const piece_size = size / pieces_per_floor;
    const total_pieces = pieces_per_floor * pieces_per_floor;
    const scroll_height = 111.11111450195312;

    useEffect(() => {
        setPage(path);

        const handleScroll = () => {
            if (typeof window !== "undefined") {
                setScrollY(window.document.documentElement.scrollTop);
            }
        };

        const updateWindowSize = () => {
            if (typeof window !== "undefined") {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }
        };

        if (typeof window !== "undefined") {
            window.addEventListener("scroll", handleScroll);
            window.addEventListener("resize", updateWindowSize);
            updateWindowSize();
        }

        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener("scroll", handleScroll);
                window.removeEventListener("resize", updateWindowSize);
            }
        };
    }, [path, setPage]);

    return (
        <main
            className="flex justify-center items-center overflow-hidden min-h-screen"
            style={
                {
                    "--size": piece_size,
                    "--box_size": size,
                    minHeight:
                        windowSize.height + scroll_height * pieces_per_floor,
                } as React.CSSProperties
            }
        >
            {Array(total_pieces)
                .fill(null)
                .map((piece, ind) => {
                    return (
                        <div
                            key={ind}
                            className="Scroll2_Piece aspect-square overflow-hidden"
                            style={
                                {
                                    width: piece_size,
                                    "--x":
                                        scrollY > scroll_height * ind
                                            ? ind % pieces_per_floor
                                            : Math.floor(
                                                  Math.random() *
                                                      windowSize.width -
                                                      windowSize.width / 2,
                                              ),
                                    "--y":
                                        scrollY > scroll_height * ind
                                            ? Math.floor(ind / pieces_per_floor)
                                            : Math.floor(
                                                  Math.random() *
                                                      windowSize.height -
                                                      windowSize.height / 2,
                                              ),
                                } as React.CSSProperties
                            }
                        ></div>
                    );
                })}
        </main>
    );
}

export default Scroll2;
