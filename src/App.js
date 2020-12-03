import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import SectionOne from './components/SectionOne';

function App() {
  return (
    <div className="App">
     <Home/>
     <SectionOne/>
     <Contact/>
     <Footer/>
    </div>
  );
};

export default App;
