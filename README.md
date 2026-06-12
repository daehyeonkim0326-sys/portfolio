1. 웹 사이트 소개
설명: 디자인 부터 기능 개발까지 직접 설계하고 디자인한 포트폴리오 웹사이트 입니다.
진행 기간: 2025.12.30 ~ 2026.01.11 (13일)
개발 인원: FrontEnd 1인 (Solo Project)
배포 링크: https://daehyeonkim0326-sys.github.io/portfolio/
피그마 링크:https://www.figma.com/design/8OLpyAMcRPVnAK7Yh5pt3t/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4?node-id=2238-343&t=rsNWV6vxBWDlcsx4-1
3. 사용 기술 스택 (Tech Stack)
Language: JavaScript (ES6+)
Framework: React.js
Styling: SCSS
Design & Tool: Figma, Git, GitHub, VScode,GSAP,reactbits,photoshop
4. 기획 및 디자인 (Planning & Design)
Tool: Figma,photoshop
Concept: 나를 표현하기 위한 개성 넘치는 포트폴리오
5. 디렉토리 구조
src
├── assets        # 이미지, 폰트, scss
├── components    # 이미지 카드,팝업 등 재사용 가능한 공통 UI 컴포넌트
├── pages         # 라우팅 페이지와 style scss (MainPage, DetailPage, CartPage,ProductPage...)
└── layout        # Header,Main,Footer 레이아웃

5. 담당 역할

[기획 및 디자인]
* Figma를 활용한 전체 와이어프레임 정립과 UI설계

[개발:  기능]
*useState,useEffect 등을 사용하여
react로 각 섹션 별 컴포넌트를 만들고 scss를 활용하여 전체적인 UX 디자인  



6. 주요 기능
각 컴포넌트에 나만의 프로젝트를 팝업으로 띄워서 정보를 제공


7. 트러블 슈팅
문제 1.좌우 버튼을 클릭하여 이미지 슬라이드를 했지만 위치가 맞지않는 문제가 발생
상황: Project.scss에서 width 설정이 강제되어 있어서 슬라이딩 될 수록 이미지가 틀어짐
해결: !important를 활용하여 각 컴포넌트 scss 에 width 값을 강제함
