import { z } from "zod";
export const getSchema = (lang: string) => {
  const messages: any = {
    en: {
      required: "This field is required",
      invalid_email: "Invalid email",
    },

    pl: {
      required: "To pole jest wymagane",
      invalid_email: "Nieprawidłowy adres e-mail",
    },
    da: {
      required: "Dette felt er påkrævet",
      invalid_email: "Ugyldig e-mail",
    },
    es: {
      required: "Este campo es obligatorio",
      invalid_email: "Correo electrónico inválido",
    },
  };

  const langMessages = messages[lang];

  return z.object({
    name: z.string().min(2, langMessages.required),
    email: z
      .string({ required_error: langMessages.required })
      .email(langMessages.invalid_email),
    message: z.string().min(2, langMessages.required),
  });
};
