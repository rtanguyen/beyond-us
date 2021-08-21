import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';




function App() {
  const [pages] = useState([
    {name: 'Our Mission'},
    {name: 'How to Help'},
    {name: 'Join the Cause'},
  ]);

  const [currentPage,setCurrentPage] = useState(pages[0]);
  return (
   <div>
     <div>
     <Nav
      pages={pages}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}>
     </Nav>
     </div>
     <main>
      
     </main>
   </div>
  );
}

export default App;
