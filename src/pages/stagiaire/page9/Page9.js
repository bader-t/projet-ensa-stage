import React from "react";
import './page9.css';
import { Container,Section,Card } from '../../../containers';
import { NavBar } from "../../../containers";
import {DemandeStage} from "../../../components";

const Page9 = () =>
( 
  <Container>
     <NavBar>
     <div class="navbar">
            <a href="/"><img  src="./user.svg"  />Mon profil</a>
            <a href="/"><img  src="./search.svg"  />Trouver un stage</a>
            <a href="/"><img  src="./business-bag.svg"/>Les offres</a>
            <a href="/"><img  src="./todo-list.svg"  />Mes condidatures</a>
            <a href="/"><img  src="./cv.svg" />Mon cv & Lettre</a>
            <a href="/"><img  src="./workplace.svg"  />Postuler</a>
            <a href="/"><img  src="./logout.svg" />Déconnexion</a>
     </div>
     </NavBar>
     <Section>
        <Card styles={{ Card: "card2 " }}>
                <DemandeStage/>
        </Card>
        <Card styles={{ Card: "card2 " }}>
                <div class="demandes">
                    <h3>Mes demandes</h3>
                    <table>
                        <tr>
                            <th>Demandes de stage </th>
                            <th>Date</th>
                            <th>Lien</th>
                        </tr>
                        <tr>
                            <td>Stage en Marketing Digitale (Marrakech) </td>
                            <td>01/07/2022</td>
                            <td> <a href="/">voir demende<img  src="./suivant.svg" /></a></td>
                        </tr>
                        <tr>
                            <td>Stage en Marketing Digitale (Marrakech)</td>
                            <td>01/07/2022</td>
                            <td><a href="/">voir demende<img  src="./suivant.svg" /></a></td>
    
                        </tr>
                        <tr>
                            <td>Stage en Marketing Digitale (Marrakech)</td>
                            <td>01/07/2022</td>
                            <td><a href="/">voir demende<img  src="./suivant.svg" /></a></td>
    
                        </tr>
                    </table>
                    
                </div>
            </Card>


            
    </Section> 
  </Container>
)

export default Page9