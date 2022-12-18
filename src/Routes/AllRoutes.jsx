import { Route, Routes } from "react-router-dom";
import BeautyProducts from "../Components/Pages/BeautyProducts";
import LandingPage from "../Components/Pages/LandingPage";
import LoginPage from "../Components/Pages/LoginPage";
import Registration from "../Components/Pages/Registration";
import PrivateRoute from "./PrivateRoute";
function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/products"
          element={
            <PrivateRoute>
              <BeautyProducts />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default AllRoutes;
