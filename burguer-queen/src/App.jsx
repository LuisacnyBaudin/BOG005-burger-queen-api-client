import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Admin from "./pages/admin";
import { Products } from "./pages/products";
import Waiter from "./pages/waiter";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Admin />}/>
        <Route path="/products" element={<Products />} />
        <Route path="/waiter" element={<Waiter />} />
      </Routes>
    </div>
  );
}

export default App;
