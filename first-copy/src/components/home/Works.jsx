import React, { useState } from 'react';
import styled from 'styled-components';
import { WebDesign } from './Works/WebDesign';
import { ProductDesign } from './Works/ProductDesign';

import { SocialMedia } from './Works/SocialMedia';
import { Marketing } from './Works/Marketing';
import { Devolpment } from './Works/Devolopment';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;
const Right = styled.div`
  flex: 3;
  position: relative;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const ListItem = styled.li`
  font-size: 50px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  letter-spacing: 3px;
  position: relative;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }

  ::after {
    content: '${(props) => props.text}';
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 0.5s linear both;
      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const data = [
  'Web Design',
  'Automatisation',
  'Marketing 3.0',
  'Corp. Strategy',
  'Social Media',
];

function Works() {
  const [work, setWork] = useState('Web Design');
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem
                onClick={() => setWork(item)}
                translate="no"
                text={item}
                key={item}
              >
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {work === 'Web Design' ? (
            <WebDesign />
          ) : work === 'Automatisation' ? (
            <Devolpment />
          ) : work === 'Corp. Strategy' ? (
            <ProductDesign />
          ) : work === 'Marketing 3.0' ? (
            <Marketing />
          ) : (
            <SocialMedia />
          )}
        </Right>
      </Container>
    </Section>
  );
}

export default Works;
