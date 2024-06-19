import { getProcedures } from "../services/getProcedure";
import { useState, useEffect } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const List = () => {
  const [procedures, setProcedures] = useState([]);

  const getAllProcedures = async () => {
    const response = await getProcedures();
    const { procedures } = response.data;
    console.log(procedures);
    setProcedures(procedures);
  };

  useEffect(() => {
    getAllProcedures();
  }, []);

  const jsx = procedures.procedures.map((procedure) => {
    const { name, duration, category, image } = procedure;

    <Card>
      <CardMedia component="img" alt={name} height="140" image={image} />
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2">Duration: {duration}</Typography>
        <Typography variant="body2">Category: {category}</Typography>
      </CardContent>
    </Card>;
  });

  return (<>
    
    <div style={{ backgroundColor: "#f5f5f5", padding: "20px" }}>
      HELLO{jsx}
    </div>
  
  
  </>
  );
};

export default List;
