"use client";
import { useEffect, useState } from "react";
import Char from "./Components/Char";
import { usePathname } from "next/navigation";
import { useGlobalContext } from "../GlobalProvider";

function Client() {
    const path = usePathname();
    const { setPage } = useGlobalContext();
    useEffect(() => {
        setPage(path);
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

    const [scrollTop, setScrollTop] = useState<number>(0);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScrollTop(window.document.documentElement.scrollTop);
        });
    }, []);

    return (
        <main
            className=" relative"
            style={{ minHeight: `${window.innerHeight + word.length * 100}px` }}
        >
            <section
                className={` fixed top-[${96}px] left-0 w-full`}
                style={{ height: `${window.innerHeight}px` }}
            >
                {word.map((ch, ind) => {
                    return (
                        <Char
                            key={ind}
                            ch={ch}
                            ind={ind}
                            scrollTop={scrollTop}
                            length={word.length}
                        />
                    );
                })}
            </section>
        </main>
    );
}

export default Client;
