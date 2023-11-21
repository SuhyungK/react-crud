import './App.css';
import { Routes, Route } from "react-router-dom";
import Test2 from "./pages/Test2";
import LayoutPage from "./pages/LayoutPage";
import ProductPage from './pages/ProductPage';
import TotalProductItemPage from './pages/TotalProductItemPage';
import ProductItemPage from './pages/ProductItemPage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<TotalProductItemPage />} />
          <Route path="/category/:categoryName" element={<ProductItemPage />} />
        </Route>
      </Routes>
    </div>
  );
}


export default App;
