import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
//components
import Form from '../components/Form';
//contexts
import LikeContext from '../contexts/LikeContext';
//react icons
import { AiFillLike } from 'react-icons/ai';
import { AiFillDislike } from 'react-icons/ai';

const MusicDetails = () => {
  const defaultFormData = {
    title: '',
    description: '',
    rating: 0,
   artist: '',
  };
  const [formData, setFormData] = useState(defaultFormData);

  //get id from the url
  const { id } = useParams();

  const [music, setMusic] = useState(null);

  const [editToggler, setEditToggler] = useState(false);
  const [likeToggler, setLikeToggler] = useState(false);

  //Getting likes(contains all liked music id) and updateLikedMusic function to add or delete music id
  const { likes, updateLikedMusic } = useContext(LikeContext);

  const navigateTo = useNavigate();

  //getting music detail from database using id
  const getMusicDetails = async () => {
    const { data } = await axios.get(`http://localhost:5005/music/${id}`);
    setMusic(() => data);
    setFormData(() => data);
  };import { useState, useEffect, useContext } from 'react';
  import { useParams, useNavigate } from 'react-router-dom';
  import axios from 'axios';
  //components
  import Form from '../components/Form';
  //contexts
  import LikeContext from '../contexts/LikeContext';
  //react icons
  import { AiFillLike } from 'react-icons/ai';
  import { AiFillDislike } from 'react-icons/ai';
  
  const MusicDetails = () => {
    const defaultFormData = {
      title: '',
      description: '',
      rating: 0,
      artist:'',
    };
    const [formData, setFormData] = useState(defaultFormData);
  
    //get id from the url
    const { id } = useParams();
  
    const [music, setMusic] = useState(null);
  
    const [editToggler, setEditToggler] = useState(false);
    const [likeToggler, setLikeToggler] = useState(false);
  
    //Getting likes(contains all liked Music id) and updateLikedMusicfunction to add or delete music id
    const { likes, updateLikedMusic } = useContext(LikeContext);
  
    const navigateTo = useNavigate();
  
    //getting music detail from database using id
    const getMusicDetails = async () => {
      const { data } = await axios.get(`http://localhost:5005/music/${id}`);
      setMusic(() => data);
      setFormData(() => data);
    };const deleteHandler = () => {
        try {
          deleteMusic();
        } catch (error) {
          console.error(error);
        }
      };
    
      const editHandler = (e) => {
        setEditToggler(() => !editToggler);
      };
    
      const likeHandler = (e) => {
        setLikeToggler(() => !likeToggler);
    
        //this function will execute from the LikeContext, we are passing like state and the music id as an argument.
        updateLikedMusic(!likeToggler, music._id);
      };
    
      return (
        <div>
          <h1>MusicDetails</h1>
          {music && !editToggler && (
            <div key={music._id}>
              <p>Title: {music.title}</p>
              <p>Description: {music.description}</p>
              <p>Artist: {music.artist}</p>
              <p>Rating: {music.rating}</p>
              <button onClick={likeHandler}>
                {likeToggler ? <AiFillDislike /> : <AiFillLike />}
              </button>
              <button onClick={editHandler}>Edit</button>
              <button onClick={deleteHandler}>Delete</button>
            </div>
          )}
    
          {editToggler && (
            <div>
              <Form
                formData={formData}
                submitHandler={submitHandler}
                changeHandler={changeHandler}
            editHandler={editHandler}
          />
          <button onClick={editHandler}>Cancel</button>
        </div>
      )}
    </div>
  );
};
export default MusicDetails;
