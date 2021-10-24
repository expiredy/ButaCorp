import "./InformationSection.css";

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
            color: "#FFFFFF"
        }, 
        {
            name: "2025",
            value: 4,
            valuePostfix: "млрд $",
            color: "#ABB466"
        }
    ],
}


function GetButanolMarketChartArray(){
    var butanolMarketChartConstructor = []
    var localButanolMarketChart = [];

    for (var indexOfColumn = 0; indexOfColumn < globalButanolMarket.categories.length; indexOfColumn++){
        localButanolMarketChart.push(<li>{globalButanolMarket.categories[indexOfColumn].value
             + " " + globalButanolMarket.categories[indexOfColumn].valuePostfix}</li>);}

    console.log(globalButanolMarket);
    butanolMarketChartConstructor.push(<h1>{globalButanolMarket.title}</h1>);
    butanolMarketChartConstructor.push(<ul>{localButanolMarketChart}</ul>);
    return butanolMarketChartConstructor;
}

function MarketOverviewSection(){

    var butanolMarketChart = GetButanolMarketChartArray();

    return(
        <div id="business_model" className="container">
            <div class="container__half">
                {butanolMarketChart}
            </div>
            <div class="container__half">
                
            </div>
        </div>
    )
}

export default MarketOverviewSection;