import React, { useCallback, useEffect, useRef, useState } from 'react'
import quiz from "../assets/img/quiz.jpg";
import shopping from "../assets/img/Casestudio.jpg";
import quiz1 from "../assets/img/quiz1.jpg"
import quiz2 from "../assets/img/quiz2.jpg"
import shop1 from "../assets/img/Caststudio1.jpg"
import shop2 from "../assets/img/Casestudio2.jpg"
const slides = [
  { img: quiz, 
    title: "Quiz",
    category:"Personal",
    URL:"https://daehyeonkim0326-sys.github.io/myquiz/",
    description: "json를 이용한 질문 데이터를 ai를 활용하여 제작하였습니다.",
    dday:"1.진행 기간:2026.09.10~ 2025.09.12 (3일)",
    people:"2.개발 인원: FrontEnd 1인 (Solo Project)",
    techstack:"3.사용 기술 스택:\nLanguage: JavaScript (ES6+)\nFramework: React.js\nStyling: CSS\nDesign & Tool: Figma, Git, GitHub, photoshop",
    concept:"4.Concept: 휴대전화를 보는 듯한 퀴즈페이지",
   directory:"5.디렉토리 구조\nsrc\nimg=이미지\ncomponents=재사용 가능한 컴포넌트\ndata=퀴즈 질문이 있는 데이터 json 파일\nApp.js=라우터+전체 앱 구조",
    charge:"6.담당 역할\n[기획 및 디자인]\nFigma를 활용한 전체 와이어프레임 및 프로토타입 제작\n공통 컬러 팔레트 및 컴포넌트 스타일 가이드 정립\n[구현]\ncss hover 기능을 이용한 버튼 hover처리\n useState로 각종 애니메이션 처리 ",
    images:[quiz1,quiz2],
  },
  { img: shopping, 
    title: "Case studio",
    category:"Personal",
    URL:"https://daehyeonkim0326-sys.github.io/Casestudio/",
    description: "json data를 활용하여 카테고리 리스트를 만들고 useEffect를 통해 물건이 장바구니에 담기는 기능을 구현하였습니다.",
    dday:"1.진행 기간:2026.11.10~ 2025.11.14 (4일)",
    people:"2.개발 인원: FrontEnd 1인 (Solo Project)",
    techstack:"3.사용 기술 스택:\nLanguage: JavaScript (ES6+)\nFramework: React.js\nStyling: SCSS\nData Handling: Supabase\nDesign & Tool: Figma, Git, GitHub, photoshop",
    concept:"4.Concept: 다양한 감성을 지닌 휴대폰 케이스샵",
    directory:"5.디렉토리 구조\nsrc\nassets=이미지, 폰트, 공통scss 같은 정적 리소스\ncomponents=재사용 가능한 컴포넌트\npages=라우터로 연결되는 실제 화면(페이지)들\nlayout=레이아웃 전체 공통 구조\nApp.js=라우터+전체 앱 구조",
    charge:"6.담당 역할\n[기획 및 디자인]\nFigma를 활용한 전체 와이어프레임 및 프로토타입 제작\n공통 컬러 팔레트 및 컴포넌트 스타일 가이드 정립\n[개발 기능]\njson data에 있는 상품리스트를 useEffect를 사용하여 mainpage에서 장바구니 페이지로 데이터 넘기기",
    images:[shop1,shop2],
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

const Personal = ({onOpen}) => {
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

//   useEffect(() => {
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

      <ul
        className="carousel"
        ref={carouselRef}
      >
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
  )
}

export default Personal
