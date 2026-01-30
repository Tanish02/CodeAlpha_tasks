import express from "express";
import { createTable, getTables } from "../controllers/table.controller";

const router = express.Router();

router.post("/", createTable); // admin
router.get("/", getTables); // view tables

export default router;

// end code
