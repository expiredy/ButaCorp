import "./InformationSection.css";
import "./SolutionSectionStyle.css";

import first_number_logo from "./../../content/images/steps_numeration/first_number.svg";
import second_number_logo from "./../../content/images/steps_numeration/second_number.svg";
import third_number_logo from "./../../content/images/steps_numeration/third_number.svg";
import fourth_number_logo from "./../../content/images/steps_numeration/fourth_number.svg";

function StepsElementsGenerator() {

    const stepsData = [
        {   
            logo: first_number_logo,
            headingText: "Культивирование микроводорослей",
            contentSection: {
                descriptionSection:{
                                    title: "Описание:",
                                    content: ["Выращивание сырья в биореакторах"]
                                    },
                 developmentsSection:{
                                    title: "Наши наработки:",
                                    content: ["Модифицированная среда и методы воздействия", "Комбинация штаммов"]
                                    },
                titleColor: "#FFFFFF",
                contentColor: "#383832"  
            }
        },
        {
            logo: second_number_logo,
            headingText: "Кавитация микроводорослей",
            contentSection: {
                descriptionSection:{
                                    title: "Описание:",
                                    content: ["Разрушение клеточной оболочки"]
                                    },
                developmentsSection:{
                                    title: "Наши наработки:",
                                    content: ["Отказ от сепарации биомассы"]
                                    },
                titleColor: "#383832",
                contentColor: "#FFFFFF"    
            }
        },
        {   
            logo: third_number_logo,
            headingText: "Сбраживание микроводорослей",
            contentSection: {
                descriptionSection:{
                                    title: "Описание:",
                                    content: ["Сбраживание биомассы"]
                                    },
                 developmentsSection:{
                                    title: "Наши наработки:",
                                    content: ["Модифицированная среда и методы воздействия", "Комбинация штаммов"]
                                    },
                titleColor: "#FFFFFF",
                contentColor: "#383832"  
            }
        },
        {
            logo: fourth_number_logo,
            headingText: "Ректификация раствора",
            contentSection: {
                descriptionSection:{
                                    title: "Описание:",
                                    content: ["Разделение исходной браги на растворители"]
                                    },
                developmentsSection:{
                                    title: "Наши наработки:",
                                    content: ["Ректификационная колонна с отводом твердой побочной продукции"]
                },
                titleColor: "#383832",
                contentColor: "#FFFFFF"  
            }
        }
    ]
    const STEPS_TOTAL_COUNT = 4;

    function StepContentElementGenerator(sectionsArray) {
        var contentElementGenerator = [];
        contentElementGenerator.push(
            <div className="">
                <h3 className="section-content-header" style={{color: sectionsArray.titleColor}}>
                    {sectionsArray.descriptionSection.title}
                </h3>
                <p className="content-paragraph"  style={{color: sectionsArray.contentColor}}>
                    {sectionsArray.descriptionSection.content}
                </p>
            </div>
        );
        var developmentsSection = [];
        for (var developmentStepIndex = 0;
             developmentStepIndex < sectionsArray.developmentsSection.content.length; developmentStepIndex++) {
            developmentsSection.push(
                <li>
                    <p className="content-paragraph" style={{color: sectionsArray.contentColor}}>
                        {sectionsArray.developmentsSection.content[developmentStepIndex]}
                    </p>
                </li>)
        }
        contentElementGenerator.push(
            <div className="">
                <h3 className="section-content-header" style={{color: sectionsArray.titleColor}}>
                    {sectionsArray.developmentsSection.title}
                </h3>
                <ul>{developmentsSection}</ul>
            </div>
        );
        return contentElementGenerator;
    }


    var sectionBuilder = [];

    for (var stepIndex = 0; stepIndex < STEPS_TOTAL_COUNT; stepIndex++){
        sectionBuilder.push(
            <div className="step-container">
                <img src={stepsData[stepIndex].logo} className="step-logo" alt="step-logo"></img>
                <div className="step-text-container">
                    <h3 className="header-session" style={{color: stepsData[stepIndex].contentSection.contentColor}}>
                        {stepsData[stepIndex].headingText}
                    </h3>
                    <div>
                        {StepContentElementGenerator(stepsData[stepIndex].contentSection)}
                    </div>   
                </div>
            </div>
        );
    }
    return <div className="steps-layout">{sectionBuilder}</div>;
}

function SolutionSection(){

    var stepsContainer = StepsElementsGenerator();

    return(
        <div id="solution">
            <div className="middle-header-section">
                <div className="beauty-header-line" style={{width: "30vh", marginLeft: "35%", marginTop: "20vh"}}></div>
                <div style={{content: "flex", justifyContent: "flex-start"}}>
                    <h2 className="section-middle-title">Решение</h2> 
                    <div className="beauty-header-line" style={{width: "10vh", marginLeft: "27%", marginBottom: "5vh"}}></div>
                </div>
            </div> 
            {stepsContainer}
        </div>
    )
}

export default SolutionSection;