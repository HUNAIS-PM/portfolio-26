import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
} from "react-router-dom";
import Footer from "./components/layouts/Footer/Footer";
import FooterBottom from "./components/layouts/Footer/FooterBottom";
import Header from "./components/layouts/Header/Header";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Skills from "./pages/Skills";
import Resume from "./pages/Resume";
import Poster from "./pages/Poster";
import MenuCard from "./pages/MenuCard";
import MenuCard2 from "./pages/MenuCard2";

const Layout = () => {
  React.useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <div className="font-bodyFont no-select">
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
      <FooterBottom />
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/hire-me" element={<Contact />} />
      <Route path="/works" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/services" element={<Services />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/poster" element={<Poster />} />
      <Route path="/menucard" element={<MenuCard />} />
      <Route path="/menucard2" element={<MenuCard2 />} />
      <Route path="*" element={<Home />} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
