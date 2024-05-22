import './App.css';
import Home from './components/home/Home';
import Footer from './components/footer/Footer.js';
import AboutUs from './components/about-us/AboutUs.js';
// import TeamCard from './components/team card/TeamCard.js';
// import EmpCard from './components/emp card/EmpCard.js';
import Navbar from './components/navbar/Navbar.js'
import Form from './components/form/Form.js'
import { Routes, Route } from "react-router-dom";
import Category from './components/category/Category.js';

function App() {
  return (
    <>
      <Navbar />
      <main>
        {/* <AboutUs/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/programming" element={<Category category={"programming"} />} />
          <Route path="/marketing" element={<Category category={"visual arts"} />} />
          <Route path="/visual arts" element={<Category category={"digital marketing"} />} />

        </Routes>
        {/* <TeamCard/> */}
        {/* <EmpCard/> */}

      </main>
      <Footer />
    </>
  );
}

export default App;