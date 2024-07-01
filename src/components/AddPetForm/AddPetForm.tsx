import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addPet } from '../../local-storage/store';
import { Coordinates, Pet } from '../../models';
import { PetForm } from '../PetForm/PetForm';
import { AddPetMap } from '../AddPetMap/AddPetMap';
import { LeafletContainer } from '../LeafletContainer/LeafletContainer';

export const AddPetForm: React.FC = () => {
  const [coordinates, setCoordinates] = useState<Coordinates>();

  const navigate = useNavigate();

  const onSubmit = (pet: Omit<Pet, 'coordinates'>) => {
    console.log('coor', coordinates);
    if (!coordinates) return;
    const newPet: Pet = {
      ...pet,
      coordinates: {
        lat: coordinates.lat,
        lng: coordinates.lng,
      },
    };
    console.log(pet)
    addPet(newPet);
    navigate('../');
  };

  return (
    <div>
      <PetForm submit={onSubmit} />
      <LeafletContainer>
        <AddPetMap setPosition={setCoordinates} />
      </LeafletContainer>
    </div>
  );
};
