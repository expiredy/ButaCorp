import "./InformationSection.css";
import "./MarketChartStyle.css";


function GetGeneratedStyleForColumn(columnColor, heightPercent){
    return {
        "--size": heightPercent / 100,
        backgroundColor: columnColor,
        color: "#383832",
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

    var maxColumnWidth = Math.max.apply(Math, globalButanolMarket.categories.map(a => a.value));

    for (var indexOfColumn = 0; indexOfColumn < globalButanolMarket.categories.length; indexOfColumn++){
        var heightPercent =  Math.floor( globalButanolMarket.categories[indexOfColumn].value / maxColumnWidth * 100);
        const styleObject = GetGeneratedStyleForColumn(globalButanolMarket.categories[indexOfColumn].columnColor, heightPercent);
        console.log( heightPercent / 100);
        localButanolMarketChart.push(
            <tr>
                <td style={styleObject}>
                    <span className="data">
                        {globalButanolMarket.categories[indexOfColumn].value}<br />
                        {globalButanolMarket.categories[indexOfColumn].valuePostfix}</span></td>
            </tr>
        );}


    butanolMarketChartConstructor.push(<div className="chart-container">{localButanolMarketChart}</div>);
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
                    <div className="structure-of-usage-chart-item" style={styleObject}>
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
    structureOfUsageConstructor.push(<div className="structure-of-usage-field-underline">{structureOfUsageUnderlineConstructor}</div>);

    return (
        <div>
            <div>{structureOfUsageConstructor}</div>
            <p className="chart-underline">{regionStructure.title}</p>
        </div>);
}

function MarketOverviewSection(){
    var butanolMarketChart = GetButanolMarketChartArray();
    var structureOfUsage = GetButanolStructureOfUsageArray();
    return(
        <div id="business_model" className="container">
            <div class="container__half">
                <div className="beatty-header-line" style={{width: "300px", marginLeft: "30vh"}}></div>
                <h2 className="section-middle-title">Обзор рынка</h2> 
                <div className="beatty-header-line" style={{width: "150px"}}></div> 
                {butanolMarketChart}
            </div>
            <div class="container__half">
                <div className="information-chart-container">
                    <h3 className="text-session">Среднегодовой темп роста <span>5,6</span></h3>
                    <ul className="text-session-list">
                        <li>Растет потребление бутанола в промышленности;</li>
                        <li>Тренд на биотехнологии открывает доступ новым игрокам на рынок;</li>
                        <li>M&A и приток венчурных инвестиций;</li>
                        <li>Растущая государственная поддержка в сфере зеленой индустрии.</li>
                    </ul>
                </div>
                {structureOfUsage}
            </div>
        </div>
    )
}

export default MarketOverviewSection;