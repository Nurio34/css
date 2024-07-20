"use client";

import { usePathname } from "next/navigation";
import "./index.css";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../GlobalProvider";

function Client() {
    const path = usePathname();
    const { setPage } = useGlobalContext();
    setPage(path);

    const [bunchOfParticles, setBunchOfParticles] = useState<number>(0);
    const [particles, setParticles] = useState<number>(50);

    useEffect(() => {
        const time = setTimeout(() => {
            if (bunchOfParticles > 0) {
                setBunchOfParticles((pre) => pre - 1);
            }
        }, 5000);

        return () => clearTimeout(time);
    }, [bunchOfParticles]);

    return (
        <main className="Animate_Blast_Main relative flex justify-center items-center overflow-hidden min-h-screen">
            <svg className=" absolute -z-10">
                <filter id="gooey">
                    <feGaussianBlur in="SourceGraphic" stdDeviation={"10"} />
                    <feColorMatrix
                        values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 50 -10
            "
                    />
                </filter>
            </svg>
            <div
                className="w-[25vw] min-w-80 aspect-square bg-gradient-to-r from-error to-info rounded-full
                    felx justify-center items-center
                "
                onClick={() => setBunchOfParticles((pre) => pre + 1)}
            >
                {Array(bunchOfParticles)
                    .fill(null)
                    .map((bunch) => {
                        return (
                            <>
                                {Array(particles)
                                    .fill(null)
                                    .map((particle, ind) => {
                                        const directionX =
                                            Math.random() > 0.5 ? 1 : -1;
                                        const additionX =
                                            directionX === 1 ? 300 : -300;
                                        const transX = Math.floor(
                                            ((Math.random() *
                                                window.innerWidth) /
                                                2) *
                                                directionX +
                                                additionX,
                                        );

                                        const directionY =
                                            Math.random() > 0.5 ? 1 : -1;
                                        const additionY =
                                            directionY === 1 ? 300 : -300;

                                        const transY = Math.floor(
                                            Math.random() *
                                                window.innerHeight *
                                                directionY +
                                                additionY,
                                        );

                                        const size = Math.floor(
                                            Math.random() * 200,
                                        );
                                        return (
                                            <span
                                                key={ind}
                                                className="block Animate_Blast_Span w-10 aspect-square bg-gradient-to-r from-error to-info rounded-full"
                                                style={
                                                    {
                                                        "--transX": transX,
                                                        "--transY": transY,
                                                        width: size,
                                                        aspectRatio: 1,
                                                    } as React.CSSProperties
                                                }
                                            ></span>
                                        );
                                    })}
                            </>
                        );
                    })}
            </div>
        </main>
    );
}

export default Client;
