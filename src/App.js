import './App.css';
import Home from './components/home/Home';
import Footer from './components/footer/Footer.js';
import AboutUs from './components/about-us/AboutUs.js';
import TeamCard from './components/team card/TeamCard.js';
import EmpCard from './components/emp card/EmpCard.js';
import Navbar from './components/navbar/Navbar.js'
import Form from './components/form/Form.js'
import { Routes, Route, Outlet } from "react-router-dom";
import Category from './components/category/Category.js';
import Favorite from './components/favorite/Favorite.js';
import Admin from './components/Admin/Admin.js'
import Main from './components/main/Main.js';

function Layout() {
  return (
    <>
      <Navbar />
      <main><Outlet/></main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/form" element={<Form />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/programming" element={<Category category={"programming"} />} />
          <Route path="/marketing" element={<Category category={"visual arts"} />} />
          <Route path="/visual arts" element={<Category category={"digital marketing"} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;