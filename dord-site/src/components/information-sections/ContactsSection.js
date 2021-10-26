import "./InformationSection.css";
import "./ContactsSectionStyle.css";

import mail_logo from "./../../content/images/contacts/mail_logo.png";
import vk_logo from "./../../content/images/contacts/vk_logo.png";
import telegram_logo from "./../../content/images/contacts/telegram_logo.png";
import phone_number_logo from "./../../content/images/contacts/phone_number_logo.png";

import RoadToNowhere from "./../../content/images/text_view/RoadToNowhere.png";

function ContactsSection(){
    return(
        <div id="contacts" className="container">
            <div className="container__half">
                <h1 className="huge-title-h1">Контакты</h1>
                <ul className="contacts-list">
                    <li>
                        <div className="contact-container">
                            <img src={mail_logo} alt="mail"></img>
                            <div className="contact-element">
                                <a href="mailto:butacorpinf@gmail.com">butacorpinf@gmail.com</a></div>
                        </div>
                    </li>
                    <li>
                        <div className="contact-container">
                            <img src={vk_logo} alt="vk"></img>
                            <div className="contact-element">
                                <a href="https://vk.com/vladorob">Владислав Рогозин</a></div>
                        </div>
                    </li>
                    <li>
                        <div className="contact-container">
                            <img src={telegram_logo} alt="telegram"></img>
                            <div className="contact-element">
                                <a href="https://t.me/Vladorob">@Vladorob</a></div>
                        </div>
                    </li>
                    <li>
                        <div className="contact-container">
                            <img src={phone_number_logo} alt="number"></img>
                            <div className="contact-element">
                                <a href="tel:+7(980)248-57-25">+7(980)248-57-25</a></div>
                        </div>
                    </li>
                
                </ul>
            </div>
            <div class="container__half   hidden-logo-container">
                <img src={RoadToNowhere} className="image-container" alt="Road"></img>
            </div>
        </div>
    )
}

export default ContactsSection;