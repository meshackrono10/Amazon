import React from "react";
import "./Home.css";
import Product from "./Product";
import amazonbackground from "./img/5.jpg";
import img1 from "./img/6.jpg";
import img2 from "./img/7.jpg";
import img3 from "./img/8.jpg";
import img4 from "./img/9.jpg";
import img5 from "./img/10.jpg";
import img6 from "./img/11.jpg";
import img7 from "./img/11.jpg";

function Home(props) {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_image" src={amazonbackground} alt="amazon" />
        <div className="home_row">
          <Product
            id="1"
            title="TASHS'S CAULDRON of EVERYTHING"
            image={img1}
            price="220"
            rating="5"
          />
          <Product
            id="2"
            title="Google pixel 4a"
            image={img2}
            price="500"
            rating="5"
          />
        </div>
        <div className="home_row">
          <Product
            id="3"
            title="Samsung s20"
            image={img3}
            price="302"
            rating="5"
          />
          <Product
            id="4"
            title="Sumsung a10"
            image={img4}
            price="400"
            rating="5"
          />
          <Product id="5" title="SAINT " image={img5} price="770" rating="5" />
          <Product
            id="6"
            title="THE BODY "
            image={img6}
            price="330"
            rating="5"
          />
        </div>
        <div className="home_row">
          <Product
            id="7"
            title="THE BODY "
            image={img7}
            price="330"
            rating="5"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
