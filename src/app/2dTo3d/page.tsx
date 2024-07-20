"use client";

import { usePathname } from "next/navigation";
import "./index.css";
import { useGlobalContext } from "../GlobalProvider";

function Client() {
    const spans = 40;

    const path = usePathname();
    const { setPage } = useGlobalContext();
    setPage(path);

    return (
        <main className="Animations_2dTo3d_Main flex justify-center items-center min-h-screen">
            <div
                className="Animations_2dTo3d_Div min-w-8 w-[25vw] aspect-[1.27]
            "
            >
                {Array(spans)
                    .fill(null)
                    .map((span, ind) => {
                        return (
                            <span
                                className="block absolute  Animations_2dTo3d_Span w-full h-full"
                                key={ind}
                                style={{ "--ind": ind } as React.CSSProperties}
                            ></span>
                        );
                    })}
            </div>
        </main>
    );
}

export default Client;
