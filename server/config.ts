import { config } from 'https://deno.land/x/dotenv/mod.ts';

const env = config();

export const APP_HOST = env["APP_HOST"] || "127.0.0.1";
export const APP_PORT = env["APP_PORT"] || 8000;

export const POSTGRES_USER = env["POSTGRES_USER"] || "postgres";
export const POSTGRES_DATABASE = env["POSTGRES_DATABASE"] || "postgres";
export const POSTGRES_HOSTNAME = env["POSTGRES_HOSTNAME"] || "127.0.0.1";
export const POSTGRES_PASSWORD = env["POSTGRES_PASSWORD"] || "";
export const POSTGRES_PORT = env["POSTGRES_PORT"] || 5432;