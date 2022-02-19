const Contact = require("../../models/contact");
const Substitute = require("../../models/substitute");

const addSubstitute = async (req, res) => {
  console.log("======\n", req.body, "\n======");
  const { 
    id, 
    firstName,
    lastName,
    email,
    phone,
    institutions,
    password,
    seniority,
    isBjGraduate,
    teachingCertificate,
    professions} =
    req.body;
  try {
    const contact = {
      personId: id,
      password,
      firstName,
      lastName,
      email,
      phoneNumber: phone,
      gender: true,
      roles: ["SUBSTITUTE"],
    };
    const savedContact = await Contact.create(contact);
    console.log("contactId", savedContact);
    const substitute = {
        contactId: savedContact._id,
        seniority,
        isBjGraduate,
        teachingCertificate,
        professions
    }
    const substituteId = await Substitute.create(substitute);
    res.send(substituteId);
  } catch (err) {
    console.log("unable to save substitute:(");
    console.log("b/c: ", err);
    res.status(500);
  }
};

module.exports = addSubstitute;
