import React, { useEffect, useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

const SongCard = ({ song }) => {
  const { id, title, artist, releaseDate } = song;
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.songReducer.favorites);
  const [clicked, setClicked] = useState(false);
  console.log(clicked);
  useEffect(() => {
    console.log({ favorites });
  }, [favorites]);

  function addTofavorites() {
    console.log(song);
    dispatch({ type: 'ADD_TO_FAVORITES', payload: song });
    setClicked(true);
  }

  return (
    <div className="song-card">
      <p>{id}</p>
      <h3>{title}</h3>
      <h5>By: {artist}</h5>
      <h5>Released: {releaseDate}</h5>

      <div className="heart" onClick={() => addTofavorites()}>
        <AiOutlineHeart className={`unclicked${clicked === true ? '-hide' : ''}`} />
        <AiFillHeart className={`clicked${clicked === true && '-heart'}`} />
      </div>

      <button className="similar-songs">
        More Songs Like This{' '}
        <span role="img" aria-label="emoji">
          🔎
        </span>
      </button>
    </div>
  );
};

export default SongCard;
