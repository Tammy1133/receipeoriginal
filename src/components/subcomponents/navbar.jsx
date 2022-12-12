import { Link, useNavigate } from "react-router-dom";
import logo from "../utils/mylogo.jpg";
import "../css/navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <nav class="navbar navbar-expand-md navbar-light ">
        <a class="navbar-brand" href="#">
          <img
            src={logo}
            width="30"
            height="30"
            class="d-inline-block align-top logo"
            alt=""
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div class="navbar-nav ms-auto">
            <a class="nav-item nav-link active" href="#trending">
              Trending
            </a>
            <a class="nav-item nav-link active" href="#popular">
              Popular
            </a>
          </div>
          <div className="searchButton ms-auto">
            <i
              style={{ fontSize: "20px", marginRight: "40px" }}
              class="bi bi-search"
              onClick={() => navigate("/searched1/default")}
            ></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
