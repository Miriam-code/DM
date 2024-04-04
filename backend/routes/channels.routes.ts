import express, { Router } from "express";
import ChannelController from "../controllers/channels.controller";

const router: Router = express.Router();

// CREATE 

router.post("channel/",ChannelController.create);

// GET ALL channels

router.get("channel/", ChannelController.getAll);

// GET ONE une channel avec ses messages

router.get("channel/:id",ChannelController.getOne);

// DELETE

router.delete("channel/:id",ChannelController.delete);

// UPDATE NAME 
router.put("channel/:id", ChannelController.updateName)


export default router;
