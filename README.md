##How to node

* setup packages
  * `npm init -y`
  * `add .gitignore`
  * `npm i -D jest eslint supertest nodemon`
  * `npm i express mongoose dotenv morgan superagent`


* write scripts 
  * `"test": "jest --verbose --runInBand",`
  * `"test:watch": "npm run test -- --watch",`
  * `"start": "nodemon server.js"`

*  Auxilary
  * `add eslint`
  * `add travis.yml`

* gitignore should have
  * .env
  * .node_modules 

* create `app.js`
    * add middleware
    * use morgan for logging
    * `npm i morgan`
    * use `express.json()
    * create error middleware
    * create `notFound` middleware

* create server.js
  * configure `dotenv`
  * add app listener
  
* add mongoose
  * create connect util
  * add to server.js
  * create mongoose-connection middleware