import "../css/popular.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Popular = () => {
  const [trending, setTrending] = useState([]);
  const [trending1, setTrending1] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTrending = async () => {
      const data = await fetch(
        "https://api.spoonacular.com/recipes/random?apiKey=dc93b5a2b92f4857ae5078786ff9287e&number=3"
      );

      const food = await data.json();
      setTrending(food.recipes);
    };
    console.log(trending);
    getTrending();
    const getTrending1 = async () => {
      const data = await fetch(
        "https://api.spoonacular.com/recipes/random?apiKey=dc93b5a2b92f4857ae5078786ff9287e&number=2"
      );

      const food = await data.json();
      setTrending1(food.recipes);
    };
    console.log(trending);
    getTrending1();
  }, []);

  useEffect(() => {
    trending.length !== 0 && setLoading(false);
  }, [trending]);

  return (
    <div id="popular" className="popular">
      <div className="trending mx-4 ">
        <div className="trendingheader text-center">
          <h2>Popular Receipes</h2>
        </div>
        <p className="trendingsub text-center mx-auto">
          Want to see our popular receipes. Read our popular receipes and stay
          up to date
        </p>
        {loading && (
          <div class="d-flex justify-content-center pt-5 mt-2">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        <div className="mt-5">
          <div
            className=" d-flex flex-column flex-lg-row 
           justify-content-center "
          >
            <div className="left mx-5 mx-lg-0">
              {trending.length > 0 &&
                trending.map((item) => {
                  return (
                    <Link to={`/receipe/${item.id}`}>
                      <div className="eachtrend " data-aos="fade-left">
                        <img
                          src={`${item.image}`}
                          alt=""
                          className="eachtrendimg"
                        />
                        <div className="purpose">{item.dishTypes[0]}</div>
                        <div className="title">{item.title}</div>
                        <div className="otherinfo my-3">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Fuga, quo?
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </div>
            <div className="right mx-5 mx-lg-0">
              {" "}
              {trending1.length > 0 &&
                trending1.map((item) => {
                  console.log(item);
                  return (
                    <Link to={`/receipe/${item.id}`}>
                      <div className="eachtrend " data-aos="fade-right">
                        <img
                          src={`${item.image}`}
                          alt=""
                          className="poeachtrendimg"
                        />
                        <div className="purpose">{item.dishTypes[0]}</div>
                        <div className="title">{item.title}</div>
                        <div className="otherinfo my-3">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Fuga, quo?
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
