import { Router } from "express";
import getPosts from "./get-posts.js";
import loginUser from "./login-user.js";
import signUpUser from "./signup-user.js";

const router = Router();

router.get("/posts", getPosts);
router.post("/login", loginUser);
router.post("/signup", signUpUser);
export default router;
