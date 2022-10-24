import axios from "axios";
import {
  BrowserRouter,
  Route,
  Routes,  
} from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from "./component/Nav";
import About from "./pages/About";
import Home from "./pages/Home";


function App() {

  const fetchBackend = async () =>{
    const res = await axios.get('/api');
    setBackendData(res.data);
  }
  useEffect(() => {
    fetchBackend();
  }, [])

  const [backendData, setBackendData] = useState(null)
  console.log(backendData);
  return (  
    <div className="">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={ <Home/>} />
          <Route path="/about" element={ <About/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
