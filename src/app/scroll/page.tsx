"use client";
import { useEffect, useState } from "react";
import Char from "./Components/Char";
import { usePathname } from "next/navigation";
import { useGlobalContext } from "../GlobalProvider";

function Client() {
    const path = usePathname();
    const { setPage } = useGlobalContext();
    const [scrollTop, setScrollTop] = useState<number>(0);
    const [windowHeight, setWindowHeight] = useState<number>(0);

    useEffect(() => {
        setPage(path);
    }, [path, setPage]);

    useEffect(() => {
        const handleScroll = () => {
            if (typeof window !== "undefined") {
                setScrollTop(window.document.documentElement.scrollTop);
            }
        };

        const updateWindowHeight = () => {
            if (typeof window !== "undefined") {
                setWindowHeight(window.innerHeight);
            }
        };

        if (typeof window !== "undefined") {
            window.addEventListener("scroll", handleScroll);
            updateWindowHeight();
            window.addEventListener("resize", updateWindowHeight);
        }

        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener("scroll", handleScroll);
                window.removeEventListener("resize", updateWindowHeight);
            }
        };
    }, []);

    const word = [
        "s",
        "c",
        "r",
        "o",
        "o",
        "l",
        " ",
        "t",
        "o",
        " ",
        "s",
        "e",
        "e",
        " ",
        "t",
        "o",
        " ",
        "m",
        "a",
        "g",
        "i",
        "c",
    ];

    return (
        <main
            className="relative"
            style={{ minHeight: `${windowHeight + word.length * 100}px` }}
        >
            <section
                className="fixed top-[96px] left-0 w-full"
                style={{ height: `${windowHeight}px` }}
            >
                {word.map((ch, ind) => (
                    <Char
                        key={ind}
                        ch={ch}
                        ind={ind}
                        scrollTop={scrollTop}
                        length={word.length}
                    />
                ))}
            </section>
        </main>
    );
}

export default Client;
