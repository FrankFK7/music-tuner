import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Music = () => {
  const [music, setMusic] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  //Requestiong all the music  from our database
  const getMusic = async () => {
    const { data } = await axios.get(`http://:5005/music`);
    setMusic(() => data);
  };

  const changeHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  //This useEffect will execute getMusic function only one time when this page loads
  useEffect(() => {
    try {
      getMusic();
    } catch (error) {
      console.error(error);
    }
  }, []); //<-- No dependency, means it will execute only one time

  return (
    <div>
      <h1>Music List</h1>
      <div>
        <p>
          Search:{' '}
          <input type="search" value={searchTerm} onChange={changeHandler} />
        </p>
      </div>

      {/* Filter method will filter out all other music which dont contain same search terms based on the music title. */}
      {music
        .filter((music) =>
          searchTerm.length > 0
            ? music.title
                .toLocaleLowerCase()
                .includes(searchTerm.toLocaleLowerCase())
            : music
        )
        .map((music) => {
          return (
            <div key={music._id}>
              <p>
                <Link to={music._id}>{music.title}</Link>
              </p>
            </div>
          );
        })}
    </div>
  );
};
export default Music;