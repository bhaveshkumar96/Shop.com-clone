import { AuthContext } from "../Components/Context/AuthContext";
import { useContext } from "react";
import LoginPage from "../Components/Pages/LoginPage";
import { Navigate } from "react-router-dom";
function PrivateRoute({children}){
const {isAuth} = useContext(AuthContext)

if (!isAuth) {
    return <Navigate to="/login" />;
  }
    
    return children
}

export default PrivateRoute;