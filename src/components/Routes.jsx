import { Route, BrowserRouter, Routes } from "react-router-dom";
import LogIn from "../LogIn";
import SignUp from "../SignUp";
import Home from "../Home";
function appRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<LogIn />} />
          <Route path="Signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default appRoutes;
