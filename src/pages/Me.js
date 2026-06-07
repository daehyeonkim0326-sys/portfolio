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
        <p>안녕하세요. 저는 음악을 통해 쌓아온 감각을 시각적인 영역으로 확장하고 있는 신입 퍼블리셔 김대현입니다.<br></br>
          웹디자인은 우연히 컴퓨터 공학과 친구가 만든 웹사이트를 보며 흥미를 느낀 것을 계기로 시작하게 되었습니다.<br></br>
          평소 완성도 높은 디자인과 시각적인 요소들을 관찰하고 사진으로 남기는 것을 즐겨하는 저는 이 분야라면 저의 디자인 감각을 키울 수 있을 것 같았습니다.<br></br> 
          처음에는 쉽지 않았지만, 하나씩 배워가며 직접 화면을 구성하고 완성해 나가는 과정에서 큰 성취감과 재미를 느꼈습니다.<br></br>
          저는 무언가를 만들고 설계하는 과정에서 삶의 목표를 찾아가는 사람입니다.<br></br>
          아직 부족한 점도 많지만, 꾸준히 배우고 개선하며 변화하는 시대에 필요한 퍼블리셔로 성장하고 싶습니다.</p>
      </div>
    </div>
  )
}

export default Me