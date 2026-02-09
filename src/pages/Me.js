import React from 'react'
import "./me.scss";
import component from "../assets/img/Component.jpg";
import { PiLineVerticalLight } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import { FaHeart } from "react-icons/fa6";
const Me = () => {
  const navigate = useNavigate();
  const handleClick=()=>{
    navigate('https://github.com/daehyeonkim0326-sys')
  }
  return (
    <div className='me'>
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
          <h3>김대현</h3>
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
          <h2 onClick={handleClick}>CREATOR</h2>
          <p>김대현</p>
        </div>
        <FaHeart className='emoji'/>
      </div>
      </div>
      <div className='introducting'>
        <h2>소개글</h2>
        <p>안녕하세요 저는 청각적인 것을 넘어서 시각적인 영역으로<br></br>
          예술감각을 확장하고 싶은 신인 퍼블리셔 김대현이라고 합니다.<br></br>
          제가 웹디자인을 시작하게 된 계기는<br></br>
          우연히 컴퓨터 공학과 친구가 만든 웹사이트를 보고 흥미가 생겨서 시작하게 되었습니다.<br></br>
          평소에도 디자인이 예쁘거나 멋진 것을 보면 소장하거나<br></br> 
          사진으로 남기는 것을 즐겨하던 저는 이 분야라면<br></br> 
          저의 예술적인 감각을 마음껏 뽐낼 수 있을 것 같았습니다.<br></br> 
          처음엔 쉽지 않았지만 차근차근 배워가면서 완성된 웹사이트를 보면<br></br> 
          성취감과 동시에 희열과 재미를 느끼게 되었습니다.<br></br>
          그래서 저는 운명이 허락하는 순간까지 이 일을 해보고 싶다는 열망이 생기게 되었습니다.</p>
      </div>
    </div>
  )
}

export default Me