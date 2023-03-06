import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../Loader";
import {
    OrbitControls,
    Decal,
    Float,
    Preload,
    useTexture,
} from "@react-three/drei";

const Ball = (props) => {
    const [decal] = useTexture([props.imgUrl]);
    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <ambientLight intensity={0.25} />
            <directionalLight position={[0, 0, 0.05]} />
            <mesh castShadow receiveShadow scale={2.75}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial
                    color="#fff8eb"
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                />
                <Decal
                    position={[0, 0, 1]}
                    rotation={[2 * Math.PI, 0, 6.25]}
                    map={decal}
                    flatShading
                />
            </mesh>
        </Float>
    );
};

const BallCanvas = (props) => {
    return (
        <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableZoom={false} />
                <Ball imgUrl={props.icon} />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default BallCanvas;
