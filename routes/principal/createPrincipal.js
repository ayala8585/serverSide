const Contact = require("../../models/contact");
const Institution = require("../../models/institution");
const Address = require("../../models/address");

const createPreincipal = async (req, res) => {
  console.log("======\n", req.body, "\n======");
  const {
    id,
    city,
    email,
    phone,
    minAge,
    gender,
    street,
    lastName,
    password,
    firstName,
    homeNumber,
    experience,
    BJGraduate,
    institutionName,
    institutionEmail,
    institutionPhone,
    institutionSymbol,
    teachingCertificate,
  } = req.body;
  try {
    const contact = {
      personId: id,
      password,
      firstName,
      lastName,
      email,
      phoneNumber: phone,
      gender: gender === "male" ? true : false,
      roles: ["PRINCIPAL"],
    };
    const savedContact = await Contact.create(contact);
    console.log("contactId", savedContact._id);
    const institution = {
      institutionSymbol,
      name: institutionName,
      address: { city, street, number: homeNumber },
      email: institutionEmail,
      phoneNumber: [institutionPhone],
      managerId: savedContact._id,
      requirements: {
        minAge,
        experience,
        BJGraduate,
        certificate: teachingCertificate,
        gender: gender === "male" ? "MALE" : "FEMALE",
      },
    };
    const institutionId = await Institution.create(institution);
    res.json({ institutionId });
  } catch (err) {
    console.log("unable to save principal:(");
    console.log("b/c: ", err);
    res.status(500);
  }
};

module.exports = createPreincipal;
