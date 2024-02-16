import React from 'react';
import styled from 'styled-components';
import Contact from '../../components/home/Contact';
import Hero from '../../components/home/Hero';
import Who from '../../components/home/Who';
import Works from '../../components/home/Works';

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url('./img/bg.jpeg');
  &::-webkit-scrollbar {
    display: none;
  }
`;

function About() {
  return (
    <Container>
      {/* <SideMenu /> */}
      <Who />
      <Works />
      <Hero />
      <Contact />
    </Container>
  );
}

export default About;
