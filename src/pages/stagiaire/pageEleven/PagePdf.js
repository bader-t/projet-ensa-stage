import { NavBar, Container, Card, Section } from "../../../containers";
import './PagePdf.css'
const PageOne = () => {
    return ( 
        <Container>
            <NavBar >
        <div className="navbar-container">
            <div className='navbar-containers'>
                <div className="btn"><a href="#"><img src="/icons/navbar_stagiaire/user.svg" /> <p>Profile</p></a></div>
                <div className="btn "><a href="#"><img src="/icons/navbar_stagiaire/search.svg" /> <p>Trouver un stage </p></a></div>
                <div className="btn"><a  href="#"><img src="/icons/navbar_stagiaire/business-bag.svg"/> <p>Les offres</p></a></div>
                <div className="btn"><a href="#"><img src="/icons/navbar_stagiaire/todo-list.svg"/> <p>Mes candidateurs</p></a></div>
                <div className="btn"><a href="#"><img src="/icons/navbar_stagiaire/cv.svg"/> <p>Mon cv & lettre</p></a></div>
                <div className="btn"><a href="#"><img src="/icons/navbar_stagiaire/workplace.svg"/> <p>Postuler</p></a></div>
            </div>
            <div className='navbar-containers'>
                <div className=" btn"><a href="#"><img src="/icons/navbar_stagiaire/logout.svg"/> <p>Deconexion</p></a></div>
            </div>
		</div>
        </NavBar>
        <Section>
         <Card styles={{ Card: "card2 " }} id="cardy">
         <div className="div1">
           <h2>Mon cv </h2>
           <div id="para1">
           <div id="inputCv"><input type="file" placeholder="choisir un fichier " className="inputN"></input></div>
           <div id="adiv1"><img></img><a href="#">Voir mon cv </a></div>
           </div>
         </div>
          <div className="div1">
            <h2>Ma lettre </h2>
            <div id="para2">
            <div id="inputLettre"><input type="file" placeholder="choisir un fichier " className="inputM"></input></div>
            <div id="adiv2"><img></img><a href="#">Voir ma lettre </a></div>
            </div>
          </div>
        </Card>
            
        </Section>
        </Container>
     );
}
 
export default PageOne;