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
                descriptionSection:[{
                                    title: "Описание:",
                                    content: ["Выращивание сырья в биореакторах"]
                                    },
                                    {
                                    title: "Наши наработки:",
                                    content: ["Модифицированная среда и методы воздействия", "Комбинация штаммов"]
                                    }]
            }
        },
        {
            logo: second_number_logo,
            headingText: "Кавитация микроводорослей",
            contentSection: {
                descriptionSection:[{
                                    title: "Описание:",
                                    content: ["Разрушение клеточной оболочки"]
                                    },
                                    {
                                    title: "Наши наработки:",
                                    content: ["Отказ от сепарации биомассы"]
                                    }]
            }
        },
        {   
            logo: third_number_logo,
            headingText: "Сбраживание микроводорослей",
            contentSection: {
                descriptionSection:[{
                                    title: "Описание:",
                                    content: ["Сбраживание биомассы"]
                                    },
                                    {
                                    title: "Наши наработки:",
                                    content: ["Модифицированная среда и методы воздействия", "Комбинация штаммов"]
                                    }]
            }
        },
        {
            logo: fourth_number_logo,
            headingText: "Ректификация раствора",
            contentSection: {
                descriptionSection:[{
                                    title: "Описание:",
                                    content: ["Разделение исходной браги на растворители"]
                                    },
                                    {
                                    title: "Наши наработки:",
                                    content: ["Ректификационная колонна с отводом твердой побочной продукции"]
                                    }]
            }
        }
    ]
    const STEPS_TOTAL_COUNT = 4;

    function StepContentElementGenerator(sectionsArray) {
        var contentElementGenerator = [];
        for(var sectionIndex = 0; sectionIndex < sectionsArray.descriptionSection.length; sectionIndex++) {
 
            contentElementGenerator.push(<h3>{sectionsArray.descriptionSection[sectionIndex].title}</h3>);
            if (sectionsArray.descriptionSection[sectionIndex].content.length > 1){
                var sectionsElementsList = [];
                for(var contentIndex = 0;
                     contentIndex < sectionsArray.descriptionSection[sectionIndex].content.length;
                      contentIndex++){
                        sectionsElementsList.push(
                            <li>
                                <p>{sectionsArray.descriptionSection[sectionIndex].content[contentIndex]}</p>
                            </li>
                        );
                     }
                contentElementGenerator.push(<ul>{sectionsElementsList}</ul>);
            }
            else{
                contentElementGenerator.push(<p>{sectionsArray.descriptionSection[sectionIndex].content[0]}</p>);
                }
        }
        
        return contentElementGenerator;
    }


    var sectionBuilder = [];

    for (var stepIndex = 0; stepIndex < STEPS_TOTAL_COUNT; stepIndex++){
        sectionBuilder.push(
            <div className="step-container">
                <img src={stepsData[stepIndex].logo} className="step-logo" alt="step-logo"></img>
                <div className="step-text-container">
                    <h3>
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