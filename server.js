// Boilerplate Code for HTTP Status Code API
const express = require('express');
const app = express();

/*
Task:
You need to create an API that helps users understand different HTTP status codes and their meanings.

Requirements:
1. Create a GET endpoint at "/status-info".
2. The endpoint should accept a "code" as a query parameter (e.g., /status-info?code=200).
3. Based on the status code provided, the API should respond with:
   a. The status code.
   b. A description of the status code.

Example Responses:
- For 200 (OK):
  Request: /status-info?code=200
  Response:
  {
    "status": 200,
    "message": "OK: The request has succeeded. The meaning of this status depends on the HTTP method used."
  }

- For 404 (Not Found):
  Request: /status-info?code=404
  Response:
  {
    "status": 404,
    "message": "Not Found: The server has not found anything matching the request URI. This is often caused by a missing page or resource."
  }

- For 500 (Internal Server Error):
  Request: /status-info?code=500
  Response:
  {
    "status": 500,
    "message": "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request."
  }

- For 400 (Bad Request):
  Request: /status-info?code=400
  Response:
  {
    "status": 400,
    "message": "Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax)."
  }

List of Status Codes to Handle:
200, 201, 204, 400, 401, 403, 404, 405, 429, 500, 502, 503, 504
*/

app.get("/status-info", (req,res) => {
  let code = req.query.code;

  code = Number(code);

  let obj = {
    status: code,
    message: ''
  }

  switch(code){
    case 200:
      obj.message =  "OK: The request has succeeded. The meaning of this status depends on the HTTP method used."
      break;
    case 201:
      obj.message =  " Created:  The request has been fulfilled and a new resource has been created as a result. Typically used for POST requests that create resources."
      break;
    case 204:
      obj.message =  " No Content: The request was successful, but there is no content to return. Often used for DELETE requests."
      break;
    case 400:
      obj.message =  "Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax)."
      break;
    case 401:
      obj.message =  " Unauthorized: The request requires user authentication. This is typically returned when valid authentication credentials are not provided."
      break;
    case 403:
      obj.message =  " Forbidden: The server understood the request, but the server refuses to authorize it. The client does not have permission to access the resource."
      break;
    case 404:
      obj.message =  "Not Found: The server has not found anything matching the request URI. This is often caused by a missing page or resource."
      break;
    case 405:
      obj.message =  "Method Not Allowed: The method specified in the request is not allowed for the resource. For example, a POST request on a resource that only allows GET.."
      break;
    case 429:
      obj.message =  "Too Many Requests: The user has sent too many requests in a given amount of time, often due to rate-limiting. The client should wait before making additional requests."
      break;
    case 500:
      obj.message = "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request."
      break;
    case 502:
      obj.message =  "Bad Gateway: The server received an invalid response from the upstream server while acting as a gateway or proxy."
      break;
    case 503:
      obj.message =  "Service Unavailable: The server is currently unable to handle the request due to temporary overloading or maintenance of the server."
      break;
    case 504:
      obj.message =  "Gateway Timeout: The server did not receive a timely response from the upstream server or another server it needed to access in order to complete the request."
      break;
    default:
      obj.message = "Invalid status code: The code provided is not recognized. Please provide a valid HTTP status code."

  }
  return res.send(obj)
})

app.get("/", (req,res) =>{
  return res.send ('<h1>Hello World</h1>')
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Status Code API is running on http://localhost:${PORT}`);
});
