import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./LogIn.css";
import "./SignUp.css";
import Routes from "./components/Routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Routes />
  </StrictMode>
);
