const Contact = require("../../models/contact");
const Teacher = require("../../models/teacher");

const addTeacher = async (req, res) => {
  console.log("======\n", req.body, "\n======");
  const { id, firstName, lastName, email, phone, institutions, password } =
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
      roles: ["TEACHER"],
    };
    const savedContact = await Contact.create(contact);
    console.log("contactId", savedContact._id);
    const teacherId = await Teacher.create({ contactId: savedContact._id });
    res.send(teacherId);
  } catch (err) {
    console.log("unable to save teacher:(");
    console.log("b/c: ", err);
    res.status(500);
  }
};

module.exports = addTeacher;
