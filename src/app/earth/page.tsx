"use client";
import { usePathname } from "next/navigation";
import "./index.css";
import { useGlobalContext } from "../GlobalProvider";

function Client() {
    const path = usePathname();
    const { setPage } = useGlobalContext();
    setPage(path);

    const signals = 5;
    const signal_arrival_time = 20;

    return (
        <main className="Animations_Earth_Main flex justify-center items-center overflow-hidden min-h-screen">
            <figure
                className=" Animations_Earth_Figure relative w-[20vw] aspect-square rounded-full "
                style={
                    {
                        "--total_signals": signals,
                        "--signal_arrival_time": signal_arrival_time,
                    } as React.CSSProperties
                }
            >
                {Array(signals)
                    .fill(null)
                    .map((signal, index) => {
                        return (
                            <span
                                key={index}
                                className="Animations_Earth_Span block absolute top-0 left-0 w-full h-full rounded-full"
                                style={
                                    {
                                        "--index": index,
                                    } as React.CSSProperties
                                }
                            ></span>
                        );
                    })}
            </figure>
        </main>
    );
}

export default Client;
