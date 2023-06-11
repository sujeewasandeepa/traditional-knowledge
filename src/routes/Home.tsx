import NavBar from "../components/NavBar";
import SearchBox from "../components/SearchBox";
import homeImage from "../assets/home-image.jpg";
import "../assets/home-image.css";
import { useEffect, useState } from "react";
import { Info } from "../types/Info";

export default function Home () {

  const [infos, setInfos] = useState<Info[]>();

  const getSomeInfos = async () => {
    const data:Response = await fetch('http://localhost:4000/api/info'); 
    const topInfos: any[] = await data.json();
    setInfos(topInfos[1]);
  }

  useEffect(() => {
    getSomeInfos();
  }, [])

  return (
  <>
      <NavBar/>

      <div className="columns is-centered">
        <div className="column is-half">
          <figure className="image is-centered">
            <img src={homeImage} className="is-centered home-image"/>
          </figure>

          <div className="mt-5">
           {infos?.map((info) => (
           <div key={info.info_id}>
            <h2 className="title is-3">{info.title}</h2>
            <p>{info.description}</p>
            <p className="is-italic">Author: {info.author_id}</p>
            <p>Tags: {info.tags}</p>
            <hr />
           </div>
           ))} 
          </div>
        </div>
      </div>

      <SearchBox/>
  </>
  )
}
