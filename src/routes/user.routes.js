import { Router } from "express";
import {
    getAllUsers,
    getUserById,
    registerUser,
    loginUser,
    updateUser,
    deleteUser
} from "../controllers/user.controller.js";

const router = Router();

router.route("/").get(getAllUsers);
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/:id").get(getUserById).patch(updateUser).delete(deleteUser);

export default router;
