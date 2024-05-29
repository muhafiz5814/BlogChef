import express from "express"
import {fileURLToPath} from "url"
import { join, dirname } from "path"
import morgan from "morgan"
import { createWriteStream } from "fs"
import session from "express-session"
import compression from "compression"

import connectToDb from "./db/index.js"
import home from "./routes/home/index.js"
import admin from "./routes/admin/index.js"
import api from "./routes/api/index.js"

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = new express()

const logFile = join(__dirname, "blogchef.log")


app.use(compression())
app.use("/assets", express.static(join(__dirname, "public")))
app.use(express.static(join(__dirname, "public", "client")))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
// app.use(morgan(":method - :url - :date - :response-time ms"))
app.use(morgan(":method - :url - :date - :response-time ms", {
  stream: createWriteStream(logFile, {flags: "a"})
}))
app.use("/admin", session({
  name: "sessId",
  resave: false,
  saveUninitialized: true,
  secret: process.env.SESSION_SECRET,
  cookie: {
    httpOnly: true,
    maxAge: 18000000,
    secure: app.get("env") === "production" ? true : false
  }
}))
app.set("view engine", "pug")

app.use("/admin", admin)
app.use("/api", api)
app.use("/", home)

Promise.all([connectToDb()])
.then(() => {
  app.listen(3000, (req, res) => {
    console.log("Server is listening on port 3000")
  })
})
.catch((error) => {
  console.error(`MongoDB atlas error: ${error}`)
  process.exit()
})