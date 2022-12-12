import african from "../utils/african.jpg";
import spanish from "../utils/spanish.jpg";
import british from "../utils/british.jpg";
import chinese from "../utils/chinese.jpg";
import french from "../utils/french.jpg";
import american from "../utils/american.jpg";

import italian from "../utils/italian.png";
import "../css/foodlist.css";
import { Link } from "react-router-dom";

const Foodlist = () => {
  return (
    <div className="foodlist  mt-5 " data-aos="fade-up">
      <Link to={"/cuisine/african"}>
        {" "}
        <div className="eachcat">
          <img src={african} alt="" className="topimg" />
          <h3 className="listname">African</h3>
        </div>
      </Link>
      <Link to={"/cuisine/british"}>
        {" "}
        <div className="eachcat">
          <img src={british} alt="" className="topimg" />
          <h3 className="listname">British</h3>
        </div>
      </Link>
      <Link to={"/cuisine/american"}>
        {" "}
        <div className="eachcat">
          <img src={american} alt="" className="topimg" />
          <h3 className="listname">American</h3>
        </div>
      </Link>
      <Link to={"/cuisine/chinese"}>
        {" "}
        <div className="eachcat">
          <img src={chinese} alt="" className="topimg" />
          <h3 className="listname">Chinese</h3>
        </div>
      </Link>
      <Link to={"/cuisine/french"}>
        {" "}
        <div className="eachcat">
          <img src={french} alt="" className="topimg" />
          <h3 className="listname">French</h3>
        </div>
      </Link>
      <Link to={"/cuisine/spanish"}>
        <div className="eachcat">
          <img src={spanish} alt="" className="topimg" />
          <h3 className="listname">Spanish</h3>
        </div>
      </Link>
      <Link to={"/cuisine/italian"}>
        {" "}
        <div className="eachcat">
          <img src={italian} alt="" className="topimg" />
          <h3 className="listname">Italian</h3>
        </div>
      </Link>
    </div>
  );
};

export default Foodlist;
