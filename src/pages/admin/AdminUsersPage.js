import UsersPageComponent from "./components/UsersPageComponent";

import axios from "axios";
const url = "https://product-api-252u.onrender.com"
const fetchUsers = async (abctrl) => {
    const { data } = await axios.get(`${url}/api/users`, {
        signal: abctrl.signal,
    });
    return data
}

const deleteUser = async (userId) => {
    const { data } = await axios.delete(`${url}/api/users/${userId}`);
    return data
}

const AdminUsersPage = () => {
    return <UsersPageComponent fetchUsers={fetchUsers} deleteUser={deleteUser} />;
};

export default AdminUsersPage;
