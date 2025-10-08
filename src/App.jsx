import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import Services from "./pages/Services";
import NotFoundPage from "./pages/NotFoundPage";
import ServicePage from "./pages/ServicePage";
import Contact from "./pages/Contact";
import About from "./pages/About";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OurWorks from "./components/OurWorks";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      {/* <Route path='/services' element={<Services />} /> */}
      <Route path='/services/:id' element={<ServicePage />} />    
      <Route path='/contact' element={<Contact />} />    
      <Route path='/about' element={<About />} />

      <Route path='*' element={<NotFoundPage />} />

    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
