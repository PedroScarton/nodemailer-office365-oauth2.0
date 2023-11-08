// Dependencies
import { Router } from "express";

// Middlewares
import { getCustomers, createCustomer } from "../controllers/";

const router = Router();

router.route("/")
    .get(getCustomers)
    .post(createCustomer);

export default router;
