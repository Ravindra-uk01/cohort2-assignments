import React from 'react'
import './card.css'

const Card = ({title, description , interests, linkedIn , twitter}) => {
  return (
    <div className='card'> 
        <h2>{title}</h2>
        <p>{description}</p>
        <h2>Interests</h2>
        <ul className='interests_ul' >
          {interests.map((interest, index) => ( 
            <li key={index}>{interest}</li>
          ))}
        </ul>

        <div className='social_links'> 
            <button> <a href={linkedIn} target="_blank" rel="noopener noreferrer" >LinkedIn</a> </button>
            <button> <a href={twitter} target="_blank" rel="noopener noreferrer" >Twitter</a> </button>
        </div>
    </div>
  )
}

export default Card