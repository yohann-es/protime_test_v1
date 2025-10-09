const jsonServer = require('json-server');
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router('works.json');
const middlewares = jsonServer.defaults();

// Enable CORS for all origins (or replace '*' with your frontend URL)
server.use(cors());

// Use default middlewares (logger, static, etc.)
server.use(middlewares);

// Use JSON Server router
server.use(router);

const PORT = process.env.PORT || 10000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`JSON Server running on port ${PORT}`);
});
