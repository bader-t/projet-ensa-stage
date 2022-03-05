import React from 'react'
import './stagiaire-card.css'

const StagiaireCard = ({title,dateDebut,userName,description,type,duree}) => {
  return (
    <div className='stagiairecard-container'>
        <div className='stagiairecard-user'>
            <div className='stagiairecard-user-card'>
                <img src="/icons/user-graduate.svg" />
            </div>
            <p>{userName} </p>
        </div>
        <div className='stagiairecard-infos'>
            <div className='stagiairecard-title'>
                <h4>{title}</h4>
                <p>{dateDebut}</p>
            </div>
            <div className='stagiairecard-description'>
                <p> {description}</p>
            </div>
            <div className='stagiairecard-buttons'>
                <div style={{backgroundColor:"#C34242"}}>{duree}</div>
                <div style={{backgroundColor:"#42A7C3"}}>{type}</div>
                <div style={{backgroundColor:"#929292"}}><img src='/icons/user.svg'/></div>
            </div>
        </div>
    </div>
  )
}

export default StagiaireCard