import React, { useState } from 'react';
import NavTabs from './NavTabs';
// import Home from './pages/Home';
import About from './pages/aboutme';
 import Projects from './pages/projects';
 import Resume from './pages/resume';


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('aboutme');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    // if (currentPage === 'Home') {
    //   return <Home />;
    // }
    if (currentPage === 'aboutme') {
      return <About />;
    }
    if (currentPage === 'projects') {
      return <Projects />;
    }
    if (currentPage === 'resume') {
      return <Resume />;
    }
    // return <Resume />;
    
    
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
