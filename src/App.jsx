
import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import Purchases from './pages/Purchases';
import ProtectedRoutes from './components/ProtectedRoutes';


function App() {
  return (
    <HashRouter>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='/product/:id' element= {<ProductDetail/>}/>
          <Route path='/login' element= {<Login/>}/>
          <Route element={<ProtectedRoutes/>}>
            <Route path='/purchases' element= {<Purchases/>}/>
          </Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App