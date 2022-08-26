import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import AddBlog from "./pages/new/AddBlog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import BlogDetail from "./pages/new/Blog";
import Display from "./pages/new/Display";
import Auth from "./pages/new/Auth";
import LoginButton from "./components/Auth/LoginButton";
import LogoutButton from "./components/Auth/LogoutButton";
import Profile from "./components/Auth/Profile";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route index element={<Home />} />

            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
              <Route path="addblog" element={<AddBlog />} />
              <Route path="blog" element={<BlogDetail />} />
              <Route path="display" element={<Display />} />
              <Route path="Auth" element={<Auth />} />
              <Route path="login" element={<LoginButton />} />
              <Route path="logout" element={<LogoutButton />} />
              <Route path="profile" element={<Profile />} />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
