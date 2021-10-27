import './App.css';
import AboutUsSection from '../information-sections/AboutUsSection';
import ProblematicSection from '../information-sections/ProblematicSection';
import ContactsSection from '../information-sections/ContactsSection';
import MarketOverviewSection from '../information-sections/MarketOverviewSection';

function App() {
  return (
    <div className="App">
          <AboutUsSection />
          <ProblematicSection />
          <MarketOverviewSection />
          <ContactsSection />
    </div>
  );
}

export default App;