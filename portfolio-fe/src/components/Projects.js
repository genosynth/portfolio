import React from "react";
import "../cards.css";
import githublogo from "../github.svg";
import livelogo from "../application-insights.svg";
import postedImage1 from "../projectImages/posted2.png"
import pulaImage1 from "../projectImages/pula1.png"
import todoListImage from "../projectImages/Todolist.png"

function Projects() {
  let imgStyle = { maxWidth: "250px" };
  let smallImg = { maxWidth: "50px", maxHeight: "50px"};
  

  function importAll(r) { //A function to import all images in the technologiesIcon folder
    return r.keys().map(r);
  }
  
  const images = importAll(require.context('../technologiesIcons/', false, /\.(png|jpe?g|svg)$/));

  return (
    <div className="container">
      <h1>Projects</h1>
      <div className="container-cards">
       
          
          
            <div className="card" style={{ width: "18rem" }}>
              <h3 className="card-title">POST-ED</h3>
            <img src={postedImage1}  style={imgStyle} className="project-image" alt="..."/>
              <div className="card-body">
                
                <h6 className="card-subtitle mb-2 text-muted">
                   <img style={smallImg} src={images[12]} title="React" alt="React"></img> 
                   <img style={smallImg} src={images[10]} title="NodeJs" alt="NodeJs"></img>
                   <img style={smallImg} src={images[8]} title="MongoDB" alt="MongoDB"></img>
                   </h6>
                <p className="card-text">
                 A fullstack application where the user needs to  register to post stuff to a wall which is seen by all logged in users.
                </p>
                <a href="https://blogreactgeno.herokuapp.com" target="_blank" className="btn mr-2">
                  <i className="fas fa-link"></i> Visit Site
                </a>
                <a href="https://github.com/genosynth/blogReact" target="_blank" className="btn ">
                  <i className="fab fa-github"></i> Github
                </a>
              </div>
            </div>

            <div className="card" style={{ width: "18rem", height:"31.8rem"}}>
              <h3 className="card-title">TODOLIST</h3>
            <img src={todoListImage}  style={imgStyle} className="project-image" alt="..."/>
              <div className="card-body">
                
                <h6 className="card-subtitle mb-2 text-muted">
                   <img style={smallImg} src={images[12]} title="React" alt="React"></img> 
                   <img style={smallImg} src={images[10]} title="NodeJs" alt="NodeJs"></img>
                   <img style={smallImg} src={images[0]} title="Bootstrap" alt="Bootstrap"></img>
                   </h6>
                <p className="card-text">
                A to-do List application created with React that lets the user add,edit,delete and mark tasks as complete.
                </p>
                <a href="https://genosynth.github.io/todolistReact/" target="_blank" className="btn mr-2">
                  <i className="fas fa-link"></i> Visit Site
                </a>
                <a href="https://github.com/genosynth/todolistReact" target="_blank" className="btn ">
                  <i className="fab fa-github"></i> Github
                </a>
              </div>
            </div>
         

        
            <div className="card" style={{ width: "18rem"}}>
               <h3 className="card-title">POOLA</h3>
            <img src={pulaImage1} className="project-image" style={imgStyle} alt="..."/>
              <div className="card-body">
               
                <h6 className="card-subtitle mb-2 text-muted">
                <img style={smallImg} src={images[12]} title="React" alt="React"></img> 
                   <img style={smallImg} src={images[10]} title="NodeJs" alt="NodeJs"></img>
                   <img style={smallImg} src={images[8]} title="MongoDB" alt="MongoDB"></img>
                </h6>
                <p className="card-text">
                 A fullstack application where users register and log in while the administrator can start games and deal unique pool balls to each user.
                </p>
                <a href="https://pulagenju.herokuapp.com/" target="_blank" className="btn mr-2">
                  <i className="fas fa-link"></i> Visit Site
                </a>
                <a href="https://github.com/genosynth/pula" target="_blank" className="btn ">
                  <i className="fab fa-github"></i> Github
                </a>
              </div>
            </div>
          

          

      </div>
    </div>
  );
}

export default Projects;
