"use client";

import "./index.css";
import React, { useEffect, useState } from "react";
import Galery from "./Components/Galery";
import Header from "./Components/Header";
import { usePathname } from "next/navigation";
import { useGlobalContext } from "../GlobalProvider";

function Client() {
    const path = usePathname();
    const { setPage } = useGlobalContext();
    const [isRotating, setIsRotating] = useState<boolean>(true);

    useEffect(() => {
        setPage(path);
    }, [path, setPage]);

    return (
        <main className="flex justify-center items-center relative overflow-hidden min-h-screen">
            <Header isRotating={isRotating} setIsRotating={setIsRotating} />
            <Galery isRotating={isRotating} setIsRotating={setIsRotating} />
        </main>
    );
}

export default Client;
