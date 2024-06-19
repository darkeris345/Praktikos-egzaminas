const express = require("express");
const procedureControler = require("../controllers/procedureController");
const authControler = require("../controllers/authController");

const router = express.Router();

const { getAllProcedures, getProcedure, createProcedure, editProcedure, deleteProcedure } = procedureControler;
const { restrictTo } = authControler;


router.route("/").get(getAllProcedures);
router.route("/:id").get(getProcedure).patch(restrictTo("admin"),editProcedure).delete(restrictTo("admin"),deleteProcedure);
router.route("/create").post(createProcedure);


module.exports = router;

