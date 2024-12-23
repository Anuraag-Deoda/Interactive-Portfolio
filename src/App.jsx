// src/App.jsx
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WalkingMan from './components/WalkingMan';
import Section from './components/Section';
import './styles/animations.css';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    // Reset scroll position
    window.scrollTo(0, 0);

    const dude = document.querySelector(".dude");
    const head = dude.querySelector(".head");
    const legs = Array.from(dude.querySelectorAll(".leg"));
    const arms = Array.from(dude.querySelectorAll(".arm"));
    const legBottoms = Array.from(dude.querySelectorAll(".leg-bottom"));
    const armBottoms = Array.from(dude.querySelectorAll(".arm-bottom"));
    const content = document.querySelector(".content");
    const arrowEl = document.querySelector(".arrow-animated");

    // Set origins for rotations
    gsap.set(arms, { svgOrigin: "180 58" });
    gsap.set(head, { svgOrigin: "180 45" });
    gsap.set(armBottoms, { svgOrigin: "178 118" });
    gsap.set(legs, { svgOrigin: "177 145" });
    gsap.set(legBottoms, { svgOrigin: "171 220" });

    const halfBodyTimeline = (leg, arm) => {
      const legBottom = leg.querySelector(".leg-bottom");
      const armBottom = arm.querySelector(".arm-bottom");

      return gsap.timeline({
        repeat: -1,
        paused: true
      })
        .fromTo(leg, {
          rotation: -25
        }, {
          duration: .5,
          rotation: 15,
          ease: "sine.inOut"
        }, 0)
        .to(leg, {
          duration: .25,
          rotation: -25,
          ease: "sine.in"
        }, ">")
        .to(legBottom, {
          duration: .25,
          rotation: 15,
          ease: "sine.inOut"
        }, .25)
        .to(legBottom, {
          duration: .25,
          rotation: 80,
          ease: "sine.in"
        }, ">")
        .to(legBottom, {
          duration: .25,
          rotation: 0,
          ease: "sine.out"
        }, ">")
        .fromTo(arm, {
          rotation: -12
        }, {
          duration: .5,
          rotation: 12,
          ease: "sine.inOut",
          yoyo: true,
          repeat: 1
        }, 0)
        .fromTo(armBottom, {
          rotation: -15
        }, {
          duration: .5,
          rotation: 10,
          ease: "sine.inOut",
          yoyo: true,
          repeat: 1
        }, 0);
    };

    const backCycle = halfBodyTimeline(legs[0], arms[1]);
    const frontCycle = halfBodyTimeline(legs[1], arms[0]);

    const bodyTimeline = gsap.timeline({
      paused: true,
    })
      .to(dude, {
        duration: .25,
        y: "-=20",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      }, 0)
      .fromTo(head, {
        rotation: -25
      }, {
        duration: .25,
        rotation: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      }, 0);

    const numberOfCycles = Math.ceil(3 * window.innerWidth / window.innerHeight);

    gsap.timeline({
      scrollTrigger: {
        trigger: ".page",
        scrub: 1,
        pin: true,
        start: "top top",
        end: "400%",
      }
    })
      .to(arrowEl, {
        duration: .05,
        opacity: 0
      }, 0)
      .fromTo(content, {
        xPercent: 0
      }, {
        xPercent: -300,
        ease: "none"
      }, 0)
      .fromTo(bodyTimeline, {
        time: .7
      }, {
        time: .75 + numberOfCycles
      }, 0)
      .fromTo(backCycle, {
        time: .7
      }, {
        time: .75 + numberOfCycles
      }, 0)
      .fromTo(frontCycle, {
        time: .2
      }, {
        time: .25 + numberOfCycles
      }, 0);

    // Handle resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const sections = [
    {
      title: 'Anuraag Deoda',
      color: '#E2D03E',
      content: (
        <>
          <p>FullStack Developer</p>
          <p className="arrow-animated">↓</p>
        </>
      )
    },
    {
      title: 'Experience',
      color: '#4DAE85',
      content: (
        <p>Software Development Lead at MITR Media</p>
      )
    },
    {
      title: 'Skills',
      color: '#ED5D53',
      content: (
        <p>React, Node.js, Python, More...</p>
      )
    },
    {
      title: 'Contact',
      color: '#4A90E2',
      content: (
        <p>Let's connect!</p>
      )
    }
  ];

  return (
    <>
      <div className="page"></div>
      <div className="content">
        {sections.map((section, index) => (
          <Section key={index} {...section} />
        ))}
      </div>
      <div className="animation-container">
        <WalkingMan />
      </div>
    </>
  );
};

export default App;