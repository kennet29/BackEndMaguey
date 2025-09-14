import { Router } from "express";
import {
  signinHandler,
  signupHandler,
  logoutHandler
} from "../controllers/auth.controller.js";
import {
  checkExistingRole,
  checkExistingUser,
} from "../middlewares/verifySignup.js";

const router = Router();

router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.post("/signup", [checkExistingUser], signupHandler);

router.post("/signin", signinHandler);

router.post("/logout",logoutHandler);

export default router;
