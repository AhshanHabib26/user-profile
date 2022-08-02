import Header from "./Components/Home/Header";
import Home from "./Components/Home/Home";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <Header />
      <Home/>
      <ToastContainer/>
    </div>
  );
}

export default App;
