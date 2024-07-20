import { useGlobalContext } from "@/app/GlobalProvider";
import CubePart from "./CubePart";

function Cube() {
    const cube_parts = 6;
    const cube_size = 320;

    const { angle } = useGlobalContext();

    return (
        <div
            className="RotatingCube_Cube"
            style={
                {
                    width: cube_size,
                    aspectRatio: 1,
                    "--cube_size": cube_size,
                    "--angleX": angle.x,
                    "--angleY": angle.y,
                } as React.CSSProperties
            }
        >
            {Array(cube_parts)
                .fill(null)
                .map((part, index) => {
                    return (
                        <CubePart
                            key={index}
                            index={index}
                            cube_size={cube_size}
                        />
                    );
                })}
        </div>
    );
}

export default Cube;
