import React, { useEffect, useRef, useState } from 'react';
import svg from '../assets/img/Frame 38.svg';
import { IoSend } from "react-icons/io5";
import './skill.scss';
import html from "../assets/img/tech-icons-svg/html.svg";
import css from "../assets/img/tech-icons-svg/css.svg";
import JavaScript from "../assets/img/tech-icons-svg/javascript.svg";
import figma from "../assets/img/tech-icons-svg/figma.svg";
import PhotoShop from "../assets/img/tech-icons-svg/photoshop.svg";
import Illustrator from "../assets/img/tech-icons-svg/illustrator.svg";
import github from "../assets/img/tech-icons-svg/github.svg";
import react from "../assets/img/tech-icons-svg/react.svg";
import gsap from "../assets/img/tech-icons-svg/gsap.svg";
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

          if (i >= text.length) {
            clearInterval(timer);
          }
        }, 90);

        io.disconnect();
      },
      { threshold: 0.4 }
    );

    io.observe(el);

    return () => io.disconnect();
  }, []);

  return (
    <div className="skill" ref={inputWrapRef}>
      <div className="comment">
        <div className="profile">
          <img src={svg} alt="profile" />
          <h3>DH0326</h3>
        </div>

        <input type="text" placeholder={placeholder} readOnly />

        <button
          type="button"
          onClick={() => setShowImage((prev) => !prev)}
        >
          <IoSend />
        </button>
      </div>

      <div className={`image-slide ${showImage ? 'show' : ''}`}>
        <div className='nick'>
          <img src={html} alt='html'/>
          <h2>html</h2>
          <p>페이지의 구조는 제가 먼저 잡아둘게요.</p>
        </div>
        <div className='nick'>
          <img src={css} alt='css'/>
          <h2>css</h2>
          <p>보기 좋은 화면이 되도록 분위기를 정리할게요.</p>
        </div>
        <div className='nick'>
          <img src={JavaScript} alt='javascript'/>
          <h2>javascript</h2>
          <p>클릭과 움직임으로 화면에 반응을 더할게요.</p>
        </div>
        <div className='nick'>
          <img src={figma} alt='figma'/>
          <h2>figma</h2>
          <p>만들기 전에 흐름과 구성을 먼저 그려볼게요.</p>
        </div>
        <div className='nick'>
          <img src={PhotoShop} alt='photoshop'/>
          <h2>photoshop</h2>
          <p>이미지는 더 깔끔하게 다듬어볼게요.</p>
        </div>
        <div className='nick'>
          <img src={Illustrator} alt='illustrator'/>
          <h2>illustrator</h2>
          <p>아이콘과 그래픽은 선명하게 만들어둘게요.</p>
        </div>
        <div className='nick'>
          <img src={github} alt='github'/>
          <h2>github</h2>
          <p>작업 과정은 차곡차곡 기록해둘게요.</p>
        </div>
        <div className='nick'>
          <img src={react} alt='react'/>
          <h2>react</h2>
          <p>화면을 컴포넌트로 나눠서 더 효율적으로 구성해볼게요.</p>
        </div>
        <div className='nick'>
          <img src={gsap} alt='gsap'/>
          <h2>gsap</h2>
          <p>정적인 화면에 자연스러운 움직임을 더해볼게요.</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;