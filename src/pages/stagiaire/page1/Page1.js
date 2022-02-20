import React from "react";
import './page1.css';
import { Card,Container } from '../../../containers';
import { Input, Button } from '../../../components';



const Page1 = () => (
    <Container>
        <Card>

        
            <div className="left-container">

                <h1>S'identifier</h1>
                <div>
                    <Input design="inputContainer" type="text" placeholder="Email" name="email"></Input>
                    <Input  design="inputContainer" type="password" placeholder="Mot de passe" name="motdepasse"></Input>
                    <Button  design="inputContainer" type="primary-btn" title="S'identifier" value="none"></Button>

                    <p >
                        Vous n'avez pas de compte?
                        <a  href="#">
                            Inscrivez-vous
                        </a>
                    </p>
                </div>
            </div>
            <div className="right-container">

                <img
                    src="./student.svg" alt="icon etudiant"
                />
                <h1>Etudiant</h1>
                <p>Vous cherchez un stage?</p>

            </div>
        </Card>
    </Container>

);
export default Page1;