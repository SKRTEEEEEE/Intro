import { PerspectiveCamera, RenderTexture, Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';

export const Cube = () => {
  const textRef = useRef();
  useFrame(
    (state) =>
      (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 3)
  );
  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial color="red">
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 2]} />
          <color attach="background" args={['#ffb3ed']} />
          <Text ref={textRef} fontSize={1} color="#999">
            Queen420
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};
