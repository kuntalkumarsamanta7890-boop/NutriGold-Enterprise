import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Process } from "./pages/Process";
import { Products } from "./pages/Products";
import { WhyChooseUs } from "./pages/WhyChooseUs";
import { Gallery } from "./pages/Gallery";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "process", Component: Process },
      { path: "products", Component: Products },
      { path: "why-choose-us", Component: WhyChooseUs },
      { path: "gallery", Component: Gallery },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);