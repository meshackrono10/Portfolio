import React, { useEffect } from "react";
import "./Projects.css";
import { useHistory } from "react-router-dom";
import image1 from ".././img/26.jpg";
import image2 from ".././img/25.jpg";
import image3 from ".././img/10.jpg";
import image4 from ".././img/11.jpg";
import image5 from ".././img/12.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
  const history = useHistory();
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="projects">
      <div className="projects_header">
        <h1>Projects</h1>
      </div>
      <div className="products_Top">
        <div className="products_topTitle">
          <h1>
            <strong>AIRBNB</strong> Demo App
          </h1>
          <div className="prodiuct_info">
            <p>
              This is an Airbnb website with full functionality.This was made
              possible by React js for all of Website,material-ui for icons,
              react-date-rangePicker for the calender,react-router fro swtching
              of pages and css flex-box for reponsive deisgn
            </p>
          </div>
          <div className="products_topButtons">
            <button
              onClick={(e) =>
                (window.location = " https://airbnb-clone-79b39.web.app")
              }
              className="btn"
            >
              Preview
            </button>
          </div>
        </div>
        <div className="products_topContainer">
          <img
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            src={image1}
            alt="background image"
          />
        </div>
      </div>
      {/* 
      section 2 */}
      <div className="products_Top">
        <div className="products_topTitle">
          <h1>
            <strong>NETFLIX</strong> Demo App
          </h1>
          <div className="prodiuct_info">
            <p>
              This is Netflix demo App with Netflix full functionality and it is
              mobile responsive. This was made possible by React for all of the
              App, API and Axios for fetching movies, React-Youtube and Movie
              Trailor fro playing Movie Trailor, css and css flexbox for design
              and mobile reponsive
            </p>
          </div>
          <div className="products_topButtons">
            <button
              onClick={(e) =>
                (window.location = " https://clone-e186c.web.app")
              }
              className="btn"
            >
              Preview
            </button>
          </div>
        </div>
        <div className="products_topContainer">
          <img
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            src={image2}
            alt="background image"
          />
        </div>
      </div>
      {/* section 2 */}
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
          </div>
        </div>
        <div className="products_topContainer">
          <img
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            src={image3}
            alt="background image"
          />
        </div>
      </div>
      {/* section 2 */}

      <div className="products_Top">
        <div className="products_topTitle">
          <h1>
            <strong>HULU</strong> Demo App
          </h1>
          <div className="prodiuct_info">
            <p>
              This is Netflix demo App with Netflix full functionality and it is
              mobile responsive. This was made possible by React for all of the
              App, API and Axios for fetching movies, React-Youtube and Movie
              Trailor fro playing Movie Trailor, css and css flexbox for design
              and mobile reponsive and google firebase for hosting
            </p>
          </div>
          <div className="products_topButtons">
            <button
              onClick={(e) =>
                (window.location = "  https://hulu-87174.web.app")
              }
              className="btn"
            >
              Preview
            </button>
          </div>
        </div>
        {/* section 2 */}

        <div className="products_topContainer">
          <img
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            src={image4}
            alt="background image"
          />
        </div>
      </div>
      <div className="products_Top">
        <div className="products_topTitle">
          <h1>
            <strong>ANN</strong>groceries
          </h1>
          <div className="prodiuct_info">
            <p>
              This is an E-cormmers website with full functionality where you
              can add remove items from the basket and you can sign in using
              google authentication. This was made possible by google firebase
              and redux react libray for managing state.Whith API COVID-19 info
              was made possible
            </p>
          </div>
          <div className="products_topButtons">
            <button
              onClick={(e) =>
                (window.location = " https://anngrocery-e7cd6.web.app ")
              }
              className="btn"
            >
              Preview
            </button>
          </div>
        </div>
        <div className="products_topContainer">
          <img
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            src={image5}
            alt="background image"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
