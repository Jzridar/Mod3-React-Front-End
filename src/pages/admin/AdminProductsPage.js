import ProductsPageComponent from "./components/ProductsPageComponent";

import axios from "axios";

const url = "https://product-api-252u.onrender.com"
const fetchProducts = async (abctrl) => {
    const { data } = await axios.get(`${url}/api/products/admin`, {
        signal: abctrl.signal,
    })
    return data;
}

const deleteProduct = async (productId) => {
    const { data } = await axios.delete(`/api/products/admin/${productId}`);
    return data
}

const AdminProductsPage = () => {
    return <ProductsPageComponent fetchProducts={fetchProducts} deleteProduct={deleteProduct} />
};

export default AdminProductsPage;
