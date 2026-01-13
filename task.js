const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  let responseHTML;

  switch (req.url) {
    case "/home":
      responseHTML = "<h1>Welcome home</h1>";
      break;
    case "/about":
      responseHTML = "<h1>Welcome to About Us</h1>";
      break;
    case "/node":
      responseHTML = "<h1>Welcome to my Node Js project</h1>";
      break;
    case "/":
      responseHTML = "<h1>Hello World</h1>";
      break;
    case "/pizza":
      responseHTML = "<h1>This is your pizza</h1>";
      break;
    default:
      responseHTML = "<h1>Page Not Found</h1>";
  }

  res.end(responseHTML);
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
