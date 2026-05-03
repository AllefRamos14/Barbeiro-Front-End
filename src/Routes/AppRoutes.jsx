import { BrowserRouter, Route, Routes } from "react-router-dom";
import BarbershopLogin from "../components/Barbershoplogin /index.jsx";
import Admin from "../Pages/Admin/index.jsx";
import Home from "../Pages/Home/index.jsx";
import PrivateRoute from "../Routes/PrivateRoute";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<BarbershopLogin />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
