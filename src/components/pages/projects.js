import React from 'react';

export default function Projects() {
  return (
    //  <div>
    //    hi2
    //  </div>
<div class="album py-5 bg-light" id="projects">   
    <div class="container">
      <div>
        <h1 >Projects</h1>
      </div>
      <div class="row">   
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
             <div class="card-body">
              <h5>Order Tracking Database</h5>
              <p class="card-text">This website is a order database where a provider can order and track glasses/ contacts for patients and then send out a text messages to keep patients up to date with the status of their orders</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary"><a href="https://github.com/gmunoz94/project2">Github Repo</a></button>
                  <button type="button" class="btn btn-sm btn-outline-secondary"><a href="https://imagine-drive.herokuapp.com/">Deployed Website</a></button>
                </div>
              
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
             <div class="card-body">
              <h5>Coding Bookmarks</h5>
              <p class="card-text">This is a website where you can search for help for coding and then being able to bookmark the code for future use. We utilize the stackoverflow api and search through it to be able to find the help we are looking for. We utilize the link preview api to show a brief description and a clickable url to view the searched topic.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary"><a href="https://github.com/Arnoldlee60/Coding-Bookmarks" >Github Repo</a></button>
                 <button type="button" class="btn btn-sm btn-outline-secondary"><a href="https://arnoldlee60.github.io/Coding-Bookmarks/" >Deployed Website</a></button> 
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
            <div class="card-body">
              <h5>Weather Tracking App</h5>
              <p class="card-text">This website asks you for a location and displays weather information about that location</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary"><a href="https://github.com/Arnoldlee60/WeatherDashboard" >Github Repo</a></button>
                 <button type="button" class="btn btn-sm btn-outline-secondary"><a href="https://arnoldlee60.github.io/WeatherDashboard/" >Deployed Website</a></button> 
                </div>
                
              </div>
            </div>
          </div>
        </div>
        
          </div>
        </div>   
        
        
      </div>

  );
}




