import React, {useState} from 'react'
import { useSelector } from "react-redux";


const SocialUser = ({user}) => {

    let [watchlist, setWatchlist] = useState(false)

     let movies = useSelector((state) => state.movieState.backendmovies[0]);
     let moviewatches = useSelector(
       (state) => state.movieState.moviewatches[0]
     );
    
     let list = moviewatches.filter((watch) => watch.user_id === user.id);
     let movieids = list.map((list) => list.movie_id);
     let these = movies.filter((movie) => movieids.find((id) => movie.id === id));
     let thesemovies = these.map((movie) => movie.title);
    
    const handleUser = (e) => {
        e.preventDefault();
        setWatchlist(!watchlist)
    };


    return (<li onClick={(e) => handleUser(e)}>
        <h3>{user.name}</h3>
        {watchlist ? 
            <ul>Movies {user.name} is watching :{thesemovies.map(movie => <p style={{color: "blue"}}>{movie}</p>)}</ul> : null}
    </li>);
}

export default SocialUser
