import "dotenv/config";

import express, { json, urlencoded } from "express";
import { connect } from "mongoose";

// Importing middlewares
import compression from "compression";
import helmet from "helmet";
import Cors from "cors";

// env variables
import { PORT, MONGO_URI } from "./shared/constants/env";

// Routes
import CustomerRoutes from "./routes/customer.route";

// Starting express app
const app = express();

// Set security HTTP Headers
app.use(helmet({ contentSecurityPolicy: false, xssFilter: true }));

// Set json bundle reader
app.use(json({ limit: "500kb" }));
app.use(urlencoded({ extended: true }));

// Compression
app.use(compression());

// Set up CORS Access
app.use(Cors({ credentials: true, origin: true }));

// Routes for health-check
app.get("/", (_, res) => {
  return res.status(200).send(`OK - ${new Date()}`);
});

// API Routes
app.use("/customer", CustomerRoutes);

// Setting listen port
app.set("PORT", PORT || 5000);

connect(MONGO_URI, { ssl: true })
  .then(async () => {
    console.log(`${new Date()}: Connected to mongoDb`);
    app.listen(app.get("PORT"));
  })
  .catch((_: Error) => {
    process.exit();
  });
