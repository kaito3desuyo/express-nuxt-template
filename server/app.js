import express from "express"
import { Nuxt, Builder } from "nuxt"
import config from "./../client/nuxt.config.js"

const app = express()

config.dev = !(process.env.NODE_ENV === "production")
const nuxt = new Nuxt(config)

if (config.dev) {
    const builder = new Builder(nuxt)
    builder.build()
}

import api from "./api"

app.use("/api", api)
app.use(nuxt.render)

export default app
