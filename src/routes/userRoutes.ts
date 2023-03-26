import { Router } from "express";
import {
  createUser,
  getUser,
  removeUser,
  updateUser,
} from "../controllers/userController";
import { validateUserBody } from "../middlewares/validateUserBody";

const router = Router();

// listen for incoming requests on these routes
// for example 'user/add' will send requests to our `createUser` function

router.route("/").post(validateUserBody, createUser);
router.route("/:id").get(validateUserBody, getUser);
router.route("/").put(validateUserBody, updateUser);
router.route("/:id").delete(validateUserBody, removeUser);

export default router;
