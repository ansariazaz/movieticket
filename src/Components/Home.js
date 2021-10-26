import React, {useEffect,useState} from 'react';
import Movie from '../Components/Movie'

function Home() {

    const[data,setData] = useState([]); 

    const getData= async () => {
      const response= await fetch('https://api.tvmaze.com/search/shows?q=all'); 
      setData(await response.json());
  }


   useEffect(() => {
       getData();
   },[]);  

    return (
        <div className="container">
           {data.map(p=>(<Movie key={p.show.id} data={p} />))} 
        </div>
    )
}

export default Home;
