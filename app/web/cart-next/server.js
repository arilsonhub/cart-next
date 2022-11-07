const jsonServer = require("json-server");
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('faker-api.json');
const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(router);
server.use(
  cors({
    origin: true,
    credentials: true,
    preflightContinue: false,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);
server.options("*", cors());
server.listen(8000, () => {
  console.log('Mock api server up');
});