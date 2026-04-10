import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FavoritesProvider } from "./context/FavoritesContext";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import Catalog from "./pages/Catalog";
import Contact from "./pages/Contact";
import Delivery from "./pages/Delivery";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <FavoritesProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="product/:slug" element={<ProductDetail />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="about" element={<About />} />
            <Route path="delivery" element={<Delivery />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </FavoritesProvider>
    </BrowserRouter>
  );
}
