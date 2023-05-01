import { Route, Routes } from 'react-router-dom';
import Budget from './components/pages/Budget';
import Home from './components/pages/Home';
import Navbar from './components/Styled-Navbar/Navbar';
function App() {
  return (
    <div>
    <Navbar />
    <Routes>
        <Route path={'/'} element={ <Home /> } />
        <Route path={'/budget'} element={ <Budget /> } />
    </Routes> 
    </div>
  )
}

export default App;
