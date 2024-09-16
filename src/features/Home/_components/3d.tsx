import { OrbitControls, Text } from '@react-three/drei';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { useRef, FC } from 'react';

// TODO Add useTranslation hook
const RenderKonnichiwa = () => {
  const { viewport } = useThree();
  const ref = useRef<any>();
  useFrame(({ mouse }) => {
    const x = (mouse.x * viewport.width) / 2;
    const y = (mouse.y * viewport.height) / 2;
    ref.current.position.set(x, y, 0);
    ref.current.rotation.set(-y, x, 0);
  });

  return (
    <mesh ref={ref}>
      <Text scale={[2, 2, 1]} color='#0CC7AB' anchorX='center' anchorY='middle'>
        Konnichiwa
      </Text>
    </mesh>
  );
};

const RenderWelcome = () => {
  const ref = useRef<any>();
  useFrame((_, delta) => {
    ref.current.rotation.x += 1 * delta;
    ref.current.rotation.y += 0.5 * delta;
  });

  return (
    <mesh ref={ref}>
      <Text scale={[1, 1, 1]} color='#F13024' anchorX='center' anchorY='middle'>
        Welcome!
      </Text>
    </mesh>
  );
};

const RenderDragMe = () => (
  <Text scale={[2, 2, 1]} anchorX='center' anchorY='top-baseline'>
    Drag me
  </Text>
);

const Hero3D: FC = () => (
  <Canvas camera={{ position: [0, 0, 5] }} className='hidden xl:flex xl:max-w-none'>
    <OrbitControls />
    <RenderDragMe />
    <RenderKonnichiwa />
    <RenderWelcome />
  </Canvas>
);

export default Hero3D;
