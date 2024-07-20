import React, {
    Dispatch,
    SetStateAction,
    useEffect,
    useRef,
    useState,
} from "react";

function ActionButton({
    isRotating,
    setIsRotating,
}: {
    isRotating: boolean;
    setIsRotating: Dispatch<SetStateAction<boolean>>;
}) {
    const actionObj = {
        start: ["s", "t", "o", "p", "", "i", "t"],
        stop: ["s", "t", "a", "r", "t", ".", "."],
    };
    const [containerStatus, setContainerStatus] = useState<
        "bottom" | "top" | "none"
    >("none");
    const [transY, setTransy] = useState<number>(0);

    return (
        <button
            className={`btn btn-sm overflow-hidden
                ${
                    containerStatus === "bottom"
                        ? "btn-error"
                        : containerStatus === "none"
                        ? "btn-error"
                        : "btn-success"
                }
                `}
            onMouseEnter={() => {
                if (containerStatus === "none" || containerStatus || "top") {
                    setContainerStatus("bottom");
                    setTransy(-32);
                }
            }}
            onClick={() => {
                if (containerStatus === "bottom") {
                    setContainerStatus("top");
                    setTransy(32);
                    setIsRotating(false);
                } else {
                    setContainerStatus("bottom");
                    setTransy(-32);
                    setIsRotating(true);
                }
            }}
        >
            <span
                className={`flex tracking-wider ${
                    containerStatus === "bottom"
                        ? " translate-y-8"
                        : containerStatus === "top"
                        ? " -translate-y-8"
                        : ""
                }`}
            >
                {actionObj[
                    containerStatus === "none"
                        ? "start"
                        : containerStatus === "bottom"
                        ? "start"
                        : "stop"
                ].map((ch, ind) => {
                    return (
                        <span
                            key={ind}
                            className={` block uppercase transition-transform ${
                                ch === "" ? "px-1" : ""
                            } 
                                translate-y-8
                            `}
                            style={{
                                transform: `translateY(${transY}px)`,
                                transitionDelay: `${ind / 10}s`,
                            }}
                        >
                            {ch}
                        </span>
                    );
                })}
            </span>
        </button>
    );
}

export default ActionButton;
