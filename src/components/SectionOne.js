import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export default function SectionOne() {

  const headerRef = useRef(null);

  const revealRefs = useRef([]);
  revealRefs.current = [];


  const sections = [
    {
      title: '8TH BERYL',
      subtitle: 'An event planning website',
      image: '/images/8thberyl.png',
      link: 'https://8th-beryl.netlify.app/'
    },
    {
      title: 'KAWURA',
      subtitle: 'An online platform to allow instructors craete and manage classes and also give learners access to classes with ease',
      image: '/images/kawura.png',
      link: 'https://kawura-prototype.herokuapp.com/'
    },
    {
      title: 'ClARITY 360 HUB',
      subtitle: 'A professional CV writing website',
      image: '/images/clarity.png',
      link: 'https://clarity360hub.com/'
    },
    {
      title: 'KACHELAN',
      subtitle: 'An Agro-Pharmaceutical website ',
      image: '/images/kachelan.png',
      link: 'https://kachelan.com/'
    }
  ];

  useEffect(() => {

    gsap.from(headerRef.current, {
      autoAlpha: 0,
      ease: 'none',
      delay: 1
    });

    revealRefs.current.forEach((el, index) => {

      gsap.fromTo(el, {
        autoAlpha: 0
      }, {
        duration: 1,
        autoAlpha: 1,
        ease: 'none',
        scrollTrigger: {
          id: `section-${index + 1}`,
          trigger: el,
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        }
      });

    });

  }, []);

  const addToRefs = el => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };


  return (
    <div>
      <main className="App-main">
        {
          sections.map(({ title, subtitle, image, link }) => (
            <div className="App-section" key={title} ref={addToRefs}>
              <img src={image} alt='website' className='port-image' />
              <h2>{title}</h2>
              <p>{subtitle}</p>
              <button className='port-button'>
                <a href={link} target="_blank" >Visit site</a>
              </button>
            </div>
          ))
        }
      </main>
    </div>
  )
};