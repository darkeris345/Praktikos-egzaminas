import { getProcedures } from "../services/getProcedure";
import { addProcedure, updateProcedure, deleteProcedure } from "../services/procedures";
import { useState, useEffect } from "react";
import { Card, CardContent, CardMedia, Typography, Grid, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import Header from "./Header";
import { getLogedInUser } from "../utils/auth/authenticate";

const Procedures = () => {
  const [procedures, setProcedures] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogData, setDialogData] = useState({ name: '', duration: '', category: '', image: '', id: null });

  const user = getLogedInUser();

  console.log(user);

  const getAllProcedures = async () => {
    try {
      const response = await getProcedures();
      const { procedures } = response.data;
      console.log(procedures);
      setProcedures(procedures);
    } catch (error) {
      console.error("Failed to fetch procedures", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteProcedure(id);
      getAllProcedures();
    } catch (error) {
      console.error("Failed to delete procedure", error);
    }
  };

  const handleDialogOpen = (procedure = { name: '', duration: '', category: '', image: '', id: null }) => {
    setDialogData(procedure);
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setDialogData({ name: '', duration: '', category: '', image: '', id: null });
  };

  const handleSave = async () => {
    const { id, name, duration, category, image } = dialogData;
    try {
      if (id) {
        await updateProcedure(id, { name, duration, category, image });
      } else {
        await addProcedure({ name, duration, category, image });
      }
      getAllProcedures();
      handleDialogClose();
    } catch (error) {
      console.error("Failed to save procedure", error);
    }
  };

  useEffect(() => {
    getAllProcedures();
  }, []);

  return (
    <>
      <Header />
      {user.data.role === "admin" && (
        <Button variant="contained" color="primary" onClick={() => handleDialogOpen()}>
          Add Procedure
        </Button>
      )}
      <Grid container spacing={2}>
        {procedures.map((procedure, index) => {
          const { id, name, duration, category, image } = procedure;
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card>
                <CardMedia component="img" alt={name} height="240" image={image} />
                <CardContent>
                  <Typography variant="h6">{name}</Typography>
                  <Typography variant="body2">Duration: {duration}</Typography>
                  <Typography variant="body2">Category: {category}</Typography>
                  {user.data.role === "admin" && (
                    <>
                      <Button variant="contained" color="secondary" onClick={() => handleDialogOpen(procedure)}>
                        Edit
                      </Button>
                      <Button variant="contained" color="error" onClick={() => handleDelete(id)}>
                        Delete
                      </Button>
                    </>
                  )}
                  {user.data.role === "user" && (
                    <Button variant="contained" color="primary">
                      Reserve
                    </Button>
                  )}
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>{dialogData.id ? 'Edit Procedure' : 'Add Procedure'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {dialogData.id ? 'Edit the details of the procedure.' : 'Fill in the details of the new procedure.'}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            value={dialogData.name}
            onChange={(e) => setDialogData({ ...dialogData, name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Duration"
            type="text"
            fullWidth
            value={dialogData.duration}
            onChange={(e) => setDialogData({ ...dialogData, duration: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Category"
            type="text"
            fullWidth
            value={dialogData.category}
            onChange={(e) => setDialogData({ ...dialogData, category: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Image URL"
            type="text"
            fullWidth
            value={dialogData.image}
            onChange={(e) => setDialogData({ ...dialogData, image: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Procedures;