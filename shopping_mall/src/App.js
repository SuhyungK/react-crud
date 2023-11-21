import './App.css';
import { Routes, Route } from "react-router-dom";
import Test2 from "./pages/Test2";
import LayoutPage from "./pages/LayoutPage";
import TotalProductPage from './pages/TotalProductPage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<TotalProductPage />} />
          <Route path="/test2" element={<Test2 />} />
        </Route>
      </Routes>
    </div>
  );
}


export default App;
