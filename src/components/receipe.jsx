import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./css/receipe.css";
import logo from "./utils/mylogo.jpg";
const Receipe = () => {
  const params = useParams();
  const [information, setInformation] = useState({ extendedIngredients: [] });
  const [active, setActive] = useState("ingredients");
  const navigate = useNavigate();

  const getInfo = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${name}/information?apiKey=dc93b5a2b92f4857ae5078786ff9287e`
    );
    const info = await data.json();
    console.log(info);
    setInformation(info);
  };

  useEffect(() => {
    getInfo(params.name);
  }, [params.name]);
  return (
    <div className="">
      <Link to={"/"}>
        <nav className=" d-flex align-items-center justify-content-center sticky-top ">
          <img className="mylogo" src={logo} />
        </nav>
      </Link>
      <div
        className="button btn mt-4 mx-4 btn-danger"
        onClick={() => navigate(-1)}
      >
        Back
      </div>
      <div className="receipe">
        <h3 className="infotitle">{information.title}</h3>
        <div className="receipeContainer">
          <div
            className="left"
            style={{
              backgroundImage: `url(${information.image})`,
              objectFit: "cover",
            }}
          ></div>
          <div className="right">
            <div className="buttons">
              <button
                className="button-87"
                onClick={() => setActive("ingredients")}
              >
                Ingridents
              </button>
              <button
                className="button-87"
                onClick={() => setActive("instruction")}
              >
                Instruction
              </button>
            </div>

            {active === "instruction" && (
              <div style={{ marginBottom: "90px", marginTop: "40px" }}>
                <p
                  className="instruction"
                  dangerouslySetInnerHTML={{ __html: information.summary }}
                ></p>
                <p
                  className="instruction"
                  dangerouslySetInnerHTML={{ __html: information.instructions }}
                ></p>
              </div>
            )}
            <div style={{ marginBottom: "90px", marginTop: "40px" }}>
              {active === "ingredients" &&
                information.extendedIngredients.map((item) => {
                  return <p key={item.id}>{item.original}</p>;
                })}
            </div>
          </div>
        </div>
      </div>
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
  );
};
export default Receipe;
