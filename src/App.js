import './App.css';
import Home from './components/home/Home';
import Footer from './components/footer/Footer.js';
import AboutUs from './components/about-us/AboutUs.js';
import TeamCard from './components/team card/TeamCard.js';

function App() {
  return (
    <>
      <main>
        <AboutUs/>
        {/* <Home /> */}
        {/* <TeamCard/> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
