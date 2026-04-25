import React, { useEffect, useRef, useState } from "react";
import wave from "../assets/img/wave.jpg";
import myday from "../assets/img/day.jpg";
import kakao from "../assets/img/ifkakao.jpg";
import airsound from "../assets/img/airsound.jpg";


const slides = [
  {
    img: wave,
    title: "Flow Motion : ConnectWave",
    popupTitle: "ConnectWave",
    popupDesc: "물결과 연결성을 콘셉트로 제작한 프로젝트입니다.",
  },
  {
    img: myday,
    title: "MyDay",
    popupTitle: "MyDay",
    popupDesc: "하루 일정과 감정을 기록하는 UI 프로젝트입니다.",
  },
  {
    img: kakao,
    title: "Tech Week : if(kakao)",
    popupTitle: "if(kakao) Clone",
    popupDesc: "카카오 테크 컨퍼런스 페이지를 참고한 클론 코딩입니다.",
  },
  {
    img: airsound,
    title: "airsound : 에어비엔비 카피",
    popupTitle: "airsound",
    popupDesc: "에어비앤비 스타일을 참고한 숙소 예약 UI 카피 프로젝트입니다.",
  },
];

function useIsTablet(breakpoint = 1024) {
  const [isTablet, setIsTablet] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false
);

useEffect(() => {
  const onResize = () => setIsTablet(window.innerWidth < breakpoint);
  window.addEventListener("resize", onResize);
  return () => window.removeEventListener("resize", onResize);
}, [breakpoint]);

  return isTablet;
}

export default function Clone() {
  const isTablet = useIsTablet(1024);
  const carouselRef = useRef(null);
   const [selectedSlide, setSelectedSlide] = useState(null);

  const prevSlide = () => {
    if (!carouselRef.current) return;

    carouselRef.current.scrollBy({
      left: -carouselRef.current.clientWidth,
      behavior: "smooth",
    });
  };
  
  const nextSlide = () => {
    if (!carouselRef.current) return;

    carouselRef.current.scrollBy({
      left: carouselRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  if (!isTablet) {
    return (
      <section className="clone-grid">
        {slides.map((slide, idx) => (
          <article className="card" key={idx}>
            <img src={slide.img} alt={slide.title} onClick={() => setSelectedSlide(slide)}/>
            <h2 onClick={() => setSelectedSlide(slide)}>{slide.title}</h2>
            {selectedSlide && (
    
            <div className="modal" onClick={() => setSelectedSlide(null)}>
              <div className="modal-popup">
                <h2>{selectedSlide.popupTitle}</h2>
                <p>{selectedSlide.popupDesc}</p>
              </div>
            </div>
    
          )}
          </article>
        ))}
      </section>
    );
  }

  return (
    <div className="clone">
      <button className="nav left" onClick={prevSlide} aria-label="prev">
        ◀
      </button>

      <ul className="carousel" ref={carouselRef}>
        {slides.map((slide, idx) => (
          <li key={idx} className="slide">
            <img src={slide.img} alt={slide.title} onClick={() => setSelectedSlide(slide)}/>
            <h2 onClick={() => setSelectedSlide(slide)}>{slide.title}</h2>
          </li>
        ))}
      </ul>
        
      <button className="nav right" onClick={nextSlide} aria-label="next">
        ▶
      </button>

      {selectedSlide && (

        <div className="modal" onClick={() => setSelectedSlide(null)}>
          <div className="modal-popup">
            <h3>{selectedSlide.popupTitle}</h3>
            <p>{selectedSlide.popupDesc}</p>
          </div>
        </div>

      )}

    </div>
  );
}
