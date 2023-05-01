import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Budget from './components/pages/Budget';
import Home from './components/pages/Home';
import Navbar from './components/StyledNavbar/Navbar';
import CustomModal from './components/StyledModal/CustomModal';

function App() {
  // State for handling Modal Windows
  const [ modal, setModal ] = useState({
    name: '',
    visible: false,
    pages: 0,
    lang: 0
  })

  return (
    <div>
      <CustomModal 
        state={ modal }
        handler={ setModal }
      />
      <Navbar />
      <Routes>
          <Route path={'/'} element={ <Home /> } />
          <Route path={'/budget'} element={ <Budget modalState={ modal } handleModal={ setModal }/> } />
      </Routes> 
    </div>
  )
}

export default App;
