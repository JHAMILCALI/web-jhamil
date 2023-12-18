import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home';

import { Videos } from './Components/Videos';
import { Default } from './Components/Default';
import NavBar from './Components/NavBar';
function App() {
  return (
    <div>
      <h1>Routes</h1>
      
     <Routes>
        <Route path="/" element={<NavBar/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="videos" element={<Videos/>}/>
        <Route path="*" element={<Default/>}/>
        </Route>
     </Routes>
    </div>
  );
}

export default App;
