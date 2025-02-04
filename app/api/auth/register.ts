
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { email, password, whatsapp_number } = req.body;

        if (!email || !password || !whatsapp_number) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        // Verificar se o email já está registrado
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return res.status(400).json({ error: 'Usuário já registrado' });
        }

        // Criptografar a senha
        const hashedPassword = await bcrypt.hash(password, 10);

        // Criar o usuário
        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                whatsapp_number,
            },
        });

        return res.status(201).json({ success: true, userId: user.id });
    } else {
        res.status(405).json({ error: 'Método não permitido' });
    }
}
