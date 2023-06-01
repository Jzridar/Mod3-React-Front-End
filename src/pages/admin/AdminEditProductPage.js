import EditProductPageComponent from "./components/EditProductPageComponent";
import axios from 'axios'
const url = "https://product-api-252u.onrender.com"
const fetchProduct = async (productId) => {
    const { data } = await axios.get(`${url}/api/products/get-one/${productId}`);
    return data;
}

const updateProductApiRequest = async (productId, formInputs) => {
    const { data } = await axios.put(`${url}/api/products/admin/${productId}`, { ...formInputs });
    return data;
}


const AdminEditProductPage = () => {
    return <EditProductPageComponent fetchProduct={fetchProduct} updateProductApiRequest={updateProductApiRequest} />;
};

export default AdminEditProductPage;
