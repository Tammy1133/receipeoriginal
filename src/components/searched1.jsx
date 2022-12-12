import "./css/searched.css";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./css/trending.css";
import Footer from "./subcomponents/footer";
import logo from "./utils/mylogo.jpg";
import ScrollToTop from "react-scroll-to-top";

const Searched = () => {
  const [myInput, setMyInput] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  const [searched, setSearched] = useState([]);
  const [showMessage, setShowMessage] = useState(true);
  const [navigateValue, setNavigateValue] = useState(-1);
  const [loading, setLoading] = useState(false);

  const fetchSearched = async (search) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=3bd7cbbb02ed4166a07cfaf4c5e9b616&query=${search}`
    );
    console.log(search);
    const food = await data.json();
    setSearched(food.results);
  };
  useEffect(() => {
    if (params.search !== "default") {
      fetchSearched(params.search);
      setShowMessage(false);
    }
  }, [params.search]);

  useEffect(() => {
    searched.length !== 0 && setLoading(false);
  }, [searched]);
  return (
    <div>
      <ScrollToTop smooth />
      <Link to={"/"}>
        <nav className=" d-flex align-items-center justify-content-center sticky-top ">
          <img className="mylogo" src={logo} />
        </nav>
      </Link>
      <div
        className="button btn mt-4 mx-4 text-danger fs-3"
        onClick={() => navigate(navigateValue)}
      >
        <i class="bi bi-arrow-left"></i>
      </div>
      <form action="">
        <div class="input-group mb-3 ">
          <input
            type="text"
            value={myInput}
            class="form-control shadow-none "
            placeholder="Enter receipe"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={(e) => {
              setSearched([]);
              setMyInput(e.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            if (myInput !== "") {
              navigate("/searched1/" + myInput);
              setNavigateValue(navigateValue - 1);
              setLoading(true);
              searched.length !== 0 && setLoading(false);
            }
          }}
        >
          Submit
        </button>
      </form>
      {loading && (
        <div class="d-flex justify-content-center pt-5 mt-2">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <div className="myflex ">
        {searched.map((item) => {
          console.log(item);
          return (
            <div className="eachtrend " style={{ color: "black" }}>
              <img src={`${item.image}`} alt="" className="eachtrendimg" />
              <Link to={"/receipe/" + item.id}>
                <div className="purpose mt-5">View more</div>
              </Link>
              <div className="title " style={{ width: "90%" }}>
                {item.title}
              </div>
            </div>
          );
        })}
      </div>

      <div
        className=""
        style={{
          position: "fixed",
          width: "100%",
          bottom: "0",
        }}
      >
        <footer id="footer" className="footer">
          <div className="container mt-4">
            <div className="copyright">
              © Copyright{" "}
              <strong>
                <span>Tammy</span>
              </strong>
              . All Rights Reserved
            </div>
            <div className="credits">
              {/* All the links in the footer should remain intact. */}
              {/* You can delete the links only if you purchased the pro version. */}
              {/* Licensing information: https://bootstrapmade.com/license/ */}
              {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/impact-bootstrap-business-website-template/ */}
              Designed by Tammy
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Searched;
