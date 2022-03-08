import './App.css';
import { Home } from './components/Home';
import { Route, Routes } from 'react-router-dom';
import { Cart } from './components/Cart';
import { Register } from './components/Register';
import { ThankYou } from './components/ThankYou';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path={"/"} element={<Home />}/>
      <Route path={"/cart"} element={<Cart />} />
      <Route path={"/register"} element={<Register />} />
      <Route path={"/thankyou"} element={<ThankYou />} />
      <Route Path={"*"} element={<h1>Page not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
