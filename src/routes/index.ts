import { Router } from "express";
import userRoutes from "./userRoutes";
import csvRoutes from "./csvRoutes";

const router = Router();

// we inject all our user routes to listen for requests on '/user'
router.use("/user", userRoutes);
router.use("/files", csvRoutes);

export default router;
