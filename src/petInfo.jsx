import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function PetInfo(props) {
  return (
    <div className="pet-info">
      <h2>{props.name}</h2>
      <p><strong>Вид:</strong> {props.species}</p>
      <p><strong>Раса:</strong> {props.breed}</p>
      <p><strong>Вік:</strong> {props.age}</p>
      <p><strong>Характеристики:</strong> {props.characteristics}</p>
      <img src={props.image} alt={props.name} />
    </div>
  );
}

export default PetInfo
