import React, { use } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useEffect, useState  } from 'react'
import { useParams ,useNavigate } from 'react-router-dom'
const Player = () => {

  const {id}= useParams();
  const navigate = useNavigate();

  const [videoId, setVideoId] = useState({
    name: '',
    key : '',
    published_at: '',
    type: ''
  });
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTFjYzAyZjFlYjNhMzQ1MTQ5NGZiZDU4ZGNhZDJjOCIsIm5iZiI6MTc0NTc3MDA5OS4yNDUsInN1YiI6IjY4MGU1NjczM2M3MThlOGM1NTM3ZjQ3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Lo6kOMZdgMj-8P_aXaHOA1N5D936vAqcPvG2FTTc1wo'
    }
  };

  // Fetching video details from the API

  useEffect(() => {
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setVideoId(res.results[0]))
    .catch(err => console.error(err));
  })
  return (
    <div className='player'>
        <img src={back_arrow_icon} alt="" className='' onClick={()=>{navigate(-2)}} />      
        <iframe width='90%' height = '90%' src={`https://www.youtube.com/embed/${videoId.key}`}
        title='trailer' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div className="player-info">
            <p>{videoId.published_at.slice(0,10)}</p>
            <p>{videoId.name}</p>
            <p>{videoId.type}</p>
        </div>
    </div>
  )
}

export default Player
