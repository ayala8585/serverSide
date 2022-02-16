require("dotenv").config();
const cors = require("cors");
const express = require("express");
const createError = require("http-errors");

const login = require("./routes/login");
const teacherRouter = require("./routes/teacher/index");
const principalRouter = require("./routes/principal/index");

const app = express();
const db = require("./db");

async function connect() {
  await db.connect();
}

connect();
app.use(cors());
app.use(express.json());

app.get("/login", login);
app.use("/teacher", teacherRouter);
app.use("/principal", principalRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
console.log(`Listening on port ${PORT}`);
