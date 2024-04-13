import express from "express";
import { connectDb } from "./config/dbConfig";
import { DB_URL, PORT } from "./constants/envs";
import Routes from "./routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import all routes
app.use(Routes);

// Connect to database and start the server
connectDb(DB_URL)
  .then(() => {
    console.log(`[DB]: connected to database url`);
    app.listen(PORT, () => {
      console.log(`[server]: listening on port ${PORT}`);
    });
  })
  .catch((err: Error) => {
    console.error(`[DB]: Error connecting to database: ${err.message}`);
  });
