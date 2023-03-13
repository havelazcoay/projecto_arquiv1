import { Router } from "express";
import { methods as EventController } from "../Controllers/Event.controller.js";

const router = Router();

router.get("/", EventController.getEvents);
router.get("/:ID", EventController.getEvent);
router.post("/", EventController.addEvent);
router.put("/:ID", EventController.UpdateEvent);
router.delete("/:ID", EventController.DeleteEvent);

export default router;