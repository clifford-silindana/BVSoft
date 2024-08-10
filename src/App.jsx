import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";

//page import
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import AccessControl from './pages/AccessControl';

import backgroundImage from './assets/images/Fourways.jpg';


//component imports


function App() {

  return (
    <div>
          <BrowserRouter>

            <Routes>

              {/* <Route path="" element={<Landing />} />
              <Route path="login" element={<Login />} /> */}
      
              <Route path = "home/" element = {< Home />} >
                  <Route path="" element={<Dashboard />} />
                  <Route path="access-control/" element={<AccessControl />} />
                  {/* <Route path="new-ticket/" element={<CreateTicket />} />  */}
              </Route>

            </Routes>

          </BrowserRouter>
    </div>
  )
}

export default App
