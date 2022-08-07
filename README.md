# ticketing-backend
 This is a backend application to handle online ticket booking.
 
 ## Prequisite
 
 Node js must be installed at your machine
 
 ## To run this project
 
 1. Clone this repository to your local machine
 2. Create a .env file similar to .env.example (Fill out the important credentials)
 3. run command "npm install" from project directory
 4. run command "npm start" to start this project
 
 ### Alternate way 
 
 1. Follow step 1 to 3 from the above instructions and then
 2. Install nodemon to your local machine globally using "npm install -g nodemon" 
 3. Simply run nodemon from the project directory


## End points 

On your local machine url will be http://localhost:2004/

Common endpoint for all the API is /api/v1

ex.. If you want to fetch all tickets then use http://localhost:2004/api/v1/tickets/all

Other endpoints are 
 
- all tickets : /tickets/all
- filter with status : /tickets/?status = open/close
- filter with title : /tickets/?title={title}
- filter with priority : /tickets/?priority = low/medium/high
- create new ticket : /tickets/new
- delete a ticket : /tickets/delete
- status update : /tickets/markAsClose
- create new user : /users/new


#### Models are present at src/models
#### Controllers are present at src/controllers
#### Routes are present at src/routes



Demo URL - https://damp-sands-21373.herokuapp.com/api/v1/users/new

Demo Video URL -  https://drive.google.com/file/d/18DRK90iWudpn4Akx9W3pqokrdAZVUNqG/view?usp=sharing


## Sample Logs

- - - [07/Aug/2022:12:52:50 +0000] "GET / HTTP/1.1" 404 139 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36"
- - - [07/Aug/2022:13:00:08 +0000] "GET / HTTP/1.1" 404 139 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36"
- - - [07/Aug/2022:13:00:18 +0000] "GET /tickets/?status=close HTTP/1.1" 404 147 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36"
- - - [07/Aug/2022:13:00:23 +0000] "GET /tickets/?status=close HTTP/1.1" 404 147 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36"
- - - [07/Aug/2022:13:00:38 +0000] "GET /tickets/?status=close HTTP/1.1" 404 147 "-" "PostmanRuntime/7.29.2"
- - - [07/Aug/2022:13:00:50 +0000] "GET /api/v1/tickets/?status=close HTTP/1.1" 200 484 "-" "PostmanRuntime/7.29.2"




