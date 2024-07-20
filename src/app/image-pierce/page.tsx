"use client";
import "./index.css";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useGlobalContext } from "../GlobalProvider";

function Client() {
    const path = usePathname();
    const { setPage } = useGlobalContext();
    useEffect(() => {
        setPage(path);
    }, []);

    const images = 3;

    const Li = useRef<HTMLLIElement | null>(null);

    const [size, setSize] = useState<number>(0);

    useEffect(() => {
        const handleSize = () => {
            if (Li.current) {
                setSize(Math.ceil(Li.current.getBoundingClientRect().width));
            }
        };

        handleSize();

        window.addEventListener("resize", handleSize);

        return () => window.removeEventListener("resize", handleSize);
    }, []);

    const [isPierced, setIsPierced] = useState<
        { id: number; isPierced: boolean }[]
    >([
        { id: 0, isPierced: false },
        { id: 1, isPierced: false },
        { id: 2, isPierced: false },
    ]);

    return (
        <main className="Animations_Image_Pierce_Main flex justify-center items-center overflow-hidden min-h-screen">
            <ul className="flex gap-[5vw]">
                {Array(images)
                    .fill(null)
                    .map((image, index) => {
                        return (
                            <li
                                ref={index === 0 ? Li : null}
                                key={index}
                                className={`Animations_Image_Pierce_Li w-[20vw] aspect-square relative transition-colors ${
                                    isPierced[index].isPierced
                                        ? ""
                                        : "shadow-md shadow-primary"
                                }`}
                                style={{ transition: "1s ease-in-out" }}
                                onClick={() =>
                                    setIsPierced(
                                        isPierced.map((obj) => {
                                            if (obj.id === index) {
                                                return {
                                                    id: index,
                                                    isPierced: !obj.isPierced,
                                                };
                                            }
                                            return obj;
                                        }),
                                    )
                                }
                            >
                                {Array(size)
                                    .fill(null)
                                    .map((span, ind) => {
                                        return (
                                            <span
                                                key={ind}
                                                className="Animations_Image_Pierce_Span block w-full h-[1px] pointer-events-none  "
                                                style={
                                                    {
                                                        backgroundImage:
                                                            index === 0
                                                                ? `url(/piramit.webp)`
                                                                : index === 1
                                                                ? `url(/cin_seddi.webp)`
                                                                : `url(/tac_mahal.webp)`,
                                                        "--i": size - ind,
                                                        "--size": size,
                                                        transform: isPierced[
                                                            index
                                                        ].isPierced
                                                            ? `translateX(${Math.floor(
                                                                  Math.random() *
                                                                      size -
                                                                      size / 2,
                                                              )}px) rotateZ(${Math.floor(
                                                                  Math.random() *
                                                                      360,
                                                              )}deg)`
                                                            : "",
                                                    } as React.CSSProperties
                                                }
                                            ></span>
                                        );
                                    })}
                            </li>
                        );
                    })}
            </ul>
        </main>
    );
}

export default Client;
