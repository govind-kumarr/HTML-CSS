const jsonServer = require("json-server");
const server = jsonServer.create();

const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const port = process.env.port || 6060;

server.use(router);
server.use(middlewares);

server.listen(port);

