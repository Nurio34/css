import { useGlobalContext } from "@/app/GlobalProvider";
import { useState } from "react";

function Window({
    window_size,
    index,
    ind,
}: {
    window_size: number;
    index: number;
    ind: number;
}) {
    const { window } = useGlobalContext();

    const isThisWindow = window.some(
        (obj) => obj.block === index && obj.window === ind,
    );

    const [color, setColor] = useState<string>("white");

    return (
        <button
            type="button"
            disabled={!isThisWindow}
            className={`RotatingCube_Window overflow-hidden ${
                isThisWindow ? "Light_Animation" : ""
            }
                `}
            style={
                {
                    width: window_size,
                    aspectRatio: 1,
                    "--i": ind + 1,
                    "--color": color,
                } as React.CSSProperties
            }
            onClick={() => setColor("rgba(128, 214, 248, 0.7)")}
        ></button>
    );
}

export default Window;
