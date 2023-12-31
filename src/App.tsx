import React from "react"
import './styles/global.css';

// components
import Header from "./components/Header/Header";
import Route from "./navigation/Route/Route";

// pages
import Users from "./pages/Users/Users";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Error404 from "./pages/Error404/Error404";

import theme from "./themes/light";
import { ThemeProvider } from "@mui/material/styles";


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Route to="/404" element={<Error404 />} />
      <Route to="/" element={<Home />} />
      <Route to="/login" element={<Login />} />
      <Route to="/users" element={<Users />} />
    </ThemeProvider>
  );
};

export default App;
