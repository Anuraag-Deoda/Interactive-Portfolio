/* eslint-disable no-unused-vars */
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
        end: "+=300%", // Fixed end point for 4 sections
        onUpdate: (self) => {
          // Always keep animation running while scrolling
          const velocity = Math.max(Math.abs(self.getVelocity() / 1000), 0.5); // Minimum velocity
          backCycle.timeScale(velocity).play();
          frontCycle.timeScale(velocity).play();
          bodyTimeline.timeScale(velocity).play();
        },
        onLeave: () => {
          // Stop animation when reaching the end
          backCycle.pause();
          frontCycle.pause();
          bodyTimeline.pause();
        }
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
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">FullStack Developer</h2>
          <p className="text-lg">Results-driven Full Stack Developer with expertise in both front-end and back-end technologies, including Docker and NLP chatbots.</p>
          <div className="flex space-x-4">
            <a href="https://github.com/Anuraag-Deoda" className="hover:underline">GitHub</a>
            <a href="https://linkedin.com/in/anuraagdeoda" className="hover:underline">LinkedIn</a>
          </div>
          <p className="arrow-animated text-2xl">↓</p>
        </div>
      )
    },
    {
      title: 'Experience',
      color: '#4DAE85',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Software Development Lead</h3>
            <p className="text-sm">MITR Media | Mumbai | 08/2023 - Present</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Designed and deployed an interactive Ed-Tech game using React</li>
              <li>Led backend development for ContentAuthor with AI integration</li>
              <li>Conducted prompt engineering and model refinement</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Teaching Assistant Intern</h3>
            <p className="text-sm">Coding Ninjas | 02/2023 - 06/2023</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Resolved 600+ student doubts in Full Stack Development</li>
              <li>Mentored 400+ students in web development</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: 'Skills & Projects',
      color: '#ED5D53',
      content: (
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Node.js', 'Python', 'Flask', 'Django', 'Docker', 'AWS', 'SQL', 'Tailwind CSS'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-black/10 rounded-full text-sm">{skill}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Featured Projects</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium">Full Stack Character Chatbot</h4>
                <p className="text-sm">Built with Flask, React, and OpenAI API</p>
              </div>
              <div>
                <h4 className="font-medium">Chess Engine</h4>
                <p className="text-sm">Python-based with Stockfish algorithm</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Contact',
      color: '#4A90E2',
      content: (
        <div className="space-y-4 text-center">
          <p className="text-lg">Lets connect and build something amazing together!</p>
          <div className="space-y-2">
            <p>📧 anuraagdeoda810@gmail.com</p>
            <p>📱 9665517826</p>
            <p>📍 Aurangabad, India</p>
          </div>
        </div>
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