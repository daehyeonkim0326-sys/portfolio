import React from 'react'
import loding from "../assets/video/loding.gif";
import gride from "../assets/video/gride.gif";
import book from "../assets/video/book.gif";
const Practical = () => {
  return (
    <div className='practical'>
      <ul>
        <li>
          <img src={loding} alt='loding'/>
          <h2>끊김없이 무한으로 돌아가는 이미지</h2>
        </li>
        <li>
          <img src={gride} alt='gride'/>
          <h2>CSS애니메이션을 활용한 프로그래스바 구현</h2>
        </li>
        <li>
          <img src={book} alt='book'/>
          <h2>CSS 3D 입체서적 구현</h2>
        </li>
      </ul>
    </div>
  )
}

export default Practical