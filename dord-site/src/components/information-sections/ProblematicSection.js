import "./InformationSection.css";
import SmokeThing from "./../../content/images/text_view/SmokeThing.png";


function ProblematicSection(){
    return (
    <div id="problem" className="container">
        <div className="container__half">
            <h1 className="huge-title-h1">Проблематика</h1>
            <h3 className="text-session"><span>Бутанол</span> это химическое сырье, применяемое во многих промышленных отраслях, например в химической,
                                    фармакологической и топливной сферах.</h3>
            <h3 className="text-session">Целевой аудиторией нашего проекта являются как производители, так и потребители бутанола.
                                    В обоих случаях это крупные B2B предприятия, у которых есть ряд болей, на которые стоит обратить внимание:
            </h3>
            <ul className="text-session">
                <li><p>Во-первых, большинство технологических процессов по производству бутанола сложны сами по себе и подразумевают длинную цепочку поставок,
                        что создаёт дополнительные издержки и риски.
                    </p></li>
                <li><p>Во-вторых, стоимость конечной продукции волатильна, так как зависит от колебаний цен на сырьё.
                    </p></li>
                <li><p> В-третьих, на перерабатывающие предприятия накладываются географические ограничения, связанные с местоположением источников сырья.
                    </p></li>
            </ul>
        </div>
        <div className="container__half hidden-logo-container" >
            <img src={SmokeThing} className="image-container" alt="SmokeThing"></img>
        </div>
    </div>)
}

export default ProblematicSection;