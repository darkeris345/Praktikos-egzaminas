const Procedure = require("../models/procedureModel");

exports.getAllProcedures = async (req, res) => {
    try {
        const procedures = await Procedure.find();
        res.status(200).json({
            status: "success",
            results: procedures.length,
            data: {
                procedures,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: "error",
            message: err.message,
        });
    }
};

exports.getProcedure = async (req, res) => {
    const procedure = await Procedure.findById(req.params.id);
    res.status(200).json({
        status: "success",
        data: {
            procedure,
        },
    });
}

exports.createProcedure = async (req, res) => {
    const newProcedure = await Procedure.create(req.body);
    res.status(201).json({
        status: "success",
        data: {
            procedure: newProcedure,
        },
    });
}

exports.editProcedure = async (req, res) => {
    const updatedProcedure = await Procedure.findByIdAndUpdate(
        req.params.id,
        req.body
    );
    res.status(200).json({
        status: "success",
        data: {
            procedure: updatedProcedure,
        },
    });
}


exports.deleteProcedure = async (req, res) => {
    const deletedProcedure = await Procedure.findByIdAndDelete(req.params.id);
    res.status(200).json({
        status: "success",
        data: {
            procedure: deletedProcedure,
        },
    });
}   

