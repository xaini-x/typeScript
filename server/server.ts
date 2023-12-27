import http, { IncomingMessage, Server, ServerResponse } from "http";

const localhost: string = "localhost";
const port: number = 3000;

const server: Server = http.createServer(
  (request: IncomingMessage, response: ServerResponse) => {
    response.setHeader('Content-Type', 'application/json');
    response.writeHead(200);
    response.end(( "Hello World!" ));
  }
);

server.listen(port, localhost, (): void => {
  console.log("Server is running on port " + port);
});
