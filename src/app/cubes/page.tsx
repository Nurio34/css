"use client";
import "./index.css";

import Box from "./Components/Box";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useGlobalContext } from "../GlobalProvider";

function Client() {
    const path = usePathname();
    const { setPage } = useGlobalContext();
    setPage(path);

    const box = 100;
    const boxesToFloat = 5;

    const [currentBoxes, setCurrentBoxes] = useState<number[]>([] as number[]);

    useEffect(() => {
        const int = setInterval(() => {
            const boxes = [] as number[];

            Array(boxesToFloat)
                .fill(null)
                .forEach((item) => {
                    const random = Math.floor(Math.random() * box + 1);
                    boxes.push(random);
                });
            setCurrentBoxes(boxes);
        }, 1000);
        return () => clearInterval(int);
    }, []);

    return (
        <main className="flex justify-center items-center overflow-hidden min-h-screen relative">
            <section
                className="Animation3_Container"
                style={{ "--length": box } as React.CSSProperties}
            >
                {Array(box)
                    .fill(null)
                    .map((item, ind) => {
                        return (
                            <Box
                                key={ind}
                                ind={ind}
                                currentBoxes={currentBoxes}
                            />
                        );
                    })}
            </section>
        </main>
    );
}

export default Client;
