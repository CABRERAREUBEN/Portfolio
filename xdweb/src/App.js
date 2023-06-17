import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePhone from "./pages/HomePhone";
import AuthenticateTablet from "./pages/AuthenticateTablet";
import UserGuideTablet from "./pages/UserGuideTablet";
import HomeTablet from "./pages/HomeTablet";
import AuthenticateDesktop from "./pages/AuthenticateDesktop";
import UserGuideDesktop from "./pages/UserGuideDesktop";
import HomeDesktop from "./pages/HomeDesktop";
import PopupWindow from "./pages/PopupWindow";
import PopupWindow2 from "./pages/PopupWindow2";
import PopupWindow3 from "./pages/PopupWindow3";
import { useEffect } from "react";

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
      case "/authenticate-tablet":
        title = "";
        metaDescription = "";
        break;
      case "/user-guide-tablet":
        title = "";
        metaDescription = "";
        break;
      case "/home-tablet":
        title = "";
        metaDescription = "";
        break;
      case "/authenticate-desktop":
        title = "";
        metaDescription = "";
        break;
      case "/user-guide-desktop":
        title = "";
        metaDescription = "";
        break;
      case "/home-desktop":
        title = "";
        metaDescription = "";
        break;
      case "/popup-window":
        title = "";
        metaDescription = "";
        break;
      case "/popup-window1":
        title = "";
        metaDescription = "";
        break;
      case "/popup-window2":
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
      <Route path="/" element={<HomeDesktop />} />
      <Route path="/authenticate-tablet" element={<AuthenticateTablet />} />
      <Route path="/user-guide-tablet" element={<UserGuideTablet />} />
      <Route path="/home-tablet" element={<HomeTablet />} />
      <Route path="/authenticate-desktop" element={<AuthenticateDesktop />} />
      <Route path="/user-guide-desktop" element={<UserGuideDesktop />} />
      <Route path="/home-desktop" element={<HomeDesktop />} />
      <Route path="/popup-window" element={<PopupWindow />} />
      <Route path="/popup-window1" element={<PopupWindow2 />} />
      <Route path="/popup-window2" element={<PopupWindow3 />} />
    </Routes>
  );
}
export default App;
