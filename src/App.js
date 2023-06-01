import { BrowserRouter, Routes, Route } from "react-router-dom";

// components:
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
 //Admin pages
import AdminUsersPage from "./pages/admin/AdminUsersPage";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import AdminCreateProductPage from "./pages/admin/AdminCreateProductPage";
import AdminEditProductPage from "./pages/admin/AdminEditProductPage";


function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      
      {/* All the routes are defined here */}
      <Routes>
        <Route path="/admin/users" element={<AdminUsersPage />} />
        <Route path="/admin/edit-user/:id" element={<AdminEditUserPage />} />
        <Route path="/admin/products" element={<AdminProductsPage />} />
        <Route
          path="/admin/create-new-product"
          element={<AdminCreateProductPage />}
        />
        <Route
          path="/admin/edit-product/:id"
          element={<AdminEditProductPage />}
        />

      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
