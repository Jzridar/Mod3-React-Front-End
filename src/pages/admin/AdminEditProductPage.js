import EditProductPageComponent from "./components/EditProductPageComponent";
import axios from 'axios'

const fetchProduct = async (productId) => {
    const { data } = await axios.get(`/api/products/get-one/${productId}`);
    return data;
}

const updateProductApiRequest = async (productId, formInputs) => {
    const { data } = await axios.put(`/api/products/admin/${productId}`, { ...formInputs });
    return data;
}


const AdminEditProductPage = () => {
   return <EditProductPageComponent  fetchProduct={fetchProduct} updateProductApiRequest={updateProductApiRequest}/>;
};

export default AdminEditProductPage;
