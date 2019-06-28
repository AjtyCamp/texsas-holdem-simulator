import app from "./server";

const port = 3000;

app.listen(port, () =>
  console.log(`Simple httpServer listening on port ${port}!`)
);
