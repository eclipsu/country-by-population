const express = require("express");
const path = require("path");
const app = express();
const game = require("./Server/routers/countries");
const whitelist = require("./Server/utils/whitelist");
const cors = require("cors");

// CORS Headers
const corsConfig = {
  credentials: true,
  origin: ["http://localhost:3000", "http://localhost:8080"],
};

app.use(cors(corsConfig));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/countries", game);

console.log(path.join(__dirname, "Client/build"));
app.use(express.static(path.join(__dirname, "Client/build"))); // path.resolve was missing here
app.get("/*", (req, res) => res.sendFile(path.join(__dirname, "Client/build", "index.html")));

const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server running on port ${PORT}`));
