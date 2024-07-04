import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import DesktopHomePage1920px from "./pages/DesktopHomePage1920px";
import DesktopPress1920px from "./pages/DesktopPress1920px";
import DesktopBio1920px from "./pages/DesktopBio1920px";
import DesktopMap1920px from "./pages/DesktopMap1920px";

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
      case "/desktop-press-1920px":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-bio-1920px":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-map-1920px":
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
      <Route path="/" element={<DesktopHomePage1920px />} />
      <Route path="/desktop-press-1920px" element={<DesktopPress1920px />} />
      <Route path="/desktop-bio-1920px" element={<DesktopBio1920px />} />
      <Route path="/desktop-map-1920px" element={<DesktopMap1920px />} />
    </Routes>
  );
}
export default App;
