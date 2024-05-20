import React from 'react';
import './App.css';
import Footer from './componant/footer/Footer';
import Form from './componant/form/Form';
import Navbar from './componant/navbar/Navbar';




function App() {
  return (
    <>

      <div class="content">
        <Navbar />
        <Form />
        <Footer />
      </div>

    </>
  );
}

export default App;
