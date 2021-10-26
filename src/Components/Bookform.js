import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Bookform = () => {
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
  return (
    <div className="container4">
      {detail[0] ? (
        <div className="form">
          <h1>{detail[0].show.name}</h1>
          <p>Time:{detail[0].show.schedule.time}</p>
          <p>Day:{detail[0].show.schedule.days}</p>
          <div>
            <input type="text" placeholder="Name" />
          </div>
          <div>
            <input type="Number" placeholder="Age" />
          </div>
          <div>
            <input type="text" placeholder="Email" />
          </div>
          <div>
            <input type="Number" placeholder="Mobile No." />
          </div>
          <button>Confirm Booking</button>
        </div>
      ) : (
        "No"
      )}
      ;
    </div>
  );
};

export default Bookform;
