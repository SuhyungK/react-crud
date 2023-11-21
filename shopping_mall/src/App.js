import { Routes, Route } from "react-router-dom";
import Test from "./pages/Test";
import Test2 from "./pages/Test2";
import Layout from "./pages/Layout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Test />} />
          <Route path="/test2" element={<Test2 />} />
        </Route>
      </Routes>
    </div>
  );
}


export default App;
