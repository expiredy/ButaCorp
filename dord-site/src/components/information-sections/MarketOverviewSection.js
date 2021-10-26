import "./InformationSection.css";
import "./MarketChartStyle.css";

const regionStructure = {
    title: "Структура потребления по регионам",
    catagories: [
      {
        name: "Китай",
        value: 33,
        color: "#ff6384",
      },
      {
        name: "Европа",
        value: 25,
        color: "#ff9f40",
      },
      {
        name: "Северная Америка",
        value: 24,
        color: "#ffcd56",
      },
      {
        name: "Юв. Азия",
        value: 13,
        color: "#4bc0c0",
      },
      {
        name: "Остальной мир",
        value: 5,
        color: "#36a2eb",
      },
    ],
};

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


function GetGeneratedStyleForColumn(columnColor){
    var style = {
        height: + "vh",
        background: columnColor,
        color: "#383832",
    }
    return style;
}

function GetButanolMarketChartArray(){
  
    var butanolMarketChartConstructor = [];
    var localButanolMarketChart = [];

    for (var indexOfColumn = 0; indexOfColumn < globalButanolMarket.categories.length; indexOfColumn++){
        const styleObject = GetGeneratedStyleForColumn(globalButanolMarket.categories[indexOfColumn].columnColor)
        localButanolMarketChart.push(
        <li className="chart-column" style={styleObject}>
          {globalButanolMarket.categories[indexOfColumn].value + " "}
             <span>{globalButanolMarket.categories[indexOfColumn].valuePostfix}</span></li>);}

    console.log(globalButanolMarket);
    butanolMarketChartConstructor.push(<ul className="chart-container">{localButanolMarketChart}</ul>);
    butanolMarketChartConstructor.push(<p className="chart-underline">{globalButanolMarket.title}</p>);
    return butanolMarketChartConstructor;
}

function GetButanolStructureOfUsageArray(){
    for(var indexOfSection = 0; indexOfSection < regionStructure.catagories.length; indexOfSection++){

    }
}

function MarketOverviewSection(){
    var butanolMarketChart = GetButanolMarketChartArray();
    var structureOfUsage = GetButanolStructureOfUsageArray();
    return(
        <div id="business_model" className="container">
            <div class="container__half">
                {butanolMarketChart}
            </div>
            <div class="container__half">
                <div className="information-chart-container">
                    <h3 className="text-session">Среднегодовой темп роста <span>5,6</span></h3>
                    <ul>
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