import React from "react";
import "./projects.css";
import postedImage1 from "../projectImages/posted2.png";
import pulaImage1 from "../projectImages/pula1.png";
import todoListImage from "../projectImages/Todolist.png";
import weatherAppImage from "../projectImages/weather.png";

function Projects() {
  let imgStyle = { maxWidth: "80%", maxHeight: "40%", borderRadius: "5px" };
  let pulaImgStyle = { maxWidth: "80%", maxHeight: "40%", borderRadius: "5px" };
  let smallImg = { maxWidth: "50px", maxHeight: "50px" };

  function importAll(r) {
    //A function to import all images in the technologiesIcon folder
    return r.keys().map(r);
  }

  const images = importAll(
    require.context("../technologiesIcons/", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <div className="container-projects">
      <h1>Projects</h1>

      <div className="card__container">
        <div className="card">
          <div className="card__content">
            <h3 className="card__header">POST-ED</h3>
            <img
              src={postedImage1}
              style={imgStyle}
              className="project-image"
              alt="..."
            />
            <div className="card__info">
              <h6 className="card-logos">
                
                <img
                  style={smallImg}
                  src={images[12]}
                  title="React"
                  alt="React"
                ></img>
               
                <img
                  style={smallImg}
                  src={images[10]}
                  title="NodeJs"
                  alt="NodeJs"
                ></img>
                <img
                  className="project-image "
                  style={smallImg}
                  src={images[8]}
                  title="MongoDB"
                  alt="MongoDB"
                ></img>
              </h6>
              <p className="card-text">
                A fullstack application where the user needs to register to post
                stuff to a wall which is seen by all logged in users.
              </p>

              <a
                href="https://blogreact.cyclic.app/"
                target="_blank"
                className="btn mr-2"
              >
                <button className="card__button">Visit Site</button>
              </a>

              <a
                href="https://github.com/genosynth/blogReact"
                target="_blank"
                className="btn "
              >
                <button className="card__button">Github</button>
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card__content">
            <h3 className="card__header">POOLA</h3>
            <img
              src={pulaImage1}
              className="project-image"
              style={pulaImgStyle}
              alt="..."
            />
            <div className="card__info">
              <h6 className="card-logos">
                <img
                  style={smallImg}
                  src={images[12]}
                  title="React"
                  alt="React"
                ></img>
                <img
                  style={smallImg}
                  src={images[10]}
                  title="NodeJs"
                  alt="NodeJs"
                ></img>
                <img
                  style={smallImg}
                  src={images[8]}
                  title="MongoDB"
                  alt="MongoDB"
                ></img>
              </h6>
              <p className="card-text">
                A fullstack application where users register, log and the admin
                starts games and deals unique pool balls to each user.
              </p>

              <a
                href="https://pulagenju.herokuapp.com/"
                target="_blank"
                className="btn mr-2"
              >
                <button className="card__button">Visit Site</button>
              </a>

              <a
                href="https://github.com/genosynth/pula"
                target="_blank"
                className="btn "
              >
                <button className="card__button">Github</button>
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card__content">
            <h3 className="card__header">TODOLIST</h3>
            <img
              src={todoListImage}
              style={imgStyle}
              className="project-image"
              alt="..."
            />
            <div className="card__info">
              <h6 className="card-logos">
                <img
                  style={smallImg}
                  src={images[12]}
                  title="React"
                  alt="React"
                ></img>
                <img
                  style={smallImg}
                  src={images[10]}
                  title="NodeJs"
                  alt="NodeJs"
                ></img>
                <img
                  style={smallImg}
                  src={images[0]}
                  title="Bootstrap"
                  alt="Bootstrap"
                ></img>
              </h6>
              <p className="card-text">
                A to-do list application created with React that lets the user
                add,edit,delete and mark tasks as complete.
              </p>

              <a
                href="https://genosynth.github.io/todolistReact/"
                target="_blank"
                className="btn mr-2"
              >
                <button className="card__button">Visit Site </button>
              </a>

              <a
                href="https://github.com/genosynth/todolistReact"
                target="_blank"
                className="btn "
              >
                <button className="card__button">Github</button>
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card__content">
            <h3 className="card__header">WEATHER-APP</h3>
            <img
              src={weatherAppImage}
              style={imgStyle}
              className="project-image"
              alt="..."
            />
            <div className="card__info">
              <h6 className="card-logos">
                <img
                  style={smallImg}
                  src={images[12]}
                  title="React"
                  alt="React"
                ></img>
                <img
                  style={smallImg}
                  src={images[10]}
                  title="NodeJs"
                  alt="NodeJs"
                ></img>
                <img
                  style={smallImg}
                  src={images[0]}
                  title="Bootstrap"
                  alt="Bootstrap"
                ></img>
              </h6>
              <p className="card-text">
                A weather forecats application created with React which makes
                API calls to{" "}
                <a href="https://www.openweathermap.org" target="_blank">
                  www.openweathermap.org
                </a>{" "}
                and gets the forecast of the country specified.
              </p>

              <a
                href="https://genosynth.github.io/ReactWeatherApp/"
                target="_blank"
                className="btn mr-2"
              >
                <button className="card__button">Visit Site </button>
              </a>

              <a
                href="https://github.com/genosynth/ReactWeatherApp"
                target="_blank"
                className="btn "
              >
                <button className="card__button">Github</button>
              </a>
            </div>
          </div>
        </div>

        <div class="card">
          <h1>CHRISTMAS TREE</h1>
          <span class="hint-star star">
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star-o" aria-hidden="true"></i>
          </span>

          <p class="information">
            " Let's spread the joy , here is Christmas , the most awaited day of
            the year.Christmas Tree is what one need the most. Here is the
            correct tree which will enhance your Christmas.
          </p>

          <div class="control">
            <button class="btn">
              <span class="price">$250</span>
              <span class="shopping-cart">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
              </span>
              <span class="buy">Get now</span>
            </button>
          </div>
        </div>

        <div class="product-image">
          <img
            src="https://images.unsplash.com/photo-1606830733744-0ad778449672?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNocmlzdG1hcyUyMHRyZWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          ></img>

          <div class="info">
            <h2> Description</h2>
            <ul>
              <li>
                <strong>Height : </strong>5 Ft{" "}
              </li>
              <li>
                <strong>Shade : </strong>Olive green
              </li>
              <li>
                <strong>Decoration: </strong>balls and bells
              </li>
              <li>
                <strong>Material: </strong>Eco-Friendly
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
