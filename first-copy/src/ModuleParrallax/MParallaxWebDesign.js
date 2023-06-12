import React, { useState } from 'react';
import { Parallax } from 'react-parallax';
import image1 from '../img/Dark Queen 420.png';
import image2 from '../img/crazy.gif';
import image3 from '../img/Fondos webs.gif';

import '../ModuleParrallax/css/moduleParallax.css';
import '../ModuleParrallax/css/headerParallax.css';

// import { SideMenu } from '../components/sidemenu/sidemenu';
import { ParagText } from '../components/moduleParallax/paragText/ParagText';
import { MParallaxWebDesignData } from '../data/MParallax/MParallaxWebDesignData';
import { Link } from 'react-router-dom';

//import { Header } from '../components/header/Header';
import { Hero } from '../components/moduleParallax/hero/Hero';

export function MParallaxWebDesign() {
  const [index, setIndex] = useState(0);

  const plusMenu = () => {
    setIndex((index + 1) % MParallaxWebDesignData.parag.length);
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
        blur={MParallaxWebDesignData.firstBlur[index]}
        strength={MParallaxWebDesignData.firstStrength[index]}
      >
        <div style={MParallaxWebDesignData.firstHeight[index]}>
          <div
            style={MParallaxWebDesignData.firstInsideStyle[index]}
            className="firstIntro"
          >
            {MParallaxWebDesignData.firstIntro[index]}
          </div>
        </div>
      </Parallax>
      <ParagText
        propsText={MParallaxWebDesignData.parag[index]}
        propsTittle={MParallaxWebDesignData.tittleParag[index]}
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
              propsTittle={MParallaxWebDesignData.tittleHero[index]}
              propsText={MParallaxWebDesignData.hero[index]}
            />
          </div>
        </div>
      </Parallax>
    </div>
  );
}
