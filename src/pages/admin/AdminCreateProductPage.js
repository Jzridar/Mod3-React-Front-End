import CreateProductPageComponent from "./components/CreateProductPageComponent";
import axios from "axios";

const createProductApiRequest = async (formInputs) => {
  const { data } = await axios.post(`/api/products/admin`, { ...formInputs });
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
