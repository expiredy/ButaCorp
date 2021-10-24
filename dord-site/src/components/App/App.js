import './App.css';
import AboutUsSection from '../information-sections/AboutUsSection';
import ProblematicSection from '../information-sections/ProblematicSection';
import ContactsSection from '../information-sections/ContactsSection';
import MarketOverviewSection from '../information-sections/MarketOverviewSection';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <AboutUsSection />
          <ProblematicSection />
          <MarketOverviewSection />
          <ContactsSection />
      </header>
    </div>
  );
}

export default App;