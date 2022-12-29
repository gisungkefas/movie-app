import React, {useEffect, useState} from "react";
import './App.css';
import MovieBox from "./MovieBox";
import 'bootstrap/dist/css/bootstrap.min.css';

const API_URL="http://api.themoviedb.org/3/movie/popular?api_key=bcc4ff10c4ff10c2939665232d75d8bf0ec093";

function App() {

    const [movies, setMovies]=useState([]);
    const example = ["One"]

    useEffect(() => {
        fetch(API_URL)
            .then((res)=>res.json())
            .then(data=>{
                console.log(data);
                setMovies(data.results);
            })
    }, [])

  return (
      <>
        <div className="container">
            <div className="grid">
                {example.map( (movieReq) =>
              <MovieBox key={movieReq.id} {...movieReq}/>)}
            </div>
        </div>
      </>
  );
}

export default App;
