import React from "react";


function Home() {

    let imgStyle = {maxWidth:"60px"}
    
    function importAll(r) { //A function to import all images in the technologiesIcon folder
        return r.keys().map(r);
      }
      
      const images = importAll(require.context('../technologiesIcons/', false, /\.(png|jpe?g|svg)$/));

    
  return (
    <div className="container">
      
      <h1>Home</h1>
      <p>I'm a web developer that works with both front-end and back-end technologies such as the below. </p>
      <div className="container-home">
      <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Bootstrap</li>
          <li>React</li>
          <li>TypeScript</li>
          <li>NodeJs</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>MySQL</li>
          <li>Git</li>
          <li>Node Package Manager</li>
          <li>WebPack</li>
          <li>Jest</li>
          <li>HandleBars</li>
          
          


      </ul>
      
      <div  className="container-home" >
        <div> 
            <h2 style={{padding:"10px"}}>Front-End</h2>
            <img style={imgStyle} src={images[5]} title="HTML5" alt="HTML5"></img>
            <img style={imgStyle} src={images[1]} title="CSS3" alt="CSS3"></img>
            <img style={imgStyle} src={images[6]} title="Javascript" alt="Javascript"></img>
            <img style={imgStyle} src={images[0]} title="Bootstrap" alt="Bootstrap"></img>
            <img style={imgStyle} src={images[12]} title="React" alt="React"></img>
            <img style={imgStyle} src={images[13]} title="TypeScript" alt="TypeScript"></img>
        </div>
        
        <div>
            <h2 style={{padding:"10px"}}>Back-End</h2>
            <img style={imgStyle} src={images[10]} title="NodeJs" alt="NodeJs"></img>
            <img style={imgStyle} src={images[2]} title="Express" alt="Express"></img>
            <img style={imgStyle} src={images[8]} title="MongoDB" alt="MongoDB"></img>
            <img style={imgStyle} src={images[9]} title="MySQL" alt="MySQL"></img>
            
        </div>

        <div>  
            <h2 style={{padding:"10px"}}>Others</h2>
            <img style={imgStyle} src={images[3]} title="Git" alt="Git"></img>
            <img style={imgStyle} src={images[4]} title="Handlebars" alt="Handlebars"></img>
            <img style={imgStyle} src={images[7]} title="Jest" alt="Jest"></img>      
            <img style={imgStyle} src={images[11]} title="NPM" alt="Node Package Manager"></img>   
            
            <img style={imgStyle} src={images[14]} title="WebPack" alt="WebPack"></img>
        </div>  
      </div>
    </div>
    </div>
  );
}

export default Home;
