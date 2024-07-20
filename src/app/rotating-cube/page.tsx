"use client";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { useGlobalContext } from "../GlobalProvider";
import Cube from "./Cube";
import "./index.css";

function RotatingCube() {
    const path = usePathname();
    const { setPage, setAngle, isRotating, setIsRotating } = useGlobalContext();

    useEffect(() => {
        setPage(path);

        const handleAngle = (e: MouseEvent) => {
            if (isRotating) {
                setAngle({ x: e.clientX, y: e.clientY });
            }
        };

        window.addEventListener("mousemove", handleAngle);

        const handleRotating = (e: MouseEvent) => {
            e.preventDefault();
            setIsRotating((pre) => !pre);
        };

        window.addEventListener("contextmenu", handleRotating);

        return () => {
            window.removeEventListener("mousemove", handleAngle);
            window.removeEventListener("contextmenu", handleRotating);
        };
    }, [isRotating]);

    return (
        <main className="RotatingCube_Main flex justify-center items-center overflow-hidden min-h-screen">
            <Cube />
        </main>
    );
}

export default RotatingCube;
