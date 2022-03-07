import React from 'react'
import './demandeStage.css'

const demandeStage = () => {
  return (
    <div className='demandeStage-card'>
        <h4>Demander un Stage</h4>
        <div className='demandeStage-container'>
        <div className='demandeStage-containers'>
                <label for="typeStage">Type de stage </label>
                <select className='demandeStage-select' name="typeStage" id="typeStage">
                <option value="" disabled selected >Choisissez un type</option>
                    <option value="PFE">PFE</option>
                    <option value="PFA">PFA</option>
                    <option value="OTHER">OTHER</option>
                </select>
            </div>

            <div className='demandeStage-containers'>
                <label for="domain">Demain </label>
                <select className='demandeStage-select' name="domain" id="domain">
                    <option value="" disabled selected >Choisissez un domain</option>
                    <option value="Developpemnt web">Developpemnt web</option>
                    <option value="Developpemnt mobile">Developpemnt mobile</option>
                    <option value="Data science">Data science</option>
                    <option value="OTHER">OTHER</option>
                </select>

            </div>

            <div className='demandeStage-containers'>
                <label for="domain">Ville</label>
                <select className='demandeStage-select' name="domain" id="domain">
                    <option value="" disabled selected >Choisissez une ville</option>
                    <option value="Marrakech">Marrakech</option>
                    <option value="Casablanca">Casablanca</option>
                    <option value="Rabat">Rabat</option>
                    <option value="Agadir">Agadir</option>
                </select>

            </div>
        </div>
        <div className='demandeStage-container'>

            <div className='demandeStage-containers'>
                <label>Date début de stage </label>
                <input className='demandeStage-input' type="date" />
            </div>

            <div className='demandeStage-containers'>
                <label>Durée de stage </label>
                <input className='demandeStage-input' type="date" />
            </div>

            <div className='demandeStage-containers'>
                <label>Titre </label>
                <input className='demandeStage-input' type="text" placeholder="Titre"/>
            </div>
        </div> 
        <div className='discription'>  
            
                <label >Description :</label>
                <textarea name="Discription" placeholder="Description" ></textarea>
                
               
        </div>
        <div className='demandeStage-container'>
        <div className="button"><button>Postuler</button> </div>

        </div>
                
    </div>
  )
}

export default demandeStage