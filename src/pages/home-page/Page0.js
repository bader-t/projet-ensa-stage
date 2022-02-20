import React from "react";
import './page0.css';
import { Card, Container } from '../../containers';


const Page0 = () =>
(
  <Container>
    <Card>

      <div className="left-container">
        <a href="/">
          <img className="effect"
            src="./blue-student.svg" alt="icon etudiant"
          />
        </a>
        <h1>Etudiant</h1>
        <p>Vous cherchez un stage?</p>

      </div>

      <div className="right-container">
        <a href="/">
          <img  className="effect"
            src="./entreprise.svg" alt="icon entreprise"
          />
        </a>
        <h1>Entreprise</h1>
        <p>Vous cherchez des stagiaires?</p>

      </div>
    </Card>
  </Container>
)

export default Page0;


