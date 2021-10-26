import React from "react";
import { useParams,Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Moviedetail() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
    setData(await response.json());
  };

  useEffect(() => {
    getData();
  }, []);
  let { id } = useParams();
  const detail = data.filter((f) => {
    return f.show.id == id;
  });
  console.log(id);
  console.log(detail);

  return (
    <div>
      {detail[0] ? (
        <div className="container3" >
          <div  className="img-container">
            <div className="image">
              <img src={detail[0].show.image.medium} className="image" />
            </div>
            <div className="detail">
              <h1>{detail[0].show.name}</h1>
              <p>Type:{detail[0].show.type}</p>
              <p>Language:{detail[0].show.language}</p>
              <p>Genres:{detail[0].show.genres.map((d)=>(<span> {d} </span>))}</p>
              <p>Status:{detail[0].show.status}</p>
              <p>Runtime:{detail[0].show.runtime}</p>
              <p>Premiered:{detail[0].show.premiered}</p>
              <p>OfficialSite:<Link>{detail[0].show.officialSite}</Link></p>
              <p className="summary" dangerouslySetInnerHTML={{ __html:detail[0].show.summary }}/>
              <Link to={`/bookform/${detail[0].show.id}`} className="btn">Book Now</Link>
            </div>
          </div>
        </div>
      ) : (
        "No"
      )}
    </div>
  );
}

export default Moviedetail;
