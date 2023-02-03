//Layouts
import Home from "../pages/Home";
import Single from "../pages/Single";
import Category from "../pages/Category";

const publicRoutes = [
  { path: "caerux-wp-react/", component: Home },
  { path: "/caerux-wp-react/single", component: Single },
  { path: "/caerux-wp-react/category", component: Category },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
