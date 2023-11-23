import "./App.css";
import "react-toastify/dist/ReactToastify.css";
//import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Signup from "./Pages/Login/Signup/Signup";
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import ProductList from "./Pages/Product List/ProductList";
import WishList from "./Pages/WishList/WishList";
import Header from "./Context/Header/header";
import Profile from "./Pages/Profile/Profile";
import RequiresAuth from "./Context/RequiresAuth/RequiresAuth";
import Checkout from "./Pages/Cart/Checkout/Checkout";
import IndividualPage from "./Pages/IndividualPage/IndividualPage";
import Footer from "./Context/Footer/footer";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="bottom-left"
        autoClose={700}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <Cart />
            </RequiresAuth>
          }
        />
        <Route
          path="/wishlist"
          element={
            <RequiresAuth>
              <WishList />
            </RequiresAuth>
          }
        />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/individualPage/:productId" element={<IndividualPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
