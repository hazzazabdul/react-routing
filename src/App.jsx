/* eslint-disable react/no-unescaped-entities */
import { Outlet } from "react-router-dom";
import NavBar from "./Components/Navbar/NavBar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Outlet/>
      <Footer/>
    </>
  );
}

export default App;
