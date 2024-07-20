import Window from "./Window";

function CubePart({ index, cube_size }: { index: number; cube_size: number }) {
    const window_per_floor = 10;
    const window_size = cube_size / window_per_floor;
    const windows = window_per_floor * window_per_floor;

    return (
        <div
            className="RotatingCube_CubePart flex flex-wrap"
            style={
                {
                    "--rotateX": index === 4 ? 90 : index === 5 ? 270 : 0,
                    "--rotateY":
                        index === 1
                            ? 90
                            : index === 2
                            ? 180
                            : index === 3
                            ? 270
                            : 0,
                } as React.CSSProperties
            }
        >
            {Array(windows)
                .fill(null)
                .map((window, ind) => {
                    return (
                        <Window
                            key={ind}
                            window_size={window_size}
                            index={index}
                            ind={ind}
                        />
                    );
                })}
        </div>
    );
}

export default CubePart;
