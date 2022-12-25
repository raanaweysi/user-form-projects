import Navbar from "./../navbar";
import { Route, Routes, Navigate } from "react-router-dom";
// import Home from "./../home";
import Register from "./../regisetr";
import User from "../user";
import Users from "./users";
import NotFound from "../not-found";
// import Lodingfunctional from "../loginclassbase";
import Login from "./login";
import Home from "../home";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <Routes>
          <Route path="/users/:id" element={<User />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/users" element={<Users />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route
            path="/redirect"
            element={<Navigate replace to="/not-found" />}
          />
          <Route path="/costomers" element={<Navigate replace to="/users" />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
