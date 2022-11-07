import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Hotel from "./pages/hotels/hotel";
import List from "./pages/list/list";
import Login from "./pages/login/login";
import Signup from "./pages/signup/Signup";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
