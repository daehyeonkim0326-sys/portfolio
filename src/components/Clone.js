import React, { useCallback, useEffect, useRef, useState } from "react";
import wave from "../assets/img/wave.jpg";
import myday from "../assets/img/day.jpg";
import kakao from "../assets/img/ifkakao.jpg";
import airsound from "../assets/img/airsound.jpg";
import wave1 from "../assets/img/wave1.jpg";
import wave2 from "../assets/img/wave2.jpg";
import myday1 from "../assets/img/myday1.jpg"
import myday2 from "../assets/img/myday2.jpg"
import ifkakao1 from "../assets/img/ifkakao251.jpg"
import ifkakao2 from "../assets/img/ifkakao252.jpg"
import airsound1 from "../assets/img/airsound1.jpg"
import airsound2 from "../assets/img/airsound2.jpg"
const slides = [
  {
    img: wave,
    title: "Flow Motion : ConnectWave",
    category: "Clone",
    URL:"https://daehyeonkim0326-sys.github.io/wave/",
    description: "ScrollTrigger 기반의 스크롤 반응형 Flow Motion을 활용한 ConnectWave 사의 홈페이지를 구현하였습니다.",
    dday:"1.진행 기간:2025.10.15~ 2025.10.17 (3일)",
    people:"2.개발 인원: FrontEnd 1인 (Solo Project)",
    techstack:"3.사용 기술 스택:\nLanguage: JavaScript (ES6+)\nFramework: React.js\nStyling: SCSS\nDesign & Tool: Figma, Git, GitHub, photoshop",
    concept:"4.Concept: 플로우 모션을 이용한 다양한 사용자 경험 제공",
    directory:"5.디렉토리 구조\nsrc\nassets=이미지\ncomponents=재사용 가능한 컴포넌트\nstyles=각 페이지별 scss\npages=라우터로 연결되는 실제 화면(페이지)들\nlayout=레이아웃 전체 공통 구조\nApp.js=라우터+전체 앱 구조",
    charge:"6.제작 과정\n[기획 및 디자인]\nFigma를 활용한 전체 와이어프레임 및 프로토타입 제작\n공통 컬러 팔레트 및 컴포넌트 스타일 가이드 정립\n[구현]\nreact library를 활용하여 각 라우트 페이지 생성\njs에서 ScrollTrigger를 활용하여 스크롤을 내릴때에 맞춰 반응형 페이지 구현",
    major:"7.주요 기능\nScrollTrigger를 활용한 다양한 반응형 페이지",
    trouble:"8.트러블 슈팅\n문제 1.스크롤을 해도 글자가 나오지 않음 \n상황:스크롤을 내려도 ScrollTrigger 설정한 컴포넌트의 텍스트가 나오지 않는 상황\n해결:video-txt에 opacity값을 줌으로써 서서히 글자가 등장하게 함\n과정:스크롤 하는 과정에서 글자가 등장하지 않음 -> scss에서 처음에 글자가 보이지 않게 opacity가 0으로 설정되어 있었음 -> gsap라이브러리의 timeline을 활용하여 스크롤에 맞춰 글자가 서서히 나오게끔 opacity를 설정",
    images: [wave1,wave2],
  },
  {
    img: myday,
    title: "MyDay",
    category: "Clone",
    URL:"https://daehyeonkim0326-sys.github.io/myday/",
    description: "json data()",
    dday:"1.진행 기간:2025.10.02~ 2025.10.3 (2일)",
    people:"2.개발 인원: FrontEnd 1인 (Solo Project)",
    techstack:"3.사용 기술 스택:\nLanguage: JavaScript (ES6+)\nFramework: React.js\nStyling: CSS\nData Handling: JSON\nDesign & Tool: Figma, Git, GitHub, photoshop",
    concept:"4.Concept: 직관적인 메모장 겸 일기장",
    directory:"5.디렉토리 구조\nsrc\ndata=quoteData.json\nimg=이미지\nfont=적용한 한글 폰트\nday1=컴포넌트 파일",
    charge:"6.담당 역할\n[기획 및 디자인]\nFigma를 활용한 전체 와이어프레임 및 프로토타입 제작\n공통 컬러 팔레트 및 컴포넌트 스타일 가이드 정립\n[개발:  기능]\n날씨 api를 가져와 실시간 날씨 표시\n로그인 정보를 json데이터로 만들고 로그인\n등록 버튼을 클릭하면 입력한 텍스트가 화면에 기록이 되는 props를 자식 컴포넌트에 전달",
    major:"7.주요 기능\n로그인 정보 처리: json에 저장한 모의 데이터를 바탕으로 계정 로그인\ntodolist 등록: props를 전달하여 등록 버튼을 클릭하면 텍스트 기록\n날씨 표시: 날씨 api를 불러와 화면에 날씨 온도 표시",
    images: [myday1,myday2],
  },
  {
    img: kakao,
    title: "Tech Week : if(kakao)25",
    category: "Clone",
    URL:"https://daehyeonkim0326-sys.github.io/if-kakao-25-clone/",
    description: "useState와 useEffect를 활용하여 자동 전환 및 인디케이터 클릭 이동이 가능한 이미지 슬라이드 배너를 활용하여 if(kakao)25 사이트를 구현하였습니다.",
    dday:"1.진행 기간:2025.09.20~ 2025.09.23 (4일)",
    people:"2.개발 인원: FrontEnd 1인 (Solo Project)",
    techstack:"3.사용 기술 스택:\nLanguage: JavaScript (ES6+)\nStyling: SCSS\nDesign & Tool: Figma, Git, GitHub, photoshop",
    concept:"4.Concept: 이미지 슬라이딩을 활용한 화려한 광고",
    directory:"5.디렉토리 구조\nCSS=scss파일과 연결된 css파일\nmedia=영상과 사진을 포함한 미디어 파일\nscript=javascript 파일\nscss=css와 연결된 scss 파일\nindex.html=기본적인 뼈대",
    charge:"6.담당 역할\n[기획 및 디자인]\nFigma를 활용한 전체 와이어프레임 및 프로토타입 제작\n공통 컬러 팔레트 및 컴포넌트 스타일 가이드 정립\n[구현]\nquerySelector를 이용한 이미지 슬라이더 구현 \nkeyframes을 활용한 자동으로 움직이는 텍스트 marquee 구현",
    major:"7.주요 기능\n슬라이딩 되는 배너 이미지 \n자동으로 움직이는 txt",
    images: [ifkakao1,ifkakao2],
  },
  {
    img: airsound,
    title: "airsound : 에어비엔비 카피",
    category: "Clone",
    URL:"https://daehyeonkim0326-sys.github.io/airbnb_clone/",
    description: "SCSS 기반으로 Airbnb 사이트의 레이아웃을 클론하고, 이를 음악 사이트 콘셉트에 맞게 재구성하여 제작했습니다.",
    dday:"1.진행 기간:2025.09.15~ 2025.09.18 (4일)",
    people:"2.개발 인원: FrontEnd 1인 (Solo Project)",
    techstack:"3.사용 기술 스택:\nStyling: CSS\nDesign & Tool: Figma, Git, GitHub, photoshop",
    concept:"4.Concept: 여행을 하는 듯한 음악감상",
    directory:"5.디렉토리 구조\ncss=scss와 연결된 각종 css파일\nimage=이미지 파일\nscss=각종 스타일 처리\nindex.html=기본적인 뼈대",
    charge:"6.담당 역할\n[기획 및 디자인]\nFigma를 활용한 전체 와이어프레임 및 프로토타입 제작\n공통 컬러 팔레트 및 컴포넌트 스타일 가이드 정립\n[구현]\ncss hover 기능을 이용한 버튼 hover처리",
    images:[airsound1,airsound2],
  },
];
function useIsTablet(breakpoint = 1030) {
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

export default function Clone({onOpen}) {
  const isTablet = useIsTablet(1030);
  const carouselRef = useRef(null);
  const infiniteSlides = [...slides, ...slides, ...slides];
  const getSlideWidth = useCallback(() => {
    const slide = carouselRef.current?.querySelector(".slide");
    return slide ? slide.offsetWidth : 0;
  }, []);

  const jumpToScrollLeft = useCallback((left) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    carousel.style.scrollBehavior = "auto";
    carousel.scrollLeft = left;

    requestAnimationFrame(() => {
      carousel.style.scrollBehavior = "";
    });
  }, []);

  const keepInfinitePosition = useCallback(() => {
    const carousel = carouselRef.current;
    const slideWidth = getSlideWidth();
    if (!carousel || !slideWidth) return;

    const middleStart = slideWidth * slides.length;
    const middleEnd = slideWidth * (slides.length * 2);

    if (carousel.scrollLeft < middleStart) {
      jumpToScrollLeft(carousel.scrollLeft + middleStart);
    }

    if (carousel.scrollLeft >= middleEnd) {
      jumpToScrollLeft(carousel.scrollLeft - middleStart);
    }
  }, [getSlideWidth, jumpToScrollLeft]);

  useEffect(() => {
    if (!isTablet) return;

    requestAnimationFrame(() => {
      const carousel = carouselRef.current;
      const slideWidth = getSlideWidth();
      if (!carousel || !slideWidth) return;

      jumpToScrollLeft(slideWidth * slides.length);
    });
  }, [getSlideWidth, isTablet, jumpToScrollLeft]);

  const prevSlide = () => {
    if (!carouselRef.current) return;
    const carousel = carouselRef.current;
    const slideWidth = getSlideWidth();
    carousel.scrollBy({
    left: -slideWidth,
    behavior: "smooth",
  });
    setTimeout(keepInfinitePosition, 450);
  };
  
  const nextSlide = () => {
    if (!carouselRef.current) return;
    const carousel = carouselRef.current;
    const slideWidth = getSlideWidth();
    carousel.scrollBy({
    left: slideWidth,
    behavior: "smooth",
  });
    setTimeout(keepInfinitePosition, 450);
  };
  // useEffect(() => {
  //   if (!carouselRef.current || !isTablet) return;
  
  //   const carousel = carouselRef.current;
  //   const slideWidth = carousel.clientWidth;
  
  //   carousel.scrollLeft = slideWidth * slideCount;
  // }, [isTablet, slideCount]);
  if (!isTablet) {
    return (
      <section className="clone-grid">
        {slides.map((slide, idx) => (
          <article className="card" key={idx}>
            <img src={slide.img} alt={slide.title} onClick={() => onOpen(slide)}/>
            <h2 onClick={() => onOpen(slide)}>{slide.title}</h2>
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
        {infiniteSlides.map((slide, idx) => (
          <li key={idx} className="slide">
            <img src={slide.img} alt={slide.title} onClick={() => onOpen(slide)}/>
            <h2 onClick={() => onOpen(slide)}>{slide.title}</h2>
          </li>
        ))}
      </ul>
        
      <button className="nav right" onClick={nextSlide} aria-label="next">
        ▶
      </button>
    </div>
  );
}
