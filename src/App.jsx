// src/App.jsx
import { useState, useEffect } from 'react';

import * as petService from './services/petService';
import PetList from './components/PetList';
import PetDetail from './components/PetDetail/PetDetail';
import PetForm from './components/PetForm/PetForm';


const App = () => {
  const handleAddPet = async (formData) => {
    try {
  
    } catch (err) {
      console.log(err);
    }
  };
  const [pets, setPets] = useState([]);
  const [selected, setSelected] = useState(null);
    const [isFormOpen, setIsFormOpen] = useState(false);


  useEffect(() => {
    const fetchPets = async () => {
      try {
        const fetchedPets = await petService.index();
        if (fetchedPets.err) throw new Error(fetchedPets.err);
        setPets(fetchedPets);
      } catch (err) {
        console.error('Failed to load pets:', err);
      }
    };
    fetchPets();
  }, []);

  const handleSelect = (pet) => {
    setSelected(pet);
        setIsFormOpen(false);

  };
const handleFormView = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <>
      <PetList
        pets={pets}
        handleSelect={handleSelect}
        handleFormView={handleFormView}
        isFormOpen={isFormOpen}
      />
      {isFormOpen ? (
        <PetForm handleAddPet={handleAddPet} />
      ) : (
        <PetDetail selected={selected} />
      )}
    </>
  );
      {isFormOpen ? (
        <PetForm />
      ) : (
        <PetDetail selected={selected} />
      )}
    
  



};

export default App;