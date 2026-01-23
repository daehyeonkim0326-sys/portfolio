import React, { useEffect, useRef, useState } from 'react'
import svg from '../assets/img/Frame 38.svg';
import skill from '../assets/img/Frame 37.jpg';
import './skill.scss';
const Skill = () => {
  const text = "그래서 할 줄 아는게 뭐임?";
    const [placeholder, setPlaceholder] = useState("");
  const inputWrapRef = useRef(null);
  const startedRef = useRef(false);
  const scrollTo =(id)=>{
    document.getElementById(id)?.scrollIntoView({behavior:"smooth"});
  }
  useEffect(() => {
    const el = inputWrapRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        if (startedRef.current) return; // 한 번만
        startedRef.current = true;

        let i = 0;
        const timer = setInterval(() => {
          i += 1;
          setPlaceholder(text.slice(0, i));
          if (i >= text.length) clearInterval(timer);
        }, 90);

        // 시작했으면 옵저버는 꺼도 됨  
        io.disconnect();
      },
      { threshold: 0.4 } // 40% 들어오면 시작
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className='skill' ref={inputWrapRef}>
      <div className='comment'>
          <div className='profile'>
            <img src={svg} alt='profile'/>
            <h3>DH0326</h3>
          </div>
          <input type='text' placeholder={placeholder} reedOnly/>
          <button onClick={() => scrollTo("projects")}>등록</button>
      </div>
        <img className='img' src={skill} alt='skill'/>
    </div>
  )
}

export default Skill