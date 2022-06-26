import React from 'react'
import './index.css'

export default function SingleCard(props) {
    const {card,handleChoices,flipped,disabled} = props 
    const {src} = card

    const handleClick = ()=>{
      
      if(!disabled){
        handleChoices(card)
      }
    }
  
  return (
    <div className='card'>
    <div className={flipped ? "flipped":""}>
      <img className="front"src={src} alt={src} />
      <img className='back' 
      src="/img/cover.png" 
      alt="card-back"
      onClick={handleClick}/>
    </div>
  </div>
  )
}
