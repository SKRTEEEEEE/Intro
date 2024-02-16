import { Canvas } from '@react-three/fiber';

import { OrbitControls } from '@react-three/drei';
import styled from 'styled-components';

import { Desktop } from '../ThreeModels/Desktop';
import { Link } from 'react-router-dom';

const Desc = styled.div`
  width: 80%;
  position: absolute;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  color: lightskyblue;
  top: 70vh;
  font-size: 24px;
  font-weight: 30px;
  text-align: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    top: 0;
    /* bottom: 0; */
    left: 0;
    right: 0;
    margin: auto;
  }
`;

export const WebDesign = () => {
  return (
    <>
      <Canvas>
        <Desktop scale={0.3} />
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={5} />
        <directionalLight position={[7, 2, 1]} />
      </Canvas>
      <Link to="/about/webdesign">
        <Desc>Developing WEB3 Gen</Desc>
      </Link>
    </>
  );
};
