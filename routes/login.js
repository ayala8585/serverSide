const jwt = require("jsonwebtoken");
const Contact = require("../models/contact");
const contact = require("../models/contact");

const login = async (req, res) => {
  const { id, password } = req.body;
  try {
    const concat = await Contact.findOne({ personId: id, password });
    if (!contact) return res.status(404).send("User does not exit");
    const token = jwt.sign(contact, process.env.TOKEN_SECRET, {
      expiresIn: "24h",
    });
    return res.json({ token });
  } catch (error) {
    console.log("error finding contact", error);
    return res.status(400).send("Can't find user");
  }
};

module.exports = login;
