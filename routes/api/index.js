import { Router } from "express";
import getPosts from "./get-posts.js";
import logInUser from "./login-user.js";
import signUpUser from "./signup-user.js";
import getPost from "./get-post.js";
import storePost from "./store-post.js";
import deletePost from "./delete-post.js";
import catchAll from "./catch-all.js";
import protectAPI from "./protectAPI.js"
import verify from "./verify.js"

const router = Router()

router.get("/posts", getPosts)
router.route("/post/:postId?").get(getPost).post(protectAPI, storePost).delete(protectAPI, deletePost)
router.post("/login", logInUser)
router.post("/signup", signUpUser)
router.post("/verify", verify)
router.use(catchAll)

export default router