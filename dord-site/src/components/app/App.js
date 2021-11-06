import './App.css';
import ContactsSection from '../information-sections/ContactsSection.js';
import MarketOverviewSection from '../information-sections/MarketOverviewSection.js';
import SolutionSection from '../information-sections/SolutionSection.js';
import AboutUsSection from '../information-sections/AboutUsSection.js';
import ProblematicSection from '../information-sections/ProblematicSection.js';

function App() {

  return (
    <div className="App">
        <AboutUsSection />
        <ProblematicSection />
        <SolutionSection />
        <MarketOverviewSection />
        <ContactsSection />
    </div>
  );
}

export default App; 