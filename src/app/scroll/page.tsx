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
    }, [path, setPage]);

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
        const handleScroll = () => {
            if (typeof window !== "undefined") {
                setScrollTop(window.document.documentElement.scrollTop);
            }
        };

        if (typeof window !== "undefined") {
            window.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener("scroll", handleScroll);
            }
        };
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
