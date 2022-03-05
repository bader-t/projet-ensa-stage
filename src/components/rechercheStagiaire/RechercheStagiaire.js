import React from 'react'
import './rechercheStagiaire.css'

const RechercheStagiaire = () => {
  return (
    <div className='recherchestagiaire-card'>
        <h2>Recherche des stagiaires</h2>
        <div className='recherchestagiaire-container'>
            <div className='recherchestagiaire-containers'>
                <label>Mots clés </label>
                <input className='recherchestagiaire-input' type="text" placeholder="Mots clés"/>
            </div>
            <div className='recherchestagiaire-containers'>
                <label for="typeStage">Type de stage </label>
                <select className='recherchestagiaire-select' name="typeStage" id="typeStage">
                <option value="" disabled selected >Choisissez un type</option>
                    <option value="PFE">PFE</option>
                    <option value="PFA">PFA</option>
                    <option value="OTHER">OTHER</option>
                </select>
            </div>
            <div className='recherchestagiaire-containers'>
                <label for="domain">Type de stage </label>
                <select className='recherchestagiaire-select' name="domain" id="domain">
                    <option value="" disabled selected >Choisissez un domain</option>
                    <option value="PFE">PFE</option>
                    <option value="PFA">PFA</option>
                    <option value="OTHER">OTHER</option>
                </select>

            </div>
        </div>
        <div className='recherchestagiaire-container'>
            <div className='recherchestagiaire-containers'>
                <label>Date début de stage </label>
                <input className='recherchestagiaire-input' type="date" />
            </div>
            <div className='recherchestagiaire-containers'>
                <label>Durée de stage </label>
                <input className='recherchestagiaire-input' type="date" />
            </div>
            <div className='recherchestagiaire-containers'>
                <label for="domain">Ville</label>
                <select className='recherchestagiaire-select' name="domain" id="domain">
                    <option value="" disabled selected >Choisissez une ville</option>
                    <option value="Kech">Kech</option>
                    <option value="Casa">Casa</option>
                    <option value="Rabat">Rabat</option>
                </select>

            </div>
        </div>
    </div>
  )
}

export default RechercheStagiaire