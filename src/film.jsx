import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Film(props) {
 

  return (
    <>
      <div className="film-info">
      <h2>{props.title}</h2>
      <p><strong>Режисер:</strong> {props.director}</p>
      <p><strong>Рік випуску:</strong> {props.year}</p>
      <p><strong>Кіностудія:</strong> {props.studio}</p>
      <img src={props.posterUrl} alt={props.title} />
    </div> 
    </>
  )
}

export default Film
