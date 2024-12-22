/* eslint-disable no-unused-vars */
// App.jsx
import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WalkingMan from './components/WalkingMan';
import Section from './components/Section';
import Navigation from './components/Navigation';
import './styles/animations.css';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [currentSection, setCurrentSection] = useState(0);

  // Define your sections
  const sections = [
    {
      id: 'home',
      title: 'Anuraag Deoda',
      color: '#E2D03E',
      content: (
        <div className="space-y-6 text-center">
          <div className="text-3xl font-bold">FullStack Developer</div>
          <div className="text-xl">
            Results-driven Full Stack Developer with expertise in both front-end and back-end technologies.
          </div>
          <div className="flex gap-4 justify-center">
            <a href="https://github.com/Anuraag-Deoda" target="_blank" rel="noopener noreferrer"
              className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">GitHub</a>
            <a href="https://linkedin.com/in/anuraagdeoda" target="_blank" rel="noopener noreferrer"
              className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">LinkedIn</a>
          </div>
          <div className="arrow-animated">↓</div>
        </div>
      )
    },
    {
      id: 'experience',
      title: 'Experience',
      color: '#4DAE85',
      content: (
        <div className="space-y-8">
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <div className="text-2xl font-bold">Software Development Lead</div>
            <div className="text-lg opacity-80">MITR Media and Learning | 08/2023 - Present</div>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Designed and deployed an interactive Ed-Tech game using React</li>
              <li>Led backend development for ContentAuthor with AI models and LLMs</li>
              <li>Conducted prompt engineering and model refinement</li>
            </ul>
          </div>
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <div className="text-2xl font-bold">Teaching Assistant Intern</div>
            <div className="text-lg opacity-80">Coding Ninjas | 02/2023 - 06/2023</div>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Resolved over 600 student doubts in Full Stack Web Development</li>
              <li>Evaluated Full Stack projects and provided constructive feedback</li>
              <li>Mentored 400+ students in web development technologies</li>
            </ul>
          </div>
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <div className="text-2xl font-bold">Coding Mentor Intern</div>
            <div className="text-lg opacity-80">Science Utsav | 08/2022 - 12/2022</div>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Delivered Python and Robotics lessons to students</li>
              <li>Developed and maintained website frontend using WordPress</li>
              <li>Managed client data and updates efficiently</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'skills',
      title: 'Skills & Technologies',
      color: '#ED5D53',
      content: (
        <div className="flex flex-wrap justify-center gap-4 max-w-2xl">
          {['Flask', 'Django', 'NodeJs', 'React', 'React Native', 'NextJs', 'SQL', 'Docker', 'AWS', 'Tailwind CSS'].map((skill) => (
            <span key={skill} className="skill-tag px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition cursor-pointer">
              {skill}
            </span>
          ))}
        </div>
      )
    },
    {
      id: 'education',
      title: 'Education',
      color: '#4A90E2',
      content: (
        <div className="space-y-6">
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <div className="text-2xl font-bold">Bachelor of Technology</div>
            <div className="text-xl">Lovely Professional University</div>
            <div className="opacity-80">07/2019 - 02/2022</div>
          </div>
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <div className="text-2xl font-bold">HSC</div>
            <div className="text-xl">Deogiri Junior College</div>
            <div className="opacity-80">04/2018 - 03/2019</div>
          </div>
        </div>
      )
    },
    {
      id: 'contact',
      title: 'Get In Touch',
      color: '#6C63FF',
      content: (
        <div className="space-y-6 text-center">
          <div className="text-xl">Lets work together on something amazing!</div>
          <div className="flex flex-col gap-4">
            <a href="mailto:anuraagdeoda810@gmail.com" className="text-lg hover:underline">
              📧 anuraagdeoda810@gmail.com
            </a>
            <div className="text-lg">📱 9665517826</div>
            <div className="text-lg">🌍 Aurangabad, India</div>
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    // Reset scroll position
    window.scrollTo(0, 0);

    const content = document.querySelector(".content");
    const dude = document.querySelector(".dude");
    const head = dude.querySelector(".head");
    const legs = Array.from(dude.querySelectorAll(".leg"));
    const arms = Array.from(dude.querySelectorAll(".arm"));
    const legBottoms = Array.from(dude.querySelectorAll(".leg-bottom"));
    const armBottoms = Array.from(dude.querySelectorAll(".arm-bottom"));
    const arrowEl = document.querySelector(".arrow-animated");

    // Set origins for rotations
    gsap.set(arms, { svgOrigin: "180 58" });
    gsap.set(head, { svgOrigin: "180 45" });
    gsap.set(armBottoms, { svgOrigin: "178 118" });
    gsap.set(legs, { svgOrigin: "177 145" });
    gsap.set(legBottoms, { svgOrigin: "171 220" });

    // Set initial content width
    gsap.set(content, {
      width: `${sections.length * 100}vw`
    });

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

    // Main scroll animation
    gsap.timeline({
      scrollTrigger: {
        trigger: ".page",
        scrub: true,
        pin: true,
        start: "top top",
        end: "400%",
        onUpdate: (self) => {
          const newSection = Math.floor(self.progress * sections.length);
          if (newSection !== currentSection && newSection < sections.length) {
            setCurrentSection(newSection);
          }

          // Control walking animation based on scroll velocity
          const velocity = Math.abs(self.getVelocity() / 1000);
          if (velocity > 0.1) {
            backCycle.timeScale(velocity).play();
            frontCycle.timeScale(velocity).play();
            bodyTimeline.timeScale(velocity).play();
          } else {
            backCycle.pause();
            frontCycle.pause();
            bodyTimeline.pause();
          }
        }
      },
    })
      .to(arrowEl, {
        opacity: 0,
        duration: .05
      }, 0)
      .to(content, {
        x: () => -(window.innerWidth * (sections.length - 1)),
        ease: "none"
      }, 0)
      .fromTo(dude, 
        { x: "10vw" },
        { x: "70vw", ease: "none" },
      0);

    // Handle resize
    const handleResize = () => {
      ScrollTrigger.refresh(true);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [sections.length, currentSection]);

  return (
    <>
      <div className="page"></div>
      <div className="content">
        {sections.map((section) => (
          <Section key={section.id} {...section} />
        ))}
      </div>
      <div className="animation-container">
        <WalkingMan />
      </div>
      <Navigation 
        currentSection={currentSection}
        sections={sections}
      />
    </>
  );
};

export default App;