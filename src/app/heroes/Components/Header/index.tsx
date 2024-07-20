import { Dispatch, SetStateAction } from "react";
import ActionButton from "./Components/ActionButton";
import Logo from "./Components/Logo";
import "./index.css";

function Header({
    isRotating,
    setIsRotating,
}: {
    isRotating: boolean;
    setIsRotating: Dispatch<SetStateAction<boolean>>;
}) {
    return (
        <header
            className="Animation1_Header absolute top-20 left-1/2 -translate-x-1/2 mt-[1vh]  w-3/5
            flex justify-between items-center
        "
        >
            <Logo isRotating={isRotating} setIsRotating={setIsRotating} />
            <ActionButton
                isRotating={isRotating}
                setIsRotating={setIsRotating}
            />
        </header>
    );
}

export default Header;
