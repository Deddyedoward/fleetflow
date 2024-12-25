import { Response, Request, NextFunction } from "express";
import UserService from "./user.service";

class UserController {
    public userService: UserService

    constructor(userService: UserService) {
        this.userService = userService;
    } 

    public getProfile = async (req: Request, res: Response, next: NextFunction)  => {
        try {
            const { id } = req.body.user;
            const user = await this.userService.getProfile(id);
            res.status(200).json(user)
        } catch (err) {
            next(err)
        }
    }
}

export default UserController;