import CreateProductPageComponent from "./components/CreateProductPageComponent";
import axios from "axios";

const url = "https://product-api-252u.onrender.com"

const createProductApiRequest = async (formInputs) => {
  const { data } = await axios.post(`${url}/api/products/admin`, { ...formInputs });
  return data;
};

const AdminCreateProductPage = () => {

  return (
    <CreateProductPageComponent
      createProductApiRequest={createProductApiRequest}
    />
  );
};

export default AdminCreateProductPage;
