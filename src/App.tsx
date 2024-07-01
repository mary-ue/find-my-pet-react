import 'leaflet/dist/leaflet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import mapboxgl from 'mapbox-gl';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Main } from './views/Main/Main';
import { AddPetForm } from './components/AddPetForm/AddPetForm';

mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

const App: React.FC = () =>  {
  return (
    <div className="app p-5">
      <BrowserRouter>
        <nav>
          <Link to="/home">Home</Link> {" "}
          <Link to="/leaflet-map">Leaflet Map</Link> {" "}
          <Link to="/leaflet-add">Add pet to map</Link>
        </nav>
        <Routes>
          <Route path="leaflet-map" element={<Main />} />
          <Route path="leaflet-add" element={<AddPetForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
