import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Store from "./components/Store";
import Error from "./components/Error";
import Navbar from "./components/shared/Navbar";
import ShoppingCartProvider from "./context/ShoppingCartContext.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import ForgetPass from "./components/ForgetPass.jsx";
import UserContextProvider from "./context/UserContext.jsx";
import RequiredAuthProvider from "./context/RequiredAuth.jsx";
function App() {
  return (
    <>
      <UserContextProvider>
        <ShoppingCartProvider>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <RequiredAuthProvider>
                  <Home />
                </RequiredAuthProvider>
              }
            >
              {" "}
            </Route>
            <Route
              path="/store"
              element={
                <RequiredAuthProvider>
                  <Store />
                </RequiredAuthProvider>
              }
            >
              {" "}
            </Route>

            <Route path="/signup" element={<Signup />}>
              {" "}
            </Route>
            <Route path="/login" element={<Login />}>
              {" "}
            </Route>
            <Route path="/forget-password" element={<ForgetPass />}>
              {" "}
            </Route>
            <Route path="*" element={<Error />}>
              {" "}
            </Route>
          </Routes>
        </ShoppingCartProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
