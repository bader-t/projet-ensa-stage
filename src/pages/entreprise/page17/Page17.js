import React from "react";
import './page17.css';
import { Card,Container,NavBar, Section } from '../../../containers';
import { Button } from "../../../components";




const Page17 = () => (
    <Container>
        <NavBar>
        
            <div className="cont"> <a href="#" className="ain"><img className="effect" src="./building.svg" alt="icon etudiant"/><p>Profile</p></a> </div>
            <div className="cont"><a href="#"  className="ain"><img className="effect" src="./search.svg" alt="icon etudiant" />Trouver des stagiaires</a></div>
            <div className="cont"><a href="#" className="ain"> <img className="effect" src="./business-bag.svg" alt="icon etudiant"/>Nos offres</a></div>
            <div className="cont"><a href="#" className="ain"><img className="effect" src="./todo-list.svg" alt="icon etudiant" /> Les condidateur</a></div>
            <div className="rien"> </div>

            <div className="quit"><a href="#" className="ain"><img className="effect" src="./logout.svg" alt="icon etudiant" />Quiter</a></div>


        </NavBar>
        <Section>
           
            <Card styles={{ Card: "card card-position-top" }}>
                <h2>Créer une offre </h2>
               
                <div className="one">
                
                    <div className="first-div" >
                        <div>
                            <p>Type de stage</p>
                            <select className="choix">
                               <option value="france">Choisissez un type</option>
                               <option value="espagne">xxxxxxxxxxxxxxxx</option>
                           </select>                         </div>
                        <div>
                            <p>Domain</p>
                            <select className="choix">
                               <option value="france">Choisissez un domain</option>
                               <option value="espagne">xxxxxxxxxxxxxxxx</option>
                           </select>                         </div>
                        <div>
                            <p>Ville</p>
                            <select className="choix">
                               <option value="france">Choisissez une ville</option>
                               <option value="espagne">XXXXXXXXXX</option>
                           </select>                         </div>
                    </div>
                    <div className="first-div" >
                        <div>
                           <p>Date début de stage</p>
                           <input type="date"className="choix" />
                        </div>
                        <div>
                           <p>Durée de stage</p>
                           <select className="choix">
                               <option value="durée de stage" color="red" selected >durée de stage</option>
                               <option value="espagne">xxxxxxxxxxxxxxxx</option>
                           </select> 
                        </div>
                        <div>
                           <p>Titre</p>
                           <input type="text" placeholder="Titre" className="choix"/>
                        </div>
                    </div>

                    <div className="part2">
                        <p>Rénumerer</p>
                        <input type="checkbox"/>
                
                        <p>Description</p>
                        <textearea  id="desc">description</textearea>
                    </div>
                    <div className="btn">
                    <Button title="Créer" type="secondary-btn" ></Button>
                    </div>
    
                </div>
               
            </Card>
             <Card styles={{ Card: "card card-position-width" }}>
                 <h2>Mes offres</h2>

                 <table>
                         <tr>
                            <th>offre de stage</th>
                            <th>Date</th>
                            <th>lien</th>
                         </tr>

                         <tr>
                            <td>stage en marketing (marrakech)</td>
                            <td>01/07/2020</td>
                            <td><a>voir l'offre<img className="link" src="./link.svg" /></a></td>
                         </tr>
                         <tr>
                            <td>stage en marketing (marrakech)</td>
                            <td>01/07/2020</td>
                            <td><a>voir l'offre<img className="link" src="./link.svg" /></a></td>
                         </tr>
</table>
                
            
               
            </Card>

        </Section>
    </Container>
)

export default Page17;
