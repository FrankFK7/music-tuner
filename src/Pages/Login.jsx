import { useState, useContext } from 'react';

//context
import UserContext from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  //Getting setUser function from UserContext to update the of user
  const {setUser } = useContext(UserContext);
  //This function will help us to navigate between routes
  const navigateTo = useNavigate();

  const [userName, setUserName] = useState('');

  //Updating the user value from input field
  const changeHandler = (e) => {
    setUserName(() => e.target.value);
  };
  
  const submitHandler = (e) => {
    setUser(() => userName);
    navigateTo('/');
  };

  return (
    <div>
      <h1>Login</h1>

      <p>Please enter your username</p>
      <input
        type="text"
        name="userName"
        onChange={changeHandler}
        value={userName}
      />
      <button onClick={submitHandler}>Submit</button>
    </div>
  );
};
export default Login;