import React, { useRef, useEffect, useState } from 'react';
import { TweenMax } from 'gsap';
import '../Home.css';
import data from '../data';
import { gsap } from "gsap";
import Switch from './Switch';

function Home() {
  const [background, setBackground] = useState('#d1e6d5');
  const [textColor, setTextColor] = useState('black')
  const headerRef = useRef(null);


  const toggleBackground = () => {
    const color = background !== '#d1e6d5' ? '#d1e6d5' : 'salmon';
    const text = textColor !== 'black' ? 'black' : 'white'
    setBackground(color);
    setTextColor(text)
  }

  useEffect(() => {

    gsap.to(headerRef.current, { color: textColor, backgroundColor: background, duration: 1, ease: 'none' });

  }, [background]);

  let layer__1 = useRef(null);
  let layer__2 = useRef(null);
  let layer__3 = useRef(null);
  let overlay = useRef(null);
  let text = useRef(null);
  let watch__wrapper = useRef(null);
  let circle__small = useRef(null);
  let circle__large = useRef(null);

  useEffect(() => {
    TweenMax.to(layer__1, { y: '-100vh', delay: 0.4 });
    TweenMax.to(layer__2, { y: '-100vh', delay: 0.5 });
    TweenMax.to(layer__3, { y: '-100vh', delay: 0.6 });
    TweenMax.to(overlay, { y: '-100vh', delay: 1.5 });
    TweenMax.fromTo(
      text,
      { x: '30rem', opacity: 0 },
      { x: 0, opacity: 1, ease: 'back.out(1.7)', delay: 1.9 }
    );
    TweenMax.fromTo(
      watch__wrapper,
      { x: '5rem', opacity: 0 },
      { x: 0, opacity: 1, ease: 'back.out(1.7)', delay: 2.3 }
    );
    TweenMax.fromTo(
      circle__small,
      { x: '-30rem', opacity: 0 },
      { x: 0, opacity: 1, ease: 'back.out(1.7)', delay: 1 }
    );
    TweenMax.fromTo(
      circle__large,
      { x: '30rem', opacity: 0 },
      { x: 0, opacity: 1, ease: 'back.out(1.7)', delay: 1.5 }
    );
  }, []);

  return (
    <section className='hero' ref={headerRef}>
      {/* SECTION */}
      <div className='circle circle__small'
        ref={(div) => (circle__small = div)}>
        <img src='/images/circle-small.png' alt='circle' />
      </div>

      <div className='circle circle__large'
        ref={(div) => (circle__large = div)}>
        <img src='/images/circle-large.png' alt='circle' />
      </div>

      {/* CONTAINER */}
      <div className='container'>
        <Switch click={() => toggleBackground()} />
        <div className='content'>
          <div className='text' ref={(div) => (text = div)}>
            <h1>{data.last_name} <span>{data.first_name} </span> </h1>

            <h5>{data.role}</h5>

            <p>{data.description} </p>

            <button className='cta'> Connect Now </button>
          </div>

          <div className='watch__wrapper' ref={(div) => (watch__wrapper = div)}>
            <img src='/images/Asset 1.svg' alt='girl' />
          </div>

        </div>
      </div>

      {/* OVERLAY */}
      <div className='overlay' ref={(div) => (overlay = div)}>
        <div className='layer layer__1' ref={(div) => (layer__1 = div)}></div>
        <div className='layer layer__2' ref={(div) => (layer__2 = div)}></div>
        <div className='layer layer__3' ref={(div) => (layer__3 = div)}></div>
      </div>
    </section>
  );
}

export default Home;