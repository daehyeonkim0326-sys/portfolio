import React, { useEffect, useRef, useState } from 'react'
import shopping from "../assets/img/shopping.jpg";
import map from "../assets/img/map.jpg";
import shop from "../assets/img/shopping1.jpg";
import map1 from "../assets/img/map1.jpg"
import map2 from "../assets/img/map2.jpg"
import "./components.scss";

const slides = [
  { img: shopping, 
    title: "Reste : 쇼핑 홈페이지",
    category:"Team",
    URL:"https://daehyeonkim0326-sys.github.io/reste/",
    description: "기획과 디자인, 장바구니 페이지 개발에 참여하였고 Mock Data(JSON)를 활용해 실제 커머스 로직을 구현한 RESTE 쇼핑몰 프로젝트입니다.",
    dday:"1.진행 기간: 2025.12.22 ~ 2025.12.29 (8일)",
    people:"2.개발 인원: FrontEnd 5인(TeamProject)",
    techstack:"3.사용 기술 스택:\nLanguage: JavaScript (ES6+)\nFramework: React.js\nStyling: CSS\nData Handling: Custom Mock Data (JSON)\nDesign & Tool: Figma, Git, GitHub, VScode,GSAP,reactbits,photoshop",
    concept:"4.Concept: 사용자 직관성을 고려한 UI/UX 설계 및 와이어프레임 제작",
    directory:"5.디렉토리 구조\nsrc\nassets=이미지, 폰트, JSON 데이터, scss\ncomponents=이미지 카드,팝업 등 재사용 가능한 공통 UI 컴포넌트\npages=라우팅 페이지와 style scss (MainPage, DetailPage, CartPage,ProductPage...)\nlayout=Header,Outlet,Footer 레이아웃",
    charge:"6.담당 역할\n[기획 및 디자인]\nFigma를 활용한 전체 와이어프레임 정립과 UI설계\n[개발:  기능]\nuseState,useEffect,useNavigete,motion 등을 사용하여 react로 CartPage.js,CartPopup.js 컴포넌트를 만들고 scss를 활용하여 CartPage와 CartPopup style 제작",
    major:"7.주요 기능\n상품 데이터 처리: JSON 데이터를 활용한 비동기 통신 모방\n장바구니 관리: 배열을 활용한 장바구니 추가/수정/삭제",
    trouble:"8.트러블 슈팅\n문제 1.수정한 부분이 git에 업로드 되지 않는다.\n상황: Compare & pull request 과정에서 수정된 코드가 git에 올라가지 않는 상황\n해결:git status 로 충돌파일을 확인한 후 충돌한 지점을 수정해서 터미널에 git add src/수정한 파일 입력 후\n다시 커밋하고 git push origin main 한 후에 깃허브 사이트에서 리퀘스트\n과정:git status를 사용하여 오류지점을 확인 -> 오류지점 수정 -> git add src/수정파일 터미널에 입력 -> 커밋하기 git commit -m '' -> 터미널에 git push origin main 입력 -> 깃허브 사이트에서 리퀘스트하기\n문제 2.구입하기 버튼 클릭하면 상품 상세페이지로 넘어가지 않는 문제\n상황: ProductMD로 Products.json에 있는 상품 id가 읽혀지지 않음\n해결:MainPage.js에서 객체로 const item 으로 Products.json에서 id 찾아서 ProductMD로 Props 전달\n과정: const item = products.find((p) => String(p.id) === 'midnight');(MainPage.js) -> Props로 ProductMD.js에 item 전달 -> handleClick 안에 onAdd한테 item 전달 -> button을 감싸고 있는 Link에 handleClick 전달",
    images: [shop],
  },
  { img: map, 
    title: "ZIO : 공영주차장 관리 시스템",
    category:"Team",
    URL:"https://daehyeonkim0326-sys.github.io/ZIO/",
    description: "기획부터 디자인, 개발까지 직접 참여하였으며, Supabase 기반으로 실사용 가능한 예약/결제 로직을 구현한 주차장 관리 시스템입니다.",
    dday:"1.진행 기간:2026.01.02~ 2026.01.09 (8일)",
    people:"2.개발 인원: FrontEnd 6인 (Team Project)",
    techstack:"3.사용 기술 스택:\nLanguage: JavaScript (ES6+)\nFramework: React.js\nStyling: SCSS\nData Handling: Supabase\nDesign & Tool: Figma, Git, GitHub, photoshop",
    concept:"4.Concept: 사용자 직관성을 고려한 UI/UX 설계 및 와이어프레임 제작",
    directory:"5.디렉토리 구조\nsrc\napi=Supabase/서버와 통신하는 코드(데이터 읽기/쓰기)\nassets=이미지, 폰트, 공통scss 같은 정적 리소스\ncomponents=재사용 가능한 컴포넌트\ncontexts=전역상태 관리\npages=라우터로 연결되는 실제 화면(페이지)들\nlayout=레이아웃 전체 공통 구조\nApp.js=라우터+전체 앱 구조",
    charge:"6.담당 역할\n[기획 및 디자인]\nFigma를 활용한 전체 와이어프레임 및 프로토타입 제작\n공통 컬러 팔레트 및 컴포넌트 스타일 가이드 정립\n[개발:  기능]\n지도 기반 주차장 검색 및 위치 표시 (필터 적용 가능)\n주차장 상세 정보 출력 ( 유형, 잔여 자리, 내부 이미지)\n좌석/주차면 선택 기능 ( 좌석형 UI)\n예약 및 결제 기능 (회원/비회원 모두 가능)\n마이페이지: 예매 내역, 차량정보, 결제수단 변경 관리\n비회원 예매 확인 기능 (차량번호 + 전화번호)\n반응형 UI (모바일·데스크탑 최적화)\n접근성 고려(컬러 구분, 직관적 아이콘)",
    major:"7.주요 기능\n주차장 데이터 처리: SUPABASE와의 비동기 통신을 통해 실시간 주차장 정보(위치, 요금, 잔여좌석)를 불러오고 화면에 반영\n예약 관리: 상태 배열을 활용해 선택한 주차장/시간/차량 정보를 추가·수정·삭제하며 예약 과정 관리\n검색 및 필터링: 배열 메서드를 활용해 가격순·잔여좌석 기준으로 정렬하고 키워드 지원",
    trouble:"8.트러블 슈팅\n문제 1.marge 후 다른 팀원들 프로젝트에서 지도가 뜨지 않는 현상 발생.\n상황:지도 api 홈페이지에서 api 사용을 켜지 않아서 발생한 문제\n해결:지도 api 사용을 켬\n과정:marge 후 각 컴퓨터 프로젝트에서 지도가 뜨지 않는 것을 확인 -> console을 통해 오류 파악 -> 지도 api 문제로 카카오맵디벨로퍼에서 api 사용 켜줌",
    images: [map1,map2],
   },
];

function useIsMobile(breakpoint = 1030) {
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
const Team = ({onOpen}) => {
    const isMobile = useIsMobile(1030);
     const carouselRef = useRef(null);
    
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
    
      

      if (!isMobile) {
        return (
          <section className="clone-grid">
        {slides.map((slides, idx) => (
          <article className="card" key={idx}>
            <img src={slides.img} alt={slides.title} onClick={() => onOpen(slides)}/>
            <h2 onClick={() => onOpen(slides)}>{slides.title}</h2>
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
        {slides.map((slides, idx) => (
          <li key={idx} className="slide">
            <img src={slides.img} alt={slides.title} onClick={() => onOpen(slides)}/>
            <h2 onClick={() => onOpen(slides)}>{slides.title}</h2>
          </li>
        ))}
      </ul>
        
      <button className="nav right" onClick={nextSlide} aria-label="next">
        ▶
      </button>


    </div>
  )
}

export default Team