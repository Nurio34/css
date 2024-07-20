"use client";

import Link from "next/link";
import { useGlobalContext } from "../GlobalProvider";
import { usePathname, useRouter } from "next/navigation";

function Header() {
    const animations = [
        "heroes",
        "scroll",
        "cubes",
        "loading",
        "follow",
        "earth",
        "blood",
        "2dTo3d",
        "blast",
        "indicator",
        "day&night",
        "image-pierce",
        "rotating-cube",
        // "scrool-2",
    ];

    const { page } = useGlobalContext();
    const path = usePathname();

    return (
        <header className="py-[1vh] px-[1vw] fixed w-full shadow-sm shadow-base-content z-10">
            <ul className="flex gap-[1vw] capitalize">
                {animations.map((animation) => {
                    return (
                        <li
                            key={animation}
                            className={`${
                                page === `/${animation}`
                                    ? "font-bold text-xl text-accent"
                                    : ""
                            }`}
                        >
                            <Link href={`/${animation}`}>{animation}</Link>
                        </li>
                    );
                })}
            </ul>
        </header>
    );
}

export default Header;
