import "./InformationSection.css";
import "./MarketChartStyle.css";


function GetGeneratedStyleForColumn(columnColor, heightPercent){
    return {
        height: heightPercent,
        backgroundColor: columnColor,
        color: "#383832",
        paddingBottom: heightPercent / 5 + "vh",
        paddingTop: heightPercent / 5 + "vh",
    };
}

function GetButanolMarketChartArray(){
  
    const globalButanolMarket = {
        title: "Мировой рынок бутанола",
        categories: [
            {
                name: "2020",
                value: 3.1,
                valuePostfix: "млрд $", 
                columnColor: "#FFFFFF"
            }, 
            {
                name: "2025",
                value: 4,
                valuePostfix: "млрд $",
                columnColor: "#ABB466"
            }
        ],
    }
    
    var butanolMarketChartConstructor = [];
    var localButanolMarketChart = [];
    var marketColumnUnderlineConstructor = [];

    var maxColumnWidth = Math.max.apply(Math, globalButanolMarket.categories.map(a => a.value));

    for (var indexOfColumn = 0; indexOfColumn < globalButanolMarket.categories.length; indexOfColumn++){
        var heightPercent =  Math.floor( globalButanolMarket.categories[indexOfColumn].value / maxColumnWidth * 100);
        const styleObject = GetGeneratedStyleForColumn(globalButanolMarket.categories[indexOfColumn].columnColor, heightPercent);
        localButanolMarketChart.push(
            <tr className="chart-container__item">
                <td style={styleObject}>
                    <span className="data">
                        {globalButanolMarket.categories[indexOfColumn].value}<br />
                        {globalButanolMarket.categories[indexOfColumn].valuePostfix}</span></td>
            </tr>
        );
        marketColumnUnderlineConstructor.push(<p className="beatty-chart-underline-text__item">{globalButanolMarket.categories[indexOfColumn].name}</p>)
        }


    butanolMarketChartConstructor.push(<div className="chart-container">{localButanolMarketChart}</div>);
    butanolMarketChartConstructor.push(<div className="beatty-chart-line"></div>);
    butanolMarketChartConstructor.push(<div className="beatty-chart-underline-text">{marketColumnUnderlineConstructor}</div>);
    butanolMarketChartConstructor.push(<p className="chart-underline">{globalButanolMarket.title}</p>);
    return butanolMarketChartConstructor;
}

function GetStyleForStructureOfUsage(percentValue, sectionColor) {
    return{
        width: percentValue,
        backgroundColor: sectionColor}
}

function GetButanolStructureOfUsageArray(){
    
    const regionStructure = {
        title: "Структура потребления по регионам",
        catagories: [
          {
            name: "Китай",
            value: "33%",
            color: "#495E62",
          },
          {
            name: "Европа",
            value: "25%",
            color: "#6A6E39",
          },
          {
            name: "Северная Америка",
            value: "24%",
            color: "#F0B14E",
          },
          {
            name: "Юв. Азия",
            value: "13%",
            color: "#BC5A04",
          },
          {
            name: "Остальной мир",
            value: "5%",
            color: "#892218",
          },
        ],
    };
    

    var structureOfUsageConstructor = [];
    var structureOfUsageUnderlineConstructor = [];
    
    for(var indexOfSection = 0; indexOfSection < regionStructure.catagories.length; indexOfSection++){
        var styleObject = GetStyleForStructureOfUsage(regionStructure.catagories[indexOfSection].value,
            regionStructure.catagories[indexOfSection].color);
        structureOfUsageConstructor.push(
                    <div className="structure-of-usage-chart__item" style={styleObject}>
                        {regionStructure.catagories[indexOfSection].value}</div>);
        structureOfUsageUnderlineConstructor.push(
            <div class="structure-of-usage-col-auto">
                <button class="structure-of-usage-btn">
                    <span className="structure-of-usage-dot" style={{backgroundColor: regionStructure.catagories[indexOfSection].color}}></span>
                    <span className="structure-of-usage-category-name">{regionStructure.catagories[indexOfSection].name}</span>
                </button>
            </div>
        )
    }

    return (
        <div className="structure-of-usage-container">
            <div className="structure-of-usage-chart">{structureOfUsageConstructor}</div>
            <div className="structure-of-usage-field-underline">{structureOfUsageUnderlineConstructor}</div>
            <p className="chart-underline">{regionStructure.title}</p>
        </div>);
}

function MarketOverviewSection(){
    var butanolMarketChart = GetButanolMarketChartArray();
    var structureOfUsage = GetButanolStructureOfUsageArray();
    return(
        <div id="business_model">
            <div className="middle-header-section">
                <div className="beatty-header-line" style={{width: "30vh", marginLeft: "35%", marginTop: "20vh"}}></div>
                <h2 className="section-middle-title">Обзор рынка</h2> 
                <div className="beatty-header-line" style={{width: "10vh", marginLeft: "27%"}}></div> 
            </div> 
            <div className="container">
                <div class="container__half" style={{flex: 2, justifyContent: "center"}}>
                    {butanolMarketChart}
                </div>
                <div class="container__half" style={{flex: 3}}>
                    <div className="information-chart-container">
                        <h3 className="text-session">Среднегодовой темп роста <span>5,6</span></h3>
                        <ul className="text-session-list">
                            <li>Растет потребление бутанола в промышленности;</li>
                            <li>Тренд на биотехнологии открывает доступ новым игрокам на рынок;</li>
                            <li>M&A и приток венчурных инвестиций;</li>
                            <li>Растущая государственная поддержка в сфере зеленой индустрии.</li>
                        </ul>
                    </div>

                    <div className="beatty-header-line"
                        style={{width: "50vh",
                                height: "0.25vh",
                                marginTop: "8vh",
                                marginBottom: "8vh",
                                marginLeft: "25%",
                                backgroundColor: "#A3AD62"}}></div>

                    {structureOfUsage}
                </div>
            </div>
        </div>
    )
}

export default MarketOverviewSection;