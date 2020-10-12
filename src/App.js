import React from 'react';
import './App.css'
import ProfilPhoto from './Component/Profil/ProfilPhoto'
import FullName from './Component/Profil/FullName'
import Adress from './Component/Profil/Adress'

const App = () => {
  return (
    <div className="app">
      <h1>My Profil</h1>
      <div className="app-content">
        <ProfilPhoto />
        <div className="des">
          <FullName />
          <Adress />
        </div>
      </div>
    </div>
  );
};

export default App;
