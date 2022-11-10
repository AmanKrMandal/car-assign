import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Learn from "./page/Learn";
import Shop from "./page/Shop";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </>
  );
}
