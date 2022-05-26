import { Route, Routes, Navigate, Router } from 'react-router-dom';

//Component
import Navbar from './UIComponent/Navbar';
import DefaultFooter from './UIComponent/DefaultFooter';

//Pages
import Home from './Pages/Home'

function App() {
  return (
      <>
        <Navbar /*select={Router}*//>

        <Routes>
          
          <Route path='/' element={<Navigate replace to='/home' />}  />
          <Route path='/home' exact element={<Home />} />

        </Routes>

        {<DefaultFooter />}
      </>
  );
}

export default App;
