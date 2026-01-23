import React from 'react'
import quiz from "../assets/img/quiz.jpg";
import blog from "../assets/img/blog.jpg";
const Personal = () => {
  return (
    <div className='personal'>
      <ul>
        <li>
          <img src={quiz} alt='quiz'/>
          <h2>QUIZ</h2>
        </li>
        <li>
          <img src={blog} alt='blog'/>
          <h2>기업형 블로그</h2>
        </li>
      </ul>
    </div>
  )
}

export default Personal