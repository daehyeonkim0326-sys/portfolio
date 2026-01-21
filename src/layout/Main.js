import React from 'react'
import "./layout.scss";
import Home from '../pages/Home';
import Me from '../pages/Me';
import Skill from '../pages/Skill';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
const Main = () => {
  return (
    <div className='main'>
      <section id='home'><Home/></section>
      <section id='me'><Me/></section>
      <section id='skill'><Skill/></section>
      <section id='projects'><Projects/></section>
      <section id='contact'><Contact/></section>
    </div>
  )
}

export default Main