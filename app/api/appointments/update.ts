import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "PUT") {
      return res.status(405).json({ error: "Método não permitido" });
    }
  
    const { appointmentId, status } = req.body;
  
    if (!appointmentId || !status) {
      return res.status(400).json({ error: "ID e status são obrigatórios" });
    }
  
    try {
      const appointment = await prisma.appointment.update({
        where: { id: appointmentId },
        data: { status },
      });
  
      res.status(200).json(appointment);
    } catch (error) {
      res.status(500).json({ error: "Erro ao atualizar agendamento" });
    }
  }
  