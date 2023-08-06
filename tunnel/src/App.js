import './App.css';

import MiniDrawer from './MiniDrawer';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Jobs from './Jobs';
import CustomDrawer from './CustomDrawer';
import Hello1 from './pages/Hello1';
import Hello2 from './pages/Hello2';
import Hello3 from './pages/Hello3';

function App() {
  return (
      <BrowserRouter>
        <CustomDrawer />
        <Routes>
          <Route path="/Hello1" element={<Hello1 />} />
          <Route path="/Hello2" element={<Hello2 />} />
          <Route path="/Hello3" element={<Hello3 />} />
        </Routes>
      </BrowserRouter> 
    
  );
}

export default App;
