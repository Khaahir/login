import { Route, BrowserRouter, Routes } from "react-router-dom";
import LogIn from "../LogIn";
import SignUp from "../SignUp";
import Home from "../Home";
function appRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="Signup" element={<SignUp />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default appRoutes;
