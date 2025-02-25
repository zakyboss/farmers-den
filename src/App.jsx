import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import UsersContext from "./contexts/UsersContext";
import ProductsContext from "./contexts/ProductsContext";
function App() {
  return (
    <UsersContext>
      <ProductsContext>
        <BrowserRouter>
          <Routes>
            <Route index element={<Login />} />
            <Route path="/home" element={<Home />}>
              <Route path="cart" element={<Cart />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ProductsContext>
    </UsersContext>
  );
}

export default App;
