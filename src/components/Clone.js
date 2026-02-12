import React, { useEffect, useState } from "react";
import wave from "../assets/img/wave.jpg";
import myday from "../assets/img/day.jpg";
import kakao from "../assets/img/ifkakao.jpg";
import airsound from "../assets/img/airsound.jpg";

const slides = [
  { img: wave, title: "Flow Motion : ConnectWave" },
  { img: myday, title: "MyDay" },
  { img: kakao, title: "Tech Week : if(kakao)" },
  { img: airsound, title: "airsound : 에어비앤비" },
];

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false
  );

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);

  return isMobile;
}

export default function Clone() {
  const isMobile = useIsMobile(768);
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // 데스크탑이면 캐러셀 상태 의미 없으니 리셋(선택)
  useEffect(() => {
    if (!isMobile) setCurrent(0);
  }, [isMobile]);

  // ✅ 데스크탑: 그리드
  if (!isMobile) {
    return (
      <section className="clone-grid">
        {slides.map((slide, idx) => (
          <article className="card" key={idx}>
            <img src={slide.img} alt={slide.title} />
            <h2>{slide.title}</h2>
          </article>
        ))}
      </section>
    );
  }

  // ✅ 모바일: 캐러셀
  return (
    <div className="clone">
      <button className="nav left" onClick={prevSlide} aria-label="prev">
        ◀
      </button>

      <ul
        className="carousel"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, idx) => (
          <li key={idx} className="slide">
            <img src={slide.img} alt={slide.title} />
            <h2>{slide.title}</h2>
          </li>
        ))}
      </ul>

      <button className="nav right" onClick={nextSlide} aria-label="next">
        ▶
      </button>
    </div>
  );
}
