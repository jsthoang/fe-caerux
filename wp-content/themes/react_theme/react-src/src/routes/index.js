import { route } from "./route";

//Layouts
import Home from "../pages/Home";
import Single from "../pages/Single";
import Category from "../pages/Category";
import Contact from "../pages/Contact";

const publicRoutes = [
  { path: route.index, component: Home },
  { path: route.single, component: Single },
  { path: route.category, component: Category },
  { path: route.contact, component: Contact },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
