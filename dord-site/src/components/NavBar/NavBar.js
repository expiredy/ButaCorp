import "./NavBarStyle.css"
import ButaCorpLogo from "./../../content/images/text_view/ButaCorpLogo.png"


function NavBar() {
    return(
        <div className="NavBar">
            <nav className="shadow">
                <img src={ButaCorpLogo} class="logo" alt="ButaCorpLogo"></img>
                <div className="links-div-container">
                    <div className="navigation-link nav_item"><a href="#about">О нас</a></div>
                    <div className="navigation-link nav_item"><a href="#problem" >Проблематика</a></div>
                    <div className="navigation-link nav_item"><a href="#solution" >Решение</a></div>
                    <div className="navigation-link nav_item"><a href="#business_model">Бизнес-модель</a></div>
                    <div className="navigation-link nav_item"><a href="#contacts">Контакты</a></div>
                </div>
            </nav>
        </div>
    )   
}

export default NavBar;