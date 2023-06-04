import NavBar from "../components/NavBar";
import SearchBox from "../components/SearchBox";
import homeImage from "../assets/home-image.jpg";
import "../assets/home-image.css";

export default function Home () {
  return (
  <>
      <NavBar/>

      <div className="columns is-centered">
        <div className="column is-half">
          <figure className="image is-centered">
            <img src={homeImage} className="is-centered home-image"/>
          </figure>
        </div>
      </div>

      <SearchBox/>
  </>
  )
}
