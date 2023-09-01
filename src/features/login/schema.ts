import * as yup from 'yup';

export const loginSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().trim().required(),
  })
  .required();

export type LoginInput = yup.InferType<typeof loginSchema>;
