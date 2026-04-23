import React, { useEffect, useRef, useState } from 'react';
import svg from '../assets/img/Frame 38.svg';
import skill from '../assets/img/Frame 37.jpg';
import { IoSend } from "react-icons/io5";
import './skill.scss';

const Skill = () => {
  const text = "사용할 수 있는 기술 스택은?";
  const [placeholder, setPlaceholder] = useState("");
  const [showImage, setShowImage] = useState(false);
  const inputWrapRef = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = inputWrapRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        if (startedRef.current) return;
        startedRef.current = true;

        let i = 0;
        const timer = setInterval(() => {
          i += 1;
          setPlaceholder(text.slice(0, i));
          if (i >= text.length) clearInterval(timer);
        }, 90);

        io.disconnect();
      },
      { threshold: 0.4 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className='skill' ref={inputWrapRef}>
      <div className='comment'>
        <div className='profile'>
          <img src={svg} alt='profile' />
          <h3>DH0326</h3>
        </div>

        <input type='text' placeholder={placeholder} readOnly />

        <button onClick={() => setShowImage(true)}>
          <IoSend />
        </button>
      </div>

      <div
        className={`popup ${showImage ? 'show' : ''}`}
        onClick={() => setShowImage(false)}
      >
        <img
          src={skill}
          alt='skill'
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};

export default Skill;