import React from "react";
import "../cards.scss";
import postedImage1 from "../projectImages/posted2.png"
import pulaImage1 from "../projectImages/pula1.png"
import todoListImage from "../projectImages/Todolist.png"
import weatherAppImage from "../projectImages/weather.png"

function Projects() {
  let imgStyle = { maxWidth: "80%" , maxHeight: "40%", borderRadius: "5px"};
  let pulaImgStyle = {maxWidth: "80%" , maxHeight:"40%", borderRadius: "5px", }
  let smallImg = { maxWidth: "50px", maxHeight: "50px"};
  

  function importAll(r) { //A function to import all images in the technologiesIcon folder
    return r.keys().map(r);
  }
  
  const images = importAll(require.context('../technologiesIcons/', false, /\.(png|jpe?g|svg)$/));

  return (
    <div className="container">
      <h1>Projects</h1>

      
      <div className="card__container">
       
          
          <div className="card">
            <div className="card__content" >
              <h3 className="card__header">POST-ED</h3>
            <img src={postedImage1}  style={imgStyle} className="project-image" alt="..."/>
              <div className="card__info">
                
                <h6 className="card-logos">
                   <img style={smallImg} src={images[12]} title="React" alt="React"></img> 
                   <img style={smallImg} src={images[10]} title="NodeJs" alt="NodeJs"></img>
                   <img className="project-image "style={smallImg} src={images[8]} title="MongoDB" alt="MongoDB"></img>
                   </h6>
                <p className="card-text">
                 A fullstack application where the user needs to register to post stuff to a wall which is seen by all logged in users.
                </p>
             
                <a href="https://blogreactgeno.herokuapp.com" target="_blank" className="btn mr-2">
                <button className="card__button">
                  Visit Site
                  </button>
                </a>
              
                <a href="https://github.com/genosynth/blogReact" target="_blank" className="btn ">
                <button className="card__button">
                 Github
                 </button>
                </a>
              </div>
            </div>
            </div>         

            <div className="card">
            <div className="card__content" >
               <h3 className="card__header">POOLA</h3>
            <img src={pulaImage1} className="project-image" style={pulaImgStyle} alt="..."/>
              <div className="card__info">
               
                <h6 className="card-logos">
                <img style={smallImg} src={images[12]} title="React" alt="React"></img> 
                   <img style={smallImg} src={images[10]} title="NodeJs" alt="NodeJs"></img>
                   <img style={smallImg} src={images[8]} title="MongoDB" alt="MongoDB"></img>
                </h6>
                <p className="card-text">
                 A fullstack application where users register, log and the admin starts games and deals unique pool balls to each user.
                </p>
               
                <a href="https://pulagenju.herokuapp.com/" target="_blank" className="btn mr-2">
                <button className="card__button">
                 Visit Site
                 </button>
                </a>
                
                <a href="https://github.com/genosynth/pula" target="_blank" className="btn ">
                <button className="card__button">
                  Github
                  </button>
                </a>
              </div>
            </div>
            </div>

            
            <div className="card">
            <div className="card__content" >
              <h3 className="card__header">TODOLIST</h3>
            <img src={todoListImage}  style={imgStyle} className="project-image" alt="..."/>
              <div className="card__info">
                
                <h6 className="card-logos">
                   <img style={smallImg} src={images[12]} title="React" alt="React"></img> 
                   <img style={smallImg} src={images[10]} title="NodeJs" alt="NodeJs"></img>
                   <img style={smallImg} src={images[0]} title="Bootstrap" alt="Bootstrap"></img>
                   </h6>
                <p className="card-text">
                A to-do list application created with React that lets the user add,edit,delete and mark tasks as complete.
                </p>
            
                <a href="https://genosynth.github.io/todolistReact/" target="_blank" className="btn mr-2">
                <button className="card__button">
                 Visit Site </button>
                </a>
                
                <a href="https://github.com/genosynth/todolistReact" target="_blank" className="btn ">
                <button className="card__button">
                </button>
                   Github
                </a>
              </div>
            </div>
            </div>

            <div className="card">
            <div className="card__content" >
              <h3 className="card__header">WEATHER-APP</h3>
            <img src={weatherAppImage}  style={imgStyle} className="project-image" alt="..."/>
              <div className="card__info">
                
                <h6 className="card-logos">
                   <img style={smallImg} src={images[12]} title="React" alt="React"></img> 
                   <img style={smallImg} src={images[10]} title="NodeJs" alt="NodeJs"></img>
                   <img style={smallImg} src={images[0]} title="Bootstrap" alt="Bootstrap"></img>
                   </h6>
                <p className="card-text">
              A weather forecats application created with React which makes API calls to <a href="https://www.openweathermap.org" target="_blank">www.openweathermap.org</a> and gets the forecast of the country specified.
                </p>
                
                <a href="https://genosynth.github.io/ReactWeatherApp/" target="_blank" className="btn mr-2">
                <button className="card__button">
                 Visit Site </button>
                </a>
                
                <a href="https://github.com/genosynth/ReactWeatherApp" target="_blank" className="btn ">
                <button className="card__button">
                   Github
                   </button>
                </a>
              </div>
            </div>
            </div>
          

          

      </div>
    </div>
  );
}

export default Projects;
