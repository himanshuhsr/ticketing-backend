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



Demo URL - 

Demo Video URL - 




