import MyCarousel from "./subcomponents/carousel";
import Foodlist from "./subcomponents/foodlist";
import Footer from "./subcomponents/footer";
import Navbar from "./subcomponents/navbar";
import Newsletter from "./subcomponents/newsletter";
import Popular from "./subcomponents/popular";
import ScrollToTop from "react-scroll-to-top";

import Trending from "./subcomponents/trending";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <MyCarousel></MyCarousel>
      <Foodlist></Foodlist>
      <Trending></Trending>
      <Popular></Popular>
      <Newsletter></Newsletter>
      <Footer></Footer>
      <ScrollToTop smooth />
    </div>
  );
};

export default Main;
