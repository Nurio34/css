"use client";
import "./index.css";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useGlobalContext } from "../GlobalProvider";

function Client() {
    const path = usePathname();
    const { setPage } = useGlobalContext();
    useEffect(() => {
        setPage(path);
    }, []);
    const box = 9;

    const [position, setPosition] = useState<{ left: any; top: any }>({
        left: 0,
        top: 0,
    });

    return (
        <main className="Animate_Indicator_Main  flex justify-center items-center overflow-hidden min-h-screen ">
            <section className=" grid grid-cols-3 gap-[1vw] relative overflow-hidden">
                {Array(box)
                    .fill(null)
                    .map((box, ind) => {
                        return (
                            <div
                                key={ind}
                                className=" w-[10vw]  aspect-square bg-base-300 relative"
                                onMouseEnter={(e) => {
                                    setPosition({
                                        left: e.currentTarget.offsetLeft,
                                        top: e.currentTarget.offsetTop,
                                    });
                                }}
                            >
                                {Array(4)
                                    .fill(null)
                                    .map((circle, ind) => {
                                        return (
                                            <span
                                                key={ind}
                                                className={`block absolute w-[4vw] rounded-full aspect-square bg-base-100 z-30 pointer-events-none
                                                    ${
                                                        ind === 2 || ind === 3
                                                            ? "bottom-0"
                                                            : ""
                                                    }
                                                    ${
                                                        ind === 1 || ind === 2
                                                            ? "right-0 translate-x-1/2"
                                                            : ""
                                                    }
                                                    ${
                                                        ind === 0 || ind === 1
                                                            ? "-translate-y-1/2"
                                                            : ""
                                                    }
                                                    ${
                                                        ind === 2 || ind === 3
                                                            ? "translate-y-1/2"
                                                            : ""
                                                    }
                                                    ${
                                                        ind === 0 || ind === 3
                                                            ? "-translate-x-1/2"
                                                            : ""
                                                    }
                                                `}
                                            ></span>
                                        );
                                    })}
                            </div>
                        );
                    })}
                <span
                    className="Animate_Indicator_Span w-[10vw] absolute z-20  aspect-square bg-info pointer-events-none transition-all"
                    style={{
                        left: position.left,
                        top: position.top,
                        transitionDuration: "1s",
                    }}
                ></span>
            </section>
        </main>
    );
}

export default Client;
