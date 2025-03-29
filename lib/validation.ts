import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(3).max(50),
  email: z.string().min(3).max(50),
  message: z.string().min(3).max(500)
})