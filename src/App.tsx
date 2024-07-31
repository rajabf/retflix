import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteHeader from "./components/SiteHeader";
import TrendingMovies from "./pages/TrendingMovies";
import TrendingSeries from "./pages/TrendingSeries";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <SiteHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trendingMovies" element={<TrendingMovies />} />
        <Route path="/trendingSeries" element={<TrendingSeries />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
