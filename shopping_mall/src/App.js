import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import LayoutPage from "./pages/LayoutPage";
import ProductPage from './pages/ProductPage';
import TotalProductItemPage from './pages/TotalProductItemPage';
import ProductItemPage from './pages/ProductItemPage';
import CartPage from './pages/CartPage';
import ProductItemDetailPage from './pages/ProductItemDetailPage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<Navigate to="/category" replace />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/item/:id" element={<ProductItemDetailPage />} />
          <Route path="/category" element={<ProductPage />}>
            <Route index element={<TotalProductItemPage />} />
            <Route path=":categoryName" element={<ProductItemPage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}


export default App;
