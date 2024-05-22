import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function personalInfo(props) {
 

  return (
    <>
       <div className="personal-info">
      <h2>{props.name}</h2>
      <p><strong>Телефон:</strong> {props.phone}</p>
      <p><strong>Email:</strong> {props.email}</p>
      <p><strong>Місто проживання:</strong> {props.city}</p>
      <p><strong>Досвід роботи:</strong> {props.experience}</p>
      <p><strong>Навички:</strong> {props.skills}</p>
      <img src={props.photoUrl} alt={props.name} />
    </div>
    </>
  )
}

export default personalInfo
