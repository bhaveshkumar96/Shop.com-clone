import { Route, Routes } from "react-router-dom";
import BeautyProducts from "../Components/Pages/BeautyProducts";
import BrandCardPage from "../Components/Pages/BrandCardPage";
import LandingPage from "../Components/Pages/LandingPage";
import LoginPage from "../Components/Pages/LoginPage";
import SingleProductPage from "../Components/Pages/SingleProductPage";
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
        <Route
          path="/singleitem/:id"
          element={
            <PrivateRoute>
              <SingleProductPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/brands"
          element={
            <PrivateRoute>
              <BrandCardPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default AllRoutes;
