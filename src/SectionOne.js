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
      title: 'ClARITY 360 HUB',
      subtitle: 'A PROFESSIONAL CV WRITING WEBSITE.'
    },
    {
      title: '8TH BERYL',
      subtitle: 'An event planning website'
    },
    {
      title: 'KAWURA',
      subtitle: 'An online platform for registering for virtual/physical class'
    },
    // {
    //   title: 'Vitae voluptates',
    //   subtitle: 'In ullam et nulla repudiandae praesentium, laboriosam quas tempore fuga asperiores eveniet amet.'
    // }
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
          sections.map(({ title, subtitle }) => (
            <div className="App-section" key={title} ref={addToRefs}>
              <h2>{title}</h2>
              <p>{subtitle}</p>
            </div>
          ))
        }
      </main>
    </div>
  )
};