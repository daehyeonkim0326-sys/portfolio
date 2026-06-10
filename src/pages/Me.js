import React from 'react'
import "./me.scss";
import component from "../assets/img/Component.jpg";
import { PiLineVerticalLight } from "react-icons/pi";
import { FaHeart } from "react-icons/fa6";
const Me = () => {
  const handleClick=()=>{
    window.location.href = 'https://github.com/daehyeonkim0326-sys';
  }
  return (
    <div className='me'>
      <div className='blur'>
      <div className='txt'>
        <h1>About Me</h1>
      </div>
      <div className='box'>
        <div className='img'>
          <img src={component} alt="사진" onClick={handleClick}/> 
        </div>
        <PiLineVerticalLight className='line' />
        <div className='txt'>
          <h1>CREATOR</h1>
          <h3>이름:김대현</h3>
          <h3>작성일:2026.01.20</h3>
          <h3>장르:웹디자인</h3>
        </div>
      </div>
      <div className='track'>
        <div className='txt'>
          <h2>수록곡</h2>
        </div>
      <div className='track-list'>
        <h2 className='num'>1</h2>
        <div className='txt'>
          <h2>CREATOR</h2>
          <p>김대현</p>
        </div>
        <FaHeart className='emoji'/>
      </div>
      </div>
      <div className='introducting'>
        <h2>소개글</h2>
        <p>안녕하세요. 음악을 통해 쌓아온 감각을 시각적인 영역으로 확장하고 있는 신입 퍼블리셔 김대현입니다.<br/>
          웹디자인에 대한 흥미를 계기로 시작해 꾸준히 배우고 성장하고 있으며, 사용자 경험과 완성도를 높이는 웹을 만드는 퍼블리셔를 목표로 하고 있습니다.</p>
      </div>
      </div>
    </div>
  )
}

export default Me