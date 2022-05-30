import { createContext, useState, useEffect } from 'react';

const LikeContext = createContext();

export const LikeProvider = ({ children }) => {
  const [likes, setLikes] = useState(
    JSON.parse(localStorage.getItem('likes')) || []
  );

    //store the likes(liked songs in the id) in the local storage
  useEffect(() => {
    localStorage.setItem('likes', JSON.stringify(likes));
  }, [likes]);

  const uniqueLikes = (songId) => {
    if (!likes.includes(songId))
      setLikes((prevLikes) => [...prevLikes, songId]);
  };

  const updateLikedSong = (likeState, songId) => {
    likeState
      ? uniqueLikes(songId)
      : setLikes((prevLikes) => prevLikes.filter((id) => id !== songId));
  };
  return (
    <LikeContext.Provider value={{ likes, updateLikedSong }}>
      {children}
    </LikeContext.Provider>
  );
};

export default LikeContext;