import  { config } from "dotenv"
import { DataSource } from "typeorm"

config()

export const datasource = new DataSource({
    type: "mysql",
    host: "db4free.net",
    port: 3306,
    username: process.env.database_username,
    password: process.env.database_password,
    database: "testdatabasebung",
    entities: [
        "src/entities/*.ts"
    ],
})

datasource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })