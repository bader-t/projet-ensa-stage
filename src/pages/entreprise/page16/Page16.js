import React from 'react'
import './page16.css'
import { NavBar, Container, Card, Section } from "../../../containers";
import {StagiaireCard,RechercheStagiaire} from "../../../components";

const page16 = () => {
  return (
    <Container>
        <NavBar >
        <div className="navbar-container">
            <div className='navbar-containers'>
                <div className="btn"><a href="#"><img src="/icons/navbar_entreprise/building.svg" /> <p>Profile</p></a></div>
                <div className="btn "><a href="#"><img src="/icons/navbar_entreprise/search.svg" /> <p>Trouver des stagaires</p></a></div>
                <div className="btn"><a  href="#"><img src="/icons/navbar_entreprise/business-bag.svg"/> <p>Nos offres</p></a></div>
                <div className="btn"><a href="#"><img src="/icons/navbar_entreprise/todo-list.svg"/> <p>Les candidateurs</p></a></div>
            </div>
            <div className='navbar-containers'>
                <div className=" btn"><a href="#"><img src="/icons/navbar_entreprise/logout.svg"/> <p>Deconexion</p></a></div>
            </div>
		</div>
        </NavBar>
        <Section>
            <Card styles={{ Card: "card2 " }}>
                <RechercheStagiaire/>
            </Card>

            <Card styles={{ Card: "card2 " }}>
                <div>
                    <h2>Stagiaires</h2>
                    <StagiaireCard title="Stage en Marketing Digital(Marrakech)" dateDebut="Date de debut: 01/07/2022" userName="User Name " description=" etium rutrum. Donec congue accumsan magna vel tempus.etium rutrum. Donec congue accumsan magna vel tempus.etium rutrum. Donec congue accumsan magna vel tempus. Pellentesque nibh ligula, rhoncus et ligula vel, iaculis mollis enim. Pellentesque sed tellus malesuada," duree="2 mois" type="PFE"/>
                    <StagiaireCard title="Stage en Marketing Digital(Marrakech)" dateDebut="Date de debut: 01/07/2022" userName="User Name" description="etium rutrum. Donec congue accumsan magna vel tempus.etium rutrum. Donec congue accumsan magna vel tempus.etium rutrum. Donec congue accumsan magna vel tempus. Pellentesque nibh ligula, rhoncus et ligula vel, iaculis mollis enim. Pellentesque sed tellus malesuada," duree="2 mois" type="PFE"/>
                    <StagiaireCard title="Stage en Marketing Digital(Marrakech)" dateDebut="Date de debut: 01/07/2022" userName="User Name" description="etium rutrum. Donec congue accumsan magna vel tempus.etium rutrum. Donec congue accumsan magna vel tempus.etium rutrum. Donec congue accumsan magna vel tempus. Pellentesque nibh ligula, rhoncus et ligula vel, iaculis mollis enim. Pellentesque sed tellus malesuada," duree="2 mois" type="PFE"/>
                    <StagiaireCard title="Stage en Marketing Digital(Marrakech)" dateDebut="Date de debut: 01/07/2022" userName="User Name" description="etium rutrum. Donec congue accumsan magna vel tempus.etium rutrum. Donec congue accumsan magna vel tempus.etium rutrum. Donec congue accumsan magna vel tempus. Pellentesque nibh ligula, rhoncus et ligula vel, iaculis mollis enim. Pellentesque sed tellus malesuada," duree="2 mois" type="PFE"/>
                </div>
            </Card>


        </Section>
    </Container>
  )
}

export default page16