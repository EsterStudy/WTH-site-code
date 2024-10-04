import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import AuthLogIn from "./pages/auth-log-in";
//import UIKitCard from "./pages/u-i-kit-card";
import MainPage from "./pages/main-page";
import Catalog from "./pages/catalog";
import ProductCardDetails from "./pages/product-card-details";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/uikit-card":
        title = "";
        metaDescription = "";
        break;
      case "/main-page":
        title = "";
        metaDescription = "";
        break;
      case "/catalog":
        title = "";
        metaDescription = "";
        break;
      case "/product-card-details":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<AuthLogIn />} />
      {/* <Route path="/uikit-card" element={<UIKitCard />} /> */}
      <Route path="/main-page" element={<MainPage />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/product-card-details" element={<ProductCardDetails />} />
    </Routes>
  );
}
export default App;
