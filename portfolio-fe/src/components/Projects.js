import React from "react";
import "./projects.css";
import postedImage1 from "../projectImages/posted2.png";
import pulaImage1 from "../projectImages/pula1.png";
import todoListImage from "../projectImages/Todolist.png";
import weatherAppImage from "../projectImages/weather.png";
import pokerApp from "../projectImages/pokerapp.jpg";
import commerceImage from "../projectImages/commerce.jpg"

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
    <div id="container-projects">
      <h1>Projects</h1>

      <div className="projectClassContainer">
      <div id="container">
        <div className="project-details">
          <h1>POST-ED</h1>         

          <p className="information">
            A fullstack application where the user needs to register to post stuff to a wall which is seen by all logged in users.
          </p>

          <div className="control">
            <button className="btn-b">            
              <a href="https://blogreactgeno.herokuapp.com"
                  target="_blank"><span className="buy">Visit Site</span></a>
            </button>
            <button className="btn">    
            <a  href="https://github.com/genosynth/blogReact"
                  target="_blank"
                  className="btn "> <span className="buy">Github</span></a>        
            
            </button>
          </div>
        </div>

        <div className="project-image">
          <img
            src={postedImage1}
            alt="postEdthumbnail"
          ></img>

          <div className="info">
            <h2> Techs </h2>
            
            <h6 className="card-logos">
                  <span>
                  <img
                    style={smallImg}
                    src={images[12]}
                    title="React"
                    alt="React"
                  ></img>React
                  </span>

                  <span>
                  <img
                    style={smallImg}
                    src={images[10]}
                    title="NodeJs"
                    alt="NodeJs"
                  ></img>NodeJs
                  </span>

                  <span>
                  <img
                
                    style={smallImg}
                    src={images[8]}
                    title="MongoDB"
                    alt="MongoDB"
                  ></img>MongoDb
                  </span>
                </h6>
            
          </div>
        </div>

        </div>

        <div id="container">
        <div className="project-details">
          <h1>POOLA</h1>         

          <p className="information">
          A fullstack application where users register, log and the admin
                  starts games and deals unique pool balls to each user.
          </p>

          <div className="control">
            <button className="btn-b">            
              <a  href="https://pulagenju.herokuapp.com/"
                  target="_blank"><span className="buy">Visit Site</span></a>
            </button>
            <button className="btn">    
            <a href="https://github.com/genosynth/pula"
                  target="_blank"
                  className="btn "> <span className="buy">Github</span></a>        
            
            </button>
          </div>
        </div>

        <div className="project-image">
          <img
            src={pulaImage1}
            alt="postEdthumbnail"
          ></img>

          <div className="info">
            <h2> Techs </h2>
            
            <h6 className="card-logos">
                  <span>
                  <img
                    style={smallImg}
                    src={images[12]}
                    title="React"
                    alt="React"
                  ></img>React
                  </span>

                  <span>
                  <img
                    style={smallImg}
                    src={images[10]}
                    title="NodeJs"
                    alt="NodeJs"
                  ></img>NodeJs
                  </span>

                  <span>
                  <img
                
                    style={smallImg}
                    src={images[8]}
                    title="MongoDB"
                    alt="MongoDB"
                  ></img>MongoDb
                  </span>
                </h6>
            
          </div>
        </div>

        </div>

        <div id="container">
        <div className="project-details">
          <h1>TODOLIST</h1>         

          <p className="information">
          A to-do list application created with React that lets the user add,edit,delete and mark tasks as complete.
          </p>

          <div className="control">
            <button className="btn-b">            
              <a      href="https://genosynth.github.io/todolistReact/"
                  target="_blank"><span className="buy">Visit Site</span></a>
            </button>
            <button className="btn">    
            <a   href="https://github.com/genosynth/todolistReact"
                  target="_blank"
                  className="btn "> <span className="buy">Github</span></a>        
            
            </button>
          </div>
        </div>

        <div className="project-image">
          <img
            src={todoListImage}
            alt="poolathumbnail"
          ></img>

          <div className="info">
            <h2> Techs </h2>
            
            <h6 className="card-logos">
                  <span>
                  <img
                    style={smallImg}
                    src={images[12]}
                    title="React"
                    alt="React"
                  ></img>React
                  </span>

                  <span>
                  <img
                    style={smallImg}
                    src={images[10]}
                    title="NodeJs"
                    alt="NodeJs"
                  ></img>NodeJs
                  </span>

                  <span>
                  <img
                
                style={smallImg}
                src={images[0]}
                title="Bootstrap"
                alt="Bootstrap"
                  ></img>Bootstrap
                  </span>
                </h6>
            
          </div>
        </div>

        </div>

        
        <div id="container">
        <div className="project-details">
          <h1>WEATHER APP</h1>
       
          <p className="information">
          A weather forecast application which makes
                  API calls to{" "}
                  <a href="https://www.openweathermap.org" target="_blank">
                    www.openweathermap.org
                  </a>{" "}
                  and gets the forecast of the country specified.
          </p>

          <div className="control">
            <button className="btn-b">            
              <a  href="https://genosynth.github.io/ReactWeatherApp/"
                  target="_blank"><span className="buy">Visit Site</span></a>
            </button>
            <button className="btn">    
            <a     href="https://github.com/genosynth/ReactWeatherApp"
                  target="_blank"
                  className="btn "> <span className="buy">Github</span></a>        
            
            </button>
          </div>
        </div>

        <div className="project-image">
          <img
            src={weatherAppImage}
            alt="poolathumbnail"
          ></img>

          <div className="info">
            <h2> Techs </h2>
            
            <h6 className="card-logos">
                  <span>
                  <img
                    style={smallImg}
                    src={images[12]}
                    title="React"
                    alt="React"
                  ></img>React
                  </span>

                  <span>
                  <img
                    style={smallImg}
                    src={images[10]}
                    title="NodeJs"
                    alt="NodeJs"
                  ></img>NodeJs
                  </span>

                  <span>
                  <img
                
                style={smallImg}
                src={images[0]}
                title="Bootstrap"
                alt="Bootstrap"
                  ></img>Bootstrap
                  </span>
                </h6>
            
          </div>
        </div>

        </div>

        <div id="container">
        <div className="project-details">
          <h1>E-COMMERCE</h1>
        

          <p className="information">
            An e-commerce website which takes a store full of tiems and the cart is updated each time items are added.
          </p>

          <div className="control">
            <button className="btn-b">            
              <a  href="https://genosynth.github.io/e-commerce1/"
                  target="_blank"><span className="buy">Visit Site</span></a>
            </button>
            <button className="btn">    
            <a     href="https://github.com/genosynth/e-commerce1"
                  target="_blank"
                  className="btn "> <span className="buy">Github</span></a>        
            
            </button>
          </div>
        </div>

        <div className="project-image">
          <img
            src={commerceImage}
            alt="e-commerce thumbnail"
          ></img>

          <div className="info">
            <h2> Techs </h2>
            
            <h6 className="card-logos">
                  <span>
                  <img
                    style={smallImg}
                    src={images[12]}
                    title="React"
                    alt="React"
                  ></img>React
                  </span>

                  <span>
                  <img
                    style={smallImg}
                    src={images[10]}
                    title="NodeJs"
                    alt="NodeJs"
                  ></img>NodeJs
                  </span>

                  <span>
                  <img
                
                style={smallImg}
                src={images[0]}
                title="Bootstrap"
                alt="Bootstrap"
                  ></img>Bootstrap
                  </span>
                </h6>
            
          </div>
        </div>

        </div>


        
        <div id="container">
        <div className="project-details">
          <h1>POKER TRACKER</h1>
        

          <p className="information">
            An application used to aid in a live poker tournament with blind levels, players and other statistics.
          </p>

          <div className="control">
            <button className="btn-b">            
              <a  href="https://genosynth.github.io/PokerClubApp/"
                  target="_blank"><span className="buy">Visit Site</span></a>
            </button>
            <button className="btn">    
            <a     href="https://github.com/genosynth/PokerClubApp"
                  target="_blank"
                  className="btn "> <span className="buy">Github</span></a>        
            
            </button>
          </div>
        </div>

        <div className="project-image">
          <img
            src={pokerApp}
            alt="pokerapp-thumbnail"
          ></img>

          <div className="info">
            <h2> Techs </h2>
            
            <h6 className="card-logos">
                  <span>
                  <img
                    style={smallImg}
                    src={images[12]}
                    title="React"
                    alt="React"
                  ></img>React
                  </span>

                  <span>
                  <img
                    style={smallImg}
                    src={images[10]}
                    title="NodeJs"
                    alt="NodeJs"
                  ></img>NodeJs
                  </span>

                  <span>
                  <img
                
                style={smallImg}
                src={images[0]}
                title="Bootstrap"
                alt="Bootstrap"
                  ></img>Bootstrap
                  </span>
                </h6>
            
          </div>
        </div>

        </div>

      </div>
    </div>
  );
}

export default Projects;
