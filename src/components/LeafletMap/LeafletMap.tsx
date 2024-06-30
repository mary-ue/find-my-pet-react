import markerIcon from 'leaflet/dist/images/marker-icon.png';
import { Marker, Popup, useMap } from 'react-leaflet';
import useGeoLocation from '../../hooks/geo-location-hook';
import useUserDefaultLocation from '../../hooks/user-default-location-hook';
import { useEffect } from 'react';
import { getPets } from '../../local-storage/store';
import L from 'leaflet';
import { Pet } from '../../models';
import './LeafletMap.css'

export const LeafletMap: React.FC = () => {
  const { position } = useGeoLocation();
  const { userLocation } = useUserDefaultLocation(position);
  const petsMock = [{
    avatar: '/cat.jpg',
    name: 'Cat',
    coordinates: {lat: 60.070078, lng: 30.366210},
    description: 'a very good cat',
  }];

  // const pets = getPets() || petsMock;
  const pets: Pet[] = petsMock;
  console.log(pets);

  const map = useMap();

  useEffect(() => {
    if (map && userLocation) {
      map.setView(userLocation);
    }
  }, [map, userLocation]);

  const userIcon = L.icon({
    iconUrl: markerIcon,
    iconSize: [22, 38],
    iconAnchor: [11, 19],
  });

  return (
    <div>
      <Marker position={userLocation} icon={userIcon}></Marker>
      {pets.map((p, i) => {
        const icon = L.icon({
          iconUrl: p.avatar,
          iconSize: [50, 50],
          iconAnchor: [25, 25],
          className: 'pet-marker',
        });
        return (
          <Marker key={i} icon={icon} position={p.coordinates}>
            <Popup>
              <img src={p.avatar} className="pet-popup-img" />
              <div>
                Name: <h4>{p.name}</h4>
              </div>
              <p>{p.description}</p>
            </Popup>
          </Marker>
        );
      })}
    </div>
  );
};
