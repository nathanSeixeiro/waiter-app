/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Request, Response } from "express";

import { Category } from '../../models/Category';

export async function CreateCategories(req: Request, res: Response) {
    try {
        const { icon, name } = req.body
        if (!name) {
            res.status(400).json({
                error: 'Name is required'
            })
        }
        const category = await Category.create({ icon, name })
        res.json(category)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}