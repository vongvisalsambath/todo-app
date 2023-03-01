import { Client } from "https://deno.land/x/postgres@v0.17.0/mod.ts";
import {
  POSTGRES_USER,
  POSTGRES_DATABASE,
  POSTGRES_HOSTNAME,
  POSTGRES_PASSWORD,
  POSTGRES_PORT,
} from "../config.ts";

class Database {
  client: any;

  constructor() {
    this.connect();
  }

  async connect() {
    this.client = new Client({
      user: POSTGRES_USER,
      database: POSTGRES_DATABASE,
      hostname: POSTGRES_HOSTNAME,
      password: POSTGRES_PASSWORD,
      port: POSTGRES_PORT
    });

    await this.client.connect();
  }
}

export default new Database().client;

