import React from 'react';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';
import { Link } from 'react-router-dom';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 80%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;
const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Line = styled.img`
  height: 5px;
`;
const Subtittle = styled.h2`
  color: pink;
`;
const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;
const Button = styled.button`
  background-color: pink;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  width: 100px;
  padding: 10px;
`;

const Img = styled.img`
  width: 600px;
  height: 450px;
  object-fit: contain;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

function Hero() {
  return (
    <Section>
      {/* <Navbar /> */}
      <Container>
        <Left>
          <Title translate="no">Using last techs</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtittle translate="no">What we Do</Subtittle>
          </WhatWeDo>
          <Desc>Making grow the next gen of advise and sales</Desc>
          <Link to={'/blog'}>
            <Button>Learn More</Button>
          </Link>
        </Left>
        <Right>
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={3} />
            <directionalLight position={[30, 20, 1]} />
            <Sphere args={[1, 100, 200]} scale={2.2}>
              <MeshDistortMaterial
                color="#220736"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <Img src="./img/moon.png " />
        </Right>
      </Container>
    </Section>
  );
}

export default Hero;
