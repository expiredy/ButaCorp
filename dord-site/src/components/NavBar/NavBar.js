import "./NavBarStyle.css";

import ButaCorpLogo from "./../../content/images/text_view/ButaCorpLogo.png";
import McQueen from "./../../content/plug_images/McQueen.png";


function NavBar() {
    return(
        <div className="NavBar">
            <nav className="shadow">
                <img src={ButaCorpLogo} class="logo" alt="ButaCorpLogo"></img>
                <ul className="navigation-links">
                    <li><a href="#about">О нас</a></li>
                    <li><a href="#problem" >Проблематика</a></li>
                    <li><a href="#solution" >Решение</a></li>
                    <li><a href="#business_model">Бизнес-модель</a></li>
                    <li><a href="#contacts">Контакты</a></li>
                </ul>
                <img src={McQueen} class="hamburger-logo" alt="McQueen"></img>
            </nav>
        </div>
    )   
}

export default NavBar;