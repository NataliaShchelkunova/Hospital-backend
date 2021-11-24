const ReceptionData = require("../../models/reception/reception");

module.exports.createNewReception = (req, res) => {
  const body = req.body;
  try {
    if (
      body.hasOwnProperty("namePatient") &&
      body.hasOwnProperty("doctorName") &&
      body.hasOwnProperty("newDate") &&
      body.hasOwnProperty("complaints")
    ) {
      const newReception = new ReceptionData(body);
      newReception
        .save()
        .then((result) => {
          res.send({ data: result });
        })
        .catch((error) => {
          res.status(404).send("Error, field can't be empty");
        });
    } else {
      res.status(404).send(" Error, check all field");
    }
  } catch (error) {
    res.status(404).send("Error, create new reception is crashed");
  }
};

module.exports.getAllReception = (req, res) => {
  try {
    ReceptionData.find().then((result) => {
      res.send({ data: result });
    });
  } catch (error) {
    res.status(404).send("Error, you can't get all reception");
  }
};
