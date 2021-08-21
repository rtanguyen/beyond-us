import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
// import SignupForm from './components/SignupForm';


function App() {
  const [pages] = useState([
    {name: 'Our Mission'},
    {name: 'How to Help'},
    {name: 'Join the Cause'},
  ]);

  const [currentPage,setCurrentPage] = useState(pages[0]);
  return (
   <div>
     <Nav
      pages={pages}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}>
     </Nav>
     <main>
    
     </main>
   </div>
  );
}

export default App;
