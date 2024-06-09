import dotenv from "dotenv";

import connectionDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

connectionDB()
  .then(() => {
    app.on("error", () => {
      console.log("ERRR:", error);
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port :${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db failed ! ! !", err);
  });
