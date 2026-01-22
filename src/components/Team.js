import React from 'react'
import shopping from "../assets/img/shopping.jpg";
import map from "../assets/img/map.jpg";
import "./components.scss";
const Team = () => {
  return (
    <div className='team'>
        <ul>
            <li className='shopping'>
                <img src={shopping} alt='sh'/>
                <h2>쇼핑몰 웹 사이트</h2>
            </li>
            <li className='map'>
                <img src={map} alt='map'/>
                <h2>공영 주차장 관리 사이트</h2>
            </li>
        </ul>
    </div>
  )
}

export default Team