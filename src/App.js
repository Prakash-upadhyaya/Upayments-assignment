import { BrowserRouter, Route, Routes } from "react-router-dom";
import GetProducts from "./Components/GetProducts";
import Navbar from "./Components/Pages/Navbar";
import Details from "./Components/Pages/Details";
import Favourite from "./Components/Pages/Favourite";
import LoadProdcuts from "./Components/Pages/LoadProdcuts";
import AddProducts from "./Components/Pages/AddProducts";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<LoadProdcuts />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/fav" element={<Favourite />} />
            <Route path="/add" element={<AddProducts />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <GetProducts />
    </>
  );
}

export default App;
