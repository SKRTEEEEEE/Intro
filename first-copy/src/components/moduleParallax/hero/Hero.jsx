import React from 'react';
import css from './Hero.module.css';
import HeroImg from '../../../assets/hero.png';
//import { BsArrowRight } from 'react-icons/ri';

export const Hero = (hero) => {
  return (
    <div className={css.container}>
      {/*left side*/}
      <div className={css.h_sides}>
        <span className={css.text1}>+autonomous +efficient </span>
        <div className={css.text2}>
          <span>{hero.propsTittle}</span>
          <span>{hero.propsText}</span>
        </div>
      </div>
      {/*middle side*/}
      <div className={css.wrapper}>
        <div className={css.blueCercle}></div>
        <img src={HeroImg} alt="" width={600} />
        <div className={css.cart2}></div>
      </div>
      <div className={css.h_sides}>
        <div className={css.traffic}>
          <span>1.5m</span>
          <span>Monthly Traffic</span>
        </div>
        <dic className={css.customers}>
          <span>100k</span>
          <span>Happy Customers</span>
        </dic>
      </div>
    </div>
  );
};
