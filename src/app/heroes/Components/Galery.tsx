import Image from "next/image";
import React, { useEffect, useState } from "react";

let int: null | NodeJS.Timeout = null;
let time: null | NodeJS.Timeout = null;

function Galery({
    isRotating,
    setIsRotating,
}: {
    isRotating: boolean;
    setIsRotating: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const totalPictures = 8;
    const width = "240px";

    const images = [
        "https://i.pinimg.com/564x/36/f1/f3/36f1f3a1edb550d88117637b00aeaae7.jpg",
        "https://i.pinimg.com/564x/25/95/b1/2595b1eb2024a4b3c15fc18c74da4963.jpg",
        "https://i.pinimg.com/564x/e4/61/0b/e4610bdb3b49e29dfbeaf4973b327884.jpg",
        "https://i.pinimg.com/564x/e6/e0/7a/e6e07ae389947ad2ae1ea856ae5e8025.jpg",
        "https://i.pinimg.com/564x/9a/8f/2e/9a8f2e7b2ddef3c343d8e765f664bc96.jpg",
        "https://i.pinimg.com/564x/3d/9e/d3/3d9ed383a39faac0722252a25afd5eff.jpg",
        "https://i.pinimg.com/564x/99/7a/58/997a583674278cb214e6acd87cb59a4c.jpg",
        "https://i.pinimg.com/564x/4d/4d/4f/4d4d4f29b5280c2374c9b65676d6c31d.jpg",
    ];

    const [deg, setDeg] = useState<number>(0);

    useEffect(() => {
        if (isRotating) {
            int = setInterval(() => {
                setDeg((pre) => pre - 1);
            }, 100);
        }

        return () => {
            if (int && isRotating) {
                clearInterval(int);
            }
        };
    }, [isRotating]);

    return (
        <section
            className="flex justify-center items-center"
            onMouseMove={(e) => {
                setIsRotating(false);

                if (time) {
                    clearTimeout(time);
                }

                setDeg(e.clientX);
                time = setTimeout(() => {
                    setIsRotating(true);
                }, 2000);
            }}
        >
            <div
                className="Box1 transition-all"
                style={
                    {
                        "--w": width,
                        transform: `perspective(1000px) rotateY(${deg}deg)`,
                    } as React.CSSProperties
                }
            >
                {Array.from({ length: totalPictures }).map((item, index) => {
                    return (
                        <figure
                            key={index}
                            style={
                                {
                                    "--i": index,
                                    "--total": totalPictures,
                                } as React.CSSProperties
                            }
                        >
                            <Image src={images[index]} fill alt="super hero" />
                        </figure>
                    );
                })}
            </div>
        </section>
    );
}

export default Galery;
