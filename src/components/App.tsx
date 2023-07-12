import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import { PairsBoard } from "./PairsBoard";
import { ChristmasTree } from "./ChristmasTree";

/** A component demo'ing some react-three-fiber basics. */
function App() {
    return (
        <div className="App">
            <Canvas>
                {/* OrbitControls lets you rotate the camera with the mouse */}
                <OrbitControls autoRotate={false} />
                {/* Red = x, Green = y, Blue = z.  Out from the centre is positive.  */}
                <axesHelper scale={1} position={[0, 2, 0]} />
                {/* A grid with unit markers, on the x-z plane.  */}
                <gridHelper position={[0, 0, 0]} />
                <Stage>
                    <PairsBoard />
                </Stage>
                <ChristmasTree pos={[4, 0, 1]} />
            </Canvas>
        </div>
    );
}

export default App;
