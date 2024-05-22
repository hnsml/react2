import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Film from  './film.jsx'
import PersonalInfo from  './personalInfo.jsx'
import Clock from  './clock.jsx'
import PetInfo from  './petInfo.jsx'

function App() {
 

  return (
    <>
       <Film
        title="Сіністер"
        director="Скотт Деріксон"
        year="2012"
        studio="	Automatik Entertainment"
        posterUrl="https://sun9-14.userapi.com/impg/2_AEobEPEUQ_8Je7VCAmQfkwQVgTBGiOspkwng/5vE5mkNsZgM.jpg?size=807x538&quality=96&sign=265db2aa545961ee7c6ae6545f9fa8bd&type=album"
      />
      <br/>
      <br/>
      <h1>Персональна сторінка</h1>
      <PersonalInfo
        name="Ботнарь Артем Сергійович"
        phone="+380684723108"
        email="artem.botnar144@gmail.com"
        city="Cuhureștii de Jos"
        experience="багатий"
        skills="PHP, C++, C#, JS, MySQL, HTML, CSS, ChatGPT"
        photoUrl="./ya.jpg"
      />
      <br/>
      <br/>
      <Clock/>
      <br/>
      <br/>
      <h1>Домашній улюбленець</h1>
      <PetInfo
        name="Танюша"
        species="Змія"
        breed="Домашня Анаконда"
        age="18 років"
        characteristics="Агресивна, вспильчива, криклива, дуже гарна, лагідна, грайлива, любляча, сварлива, НЕ маніпулятор, НЕ абьюзер, любить смачно поїсти, любить лазити по хазяїну.
        Це неймовірне створіння очаровує всіх своєю красотою, заманює своїм чарівним голосом до себе, щоб потім з'їсти вас. Любить, щоб з нею гралися і приділяли багато уваги, а найголовніше багато і смачно кормити."
        image="./snake.jpg"
      />
    </>
  )
}

export default App
