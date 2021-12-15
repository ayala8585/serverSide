const Contact = require("../../models/contact");
const Teacher = require("../../models/teacher");

const addTeacher = async (req, res) => {
  // console.log("======\n", req, "\n======");
  console.log("======\n", req.body, "\n======");
  const { id, firstName, lastName, email, phone, institutions, password } =
    req.body;
  try {
    const contact = {
      PersonId: id,
      password,
      firstName,
      lastName,
      email,
      phoneNumber: phone,
      gender:true,
      roles: ["TEACHER"],
    };
    contactId = await Contact.create(contact);
    teacherId = await Teacher.create({ contactId });
    res.send(teacherId);
  } catch (err) {
    console.log("unable to save teacher:(");
    console.log("b/c: ", err);
    res.status(500);
  }
};

module.exports = addTeacher;
