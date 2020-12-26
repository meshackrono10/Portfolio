import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Home.css";
import image from "./img/10.jpg";
import image1 from "./img/3.png";
import image2 from "./img/4.png";
import image3 from "./img/5.png";
import image4 from "./img/19.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  const history = useHistory();

  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 0,
      duration: 1000,
      easing: "ease",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <div className="home">
      <div className="home_banner">
        <div className="image_maskTop" />
        <div className="home_topsection">
          <div className="background_image">
            <div className="image_mask" />
            <img src={image4} alt="backgroun-image" />
          </div>
          <div className="innerInner">
            <div className="home_banner">
              <h1>HI MY NAME IS MESHACK I AM FREELENCER WEB-DEVELOPER </h1>
              <p>
                Do you have a project in your mind share it with me so that i
                can bring to reality and create you dynamic and animated
                websites
              </p>
            </div>
            <div className="home_buttons">
              <Link onClick={() => history.push("/projects")}>
                <button className="home_button"> My Projects</button>
              </Link>
              <Link onClick={() => history.push("/contact")}>
                <button className="home_button">Contact Me</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 
      ==================
      about
      ==================
      */}
      {/* <AboutMe /> */}
      {/* 
      ==================
      products
      ==================
      
      */}
      <div className="home_products">
        <div className="small_line13" />
        <div className="home_productHeader">
          <h1>PROJECTS</h1>
        </div>

        <div className="products_Top">
          <div className="products_topTitle">
            <h1>
              <strong>COVID-19 TRACKER</strong>
            </h1>
            <div className="prodiuct_info">
              <p>
                This is COVID-19 TRACKER App which show daily Covid analitics in
                the world.This was made possible by API for fetching countries
                info and covid updates,materia-ui for good and responsive
                cards,react-leaflet for map and and grap,css and css flexbox for
                perfect design and mobile responsive and google firebase for
                hosting
              </p>
            </div>
            <div className="products_topButtons">
              <button
                onClick={(e) =>
                  (window.location = " https://covid-tracker-8917d.web.app")
                }
                className="btn"
              >
                Preview
              </button>
              <button className="btn" onClick={() => history.push("/projects")}>
                See more
              </button>
            </div>
          </div>
          <div className="products_topContainer">
            <img src={image} alt="background image" />
          </div>
        </div>
      </div>
      {/*
      =====================
       servicess
       =====================
       */}
      <div className="home_servicestitle">
        <div className="home_serviceLine"></div>

        <h1>My services</h1>
      </div>
      <div className="home_services">
        <div>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="home_innerservices"
          >
            <section className="home_services1">
              <img src={image1} alt="web-designe" />
              <h2>WEB DESIGN</h2>

              <p>
                Beauty lies in the designs you have. I will transform those
                beautiful website/app ideas into a functional reality that you
                can brag about. You dont have a good looking idea? I have you
                covered. I build beautiful sites with html, css and JavaScript.
              </p>
            </section>
            <section className="home_services2">
              <img src={image2} alt="web-designe" />
              <h2>BACK-END</h2>
              <p>
                I offer Back-end services by using GOOGLE FIREBASE. Google
                firebase helps in profiding Back-end by setting database,
                Hosting, Storing and offering google autatication. All service
                of firebase are free
              </p>
            </section>

            <div className="home_innerservices1">
              <section className="home_services3">
                <img src={image3} alt="web-designe" />
                <h2>REACT JS</h2>
                <p>
                  That app that is static can get quite boring. Integrate
                  interactivity within your application to handle your user
                  interaction. I will do this for you using REACT JS and
                  FIREBASE technology for that convenience of your users.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
