import { Route, Routes } from "react-router-dom";
import Categories from "./pages/Categories";
import Home from "./routes/Home";
import Navigation from "./routes/Navigation";
import Shop from "./routes/Shop";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
