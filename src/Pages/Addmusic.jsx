import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import Form from '../components/Form';


const AddMusic = () => {
  const defaultFormData = {
    title: '',
    description: '',
    rating: 0,
    artist: '',
  };
  const [formData, setFormData] = useState(defaultFormData);
  const navigateTo = useNavigate();

  const addNewMusic = async () => {
    const { data } = await axios.post(
      
      formData
    );
    navigateTo('/music/add');
  };

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    try {
      addNewMusic();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Add a new music</h1>
      <Form
        formData={formData}
        submitHandler={submitHandler}
        changeHandler={changeHandler}
      />
    </div>
  );
};
export default AddMusic;

// 1. Add a form
// 2. Make a call to backend to create a new music
// 3. Create a route inside songid.route in backend
// 4. navigateTo /songs path