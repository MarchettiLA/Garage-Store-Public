import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './views/home/Home.jsx';
import Login from './views/login/Login.jsx';
import Register from './views/register/Register.jsx'
import VerMas from './views/home/component/VerMas.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= { <Home/> }></Route>
        <Route path='/login' element= { <Login/>}></Route>
        <Route path='/register' element= { <Register/> }></Route>
        <Route path='/vermas' element= { <VerMas/> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;