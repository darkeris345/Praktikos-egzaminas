import axios from "axios";
const url = import.meta.env.VITE_API_URL;

export const getProcedures = async () => {
    const { data } = await axios.get(url);

    return data;
}
