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
      title: 'COVID 19 DASHBOARD - NIGERIA',
      subtitle: 'A COVID19 statistics dashboard for cases in Nigeria built with React, Redux, Bootstrap, Chart.js and others',
      image: '/images/covid.png',
      link: 'https://covid-19-nigeria-dashboard.herokuapp.com/'
    },
    {
      title: 'TRIVIA APP',
      subtitle: 'A quiz web app built with react and trivia database API.',
      image: '/images/trivia.png',
      link: 'https://github.com/AbimbolaBakare/react-quiz-app'
    },
    {
      title: 'WEATHER APP',
      subtitle: 'A weather information app with Graph built with React, material UI, Open Weather MAP API and Chart.js',
      image: '/images/weather.png',
      link: 'https://react-weather-graph.netlify.app/'
    },
    {
      title: 'KAWURA',
      subtitle: 'An online platform to allow instructors craete and manage classes and also give learners access to classes with ease',
      image: '/images/kawura.png',
      link: 'https://kawura-prototype.herokuapp.com/'
    },
    {
      title: 'MOVIE APP',
      subtitle: 'A movie listing web app with search function built with react and IMDB API. ',
      image: '/images/movieapp.png',
      link: 'https://github.com/AbimbolaBakare/react-movie-app'
    },
    {
      title: '8TH BERYL',
      subtitle: 'An event planning website',
      image: '/images/8thberyl.png',
      link: 'https://8th-beryl.netlify.app/'
    },
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
                <a href={link} target="_blank" rel="noreferrer">Visit site</a>
              </button>
            </div>
          ))
        }
      </main>
    </div>
  )
};