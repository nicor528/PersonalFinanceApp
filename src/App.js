import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import Gastos from './pages/Gastos'
import Ingresos from './pages/Ingresos'
import { BrowserRouter ,Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>} />
      <Route path='/Gastos' element={<Gastos />} />
      <Route path='/Ingresos' element={<Ingresos/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
