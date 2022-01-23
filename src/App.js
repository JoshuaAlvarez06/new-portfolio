import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import NavMenu from './components/navMenu/NavMenu';
import Main from './components/main/Main';

function App() {
  const [visible, setVisible] = React.useState(false);
  
  return (
    <>
      <Navbar visible={visible} setVisible={setVisible} />
      <NavMenu visible={visible} setVisible={setVisible} />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
