import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Navbar from './Componets/Navbar';
import EmployeesNach from './Pages/EmployeesNach';
import LoginNach from './Pages/LoginNach';
import PageHome from './Pages/PageHome';
import UploadNach from './Pages/UploadNach';


function App() {
  return (
    <div className="container-can">
      <Navbar />
     <Routes>
      <Route path='/' element={ <PageHome /> } />
      <Route path='/login' element={ <LoginNach /> } />
      <Route path='/employees' element={ <EmployeesNach /> } />
      <Route path='/upload' element={ <UploadNach /> } />
      <Route path='*' element={ <PageHome /> }/>
     </Routes>
    </div>
  );
}

export default App;
