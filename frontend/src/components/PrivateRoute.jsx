import { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import checkAuthentication from "./CheckAuthentication";
// import Header from "./components/header/Header";
import Header from "./header/Header";

const PrivateRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state to wait for the auth check
  const navigate = useNavigate();
  useEffect(() => {
    const verifyAuth = async () => {
      const auth = await checkAuthentication();
      setIsAuthenticated(auth);
      setLoading(false); // Set loading to false after checking
    };

    verifyAuth();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Optionally, show a loading spinner while verifying
  }

  return isAuthenticated ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    // <navigate to="/account" />
    navigate("/account")
  );
};

export default PrivateRoute;
