import { Request, Response } from "express";
import { Table } from "../models/Table";

// Create table admin
export const createTable = async (req: Request, res: Response) => {
  try {
    const { tableNumber, capacity } = req.body;

    if (!tableNumber || !capacity) {
      return res
        .status(400)
        .json({ message: "tableNumber and capacity required" });
    }

    const table = await Table.create({
      tableNumber,
      capacity,
    });

    res.status(201).json(table);
  } catch (error: any) {
    res.status(500).json({
      message: "Failed to create table",
      error: error.message,
    });
  }
};

// Get all tables
export const getTables = async (_req: Request, res: Response) => {
  try {
    const tables = await Table.find();
    res.json(tables);
  } catch (error: any) {
    res.status(500).json({
      message: "Failed to fetch tables",
      error: error.message,
    });
  }
};

// end code
