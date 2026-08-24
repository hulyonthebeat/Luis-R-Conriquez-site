import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const isShopPlaceholder =
  window.location.hostname.toLowerCase() === "shop.luisrconriquezofficial.com";

createRoot(document.getElementById("root")!).render(
  isShopPlaceholder ? null : <App />,
);
