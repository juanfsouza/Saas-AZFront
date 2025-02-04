import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { userId, name, phone, date } = req.body;

  if (!userId || !name || !phone || !date) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" });
  }

  try {
    const appointment = await prisma.appointment.create({
      data: {
        userId,
        name,
        phone,
        date: new Date(date),
        status: "PENDING",
      },
    });

    res.status(201).json(appointment);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar agendamento" });
  }
}
