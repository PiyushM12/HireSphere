import express from "express"

import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getCompanyById, getCompany, registerCompany, updateCompany } from "../controllers/company.controller.js";

const router = express.Router();

router.route("/register").get(isAuthenticated,registerCompany);
router.route("/get").get(isAuthenticated,getCompany);
router.route("/get/:id").get(getCompanyById,isAuthenticated);
router.route("/update/:id").post(isAuthenticated,updateCompany);

export default router;