import { z } from "zod";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);
export const ContactSchema = z.object({
  email: z
    .string()
    .email({
      message: "Must be a valid email",
    })
    .min(5),
  category: z.string().nonempty("Field is required"),
  message: z
    .string()
    .min(30, { message: "message must be at least 30 characters" })
    .max(200, { message: "message must be at most 200 characters" }),
});
export type ContactType = z.infer<typeof ContactSchema>;
