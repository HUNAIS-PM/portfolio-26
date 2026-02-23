import { useEffect, lazy, Suspense } from "react";
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

// 🔥 Lazy Loaded Pages (Code Splitting)
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Projects = lazy(() => import("./pages/Projects"));
const Services = lazy(() => import("./pages/Services"));
const Skills = lazy(() => import("./pages/Skills"));
const Resume = lazy(() => import("./pages/Resume"));
const Poster = lazy(() => import("./pages/Poster"));
const MenuCard = lazy(() => import("./pages/MenuCard"));
const MenuCard2 = lazy(() => import("./pages/MenuCard2"));

const Layout = () => {
  useEffect(() => {
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
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <Outlet />
      </Suspense>
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
  return <RouterProvider router={router} />;
}

export default App;
