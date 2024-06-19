import axios from "axios";
const url = import.meta.env.VITE_API_URL;



export const deleteProcedure = async (id) => {

    const response = await axios.delete(`${url}/${id}`);
    
    return response.data;
}

export const addProcedure = async (procedure) => {
    const response = await axios.post(url, procedure);
    return response.data;
}

export const getProcedures = async () => {
    const response = await axios.get(url);

    return response.data;
}

export const updateProcedure = async (id, procedure) => {

    const response = await axios.put(`${url}/${id}`, procedure);

    return response.data;

}

