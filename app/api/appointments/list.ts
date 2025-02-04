import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
      return res.status(405).json({ error: "Método não permitido" });
    }
  
    const { userId } = req.query;
  
    if (!userId) {
      return res.status(400).json({ error: "Usuário não informado" });
    }
  
    try {
      const appointments = await prisma.appointment.findMany({
        where: { userId: String(userId) },
        orderBy: { date: "asc" },
      });
  
      res.status(200).json(appointments);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar agendamentos" });
    }
  }
  