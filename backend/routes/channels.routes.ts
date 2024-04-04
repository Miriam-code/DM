import express, { Router } from "express";
import ChannelController from "../controllers/channels.controller";

const router: Router = express.Router();

// CREATE PUBLIC CHANNEL

router.post("channel/",ChannelController.createPublic);

// CREATE PRIVATE CHANNEL 
router.post("channel/private",ChannelController.createPrivateChannel);

// GET ALL channels PUBLIC

router.get("channel/", ChannelController.getAllPublic);

// GET ONE une channel avec ses messages

router.get("channel/:id",ChannelController.getOne);

// GET ALL channel private 
router.get("/channel/private/:id", ChannelController.getPrivateChannels);

// DELETE

router.delete("channel/:id",ChannelController.delete);

// UPDATE NAME 
router.put("channel/:id", ChannelController.updateName)


export default router;
