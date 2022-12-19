import logo from '../assets/images/logo.png'
import search from "../assets/images/searchGlass.png";
import bell from "../assets/images/bell.png";

function Navbar() {




  return (
    <div>
      <div className="navbar">
        <div>
          <img src={logo} alt="logo of the site" />
        </div>
        <div className="searchbar">
          <img src={search} alt="pic of a magnifying glass" />
          <input type="text" placeholder="search" />
        </div>
        <div>
          <button className="notifications">
            <img src={bell} alt="bell icon" />
            <p>Notifications</p>
          </button>
        </div>
      </div>

      <div className="navbottom">
        <p>Football</p>
        <p>Tennis</p>
        <p>Baseball</p>
        <p>Hokey</p>
        <p>Handball</p>
        <p>Cricket</p>
        <p>Volleyball</p>
        <p>Table Tennis</p>
      </div>
    </div>
  );
}

export default Navbar