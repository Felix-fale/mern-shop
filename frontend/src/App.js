import "./App.css";
import {
  Routes,
  Route,
  useLocation,
  Navigate,
  useNavigate,
} from "react-router-dom";
import loaderImg from "./assets/spinner.jpg";
import {
  LoginPage,
  SignupPage,
  ActivationPage,
  Homepage,
  ProductsPage,
  BestSellingPage,
  EventsPage,
  FAQPage,
  ProductDetailsPage,
  ProfilePage,
  CheckoutPage,
  PaymentPage,
  ShopCreatePage,
  SellerActivationPage,
  ShopLoginPage,
} from "./Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useLayoutEffect } from "react";
import Store from "./redux/store";
import { loadSeller, loadUser } from "./redux/actions/user";
import { useSelector } from "react-redux";
import PretectedRoute from "./ProtectedRoute";

function App() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { loading, isAuthenticated } = useSelector((state) => state.user);
  const seller = useSelector((state) => state.seller);
  // const navigate = useNavigate();

  // part 1: 2:35m "User Activation with Frontent Implementation"
  //3:52:02 debut setup redux
  useEffect(() => {
    Store.dispatch(loadUser());
    Store.dispatch(loadSeller());
  }, []);
  // if (isSeller === true) {
  //   // navigate("/seller/${seller._id");
  //   return <Navigate to="/shop" replace />;
  // }

  console.log(seller);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <img src={loaderImg} alt="Loading..." className="h-16 w-16" />
        </div>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignupPage />} />
            <Route
              path="/activation/:activation_token"
              element={<ActivationPage />}
            />
            <Route
              path="/seller/activation/:activation_token"
              element={<SellerActivationPage />}
            />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:name" element={<ProductDetailsPage />} />
            <Route path="/best-selling" element={<BestSellingPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route
              path="/profile"
              element={
                <PretectedRoute isAuthenticated={isAuthenticated}>
                  <ProfilePage />
                </PretectedRoute>
              }
            />
            <Route
              path="/checkout"
              element={
                <PretectedRoute isAuthenticated={isAuthenticated}>
                  <CheckoutPage />
                </PretectedRoute>
              }
            />
            <Route path="/shop-create" element={<ShopCreatePage />} />
            <Route path="/shop-login" element={<ShopLoginPage />} />
          </Routes>
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </>
      )}
    </>
  );
}

export default App;
