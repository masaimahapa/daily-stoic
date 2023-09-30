import { Request, Response } from "express";
import * as usersModel from "../../models/users.model"

export async function getAllUsers(req: Request, res: Response){
    try{
        const users = await usersModel.getAllUsers();
        res.json(users.data);
    } catch(error){
        console.error("Error getting users: ", error);
        res.status(500).json({error: "Unable to get users."})
    }
}

export async function getUserById(req: Request, res: Response){
    const userId = req.params.userId;
    try{
        const user = await usersModel.getUserById(userId);
        res.json(user.data);
    } catch(error){
        console.error("Error getting user: ", error);
        res.status(500).json({error: "Unable to get user."})
    }
}
