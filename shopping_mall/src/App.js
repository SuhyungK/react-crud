import './App.css';
import { Routes, Route } from "react-router-dom";
import Test2 from "./pages/Test2";
import Layout from "./pages/Layout";
import TotalProductPage from './pages/TotalProductPage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TotalProductPage />} />
          <Route path="/test2" element={<Test2 />} />
        </Route>
      </Routes>
    </div>
  );
}


export default App;
