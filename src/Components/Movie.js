import React from "react";
import {Link} from 'react-router-dom'

function Movie(props) {
  console.log(props);

  return (
    <div className="container1">
      <div className="movie">
        <img src={props.data.show.image.medium} alt="" className="" />
        <h2>{props.data.show.name}</h2>
        <p>genres:{props.data.show.genres.map((d)=>(<span> {d} </span>))}</p>
        <p>language:{props.data.show.language}</p>
        <p>Rating:{props.data.show.rating.average}</p>
        <Link to={`/Movie/${props.data.show.id}`} className="btn">Detail</Link>
      </div>
    </div>
  );
}

export default Movie;
