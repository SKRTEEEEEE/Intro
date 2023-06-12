import React, { useState } from 'react';
import { Parallax } from 'react-parallax';
import image1 from '../img/Dark Queen 420.png';
import image2 from '../img/crazy.gif';
import image3 from '../img/Fondos webs.gif';
//import '../ModuleParrallax/css/introsParallax.css';
//import '../ModuleParrallax/css/parrafoText.css';
import '../ModuleParrallax/css/moduleParallax.css';
import '../ModuleParrallax/css/headerParallax.css';

//import { SideMenu } from '../components/sidemenu/sidemenu';
import { ParagText } from '../components/moduleParallax/paragText/ParagText';
import { mParallaxAutomatisationData } from '../data/MParallax/mParallaxAutomatisationData';
import { Link } from 'react-router-dom';

//import { Header } from '../components/header/Header';
import { Hero } from '../components/moduleParallax/hero/Hero';

export function MParallaxAutomatisation() {
  const [index, setIndex] = useState(0);

  const plusMenu = () => {
    setIndex((index + 1) % mParallaxAutomatisationData.parag.length);
  };
  const firstImages = [image3, image2];

  return (
    <div>
      <header className="header">
        <Link to={'/'}>Main</Link>
        <button onClick={plusMenu}>Show me more</button>
      </header>
      {/* <SideMenu /> */}
      <Parallax
        bgImage={firstImages[index]}
        blur={mParallaxAutomatisationData.firstBlur[index]}
        strength={mParallaxAutomatisationData.firstStrength[index]}
      >
        <div style={mParallaxAutomatisationData.firstHeight[index]}>
          <div
            style={mParallaxAutomatisationData.firstInsideStyle[index]}
            className="firstIntro"
          >
            {mParallaxAutomatisationData.firstIntro[index]}
          </div>
        </div>
      </Parallax>
      <ParagText
        propsText={mParallaxAutomatisationData.parag[index]}
        propsTittle={mParallaxAutomatisationData.tittleParag[index]}
      />

      <Parallax bgImage={image1} strength={400}>
        <div style={{ height: '100vh' }}>
          <div
            style={{
              position: 'absolute',
              width: '100%',
              bottom: '0',
            }}
          >
            <Hero
              propsTittle={mParallaxAutomatisationData.tittleHero[index]}
              propsText={mParallaxAutomatisationData.hero[index]}
            />
          </div>
        </div>
      </Parallax>
    </div>
  );
}
