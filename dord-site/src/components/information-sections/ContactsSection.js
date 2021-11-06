import "./InformationSection.css";
import "./ContactsSectionStyle.css";

import mail_logo from "./../../content/images/contacts/mail_logo.png";
import vk_logo from "./../../content/images/contacts/vk_logo.png";
import telegram_logo from "./../../content/images/contacts/telegram_logo.png";
import phone_number_logo from "./../../content/images/contacts/phone_number_logo.png";

import RoadToNowhere from "./../../content/images/text_view/RoadToNowhere.png";

function ContactsSection(){
    return(
        <div id="contacts">
        <div className="huge-header-section">
            <h1 className="huge-title-h1">Контакты</h1>
        </div>
        <div className="container" style={{paddingTop: "2vh"}}>
            <div className="container__half" style={{flex: 2}}>    
                <ul className="contacts-list">
                    <li className="contact-container">
                            <img src={mail_logo} className="contact-logo-img" alt="mail"></img>
                            <div className="contact-element">
                                <a href="mailto:butacorpinf@gmail.com">butacorpinf@gmail.com</a></div>
                    </li>
                    <li className="contact-container">
                            <img src={vk_logo} className="contact-logo-img" alt="vk"></img>
                            <div className="contact-element">
                                <a href="https://vk.com/vladorob">Владислав Рогозин</a></div>
                    </li>
                    <li className="contact-container">
                            <img src={telegram_logo} className="contact-logo-img" alt="telegram"></img>
                            <div className="contact-element">
                                <a href="https://t.me/Vladorob">@Vladorob</a></div>
                    </li>
                    <li className="contact-container">
                            <img src={phone_number_logo} className="contact-logo-img" alt="number"></img>
                            <div className="contact-element">
                                <a href="tel:+7(980)248-57-25">+7(980)248-57-25</a></div>
                    </li>
                </ul>
            </div>
            <div class="container__half" style={{flex: 3}}>
                <img src={RoadToNowhere} className="lower-image" alt="Road"></img>
            </div>
        </div>
        </div>
    )
}

export default ContactsSection;