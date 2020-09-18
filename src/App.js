import React from 'react';
import './App.scss';
import ItemFilters from './ItemFilters';
import ItemListing from './ItemListing';

function App() {
  return (
    <div className="container">
       <h2>SpaceX Launch Programs</h2> 
       
        <ItemListing url="https://api.spacexdata.com/v3/launches?limit=100"/>
        <footer><strong>Developed by:</strong> Sajay CV Rajan</footer>
    </div>
  );
}

export default App;
