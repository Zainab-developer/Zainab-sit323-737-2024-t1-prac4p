# Zainab-sit323-737-2024-t1-prac4p
Run command 
npm init
npm install express
npm install winston
node app.js

1- Addition:
http://localhost:3000/add?n1=5&n2=10

2- Subtraction:
http://localhost:3000/sub?n1=10&n2=5

3- Multiplication:
http://localhost:3000/mul?n1=5&n2=10

4- Division:
http://localhost:3000/div?n1=10&n2=2

Explanation:
We start by importing the required modules: express for creating the web server and winston for logging. 
Next, we create an Express application instance named app.
Four functions (add, sub, mul, div) are defined to perform arithmetic operations on two numbers.
HTTP GET route handlers are defined for each arithmetic operation (/add, /sub, /mul, /div).
Input parameters n1 and n2 are extracted from the query string of the request.
Error handling is implemented using try-catch blocks to catch any errors that may occur during processing.
The Express server is started to listen on a specified port (port 3000).
A log message is output to the console indicating that the server is running and listening on the specified port.
