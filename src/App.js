import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/BodyIntro/Body';
import Skills from './components/Skills/Skills'
import Experience from './components/experience/Experience';
import Contact from './components/contactme/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
  <>
   <Header/>
   <Body/>
   <Skills/> 
   <Experience/>
   <Contact/>
   <Footer/>
   </>
  
   )
}

export default App;
