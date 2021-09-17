//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <header>
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container-fluid">
    <h3>Arnold Lee</h3>
      <div class="navbar" id="navbarExample01">
        
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item active">
            <a class="nav-link" aria-current="page" href="#">About me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Resume</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
  <div class="p-5 text-center bg-light">
    <h1 class="mb-3">About Me</h1>
    <h4 class="mb-3">I am a 24 year old veteran currently a Junior at the University of Texas at San Antonio and a student in the UTSA Coding Bootcamp.
</h4>
    {/* <a class="btn btn-primary" href="" role="button">Call to action</a> */}
  </div>

</header>
  );
}

export default App;
