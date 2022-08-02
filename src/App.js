import Header from "./Components/Home/Header";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import Datas from "./Components/Data/Datas";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Datas />} />
        <Route path="/:id" element={<Datas/>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
