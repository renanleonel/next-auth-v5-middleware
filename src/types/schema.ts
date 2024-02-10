import { z } from 'zod';

export const loginSchema = z.object({
	email: z
		.string()
		.trim()
		.min(1, { message: 'Insira o email!' })
		.email({ message: 'Email inválido!' }),
	password: z
		.string()
		.trim()
		.min(1, { message: 'Insira a senha!' })
		.min(8, { message: 'Senha deve ter no mínimo 8 caracteres!' }),
});
