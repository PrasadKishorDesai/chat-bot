import express from "express";
import * as api from "./controller.js";

const router = express.Router();

router.get("/hi", api.hiOrHello);

router.get("/hello", api.hiOrHello);

router.get("/start", api.start);

router.get("/help", api.helpBot);

router.post("/set-reminder", api.setReminder);

router.get("/current-date-and-time", api.currentDateAndTime);

router.get("/bye", api.bye);

export default router;