import React from 'react';
import './App.css';
import Footer from './componant/footer/Footer';
//import Form from './componant/form/Form';
import Navbar from './componant/navbar/Navbar';
import Admin from './componant/Admin/Admin';




function App() {
  return (
    <>

      <div class="content">

        <Navbar />
        <Admin />
        {/* <Form /> */}
        <Footer />
      </div>

    </>
  );
}

export default App;
