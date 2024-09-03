import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./components/Home/HomePage";
import AboutUs from "./components/AboutUs/AboutUs";
import FeaturesPage from "./components/Features/FeaturesPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/features" element={<FeaturesPage />} />
          {/* Add additional routes here */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
