import { Request, Response } from "express";
import Channel from "../models/channels.model";
import User from "../models/users.model";

class ChannelController {
  static async createPublic(req: Request, res: Response): Promise<void> {
    try {
      const { name } = req.body;

      const channelExists = await Channel.findOne({ channelName: name });

      if (channelExists) {
        res.status(409).json({ ok: false, message: "Un canal avec ce nom existe déjà." });
        return;
      }

      const newChannel = new Channel({ channelName: name });
      await newChannel.save();

      res.status(200).json({ ok: true, message: "Canal créé avec succès!", newChannel });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ ok: false, message: "Erreur interne du serveur lors de la création du canal." });
    }
  }

  static async createPrivateChannel(req: Request, res: Response): Promise<void> {
    try {
      const user1Id = req.body.user1Id;
      const user2Id = req.body.user2Id;

      const existingChannel = await Channel.findOne({
        participants: { $all: [user1Id, user2Id] },
      });

      if (existingChannel) {
        res.status(409).json({
          message: "Un canal privé existe déjà entre ces utilisateurs",
          existingChannel,
        });
        return;
      }

      const channel = new Channel({
        channelName: `Canal privé ${user1Id} - ${user2Id}`,
        type: "private",
        participants: [user1Id, user2Id],
      });

      await channel.save();

      await User.updateMany({ _id: { $in: [user1Id, user2Id] } }, { $push: { channels: channel._id } });

      res.status(200).json({
        ok: true,
        message: "Canal privé créé avec succès",
        channel,
      });
    } catch (error) {
      console.error("Erreur lors de la création du canal privé :", error);
      res.status(500).json({ ok: false, message: "Erreur interne du serveur lors de la création du canal privé." });
    }
  }

  static async getAllPublic(req: Request, res: Response): Promise<void> {
    try {
      const channels = await Channel.find({ type: "public" }).populate("messages");
      res.status(200).json(channels);
    } catch (error) {
      console.error("Erreur lors de la récupération de tous les canaux publics :", error);
      res.status(500).json({ message: "Erreur lors de la récupération de tous les canaux publics" });
    }
  }

  static async getOne(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const channel = await Channel.findById(id).populate("messages");
      res.status(200).json(channel);
    } catch (error) {
      console.error("Erreur lors de la récupération du canal et de ses messages :", error);
      res.status(500).json({ message: "Erreur lors de la récupération du canal et de ses messages" });
    }
  }

  static async getPrivateChannels(req: Request, res: Response): Promise<void> {
    const participantId = req.params.id;
    try {
      const channels = await Channel.find({ type: "private", participants: participantId });
      res.status(200).json(channels);
    } catch (error) {
      console.error("Erreur lors de la récupération des canaux privés de l'utilisateur :", error);
      res.status(500).json({ message: "Erreur lors de la récupération des canaux privés de l'utilisateur" });
    }
  }

  static async updateName(req: Request, res: Response): Promise<void> {
    try {
      const channelId = req.params.id;
      const updateData = req.body;
      const update = await Channel.findByIdAndUpdate(channelId, updateData, { new: true });
      if (!update) {
        res.status(404).json({ message: "Canal non trouvé" });
      }
      res.status(200).json({ message: "Nom mis à jour" });
    } catch (error) {
      console.error("Erreur lors de la mise à jour du canal :", error);
      res.status(500).json({ message: "Erreur lors de la mise à jour du canal" });
    }
  }

  static async delete(req: Request, res: Response): Promise<void> {
    try {
      const channelId = req.params.id;
      const deleteChannel = await Channel.findByIdAndDelete(channelId);
      if (!deleteChannel) {
        res.status(404).json({ message: "Canal non trouvé" });
      }
      res.status(200).json({ message: "Canal supprimé" });
    } catch (error) {
      console.error("Erreur lors de la suppression du canal :", error);
      res.status(500).json({ message: "Erreur lors de la suppression du canal" });
    }
  }
}

export default ChannelController;
