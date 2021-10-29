import "./InformationSection.css";
import ConesGroup from "./../../content/images/text_view/ConesGroup.png";

function InformationSection(){
    return(
    <div id="about" className="container">
        <div className="container__half  hidden-logo-container">
            <img src={ConesGroup} className="image-container" alt="ConesGroup"></img>
        </div>
        <div class="container__half">
            <h1 class="huge-title-h1">Про нас</h1>
            <p class="text-session">Наш проект стартовал в <span>2019 году</span>,
                                    когда мы пробовали свои силы в реализации проекта по биотопливу,
                                    но, углубившись в эту тему, решили сосредоточить свои силы на сырьевом бутаноле из возобновляемого источника.</p>
        </div>
    </div>)
}

export default InformationSection;