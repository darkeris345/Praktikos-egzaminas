import { getProcedures } from "../services/getProcedure";
import { useState, useEffect } from 'react';

const List = () => {
    
    const [procedures, setProcedures] = useState([]);


    const getAllProcedures = async () => {
        const { data } = await getProcedures();
        setProcedures(data);
    }

    useEffect(() => {
        getAllProcedures()
    }, [])

    const jsx = procedures.map((procedure) => {

            <p>{procedure.name}</p>
    })

    return (
        <>
        {jsx}
        </>
    )
}


export default List