import React from 'react'
import './TitleCards.css'
import card_data from '../../assets/cards/Cards_data'
import { useRef , useEffect ,useState} from 'react'
import { Link } from 'react-router-dom'
const TitleCards = ({title,category}) => {

  const [movies, setMovies] = useState([]);
  const card_ref = useRef();
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTFjYzAyZjFlYjNhMzQ1MTQ5NGZiZDU4ZGNhZDJjOCIsIm5iZiI6MTc0NTc3MDA5OS4yNDUsInN1YiI6IjY4MGU1NjczM2M3MThlOGM1NTM3ZjQ3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Lo6kOMZdgMj-8P_aXaHOA1N5D936vAqcPvG2FTTc1wo'
  }
};



  useEffect(() => {
    // fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=311cc02f1eb
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setMovies(res.results))
  .catch(err => console.error(err));

    card_ref.current.addEventListener('wheel', (e) => {
      e.preventDefault();
      card_ref.current.scrollLeft += e.deltaY;
    });
  }, []);
  
  return (
    <div className='titlecards'>
      <h2>{title?title:'Popular On Netflix'}</h2> 
      <div className="card-list" ref={card_ref}>
        {movies.map((card,index)=>{
          // console.log(card.image)
          return (
            <Link to={`/player/${card.id}`}className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" className='card-img' />
              <div className="card-title"><p>{card.original_title}</p></div>
            </Link>)
          
        })}
          
                
         
      </div>
    </div>)
}

export default TitleCards
