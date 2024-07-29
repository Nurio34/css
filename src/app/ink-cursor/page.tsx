"use client";

import { useEffect } from "react";

function InkCursor() {
    const circles = 60;
    const first_width = 32;
    const width = circles + first_width;

    const isDomLoaded = typeof window !== "undefined";

    useEffect(() => {
        if (isDomLoaded) {
            const Divs = document.querySelectorAll("div");

            const handle = (e: MouseEvent) => {
                {
                    const x = e.clientX;
                    const y = e.clientY;

                    Divs.forEach((div) => {
                        div.style.top = `${y}px`;
                        div.style.left = `${x}px`;
                    });
                }
            };

            window.addEventListener("mousemove", handle);

            return () => {
                if (isDomLoaded) {
                    window.removeEventListener("mousemove", handle);
                }
            };
        }
    });

    return (
        <main className="min-h-screen min-w-full cursor-none">
            {Array(circles)
                .fill(null)
                .map((item, ind) => {
                    return (
                        <div
                            key={ind}
                            className={`bg-base-content aspect-square rounded-full absolute -translate-x-1/2 -translate-y-1/2`}
                            style={{
                                width: `${width - circles - ind}px`,
                                transition: `0.1s ${0.01 * ind}s linear`,
                            }}
                        ></div>
                    );
                })}
        </main>
    );
}

export default InkCursor;
