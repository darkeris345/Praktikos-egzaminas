import axios from "axios";
const url = import.meta.env.VITE_API_URL;

export const getProcedures = async () => {
    const response = await axios.get(url);

    return response.data;
}
