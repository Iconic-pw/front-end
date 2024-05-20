import './App.css';
import Home from './components/home/Home';
import Footer from './components/footer/Footer.js';
import AboutUs from './components/about-us/AboutUs.js';
import TeamCard from './components/team card/TeamCard.js';
import EmpCard from './components/emp card/EmpCard.js';

function App() {
  return (
    <>
      <main>
        {/* <AboutUs/> */}
        {/* <Home /> */}
        {/* <TeamCard/> */}
          <EmpCard/>
      {/* <EmpCard
        imageSrc="https://via.placeholder.com/300"
        avatarSrc="https://via.placeholder.com/48"
        title="Card Title"
        description="This is a description of the card."
      /> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
