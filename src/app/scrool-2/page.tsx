"use client";

import { usePathname } from "next/navigation";
import { useGlobalContext } from "../GlobalProvider";
import { useEffect, useState } from "react";
import "./index.css";

function Scroll2() {
    const path = usePathname();
    const { setPage } = useGlobalContext();
    const [scrollY, setScrollY] = useState<number>(0);
    console.log({ scrollY });

    useEffect(() => {
        setPage(path);

        const handleScroll = () => {
            setScrollY(window.document.documentElement.scrollTop);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const size = 320;
    const pieces_per_floor = 20;
    const piece_size = size / pieces_per_floor;
    const total_pieces = pieces_per_floor * pieces_per_floor;
    const scroll_height = 111.11111450195312;

    return (
        <main
            className="flex justify-center items-center overflow-hidden min-h-screen "
            style={
                {
                    "--size": piece_size,
                    "--box_size": size,
                    minHeight:
                        window.innerHeight + scroll_height * pieces_per_floor,
                } as React.CSSProperties
            }
        >
            {Array(total_pieces)
                .fill(null)
                .map((piece, ind) => {
                    return (
                        <div
                            key={ind}
                            className="Scroll2_Piece aspect-square overflow-hidden "
                            style={
                                {
                                    width: piece_size,
                                    "--x":
                                        scrollY > scroll_height * ind
                                            ? ind % pieces_per_floor
                                            : Math.floor(
                                                  Math.random() *
                                                      window.innerWidth -
                                                      window.innerWidth / 2,
                                              ),
                                    "--y":
                                        scrollY > scroll_height * ind
                                            ? Math.floor(ind / pieces_per_floor)
                                            : Math.floor(
                                                  Math.random() *
                                                      window.innerHeight -
                                                      window.innerHeight / 2,
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
