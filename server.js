const dotenv = require("dotenv");
dotenv.config();
const server = require("./app/app.js");

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  console.log(`Server is Running at http://localhost:${PORT}/`);
});
