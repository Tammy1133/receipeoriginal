import logo from "./utils/mylogo.jpg";
import "./css/searched.css";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

const Cuisine = () => {
  const [navigateValue, setNavigateValue] = useState(-1);
  const params = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [searched, setSearched] = useState([]);
  useEffect(() => {
    const fetchSearched = async (search) => {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=368f52dff8e5459a8e261a862a7aebf8&cuisine=${search}`
      );

      const food = await data.json();
      setSearched(food.results);
    };
    fetchSearched(params.name);
  }, []);

  useEffect(() => {
    searched.length !== 0 && setLoading(false);
  }, [searched]);

  return (
    <div className="Cuisine" data-aos="fade-up">
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
      <ScrollToTop smooth />
    </div>
  );
};

export default Cuisine;
