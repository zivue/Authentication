import express = require("express");
import { Login, Register, Update } from "../controllers";

const router = express.Router();

router.get("/", (req: express.Request, res: express.Response) => {
    res.status(200).send("Authentication API");
});

router.post("/login", Login.Main);
router.post("/register", Register.Main);
router.post("/update", Update.Main);

export default router;
