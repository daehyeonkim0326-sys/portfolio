import { useState, useEffect } from "react";

import "./layout.scss";

const Header = () => {
  // 현재 활성화된 섹션을 관리할 상태
  const [activeNav, setActiveNav] = useState("home");

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
  const sectionIds = ["home", "me", "skill", "projects", "contact"];
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // 섹션이 화면에 들어오기 시작하면 즉시 상태 업데이트
        if (entry.isIntersecting) {
          setActiveNav(entry.target.id);
        }
      });
    },
    { 
      // 상단에서 20% 지점을 감지선으로 설정 (가장 자연스러운 타이밍)
      // 하단 마진을 크게 주어 다음 섹션이 올라올 때 바로 반응하게 함
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0 
    }
  );

  sectionIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
    else console.warn(`Element with id "${id}" not found`); // ID가 없는지 확인용
  });

  return () => observer.disconnect();
}, []);




  return (
    <nav className="header">
      <ul>
        {/* NavLink 대신 일반 li와 activeNav 상태를 활용합니다 */}
        <li 
          className={`menu-item ${activeNav === "home" ? "active" : ""}`} 
          onClick={() => scrollTo("home")}
        >
          Home
        </li>
        <li>|</li>
        <li 
          className={`menu-item ${activeNav === "me" ? "active" : ""}`} 
          onClick={() => scrollTo("me")}
        >
          ME
        </li>
        <li>|</li>
        <li 
          className={`menu-item ${activeNav === "skill" ? "active" : ""}`} 
          onClick={() => scrollTo("skill")}
        >
          SKILL
        </li>
        <li>|</li>
        <li 
          className={`menu-item ${activeNav === "projects" ? "active" : ""}`} 
          onClick={() => scrollTo("projects")}
        >
          PROJECTS
        </li>
        <li>|</li>
        <li 
          className={`menu-item ${activeNav === "contact" ? "active" : ""}`} 
          onClick={() => scrollTo("contact")}
        >
          CONTACT
        </li>
      </ul>
    </nav>
  );
};

export default Header;
