import { Route, Routes } from "react-router-dom";
import Main from "./components/main";
import "bootstrap/dist/css/bootstrap.min.css";
import PageNotFound from "./components/pagenotfound";
import Searched from "./components/searched1";
import Cuisine from "./components/cuisine";
import Receipe from "./components/receipe";
import NProgress from "nprogress";
import { Router } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
    NProgress.start();
    NProgress.done();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        <Route path="/cuisine/:name" element={<Cuisine></Cuisine>}></Route>
        <Route path="/receipe/:name" element={<Receipe></Receipe>}></Route>

        <Route
          path="/searched1/:search"
          exact
          element={<Searched></Searched>}
        />
      </Routes>
    </div>
  );
}

export default App;
