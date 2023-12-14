import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/main.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import { ScrollToTop } from "./utils/scrollToTop.ts";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ScrollToTop />
    <Navbar />
    <App />
    <Footer />
  </BrowserRouter>,
);
