import { z } from 'zod';
import 'dotenv/config';

type EnvironmentVariables = {
  MODE: 'dev' | 'prod';
  PORT: number;
  HOST: string;
  MONGO_URL: string;
  CLIENT_URL: string;
  INITIAL_PRODUCTS_COUNT: number;
  INITIAL_USERS_COUNT: number;
};

const envSchema = z.object({
  MODE: z.enum(['dev', 'prod']),
  PORT: z.coerce.number(),
  HOST: z.string(),
  MONGO_URL: z.string(),
  CLIENT_URL: z.string().url(),
  INITIAL_PRODUCTS_COUNT: z.coerce.number(),
  INITIAL_USERS_COUNT: z.coerce.number(),
});

const { data, success, error } = envSchema.safeParse(process.env);

if (!success) {
  throw new Error(`.env validation error: ${error.message}`);
}

const environmentVariables: EnvironmentVariables = data;

export const envs = {
  mode: environmentVariables.MODE,
  port: environmentVariables.PORT,
  host: environmentVariables.HOST,
  mongoUrl: environmentVariables.MONGO_URL,
  clientUrl: environmentVariables.CLIENT_URL,
  initialProductsCount: environmentVariables.INITIAL_PRODUCTS_COUNT,
  initialUsersCount: environmentVariables.INITIAL_USERS_COUNT,
};
