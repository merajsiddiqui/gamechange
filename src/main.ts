import { app } from "./app"
import * as http from "http"
import { Plugins } from "./plugins"
import { Config } from "./config"
import { dirname } from "path"
import * as fs from "fs"
import * as IP from "ip"
import * as mongoose from "mongoose"

const packageDetails = JSON.parse(
  fs.readFileSync(dirname(__dirname) + "/package.json", "utf-8")
)
let config: any
config = Config.loadConfigurations()
let AppConfiguration: any = []
AppConfiguration = [
  {
    Name: packageDetails.name,
    Env: config.app.environment,
    Documentation: "http://" + IP.address() + ":" + config.app.port + "/docs"
  }
]
Plugins.loadPlugins()

const server = http.createServer(app)
/**
 * connect with mongo
 */
let mongo_uri:string = ""
if(config.mongo.username && config.mongo.password){
   mongo_uri = `${config.mongo.username}:${config.mongo.password}@`
}
mongo_uri = `mongodb://${mongo_uri}${config.mongo.host}:${config.mongo.port}/${config.mongo.database}`
mongoose.connect(mongo_uri, { useNewUrlParser: true })
server.listen(config.app.port)
server.on("listening", async () => {
  console.log(AppConfiguration)
})
