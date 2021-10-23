import './App.css';
import AboutUsSection from './../InformationSections/AboutUsSection';
import ProblematicSection from './../InformationSections/ProblematicSection';
import ContactsSection from './../InformationSections/ContactsSection';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <AboutUsSection />
          <ProblematicSection />
          <ContactsSection />
      </header>
    </div>
  );
}

export default App;