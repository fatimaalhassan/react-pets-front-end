// src/components/PetForm/PetForm.jsx

import { useState } from 'react';

const PetForm = (props) => {
  // formData state to control the form.
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    breed: '',
  });

  // handleChange function to update formData state.
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (props.handleAddPet) props.handleAddPet(formData);
    // reset form
    setFormData({ name: '', age: '', breed: '' });
  };

  // And finally, the form itself.
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"> Name </label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="age"> Age </label>
        <input
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <label htmlFor="breed"> Breed </label>
        <input
          id="breed"
          name="breed"
          value={formData.breed}
          onChange={handleChange}
        />
        <button type="submit">Add New Pet</button>
      </form>
    </div>
  );
};
return (
    <div>
      {/* Call the new handleSubmit function when the form is submitted. */}
      <form onSubmit={handleSubmit}>
        {/* Form elements here. */}
      </form>
    </div>
  );
export default PetForm;
