import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import CompanyPage from "./pages/CompanyPage";
import InternshipPage from "./pages/InternshipPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/internship" element={<InternshipPage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
