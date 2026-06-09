import React, { useEffect, useState } from 'react';
import "./layout.scss";

import Home from '../pages/Home';
import Me from '../pages/Me';
import Skill from '../pages/Skill';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

import { FaPlay } from "react-icons/fa";
import { GiPreviousButton, GiNextButton } from "react-icons/gi";

const sectionOrder = ["home", "me", "skill", "projects", "contact"];

const Main = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const sections = sectionOrder
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionOrder.indexOf(entry.target.id);
            setCurrentIndex(index);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const moveToSection = (index) => {
    const target = document.getElementById(sectionOrder[index]);

    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const goBottom = () => {
  moveToSection(sectionOrder.length - 1);
};
  const goPrev = () => {
    if (currentIndex <= 0) return;
    moveToSection(currentIndex - 1);
  };

  const goNext = () => {
    if (currentIndex >= sectionOrder.length - 1) return;
    moveToSection(currentIndex + 1);
  };

  return (
    <div className="main">
      <section id="home">
        <Home />
      </section>

      <section id="me">
        <Me />
      </section>

      <section id="skill">
        <Skill />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <div className="playbar">
        <button
          type="button"
          className="playbar-btn"
          onClick={goPrev}
          disabled={currentIndex <= 0}
          aria-label="Previous section"
        >
          <GiPreviousButton className="btn" />
        </button>

        <button
          type="button"
          className="playbar-btn"
          onClick={goBottom}
          aria-label="go to bottom"
        >
          <FaPlay className="btn" />
        </button>

        <button
          type="button"
          className="playbar-btn"
          onClick={goNext}
          disabled={currentIndex >= sectionOrder.length - 1}
          aria-label="Next section"
        >
          <GiNextButton className="btn" />
        </button>
      </div>
    </div>
  );
};

export default Main;