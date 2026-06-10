import React, { useCallback, useEffect, useState } from 'react';
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
    let animationId = null;

    const updateCurrentIndex = () => {
      const checkPoint = window.innerHeight * 0.35;
      const sections = sectionOrder
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      const activeSection = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= checkPoint && rect.bottom > checkPoint;
      });

      if (activeSection) {
        setCurrentIndex(sectionOrder.indexOf(activeSection.id));
      }
    };

    const handleScroll = () => {
      if (animationId) return;

      animationId = requestAnimationFrame(() => {
        updateCurrentIndex();
        animationId = null;
      });
    };

    updateCurrentIndex();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateCurrentIndex);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateCurrentIndex);
    };
  }, []);

  const moveToSection = useCallback((index) => {
    const target = document.getElementById(sectionOrder[index]);

    if (!target) return;

    setCurrentIndex(index);
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);
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
