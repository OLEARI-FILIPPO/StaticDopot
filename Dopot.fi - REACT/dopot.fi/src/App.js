import { Route, Routes, Navigate, Router } from 'react-router-dom';

//Component
import Navbar from './UIComponent/Navbar';
import DefaultFooter from './UIComponent/DefaultFooter';

//Pages
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'

function App() {
  return (
    <div >
      <>
      <Navbar /*select={Router}*//>

      <Routes>
        
        <Route path='/' element={<Navigate replace to='/home' />}  />
        <Route path='/home' exact element={<Home />} />

        {/* Path non trovato */}
        <Route path='*' element={<NotFound />} />

      </Routes>

      {<DefaultFooter />}
    </>
    </div>
  );
}

export default App;
