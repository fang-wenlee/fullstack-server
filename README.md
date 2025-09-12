
### Step-by-Step: Setup Node.js + Express
1. node -v
   npm -v

2. Create Project Folder
   mkdir fullstack-server
   cd fullstack-server

3. Initialize a Node Project
   npm init -y

4. Install Express   
   npm install express

 5. Create Your Server File  

     server.js

### How to start the server
node server 

### or 

npx nodemon server.js


### Fetching data from External API




### Step-by-Step: Install Jest 
1. npm install --save-dev jest
  
2. Add a Test Script to package.json
  "test" : "jest"

3. Create a Test file: crmRouter.test.js

4. Run the test:
   npm test

//============================================================================================================
###  Supertest  is a powerful tool for testing Express routes by simulating HTTP requests—without needing to spin up a real server

### Jest + Supertest + Nock  : to test fetching data from an external API in the backend


//============================================================================================================
### Step-by-Step: Use Supertest with Express

1: npm install --save-dev supertest

2: const request = require('supertest');






