import { Request, Response } from "express";
import { Types } from "mongoose";
import Channel from "../models/channels.model";

const SERVER_ERROR = "SERVER_ERROR";
const CHATROOM_ALREADY_EXISTS = "CHANNEL_ALREADY_EXISTS";
class ChannelController {
  // créer une channel PUBLIC

  static async createPublic(req: Request, res: Response): Promise<void> {
    try {
      const { name } = req.body;
      console.log(name);

      // Vérifier si un canal avec le même nom existe déjà
      const channelExists = await Channel.findOne({ channelName: name });

      if (channelExists) {
        // Si le canal existe déjà, renvoyer un message approprié
        res
          .status(409)
          .json({ ok: false, message: "Un canal avec ce nom existe déjà." });
      }

      // Si le canal n'existe pas, créer un nouveau canal
      const newChannel = new Channel({ channelName: name });
      await newChannel.save();

      // Renvoyer un message de succès
      res.status(200).json({ ok: true, message: "Canal créé avec succès!" });
    } catch (error: any) {
      console.error(error);

      // En cas d'autres erreurs, renvoyer une réponse d'erreur interne du serveur
      res.status(500).json({
        ok: false,
        message: "Erreur interne du serveur lors de la création du canal.",
      });
    }
  }

  // créer une channel Privée

  static async createPrivateChannel(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const UsersID = [req.params.user1Id, req.params.user2Id];
      const channelName = `private`;

      // Vérifiez d'abord si le canal privé existe déjà entre ces deux utilisateurs
      const existingChannel = await Channel.findOne({ channelName });

      if (existingChannel) {
        console.log("Private channel already exists between these users");
        return;
      }

      // Créez le canal privé s'il n'existe pas déjà
      const channel = new Channel({
        channelName,
        type: "private",
        participants: UsersID,
      });

      await channel.save();
      console.log("Private channel created successfully");
    } catch (error) {
      console.error("Error creating private channel:", error);
      throw error;
    }
  }

  //récupérer toutes les channels  PUBLIC  et messages

  static async getAllPublic(req: Request, res: Response): Promise<void> {
    try {
      const channels = await Channel.find({ status: "public" }).populate(
        "messages"
      );

      res.status(200).json(channels);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération de tous les channels :",
        error
      );
      res.status(500).json({
        message: "Erreur lors de la récupération de tous les channels",
      });
    }
  }

  // récupérer avec l'id une channel public avec ses messages

  static async getOne(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;

      const channel = await Channel.findById(id).populate("messages");

      res.status(200).json(channel);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération de la channel et de ses messages :",
        error
      );
      res.status(500).json({
        message:
          "Erreur lors de la récupération de la channel et de ses messages ",
      });
    }
  }
  // récupérer toute les chatroom privée d'un IDUSER

  static async getPrivateChannels(req: Request, res: Response): Promise<void> {
    const participantId = req.params.id;

    try {
      const channels = await Channel.find({
        type: "private",
        participants: participantId,
      }).exec();

      res.status(200).json(channels);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération de la channel et de ses messages :",
        error
      );
      res.status(500).json({
        message:
          "Erreur lors de la récupération de la channel et de ses messages ",
      });
    }
  }

  // update le name d'une channel

  static async updateName(req: Request, res: Response): Promise<void> {
    try {
      const channelId = req.params.id;
      const updateData = req.body;
      const update = await Channel.findByIdAndUpdate(channelId, updateData, {
        new: true,
      });

      if (!update) {
        res.status(404).json({ message: "Channel non trouvé" });
      }
      res.status(200).json({
        message: "Name update ",
      });
    } catch (error) {
      console.error("Erreur lors de la mise à jour de la channel :", error);
      res
        .status(500)
        .json({ message: "Erreur lors de la mise à jour de channel" });
    }
  }

  //delete une channel

  static async delete(req: Request, res: Response): Promise<void> {
    try {
      const channelId = req.params.id;

      const deleteChannel = await Channel.findByIdAndDelete(channelId);

      if (!deleteChannel) {
        res.status(404).json({ message: "Channel non trouvé" });
      }

      res.status(200).json({ message: "Channel est supprimé" });
    } catch (error) {
      console.error("Erreur lors de la suppression de la Channel :", error);
      res
        .status(500)
        .json({ message: "Erreur lors de la suppression de la Channel" });
    }
  }
}

export default ChannelController;
