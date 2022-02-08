const jwt = require("jsonwebtoken");
const Contact = require("../models/contact");
const contact = require("../models/contact");

const login = async (req, res) => {
  const { id, password } = req.query;

  try {
    const contact = await Contact.findOne({ personId: id, password });
    if (!contact) return res.status(404).send("User does not exit");
    const token = jwt.sign(
      { id: contact.personId, password: contact.password },
      process.env.TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );

    return res.json({ token, contact });
  } catch (error) {
    console.log("error finding contact", error);
    return res.status(400).send("Can't find user");
  }
};

module.exports = login;
