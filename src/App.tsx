import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import AHOMEPAGE from "./pages/AHOMEPAGE";
import APress from "./pages/APress";
import ABio from "./pages/ABio";
import AMAP from "./pages/AMAP";
import DesktopHomePage1920px from "./pages/DesktopHomePage1920px";

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
      case "/a-press":
        title = "";
        metaDescription = "";
        break;
      case "/a-bio":
        title = "";
        metaDescription = "";
        break;
      case "/a-map":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-home-page-1920px":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<AHOMEPAGE />} />
      <Route path="/a-press" element={<APress />} />
      <Route path="/a-bio" element={<ABio />} />
      <Route path="/a-map" element={<AMAP />} />
      <Route
        path="/desktop-home-page-1920px"
        element={<DesktopHomePage1920px />}
      />
    </Routes>
  );
}
export default App;