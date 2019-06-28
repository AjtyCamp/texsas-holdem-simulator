import * as express from "express";
import * as path from "path";

const app = express.default();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/public/"));
});

export default app;
