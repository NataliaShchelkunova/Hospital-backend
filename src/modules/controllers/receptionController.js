const ReceptionData = require("../../models/reception/reception");
const secret = process.env.secret;
const jwt = require("jsonwebtoken");

module.exports.createNewReception = async (req, res) => {
  const { token } = req.headers;

  const body = req.body;
  if (!token) {
    res.status(404).send("Error");
  }
  try {
    const infoForUser = await jwt.verify(token, secret);
    if (
      body.hasOwnProperty("namePatient") &&
      body.hasOwnProperty("doctorName") &&
      body.hasOwnProperty("newDate") &&
      body.hasOwnProperty("complaints")
    ) {
      body.userId = infoForUser.id;
      const newReception = new ReceptionData(body);
      newReception
        .save()
        .then((result) => {
          res.send({ data: result });
        })
        .catch((error) => {
          res.status(404).send("Error");
        });
    } else {
      res.status(404).send(" Error, check all field");
    }
  } catch (error) {
    res.status(404).send("Error, create new reception is crashed");
  }
};

module.exports.getAllReception = async (req, res) => {
  const { token } = req.headers;
  if (!token) {
    res.status(404).send("Error");
  }
  try {
    const infoForUser = await jwt.verify(token, secret);
    if (infoForUser) {
      ReceptionData.find({ userId: infoForUser.id })
        .then((result) => {
          res.send({ data: result });
        })
        .catch((error) => {
          res.status(404).send("Error");
        });
    }
  } catch (error) {
    res.status(404).send("Error, you can't get all reception");
  }
};

module.exports.deleteOneReception = async (req, res) => {
  const id = req.query._id;
  if (req.query._id) {
    ReceptionData.deleteOne({ _id: id }).then((result) => {
      ReceptionData.find().then((result) => {
        res.send({ data: result });
      });
    });
  } else {
    res.status(404).send("Error");
  }
};
