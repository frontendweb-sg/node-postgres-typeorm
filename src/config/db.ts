import { DataSource } from "typeorm";

const db = new DataSource({
  type: "postgres",
  database: "dvdrental",
  username: "postgres",
  password: "1234",
  host: "localhost",
  port: 5432,
  entities: ["src/models/*{.ts,.js}"],
  synchronize: true,
  logging: true,
});

export { db };
